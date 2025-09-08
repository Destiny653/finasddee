import React, { useState } from 'react';
import AuthModal from '@/app/_components/AuthModal'

const SpecialOfferSection = () => {

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
        <section
            className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: "url('/assets/images/bg/image-2.jpg')"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#161615] opacity-80"></div>

            <div className="relative container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-6 md:mb-0 md:mr-8 max-w-2xl">
                        Sign up today and get your first transaction fee free!
                    </h2>
                    <span
                        onClick={() => openAuthModal('register')}
                        className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                    >
                        Sign up Now
                    </span>
                </div>
            </div>
            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} initialForm={authModalInitialForm} />
        </section>
    );
};

export default SpecialOfferSection;
