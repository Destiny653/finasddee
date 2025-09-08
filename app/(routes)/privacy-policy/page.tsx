import PageHeader from '@/app/_components/layout/header/PageHeader'
import LandingPageFooter from '@/app/_components/layout/landingPage/footer'
import type { Metadata } from 'next'
import Link from 'next/link'

// import { PageHeader } from '@/components/layout/PageHeader'
// import { Footer } from '@/components/layout/Footer'
// import { Preloader } from '@/components/ui/Preloader'
// import { BackToTop } from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Privacy Policy | Finasddee',
  description: 'Read how Finasddee collects, uses, and protects your personal information and data across our services.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* <Preloader /> */}

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <PageHeader />

        {/* Page Header / Breadcrumb */}
        <section className="bg-gold-dark text-white">
          <div className="bg-gray-700 mx-auto px-4 py-12">
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
                  <li className="opacity-100">Privacy Policy</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <main>
          <section className="py-10 ">
            <div className="container mx-auto px-4 text-black">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Collection and Use of Personal Information</h3>

                <h4 className="text-xl font-bold mt-8 mb-3">We collect the following personal information from you</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information such as name, title, email address, mailing address, phone number</li>
                  <li>Evidence of your identity (for example passport information) Information about your social media profiles made available to us from your interactions with us on social media sites such as Facebook or Twitter</li>
                  <li>Unique Identifiers such as user name, account number, password</li>
                  <li>Billing information such as a credit card number and billing address</li>
                  <li>Date of birth</li>
                  <li>Demographic information such as age, education, gender, interests and zip code</li>
                </ul>

                <h4 className="text-xl font-bold mt-8 mb-3">We use this information to</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Register you with an account</li>
                  <li>
                    Provide the Services as described in our{' '}
                    <Link href="/user-agreement" className="text-gold-dark hover:underline">terms and condition</Link>.
                  </li>
                  <li>Fulfill your Transaction/ (Airtime Top Up) Request</li>
                  <li>Send you a confirmation</li>
                  <li>Send you requested service information</li>
                  <li>Improve your online experience and our website/ service</li>
                  <li>Comply with our legal and regulatory obligations</li>
                </ul>

                <p>We also maintain records of your transactions and card and bank details where appropriate.</p>

                <p>
                  <strong>Choice/Opt-Out </strong>
                  You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions
                  included in these emails or you can contact us using{' '}
                  <Link href="/contact" className="text-gold-dark hover:underline">this form</Link>. We will also send you service related email announcements on rare
                  occasions when it is necessary to do so. For instance, if our service is temporarily suspended for maintenance,
                  we might send you an email. You do not have an option to opt out of these emails, which are not promotional in nature.
                </p>

                <p>
                  <strong>Information Obtained about Third Parties</strong> You may provide us with personal information about others,
                  such as Recipients name and identifiers, address, phone number, bank account details or email address. If so, you
                  confirm that you have appropriate authority to do so and to allow us to use that information and we will only use it for the
                  specific reason for which it was provided to us.
                </p>

                <p>
                  <strong>Information Sharing</strong> We will share your personal information with third parties only in the ways that are
                  described in this privacy policy or the terms and conditions, such as credit reference agencies to verify your identity
                  or Recipients of the money transferred through the Service. We may share your information with certain third parties
                  who we believe may be of interest to you where we have your consent to do so.
                </p>
                <p>
                  We may provide your personal information to companies that provide services to help us with our business activities or
                  offering customer service such as local banks or money exchange houses or IT or digital marketing providers. These companies
                  are authorised to use your personal information only as necessary to provide these services. If in any doubt, please{' '}
                  <Link href="/contact" className="text-gold-dark hover:underline">contact us</Link>.
                </p>

                <h4 className="text-xl font-bold mt-8 mb-3">We may also disclose your personal information</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>as required by law such as to comply with a court order, subpoena, or similar legal process,</li>
                  <li>when we believe in good faith that disclosure is necessary to protect our rights, fulfil our legal or compliance obligations, protect your safety or the safety of others, investigate fraud, or respond to a governmental or regulatory request,</li>
                  <li>if SiaRemit Ltd is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our website of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information,</li>
                  <li>to any other third party with your prior consent to do so.</li>
                </ul>

                <p>
                  We may transfer your personal information overseas and to jurisdictions which may offer a level of legal protection to your
                  information which does not meet European legal standards. In such cases, we take steps to protect your information and only
                  make such transfers in compliance with the Data Protection Act 1998.
                </p>

                <p>
                  <strong>Cookies and Other Tracking Technologies</strong> Technologies such as: cookies, beacons, tags and scripts are used by
                  SiaRemit Ltd and our marketing partners, affiliates, or analytics or service providers. These technologies are used in analyzing
                  trends, administering the website, tracking users movements around the website and to gather demographic information about our
                  user base as a whole. We may receive reports based on the use of these technologies by these companies on an individual as well as
                  aggregated basis.
                </p>
                <p>
                  Third party data technologies are used within the SiaRemit app by SiaRemit Ltd and our marketing partners. These technologies are used
                  to monitor app usage and track in-app events, and information from these technologies may be reported on both an individual and aggregate basis.
                </p>
                <p>
                  We use cookies to remember users settings, for authentication and for enhanced user experience. Users can control the use of cookies at the
                  individual browser level. If you reject cookies, you may still use our website, but your ability to use some features or areas of our website may
                  be limited. Please see our{' '}
                  <Link href="/cookie-policy" className="text-gold-dark hover:underline">Cookies Policy</Link> for further information and how to opt out.
                </p>

                <p>
                  <strong>Log Files</strong> As is true of most web sites, we gather certain information automatically and store it in log files. This information
                  may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system,
                  date/time stamp, and/or clickstream data. We may combine this automatically collected log information with other information we collect
                  about you. We do this to improve services we offer you and site functionality.
                </p>

                <p>
                  <strong>Local Storage Objects (HTML 5)</strong> We use Local Storage Objects (LSOs) such as HTML5 to store content information and preferences.
                  Third parties with whom we partner to provide certain features on our website or to display advertising based upon your Web browsing activity
                  also use LSOs such as HTML 5. Various browsers may offer their own management tools for removing HTML5 LSOs.
                </p>

                <p>
                  <strong>Behavioral Targeting / Re-Targeting</strong> We partner with a third party to either display advertising on our website or to manage our
                  advertising on other sites. Our third party partner may use technologies such as cookies to gather information about your activities on this site
                  and other sites in order to provide you advertising based upon your browsing activities and interests. If you wish to not have this information used
                  for the purpose of serving you interest-based ads, you may opt-out by{' '}
                  <a href="http://www.google.com/settings/ads/anonymous" target="_blank" rel="noreferrer" className="text-gold-dark hover:underline">clicking here</a>.
                  You will continue to receive generic ads.
                </p>

                <p>
                  <strong>Links to Other Web Sites</strong> Our Site includes links to other Web sites whose privacy practices may differ from those of SiaRemit Ltd.
                  If you submit personal information to any of those sites, your information is governed by their privacy policies. We encourage you to carefully read
                  the privacy policy of any Web site you visit.
                </p>

                <p>
                  <strong>Security</strong> The security of your personal information is important to us. When you enter certain information such as a credit card number on our order
                  forms, we encrypt the transmission of that information using secure socket layer technology (SSL).
                </p>
                <p>
                  We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it.
                  No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore we cannot guarantee its absolute security.
                  If you have any questions about security on our website, you can contact us at{' '}
                  <Link href="/contact" className="text-gold-dark hover:underline">this form</Link>.
                </p>

                <p>
                  <strong>Social Media Widgets</strong> Our website includes Social Media Widgets or Features, such as the Facebook Like button and Twitter button which are interactive
                  mini-programs that run on our site to provide specific services from another company (e.g. displaying the news, opinions, music, etc). Personal information,
                  such as your email address, may be collected through the Widget. Cookies may also be set by the Widget to enable it to function properly. Information collected
                  by this Widget is governed by the privacy policy of the company that created it.
                </p>

                <p>
                  <strong>Testimonials</strong> We display personal testimonials of satisfied customers on our website in addition to other endorsements, where you have agreed with a third
                  party review site that we may do so. If you wish to update or delete your testimonial, you can contact us at{' '}
                  <Link href="/contact" className="text-gold-dark hover:underline">this form</Link>.
                </p>

                <p>
                  <strong>Correcting and Updating Your Personal Information</strong> You may request to review, delete or update your personal information to ensure it is accurate,
                  by contacting us at{' '}
                  <Link href="/contact" className="text-gold-dark hover:underline">this form</Link>. We aim to respond to your request for access within 30 days.
                </p>
                <p>
                  We will retain your information for as long as your account is active or as needed to provide you services, including a record of your Transactions on our website.
                  If you wish to cancel your account or request that we no longer use your information to provide you services contact us at{' '}
                  <Link href="/contact" className="text-gold-dark hover:underline">this form</Link>. We will retain and use your information as necessary to comply with our legal obligations,
                  resolve disputes, and enforce our agreements and will securely delete your information when we no longer have a need to retain it.
                </p>

                <p>
                  <strong>Notification of Privacy Policy Changes</strong> We may update this privacy policy to reflect changes to our information practices. If we make any material changes we will
                  notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this website or via a link from your mobile application prior to the
                  change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.
                </p>

                <h4 className="text-xl font-bold mt-8 mb-3">Contact Information</h4>
                <p>You can contact us about this privacy policy by writing or email us at the address below:</p>
                <address className="not-italic">
                  <p>
                    SiaRemit Ltd
                    <br />
                    74 West street, Sittingbourne Kent
                    <br />
                    ME10 1AN
                    <br />
                    Email: <a href="mailto:support@siaremit.com" className="text-gold-dark hover:underline">support@siaremit.com</a>
                    <br />
                    Phone: <a href="tel:+447441426016" className="text-gold-dark hover:underline">+447441426016</a>
                    <br />
                    Fax: +447441426016
                  </p>
                </address>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <LandingPageFooter />

        {/* Back to Top */}
        {/* <BackToTop /> */}
      </div>
    </>
  )
}
