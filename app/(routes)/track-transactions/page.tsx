"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import PageHeader from '@/app/_components/layout/header/PageHeader';
import LandingPageFooter from '@/app/_components/layout/landingPage/footer';

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
  const [refId, setRefId] = useState('');
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [error, setError] = useState('');

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'today';
    if (date.toDateString() === yesterday.toDateString()) return 'yesterday';
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };

  const handleSearch = () => {
    if (!refId.trim()) {
      setError('Please enter a Reference ID');
      return;
    }

    const stored = JSON.parse(localStorage.getItem('transactions') || '[]') as RawTransaction[];
    const found = stored.find((tx) => `REF-${tx.id.slice(0, 8).toUpperCase()}` === refId.toUpperCase());

    if (found) {
      const transformed: Transaction = {
        id: found.id,
        name: `${found.receiverData.firstName || ''} ${found.receiverData.middleName || ''} ${found.receiverData.lastName || ''}`.trim() || 'Unknown Recipient',
        time: new Date(found.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        amount: Number(found.detailsData.youSend || 0),
        type: 'sent',
        date: formatDate(found.timestamp),
        email: found.receiverData.email || 'N/A',
        transactionId: found.id,
        referenceId: `REF-${found.id.slice(0, 8).toUpperCase()}`,
        status: 'received', // Assume received for tracking
        note: found.detailsData.paymentPurpose || 'No note provided',
      };
      setTransaction(transformed);
      setError('');
    } else {
      setError('Transaction not found. Please check the Reference ID.');
      setTransaction(null);
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
        <span className="text-green-600 font-medium">Sent</span>
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
          Processing
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
          Available
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
          Received
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
            <h1 className="text-2xl font-semibold mb-6">Track Transaction</h1>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter Reference ID (e.g. REF-12345678)"
                value={refId}
                onChange={(e) => setRefId(e.target.value)}
                className="w-full p-3 border border-gray-300 outline-0 bg-gray-100 md:py-4 rounded-lg mb-3"
              />
              <button
                onClick={handleSearch}
                className="bg-[#b8860b] text-white px-10 py-4 rounded-lg hover:bg-[#b8860b]"
              >
                Search
              </button>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {transaction && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {formatAmount(transaction.amount)}
                  </h2>
                  <p className="text-gray-600">
                    You sent <span className="font-medium">{transaction.name}</span>
                  </p>
                  <p className="text-gray-500 text-sm">{transaction.email}</p>
                </div>

                <div className="flex justify-center">
                  <StatusFlow />
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
