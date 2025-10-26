'use client'

import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'
import { useFAQs } from '@/lib/queries'
import { useTranslations, useLocale } from 'next-intl'

export function FAQPageContent() {
  const locale = useLocale()
  const { data: faqs = [] } = useFAQs(locale)
  const t = useTranslations();

  return (
    <section id="faq-page" className="py-24 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('routes.faq.header.title')}</h1>
          <p className="text-lg text-black/90">
            {t('routes.faq.header.subtitle')}{' '}
            <Link href="/help" className="text-black underline hover:text-gold-dark transition-colors">{t('routes.faq.header.link')}</Link>.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-t border-gray-200 text-black">
            <Accordion type="single" collapsible defaultValue={faqs[0]?.id} className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={faq.id} className="text-black border-b border-gray-200">
                  <AccordionTrigger className="text-lg text-black hover:text-gold-dark transition-all [&[data-state=open]>svg]:rotate-180 [&>svg]:text-black">
                    {index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-black">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="border-b border-gray-200" />
        </div>
      </div>
    </section>
  )
}
