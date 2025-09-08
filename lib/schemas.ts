import { z } from 'zod'

// Country schema
export const countrySchema = z.object({
  code: z.string(),
  name: z.string(),
  currency: z.string(),
  flag: z.string(),
})

// Send money form schema
export const sendMoneySchema = z.object({
  senderCountry: z.string().min(1, 'Please select sender country'),
  receiverCountry: z.string().min(1, 'Please select receiver country'),
  deliveryMethod: z.enum(['BANK', 'Bitcoin', 'PAYPAL', 'SKRILL']),
  amount: z.number().min(10, 'Minimum amount is $10').max(10000, 'Maximum amount is $10,000'),
  sendingCurrency: z.string().min(1, 'Please select sending currency'),
})

// Testimonial schema
export const testimonialSchema = z.object({
  id: z.string(),
  quote: z.string(),
  author: z.string(),
  position: z.string(),
  company: z.string().optional(),
})

// FAQ schema
export const faqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
})

// Types
export type Country = z.infer<typeof countrySchema>
export type SendMoneyForm = z.infer<typeof sendMoneySchema>
export type Testimonial = z.infer<typeof testimonialSchema>
export type FAQ = z.infer<typeof faqSchema>
