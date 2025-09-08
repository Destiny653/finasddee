import type { Metadata } from 'next'
import { HelpPageContent } from '@/components/sections/HelpPageContent'
import LandingPageFooter from '@/app/_components/layout/landingPage/footer'
import PageHeader from '@/app/_components/layout/header/PageHeader'

export const metadata: Metadata = {
  title: 'Help Center | Finasddee',
  description: 'Get help with Finasddee services. Find answers to common questions or contact support.',
}

export default function HelpPage() {
  return (
    <>
    <PageHeader/>
      {/* Preloader */}
      {/* <Preloader /> */}

      <div className="min-h-screen">
        <main>
          <HelpPageContent />
        </main>
        <LandingPageFooter/>
        {/* <BackToTop /> */}
      </div>
    </>
  )
}
