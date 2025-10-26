"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import PageHeader from '@/app/_components/layout/header/PageHeader';
import LandingPageFooter from '@/app/_components/layout/landingPage/footer';
import { useTranslations } from 'next-intl';

// Define interface for raw transaction data from localStorage
interface RawTransaction {
  id: string;
  detailsData: {
    youSend?: string;
    recipientGets?: string;
    fees?: string;
    totalToPay?: string;
    selectedSendCurrency?: string;
    selectedRecipientCountry?: string;
    selectedSenderCountry?: string;
    selectedDeliveryMethod?: string;
    paymentPurpose?: string;
    [key: string]: unknown;
  };
  receiverData: {
    firstName?: string;
    lastName?: string;
    middleName?: string;
    email?: string;
    contact?: string;
    country?: string;
    city?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    state?: string;
    zipCode?: string;
    dialCode?: string;
    phoneNumber?: string;
    organizationType?: string;
    [key: string]: unknown;
  };
  timestamp: string;
  userId: number | null;
}

// Define interface for transformed transaction data used in UI
interface Transaction {
  id: string;
  name: string;
  time: string;
  amount: number;
  type: string;
  date: string;
  email: string;
  transactionId: string;
  referenceId: string;
  status: string;
  note: string;
}

const TrackTransactionPage = () => {
  const t = useTranslations();
  const [refId, setRefId] = useState('');
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [requestError, setRequestError] = useState(''); // network/HTTP layer error
  const [responseFail, setResponseFail] = useState(''); // top-level <status> != SUCCESS
  const [apiResult, setApiResult] = useState<null | {
    trans_ref?: string;
    agent_trans_ref?: string;
    benef_trans_ref?: string;
    status?: string;
    compliance_check_required?: string;
    compliance_checked?: string;
    ext_compliance_check_required?: string;
    ext_compliance_checked?: string;
    error_reason?: string;
    error_details?: string;
    deleted_reason?: string;
    admin_comments?: string;
    agent_comments?: string;
    response_status?: string;
    response_id?: string;
    raw_xml?: string;
  }>(null);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return t('track.date.today');
    if (date.toDateString() === yesterday.toDateString()) return t('track.date.yesterday');
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };

  const handleSearch = async () => {
    if (!refId.trim()) {
      setError(t('track.errors.emptyRef'));
      return;
    }

    setLoading(true);
    setError('');
    setApiResult(null);
    setTransaction(null);
    setRequestError('');
    setResponseFail('');

    try {
      const res = await fetch('/api/transaction-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trans_ref: refId.trim() }),
      });

      const text = await res.text();

      if (!res.ok) {
        setRequestError(t('track.errors.requestFailed', {status: res.status}))
        return;
      }

      // Parse XML response
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');

      const getText = (tag: string) => xml.getElementsByTagName(tag)?.[0]?.textContent || '';

      const response_status = getText('status');
      const response_id = getText('responseId');

      const resultNode = xml.getElementsByTagName('result')?.[0];

      const pick = (tag: string) => resultNode?.getElementsByTagName(tag)?.[0]?.textContent || '';

      const result = {
        trans_ref: pick('trans_ref'),
        agent_trans_ref: pick('agent_trans_ref'),
        benef_trans_ref: pick('benef_trans_ref'),
        status: pick('status'),
        compliance_check_required: pick('compliance_check_required'),
        compliance_checked: pick('compliance_checked'),
        ext_compliance_check_required: pick('ext_compliance_check_required'),
        ext_compliance_checked: pick('ext_compliance_checked'),
        error_reason: pick('error_reason'),
        error_details: pick('error_details'),
        deleted_reason: pick('deleted_reason'),
        admin_comments: pick('admin_comments'),
        agent_comments: pick('agent_comments'),
        response_status,
        response_id,
        raw_xml: text,
      };

      // Handle top-level response FAIL
      if (response_status.toUpperCase() !== 'SUCCESS') {
        setResponseFail(result.error_reason || t('track.errors.upstreamFail'));
        setApiResult(result);
        return;
      }

      // Map upstream status to local flow
      const statusMap: Record<string, Transaction['status']> = {
        PROCESSED: 'received',
        RECEIVED: 'received',
        AVAILABLE: 'available',
        PROCESSING: 'processing',
        IN_PROGRESS: 'processing',
      };

      const mappedStatus = statusMap[(result.status || '').toUpperCase()] || 'processing';

      // Provide minimal transaction just to drive the StatusFlow
      setTransaction({
        id: result.trans_ref || '-',
        name: '-',
        time: '-',
        amount: 0,
        type: 'sent',
        date: formatDate(new Date().toISOString()),
        email: '-',
        transactionId: result.trans_ref || '-',
        referenceId: result.trans_ref || '-',
        status: mappedStatus,
        note: '-',
      });

      setApiResult(result);
    } catch (e: any) {
      setRequestError(e?.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (amount: number) => {
    const sign = amount < 0 ? '-' : '';
    const absAmount = Math.abs(amount);
    return `${sign}$${absAmount.toFixed(2)}`;
  };

  const StatusFlow = () => (
    <div className="flex flex-col items-center space-y-4">
      {/* Sent */}
      <div className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <Check size={10} className="text-white" />
        </div>
        <span className="text-green-600 font-medium">{t('track.statusFlow.sent')}</span>
      </div>

      {/* Line */}
      <div className="w-px h-8 bg-gray-300"></div>

      {/* Processing */}
      <div className="flex items-center space-x-3">
        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
          transaction?.status === 'processing' || transaction?.status === 'available' || transaction?.status === 'received'
            ? 'bg-green-500' : 'bg-gray-300'
        }`}>
          {(transaction?.status === 'processing' || transaction?.status === 'available' || transaction?.status === 'received') &&
            <Check size={10} className="text-white" />}
        </div>
        <span className={`font-medium ${
          transaction?.status === 'processing' || transaction?.status === 'available' || transaction?.status === 'received'
            ? 'text-green-600' : 'text-gray-400'
        }`}>
          {t('track.statusFlow.processing')}
        </span>
      </div>

      {/* Line */}
      <div className="w-px h-8 bg-gray-300"></div>

      {/* Available */}
      <div className="flex items-center space-x-3">
        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
          transaction?.status === 'available' || transaction?.status === 'received' ? 'bg-green-500' : 'bg-gray-300'
        }`}>
          {(transaction?.status === 'available' || transaction?.status === 'received') && <Check size={10} className="text-white" />}
        </div>
        <span className={`font-medium ${
          transaction?.status === 'available' || transaction?.status === 'received' ? 'text-green-600' : 'text-gray-400'
        }`}>
          {t('track.statusFlow.available')}
        </span>
      </div>

      {/* Line */}
      <div className="w-px h-8 bg-gray-300"></div>

      {/* Received */}
      <div className="flex items-center space-x-3">
        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
          transaction?.status === 'received' ? 'bg-green-500' : 'bg-gray-300'
        }`}>
          {transaction?.status === 'received' && <Check size={10} className="text-white" />}
        </div>
        <span className={`font-medium ${
          transaction?.status === 'received' ? 'text-green-600' : 'text-gray-400'
        }`}>
          {t('track.statusFlow.received')}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <PageHeader />
      <div className='bg-gray-100 pt-16 md:pt-20 lg:pt-24'>
        
        <div className="max-w-4xl mx-auto my-8 min-h-screen p-4 md:p-6">
          <div className="bg-white rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-6">{t('track.title')}</h1>

            <div className="mb-6">
              <input
                type="text"
                placeholder={t('track.placeholder')}
                value={refId}
                onChange={(e) => setRefId(e.target.value)}
                className="w-full p-3 border border-gray-300 outline-0 bg-gray-100 md:py-4 rounded-lg mb-3"
              />
              <button
                onClick={handleSearch}
                className="bg-[#b8860b] text-white px-10 py-4 rounded-lg hover:bg-[#b8860b]"
              >
                {t('track.search')}
              </button>
              {loading && (
                <span className="ml-3 text-gray-500">{t('track.loading')}</span>
              )}
            </div>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            {requestError && <p className="text-red-500 mb-2">{requestError}</p>}
            {responseFail && <p className="text-red-500 mb-4">{responseFail}</p>}

            {transaction && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('track.status')}</h2>
                  <p className="text-gray-600">{transaction.status}</p>
                </div>

                <div className="flex justify-center">
                  <StatusFlow />
                </div>
              </div>
            )}

            {apiResult && (
              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">{t('track.details')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><span className="text-gray-500">{t('track.detailsLabels.responseId')}:</span> <span className="font-medium">{apiResult.response_id || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.responseStatus')}:</span> <span className="font-medium">{apiResult.response_status || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.transactionRef')}:</span> <span className="font-medium">{apiResult.trans_ref || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.benefRef')}:</span> <span className="font-medium">{apiResult.benef_trans_ref || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.agentRef')}:</span> <span className="font-medium">{apiResult.agent_trans_ref || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.status')}:</span> <span className="font-medium">{apiResult.status || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.complianceRequired')}:</span> <span className="font-medium">{apiResult.compliance_check_required || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.complianceChecked')}:</span> <span className="font-medium">{apiResult.compliance_checked || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.extComplianceRequired')}:</span> <span className="font-medium">{apiResult.ext_compliance_check_required || '-'}</span></div>
                  <div><span className="text-gray-500">{t('track.detailsLabels.extComplianceChecked')}:</span> <span className="font-medium">{apiResult.ext_compliance_checked || '-'}</span></div>
                  {apiResult.error_reason && (
                    <div className="md:col-span-2"><span className="text-gray-500">{t('track.detailsLabels.errorReason')}:</span> <span className="font-medium">{apiResult.error_reason}</span></div>
                  )}
                  {apiResult.error_details && (
                    <div className="md:col-span-2"><span className="text-gray-500">{t('track.detailsLabels.errorDetails')}:</span> <span className="font-medium">{apiResult.error_details}</span></div>
                  )}
                  {apiResult.deleted_reason && (
                    <div className="md:col-span-2"><span className="text-gray-500">{t('track.detailsLabels.deletedReason')}:</span> <span className="font-medium">{apiResult.deleted_reason}</span></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
      </div>
      <LandingPageFooter />
    </>
  );
};

export default TrackTransactionPage;
