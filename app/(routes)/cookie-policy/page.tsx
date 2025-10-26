import PageHeader from '@/app/_components/layout/header/PageHeader'
import LandingPageFooter from '@/app/_components/layout/landingPage/footer'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import PolicyContent from '@/app/_components/policy/PolicyContent'

// import { PageHeader } from '@/components/layout/PageHeader'
// import { Footer } from '@/components/layout/Footer'
// import { Preloader } from '@/components/ui/Preloader'
// import { BackToTop } from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Cookie Policy | Finasddee',
  description: 'Learn how cookies and similar technologies are used on Finasddee to improve your experience and our services.',
}

export default function CookiePolicyPage() {
  const t = useTranslations()
  return (
    <>
      {/* <Preloader /> */}

      <div className="min-h-screen">
        {/* Header */}
        <PageHeader />

        {/* Page Header / Breadcrumb */}
        <section className="py-12  ">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <nav className="mb-2 text-white/80">
                <ol className="inline-flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:underline">
                      {t('routes.common.breadcrumb.home')}
                    </Link>
                  </li>
                  <li>
                    <span className="opacity-70">/</span>
                  </li>
                  <li className="opacity-100">{t('routes.policy.cookie.title')}</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold">{t('routes.policy.cookie.title')}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <main>
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4 text-black">
              <div className="max-w-4xl mx-auto">
                <PolicyContent slug="cookie" />
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        < LandingPageFooter/>

        {/* Back to Top */}
        {/* <BackToTop /> */}
      </div>
    </>
  )
}
