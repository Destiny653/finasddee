import PageHeader from '@/app/_components/layout/header/PageHeader'
import LandingPageFooter from '@/app/_components/layout/landingPage/footer'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import PolicyContent from '@/app/_components/policy/PolicyContent'

export const metadata: Metadata = {
  title: 'User Agreement | Finasddee',
  description: 'Terms and Conditions governing the use of the Finasddee website and associated services.',
}

export default function UserAgreementPage() {
  const t = useTranslations()
  return (
    <>
      {/* <Preloader /> */}

      <div className="min-h-screen bg-gray-100">
        <PageHeader />
        {/* Page Header / Breadcrumb */}
        <section className="py-12 pt-0 bg-gold-dark text-white">
          <div className="bg-gray-700 py-12 mx-auto px-4">
            <div className="text-center ">
              <nav className="mb-2  text-white/80">
                <ol className="inline-flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:underline">
                      {t('routes.common.breadcrumb.home')}
                    </Link>
                  </li>
                  <li>
                    <span className="opacity-70">/</span>
                  </li>
                  <li className="opacity-100">{t('routes.policy.userAgreement.title')}</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold">{t('routes.policy.userAgreement.title')}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <main className="bg-gray-50">
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
              <div className="max-w-4xl mx-auto rounded-lg p-8 md:p-12">
                <PolicyContent slug="user-agreement" />
              </div>
            </div>
          </section>
        </main>
        <LandingPageFooter />
        {/* <BackToTop /> */}
      </div>
    </>
  )
}
