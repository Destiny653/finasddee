import { useQuery, useMutation } from '@tanstack/react-query'
import { senderCountries, receiverCountries, testimonials, faqs, faqsLocalized } from './data'
import { SendMoneyForm } from './schemas'

// Mock API functions
const fetchExchangeRate = async (from: string, to: string, amount: number) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Mock exchange rates
  const rates: Record<string, number> = {
    'USD-EUR': 0.85,
    'USD-GBP': 0.73,
    'USD-CAD': 1.25,
    'EUR-USD': 1.18,
    'GBP-USD': 1.37,
  }
  
  const rate = rates[`${from}-${to}`] || 1
  return {
    rate,
    convertedAmount: amount * rate,
    fees: amount * 0.02, // 2% fee
    totalToPay: amount + (amount * 0.02)
  }
}

const submitSendMoney = async (data: SendMoneyForm) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock successful response
  return {
    success: true,
    transactionId: `TXN${Date.now()}`,
    message: 'Money transfer initiated successfully'
  }
}

// Query hooks
export const useSenderCountries = () => {
  return useQuery({
    queryKey: ['senderCountries'],
    queryFn: () => Promise.resolve(senderCountries),
  })
}

export const useReceiverCountries = () => {
  return useQuery({
    queryKey: ['receiverCountries'],
    queryFn: () => Promise.resolve(receiverCountries),
  })
}

export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: () => Promise.resolve(testimonials),
  })
}

export const useFAQs = (locale: string = 'en') => {
  const norm = (locale || 'en').toLowerCase().split('-')[0]
  return useQuery({
    queryKey: ['faqs', norm],
    queryFn: () => Promise.resolve(faqsLocalized[norm] ?? faqsLocalized['en'] ?? faqs),
  })
}

export const useExchangeRate = (from: string, to: string, amount: number) => {
  return useQuery({
    queryKey: ['exchangeRate', from, to, amount],
    queryFn: () => fetchExchangeRate(from, to, amount),
    enabled: !!from && !!to && amount > 0,
  })
}

// Mutation hooks
export const useSendMoney = () => {
  return useMutation({
    mutationFn: submitSendMoney,
  })
}
