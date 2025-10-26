import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHeader } from '../../_components/layout/header/PageHeader'
import { MapPin, Phone, Mail } from 'lucide-react'
import LandingPageFooter from '../../_components/layout/landingPage/footer'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Contact Us | Finasddee',
  description:
    "Get in touch with Finasddee. We're here to help with your money transfer and online payments questions.",
}

export default async function ContactPage() {
  const t = await getTranslations();
  return (
    <div className='bg-gray-100'>

      {/* Preloader */}
      {/* <Preloader /> */}
      <PageHeader />

      {/* Page Header / Breadcrumb */}
      <section className="py-12  text-white bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <nav className="mb-2 text-white/80">
              <ol className="inline-flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline">
                    {t('contact.breadcrumb.home')}
                  </Link>
                </li>
                <li>
                  <span className="opacity-70">/</span>
                </li>
                <li className="opacity-100">{t('contact.breadcrumb.current')}</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold">{t('contact.header.title')}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <main>
        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Address */}
              <div className="bg-white shadow-md rounded h-full p-6 text-center">
                <div className="flex items-center justify-center text-gold-dark mb-4">
                  <MapPin size={36} className='text-[#ce9739]' />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('contact.address.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('contact.address.line1')}
                  <br />
                  {t('contact.address.line2')}
                </p>
              </div>

              {/* Telephone */}
              <div className="bg-white shadow-md rounded h-full p-6 text-center">
                <div className="flex items-center justify-center text-gold-dark mb-4">
                  <Phone size={36} className='text-[#ce9739]' />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('contact.phone.title')}</h3>
                <p className="text-gray-800 font-medium">{t('contact.phone.primary')}</p>
                <p className="text-gray-800 font-medium">{t('contact.phone.secondary')}</p>
              </div>

              {/* Business Inquiries */}
              <div className="bg-white shadow-md rounded h-full p-6 text-center">
                <div className="flex items-center justify-center text-gold-dark mb-4">
                  <Mail size={36} className='text-[#ce9739]' />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('contact.inquiries.title')}</h3>
                <p>
                  <a href="mailto:info@finasddee.com" className="text-gold-dark hover:underline">
                    info@finasddee.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-12 ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('contact.social.title')}</h2>
            <p className="text-gray-600 mb-8">{t('contact.social.subtitle')}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="http://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                {t('contact.social.links.facebook')}
              </a>
              <a
                href="http://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                {t('contact.social.links.twitter')}
              </a>
              <a
                href="http://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                {t('contact.social.links.google')}
              </a>
              <a
                href="http://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                {t('contact.social.links.linkedin')}
              </a>
              <a
                href="http://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                {t('contact.social.links.youtube')}
              </a>
              <a
                href="http://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                {t('contact.social.links.instagram')}
              </a>
            </div>
          </div>
        </section>

          {/* Support Hero */}
          <section className="relative py-20 bg-[#ce9739]">
            <div className="absolute inset-0 bg-gold-dark opacity-90"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              // style={{ backgroundImage: 'url(/images/bg/image-2.jpg)' }}
            />
            <div className="relative container mx-auto px-4 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.support.heroTitle')}</h2>
              <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                {t('contact.support.heroSubtitle')}
              </p>
              <Link href="#" className="inline-block bg-white text-[#ce9739] px-6 py-3 font-semibold rounded shadow hover:shadow-md transition">
                {t('contact.support.cta')}
              </Link>
            </div>
          </section>
      </main>
      <LandingPageFooter />
    </div>
  )
}
