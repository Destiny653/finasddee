"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { X, Check, Download, Share } from 'lucide-react';
import { jsPDF } from 'jspdf';
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

const TransactionApp = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showStatus, setShowStatus] = useState(false);
  const [rawTransactions, setRawTransactions] = useState<RawTransaction[]>([]);

  // Load transactions from localStorage on client-side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('transactions') || '[]') as RawTransaction[];
      setRawTransactions(stored);
    }
  }, []);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'today';
    if (date.toDateString() === yesterday.toDateString()) return 'yesterday';
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };

  // Transform transactions
  const transactions = useMemo(() => {
    return rawTransactions.map((tx) => ({
      id: tx.id,
      name: `${tx.receiverData.firstName || ''} ${tx.receiverData.middleName || ''} ${tx.receiverData.lastName || ''}`.trim() || 'Unknown Recipient',
      time: new Date(tx.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      amount: Number(tx.detailsData.youSend || 0), // Use youSend for amount
      type: 'sent', // Hardcoded as transactions are for sending money
      date: formatDate(tx.timestamp),
      email: tx.receiverData.email || 'N/A',
      transactionId: tx.id,
      referenceId: `REF-${tx.id.slice(0, 8).toUpperCase()}`, // Mock reference ID
      status: 'sent', // Hardcoded; enhance if status tracking is added
      note: tx.detailsData.paymentPurpose || 'No note provided',
    }));
  }, [rawTransactions]);

  const formatAmount = (amount: number) => {
    const sign = amount < 0 ? '-' : '';
    const absAmount = Math.abs(amount);
    return `${sign}$${absAmount.toFixed(2)}`;
  };

  const groupTransactionsByDate = () => {
    const grouped: { [key: string]: Transaction[] } = {};
    transactions.forEach((transaction) => {
      if (!grouped[transaction.date]) {
        grouped[transaction.date] = [];
      }
      grouped[transaction.date].push(transaction);
    });
    return grouped;
  };

  const getInitials = (name: string) => {
    return name.split(' ').filter(Boolean).map((n) => n[0]).join('') || 'N/A';
  };

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleStatusClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setShowStatus(true);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
    setShowStatus(false);
  };

  const downloadReceipt = () => {
    if (!selectedTransaction) return;
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Transaction Receipt', 10, 10);
    doc.text(`Transaction ID: ${selectedTransaction.transactionId}`, 10, 20);
    doc.text(`To: ${selectedTransaction.name}`, 10, 30);
    doc.text(`Email: ${selectedTransaction.email}`, 10, 40);
    doc.text(`Amount: ${formatAmount(selectedTransaction.amount)}`, 10, 50);
    doc.text(`Date: ${selectedTransaction.date}`, 10, 60);
    doc.text(`Reference ID: ${selectedTransaction.referenceId}`, 10, 70);
    doc.text(`Status: ${selectedTransaction.status}`, 10, 80);
    doc.text(`Note: ${selectedTransaction.note}`, 10, 90);
    doc.save(`receipt-${selectedTransaction.transactionId}.pdf`);
  };

  const shareReceipt = async () => {
    if (!selectedTransaction) return;
    const shareData = {
      title: 'Transaction Receipt',
      text: `Transaction ID: ${selectedTransaction.transactionId}\nTo: ${selectedTransaction.name}\nAmount: ${formatAmount(selectedTransaction.amount)}\nDate: ${selectedTransaction.date}\nNote: ${selectedTransaction.note}`,
      url: window.location.href,
    };
    try {
      if (navigator.share && typeof window !== 'undefined') {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(shareData.text);
        alert('Receipt details copied to clipboard!');
      }
    } catch (err) {
      console.error('Share failed:', err);
      // Fallback to clipboard if share fails
      await navigator.clipboard.writeText(shareData.text);
      alert('Receipt details copied to clipboard!');
    }
  };

  const StatusModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">{selectedTransaction?.name}</span>
            <span className="text-gray-700">{formatAmount(selectedTransaction?.amount || 0)}</span>
          </div>
          <div className="text-sm text-gray-500">{selectedTransaction?.time}</div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <Check size={10} className="text-white" />
              </div>
              <span className="text-green-600 font-medium">Sent</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${selectedTransaction?.status === 'sent' || selectedTransaction?.status === 'processing' || selectedTransaction?.status === 'available'
                ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                {(selectedTransaction?.status === 'sent' || selectedTransaction?.status === 'processing' || selectedTransaction?.status === 'available') &&
                  <Check size={10} className="text-white" />}
              </div>
              <span className={`font-medium ${selectedTransaction?.status === 'sent' || selectedTransaction?.status === 'processing' || selectedTransaction?.status === 'available'
                ? 'text-green-600' : 'text-gray-400'
                }`}>
                Processing
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${selectedTransaction?.status === 'available' ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                {selectedTransaction?.status === 'available' && <Check size={10} className="text-white" />}
              </div>
              <span className={`font-medium ${selectedTransaction?.status === 'available' ? 'text-green-600' : 'text-gray-400'
                }`}>
                Available
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${selectedTransaction?.status === 'received' ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                {selectedTransaction?.status === 'received' && <Check size={10} className="text-white" />}
              </div>
              <span className={`font-medium ${selectedTransaction?.status === 'received' ? 'text-green-600' : 'text-gray-400'
                }`}>
                Received
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  const DetailModal = () => (
    <div className="fixed inset-0 bg-[#00000071] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <div className="flex justify-end mb-4">
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={24} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {formatAmount(selectedTransaction?.amount || 0)}
          </h2>
          <p className="text-gray-600">
            You sent <span className="font-medium">{selectedTransaction?.name}</span>
          </p>
          <p className="text-gray-500 text-sm">{selectedTransaction?.email}</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between">
            <span className="text-gray-600">You Sent</span>
            <span className="font-medium">{formatAmount(Math.abs(selectedTransaction?.amount || 0))}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">To</span>
            <span className="font-medium">{selectedTransaction?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email</span>
            <span className="font-medium text-sm">{selectedTransaction?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status</span>
            <span
              className="bg-red-500 text-white px-3 py-1 rounded-full text-xs cursor-pointer"
              onClick={() => handleStatusClick(selectedTransaction!)}
            >
              Sent
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date</span>
            <span className="font-medium">{selectedTransaction?.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction ID</span>
            <span className="font-medium">{selectedTransaction?.transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Reference ID</span>
            <span className="font-medium">{selectedTransaction?.referenceId}</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-gray-600 mb-2">Notes</div>
          <div className="text-gray-800">{selectedTransaction?.note}</div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={downloadReceipt}
            className="flex-1 bg-white border border-orange-400 text-orange-500 py-3 rounded-lg font-medium hover:bg-orange-50 flex items-center justify-center space-x-2"
          >
            <Download size={16} />
            <span>Download Receipt</span>
          </button>
          <button
            onClick={shareReceipt}
            className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 flex items-center justify-center space-x-2"
          >
            <Share size={16} />
            <span>Share Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );

  const groupedTransactions = groupTransactionsByDate();

  return (
    <div className='bg-gray-100'>
      <PageHeader />
      <div className="max-w-4xl mx-auto my-8 min-h-screen p-4 md:p-6">
        <div className="bg-white rounded-lg ">
          {Object.keys(groupedTransactions).length === 0 ? (
            <div className="px-4 py-6 text-center text-gray-500">
              No transactions found.
            </div>
          ) : (
            Object.entries(groupedTransactions).map(([date, dayTransactions]) => (
              <div key={date}>
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 capitalize">{date}</h3>
                </div>

                {dayTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="px-4 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleTransactionClick(transaction)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">
                            {getInitials(transaction.name)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{transaction.name}</div>
                          <div className="text-sm text-gray-500">{transaction.time}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className={`font-semibold ${transaction.amount < 0 ? 'text-gray-900' : 'text-gray-900'}`}>
                          {formatAmount(transaction.amount)}
                        </div>
                        <div className="text-xs text-green-600">{transaction.type}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>

        {selectedTransaction && !showStatus && <DetailModal />}
        {selectedTransaction && showStatus && <StatusModal />}
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default TransactionApp;