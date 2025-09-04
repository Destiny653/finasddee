import PageHeader from '@/app/_components/layout/header/PageHeader'
import LandingPageFooter from '@/app/_components/layout/landingPage/footer'
import type { Metadata } from 'next'
import Link from 'next/link'

// import { PageHeader } from '@/components/layout/PageHeader'
// import { Footer } from '@/components/layout/Footer'
// import { Preloader } from '@/components/ui/Preloader'
// import { BackToTop } from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Cookie Policy | Finasddee',
  description: 'Learn how cookies and similar technologies are used on Finasddee to improve your experience and our services.',
}

export default function CookiePolicyPage() {
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
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="opacity-70">/</span>
                  </li>
                  <li className="opacity-100">Cookies Policy</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold">Cookies Policy</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <main>
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4 text-black">
              <div className="max-w-4xl mx-auto">
                <p>
                  SiaRemit uses cookies to keep track of your preferences and profile information. Cookies are strings of text and numbers containing
                  small amounts of information, which your computer or mobile device downloads when you visit a website.
                </p>

                <h4 className="text-xl font-bold mt-8 mb-3"><u>SiaRemit uses cookies for the following purposes:</u></h4>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>To identify you when you sign in to our website.</li>
                  <li>To remember your country and language preferences.</li>
                  <li>To remember essential settings required to do a transaction.</li>
                  <li>To recognise whether or not you have visited certain pages on our website.</li>
                </ol>

                <p className="mt-6">
                  If you have allowed your browser to accept cookies, this lets us know that you consent to our use of cookies as described in this cookies policy.
                </p>
                <p>
                  You can control which websites you accept cookies from by modifying the settings in your browser. You can also delete cookies already saved by your browser.
                  You should find information on how to do this in the help menu of your browser.
                </p>
                <p>
                  Our web pages may also contain other similar technologies that recognise which pages you have visited. This helps us analyse how our site is used and helps us
                  provide a better user experience. We may also use this technology in some of our emails to let us know which emails and links have been opened by recipients in order
                  to understand the effectiveness of our customer communications.
                </p>

                <h4 className="text-xl font-bold mt-8 mb-3"><u>Internet Advertising</u></h4>
                <p>
                  We display banners on other websites using advertising networks. If your browser is set to accept third-party cookies then you may see interest-based ads when you
                  visit other websites. The interest based ads which you see on other websites may be based on your previous interactions with our website. The purpose of this is so
                  that the advertising networks can display ads which are most relevant to your interests.
                </p>
                <p>
                  We do not provide any personally identifiable information to advertisers or to third party sites which display our interest based ads.
                </p>
                <p>
                  You can opt out of third party ads from the Google network{' '}
                  <a href="http://www.google.com/settings/ads/anonymous" target="_blank" rel="noreferrer" className="text-gold-dark hover:underline">here</a>.
                </p>

                <div className="mt-10 text-center">
                  <Link href="/send-money" className="inline-block bg-gold-dark text-white px-6 py-3 font-semibold transition-colors hover:opacity-90">
                    Send Money Now
                  </Link>
                </div>
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
