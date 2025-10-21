"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
}

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // No item open by default

    const faqs: FAQItem[] = [
        {
            question: "1. How do I send money to an overseas Bank Account?",
            answer: "You will first have to register with us! We will then send you an email to activate your online account. Upon activating your online account you can start sending money to almost any bank account in many country securely – although some restrictions do apply.\n\nYou just need the bank account details (such as the SWIFT BIC number and/or IBAN number – depending on the country of the recipient.)"
        },
        {
            question: "2. Do I need to Register?",
            answer: "Yes, you will need to register with us to use our service. This will only take a minute and it is FREE ! There is no obligation to use our service.\n\nOnce you have registered, you can send up to around $900 or EUR 1000 to most countries we serve.\n\nTo send more, and to allow a wider list of countries and payment methods you will need to verify your account with Finasddee."
        },
        {
            question: "3. What is the minimum or maximum amount I can transfer?",
            answer: "You need to transfer a minimum amount of $10 or the equivalent in your currency.\n\nOnce you have registered, you can send a maximum amount of $900 or EUR 1000 per year before account verification.\n\nOnce you have verified your Finasddee account you will be able to send up to $10,000 per transaction online via Bank Transfer and a maximum amount of $5,000 via card. However, you can make more than one card payment a day.\n\nVerify your Finasddee account\nIn the beginning, your Finasddee account is not verified. Verifying means, for the client, that he/she benefits from several advantages of our services as well as improves the security of his/her account.\n\nIn order to verify your account we need (i) one proof of identity (i.e. Passport, National ID card, EU national resident permit, or EEA photo card driving license)\n\nand(ii) one proof of address (.i.e Utility bill (British Gas, Electricity or Bank Statement), Local authority tax bill, correspondence from HM Revenue & Customs)"
        },
        {
            question: "4. How long will my bank-to-bank transfer take?",
            answer: "Depending how long your funds take to reach us (BACS/CHAPS/Debit or Credit card). Once your funds have been received and cleared, we will send out the required currency to the recipient's bank account within the day if it is before the cut off time.\n\nHowever, bear in mind different currencies and time zones vary the time for the funds to reach and be cleared by the designated bank.\n\nMost currency transfers can take up 2 to 3 days to be cleared and arrive in the designated bank account. You will receive a confirmation when we have sent out your funds."
        },
        {
            question: "5. How does Finasddee save me money?",
            answer: "Finasddee is an Independent commercial foreign exchange provider. This means that we buy the currency in bulk from the market at \"wholesale rates\" and then pass on the price benefit to our clients. This could mean a saving from a hundred to several thousand pounds (depending on the amount you purchase). Finasddee provides you foreign exchange at \"commercial rates\" as opposed to \"tourist rates\" that you get from your high street banks."
        },
        {
            question: "6. Is my money safe?",
            answer: "Your money is always safe. All funds are held in our UK client's bank accounts. These accounts are segregated in line with US Dollars regulations and have been developed to protect client funds in the unexpected event of fraud or bankruptcy. This means that your money is always secure."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 text-white bg-[#06325C]" id="faq-section" >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal text-white mb-3 sm:mb-4 md:mb-6">
                    Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-center text-white mb-6 sm:mb-8 md:mb-12">
                    Can&apos;t find it here? Check out our{' '}
                    <a href="help" className="text-white underline hover:no-underline">
                        Help center
                    </a>
                </p>

                <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                    <hr className="mb-0" style={{ borderColor: '#d1d5db' }} />
                    <div className="accordion accordion-flush arrow-end" id="popularTopics">
                        {faqs.map((faq, index) => (
                            <div key={index} className="accordion-item" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <h2 className="accordion-header" id={`heading${index + 1}`}>
                                    <button
                                        className={`accordion-button text-white py-3 sm:py-4 md:py-5 px-0 ${openIndex !== index ? 'collapsed' : ''}`}
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
                                        <span className="text-white text-sm px-2 sm:text-base md:text-lg font-medium">
                                            {faq.question}
                                        </span>
                                        <ChevronUp
                                            className={`text-white transition-transform`}
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
                                    <div className="accordion-body text-white pb-3 sm:pb-4 md:pb-6 pt-2 sm:pt-3 md:pt-4">
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
                        className="inline-flex items-center text-lg text-white hover:text-gold-light transition-colors group"
                    >
                        See more FAQ
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;