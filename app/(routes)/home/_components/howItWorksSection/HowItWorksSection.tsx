import React, { useState } from 'react';
import AuthModal from '@/app/_components/AuthModal'
import { color } from 'framer-motion';

const HowItWorksSection = () => {

      const [isMenuOpen, setIsMenuOpen] = useState(false)
      const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
      const [authModalInitialForm, setAuthModalInitialForm] = useState<'signin' | 'signup' | 'register'>('signin')
    
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
      const openAuthModal = (form: 'signin' | 'signup' | 'register') => {
        setAuthModalInitialForm(form)
        setIsAuthModalOpen(true)
      }
      const closeAuthModal = () => setIsAuthModalOpen(false)

    return (
        // <section className="py-16" id="how-it-works" style={{ backgroundColor: '#4169E1' }}>
        <section className="py-16" id="how-it-works" style={{ backgroundColor: '#F7F8FC' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl lg:text-5xl text-center font-bold text-[#0b0f1a] mb-2">
                    How It Works
                </h2>
                <p className="text-base lg:text-lg text-center text-[#4b5563] mb-10 max-w-3xl mx-auto">
                    Finasddee is the fastest way to send money to family, friends and businesses home and abroad
                </p>

                {/* Timeline with numbered markers (desktop/tablet only) */}
                <div className="relative hidden md:block">
                    <div className="absolute left-0 right-0 top-4 h-[3px]" style={{ backgroundColor: '#001E40' }} />
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 relative">
                        {[1,2,3,4,5,6].map((n) => (
                            <div key={n} className="flex items-start justify-center">
                                <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-semibold shadow-sm" style={{ backgroundColor: '#d7a845', borderColor: '#d7a845', color: 'white' }}>
                                    {n}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
                    {[
                        { title: 'Sign up for free', desc: 'Register online or via our mobile app. Please have your email address ready.', icon: '🧭' },
                        { title: 'Select country', desc: 'Choose the destination country and amount. See rates and fees transparently.', icon: '🌐' },
                        { title: 'Add recipient', desc: 'Add mobile wallet or bank account details. Pick from previous recipients too.', icon: '👤' },
                        { title: 'Verify your identity', desc: 'Complete standard KYC by verifying your preferred national ID.', icon: '🪪' },
                        { title: 'Pay for your transfer', desc: 'Confirm the amount, fees and total, you always see what you pay.', icon: '💳' },
                        { title: 'Track Sender', desc: 'Track status and manage recipients and transfers in your account.', icon: '📦' },
                    ].map((s, idx) => (
                        <div key={idx} className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                            {/* Mobile step badge */}
                            <div className="md:hidden absolute -top-3 left-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shadow-sm" style={{ backgroundColor: '#d7a845', color: 'white' }}>{idx + 1}</div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-base" style={{ backgroundColor: '#001E40', color: 'white' }}>
                                    <span>{s.icon}</span>
                                </div>
                                <h3 className="text-sm md:text-[15px] font-semibold text-[#111827] leading-snug">{s.title}</h3>
                            </div>
                            <p className="text-[13px] md:text-[14px] leading-5 text-[#4b5563]">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} initialForm={authModalInitialForm} />
        </section>
    );
};

export default HowItWorksSection;
