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
        <section className="py-16" id="how-it-works" style={{ backgroundColor: '#082642', color: 'white' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl lg:text-5xl text-center font-bold text-white mb-4">
                    The simple way to send money
                </h2>
                <p className="text-lg text-center text-white mb-12 max-w-4xl mx-auto">
                    Finasddee is the fastest way to send money to family, friends and businesses home and abroad
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="mb-6">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-black">1</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Sign Up Your Account</h3>
                        <p className="text-white text-base">
                            Become a register user first, then log in to your account and enter your card or bank details that is required for you.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="mb-6">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-black">2</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Select Your Recipient</h3>
                        <p className="text-white text-base">
                            Enter your recipient&apos;s email address then add an amount with currency to send securely.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="mb-6">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-black">3</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Send Money</h3>
                        <p className="text-white text-base">
                            After sending money, the recipient will be notified via an email when money has been transferred to their account.
                        </p>
                    </div>
                </div>
                
                <div className="text-center mt-8">
                    <span
                     onClick={() => openAuthModal('register')}
                        className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-colors bg-[#e2ae02] hover:bg-[#d8a603]"
                    >
                        Sign up Now
                    </span>
                </div>
            </div>
                  <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} initialForm={authModalInitialForm} />
        </section>
    );
};

export default HowItWorksSection;
