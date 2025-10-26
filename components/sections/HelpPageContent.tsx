'use client'

import Link from 'next/link'
import { Banknote, ChevronRight, CreditCard, Mail, MessageSquare, Search, Shield, UserCircle } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'
import { Card } from '../ui/card'
import { useTranslations } from 'next-intl'

export function HelpPageContent() {
  const t = useTranslations();
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center  bg-gray-700" style={{ backgroundImage: 'url(/images/bg/image-2.jpg)' }}>
        {/* <div className="absolute inset-0 bg-gold-dark opacity-90"></div> */}
        <div className=" mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">{t('routes.help.hero.title')}</h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder={t('routes.help.hero.searchPlaceholder')}
                className="w-full py-6 px-4 pr-12 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-light"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-none">
              <UserCircle size={48} className=" mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">{t('routes.help.topics.account')}</h3>
              <Link href="/settings-profile" className="text-gold-dark hover:underline flex items-center justify-center">
                {t('routes.help.topics.seeArticles')} <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
            <Card className="text-center p-6 border-0 shadow-none">
              <Banknote size={48} className="mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">{t('routes.help.topics.payment')}</h3>
              <Link href="/send-money" className="text-gold-dark hover:underline flex items-center justify-center">
                {t('routes.help.topics.seeArticles')} <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
            <Card className="text-center p-6 border-0 shadow-none">
              <Shield size={48} className="mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">{t('routes.help.topics.security')}</h3>
              <Link href="/settings-security" className="text-gold-dark hover:underline flex items-center justify-center">
                {t('routes.help.topics.seeArticles')} <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
            <Card className="text-center p-6 border-0 shadow-none">
              <CreditCard size={48} className="mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">{t('routes.help.topics.paymentMethods')}</h3>
              <Link href="/settings-payment-methods" className="text-gold-dark hover:underline flex items-center justify-center">
                {t('routes.help.topics.seeArticles')} <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('routes.help.popular.title')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('routes.help.popular.subtitle')}</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <Accordion type="single" collapsible className="[&>div]:border-gray-200">
                <AccordionItem value="1">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.1.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.1.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.2.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.2.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.3.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.3.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="4">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.4.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.4.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="5">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.5.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.5.a')}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible className="[&>div]:border-gray-200">
                <AccordionItem value="6">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.6.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.6.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="7">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.7.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.7.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="8">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.8.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.8.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="9">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.9.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.9.a')}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="10">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">{t('routes.help.faq.10.q')}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{t('routes.help.faq.10.a')}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Can't find */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 flex items-center border-0 shadow-none">
              <Mail size={48} className="text-gold-dark mr-4 flex-shrink-0 text-[#ffc504]" />
              <div>
                <h5 className="text-xl font-bold mb-2">{t('routes.help.cantFind.title')}</h5>
                <p className="text-gray-600">{t('routes.help.cantFind.text')} <Link href="/contact" className="text-gold-dark hover:underline">{t('routes.help.cantFind.cta')} <ChevronRight size={12} className="inline" /></Link></p>
              </div>
            </Card>
            <Card className="p-6 flex items-center border-0 shadow-none">
              <MessageSquare size={48} className="text-gold-dark mr-4 flex-shrink-0 text-[#ffc504]" />
              <div>
                <h5 className="text-xl font-bold mb-2">{t('routes.help.tech.title')}</h5>
                <p className="text-gray-600">{t('routes.help.tech.text')} <Link href="#" className="text-gold-dark hover:underline">{t('routes.help.tech.cta')} <ChevronRight size={12} className="inline" /></Link></p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
