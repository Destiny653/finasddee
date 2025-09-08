import PageHeader from '@/app/_components/layout/header/PageHeader'
import LandingPageFooter from '@/app/_components/layout/landingPage/footer'
import { FAQPageContent } from '@/components/sections/FAQPageContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Finasddee',
  description:
    'Find answers to common questions about sending money with Finasddee. Learn about registration, limits, fees, security, and more.',
}

export default function FAQPage() {
  return (
    <>
      <PageHeader />
      <main>
        <FAQPageContent />
      </main>
      <LandingPageFooter />
    </>
  )
}
