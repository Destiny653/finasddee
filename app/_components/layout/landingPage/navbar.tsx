
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import AuthModal from '@/app/_components/AuthModal'
import { handleScroll } from '@/app/_utils/smoothScoll'


type AuthFormType = 'signin' | 'signup' | 'register'

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [currentAuthForm, setCurrentAuthForm] = useState<AuthFormType>('signin')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const openAuthModal = (formType: AuthFormType) => {
    setCurrentAuthForm(formType)
    setIsAuthModalOpen(true)
    setIsMenuOpen(false) // Close mobile menu if open
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }
  return (
    <header className="absolute top-0 left-0 right-0 bg-white text-gray-800 font-[500] z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/pic/FinasddeeHorizontal.svg"
                alt="Finasddee"
                className="h-15 w-auto"
                width={500}
                height={500}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-base">
           <button onClick={(e)=>handleScroll('how-it-works')} >
            <Link
              href="/#how-it-works"
              className="text-gray-800 hover:text-[#ce9739] transition-colors"
            >
              How it works
            </Link>
           </button>
            <Link
              href="/faq"
              className="text-gray-800 hover:text-[#ce9739] transition-colors"
            >
              Help
            </Link>
            <button onClick={()=>handleScroll('network-section')}>
            <Link
              href="/#network-section"
              className="text-gray-800 hover:text-[#ce9739] transition-colors"
            >
              Our Network
            </Link>
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-6 text-base">
            <button
              onClick={() => openAuthModal('signin')}
              className="inline-flex items-center justify-center rounded-[50px] bg-[#ce9739] text-white hover:bg-[#e9a907] h-10 px-6 font-medium transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => openAuthModal('register')}
              className="inline-flex items-center justify-center rounded-[50px] bg-[#122D4B] text-white hover:bg-[#1a4170] h-10 px-6 font-medium transition-colors"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-800 hover:text-[#ce9739] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white backdrop-blur-sm rounded-lg p-4 absolute top-full left-0 right-0 mt-2 mx-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={()=>(handleScroll('how-it-works'))}>
              <Link
                href="#how-it-works"
                className="text-black hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                How it works
              </Link>
              </button>
              <Link
                href="/faq"
                className="text-black hover:text-gold-light text-center transition-colors py-2"
                onClick={toggleMenu}
              >
                Help
              </Link>
              <button onClick={()=>(handleScroll('network-section'))}>
              <Link
                href="#network-section"
                className="text-black hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                Our Network
              </Link>
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
              <button
                onClick={() => {
                  openAuthModal('signin')
                  toggleMenu()
                }}
                className="inline-flex items-center justify-center rounded-[50px] bg-[#ce9739] text-white hover:bg-[#e9a907] h-9 px-6 text-sm font-medium transition-colors w-full"
              >
                Login
              </button>
              <button
                onClick={() => {
                  openAuthModal('register')
                  toggleMenu()
                }}
                className="inline-flex items-center justify-center rounded-[50px] bg-[#122D4B] text-white hover:bg-[#1a4170] h-9 px-6 text-sm font-medium transition-colors w-full"
              >
                Register
              </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        initialForm={currentAuthForm}
      />
    </header>
  )
}

const LandingPageNavBar = MainHeader;

export default LandingPageNavBar;
