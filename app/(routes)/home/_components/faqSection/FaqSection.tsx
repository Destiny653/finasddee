"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface FAQItem {
    question: string;
    answer: string;
}

const FaqSection = () => {
    const t = useTranslations();
    const [openIndex, setOpenIndex] = useState<number | null>(null); // No item open by default

    const faqs: FAQItem[] = Array.from({length: 6}, (_, i) => ({
        question: t(`home.faq.items.${i+1}.q`),
        answer: t(`home.faq.items.${i+1}.a`)
    }));

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 text-[#06325C]" id="faq-section" >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal text-[#06325C] mb-3 sm:mb-4 md:mb-6">
                    {t('home.faq.title')}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-center text-[#06325C] mb-6 sm:mb-8 md:mb-12">
                    {t('home.faq.subtitle')}{' '}
                    <a href="help" className="text-[#06325C] underline hover:no-underline">
                        {t('home.faq.link')}
                    </a>
                </p>

                <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                    <hr className="mb-0" style={{ borderColor: '#d1d5db' }} />
                    <div className="accordion accordion-flush arrow-end" id="popularTopics">
                        {faqs.map((faq, index) => (
                            <div key={index} className="accordion-item" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <h2 className="accordion-header" id={`heading${index + 1}`}>
                                    <button
                                        className={`accordion-button text-[#06325C] py-3 sm:py-4 md:py-5 px-0 ${openIndex !== index ? 'collapsed' : ''}`}
                                        type="button"
                                        style={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            borderBottom: '1px solid #d1d5db',
                                            boxShadow: 'none',
                                            width: '100%',
                                            textAlign: 'left',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                        onClick={() => toggleFAQ(index)}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`collapse${index + 1}`}
                                    >
                                        <span className="text-[#06325C] text-sm px-2 sm:text-base md:text-lg font-medium">
                                            {faq.question}
                                        </span>
                                        <ChevronUp
                                            className={`text-[#06325C] transition-transform`}
                                            style={{
                                                transform: openIndex === index ? 'rotate(0deg)' : 'rotate(180deg)',
                                                transition: 'transform 0.4s ease',
                                                marginLeft: '0.5rem sm:1rem',
                                                flexShrink: 0
                                            }}
                                            size={16}
                                        />
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index + 1}`}
                                    className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    style={{
                                        transition: 'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out',
                                        maxHeight: openIndex === index ? '500px' : '0px'
                                    }}
                                    aria-labelledby={`heading${index + 1}`}
                                    data-bs-parent="#popularTopics"
                                >
                                    <div className="accordion-body text-[#06325C] pb-3 sm:pb-4 md:pb-6 pt-2 sm:pt-3 md:pt-4">
                                        <div className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex item-center justify-center pt-12'>
                    <Link
                        href="/faq"
                        className="inline-flex items-center text-lg text-[#06325C] hover:text-gold-light transition-colors group"
                    >
                        {t('home.faq.seeMore')}
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;