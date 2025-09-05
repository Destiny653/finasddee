'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import AuthModal from '@/app/_components/AuthModal'

export function PageHeader() {
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
    <>
      <header
        className="relative font-sans font-bold bg-[#0e1e33] text-lg  border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-4 max-w-[1440px]">
          <div className="flex items-center justify-between py-0">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center" title="Finasddee">
                <div className="logo mr-3 flex flex-col items-center justify-center">
                  <Image
                    src="/Group.png"
                    alt="finasddee"
                    width={400}
                    height={400}
                    className="w-auto h-[80px]"
                  />
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-black hover:text-[#b8860b] transition-colors"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Mobile Navigation */}
              <nav className="lg:hidden">
                <div
                  id="header-nav"
                  className={cn(
                    "absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 z-50",
                    isMenuOpen ? "block" : "hidden"
                  )}
                >
                  <ul className="flex flex-col p-4 space-y-4">
                    <li
                      id="dis1"
                      className="btn border border-green-500 rounded px-2 py-1 mt-2.5 lg:hidden"
                    >
                      <button
                        onClick={() => {
                          openAuthModal('signin')
                          setIsMenuOpen(false)
                        }}
                        className="text-center block text-white w-min mx-auto"
                      >
                        Login
                      </button>
                    </li>
                    <li
                      id="dis2"
                      className="btn bg-[#b8860b] text-white rounded px-2 py-1 mt-2.5 lg:hidden"
                    >
                      <button
                        onClick={() => {
                          openAuthModal('register')
                          setIsMenuOpen(false)
                        }}
                        className="text-center block text-white w-min mx-auto"
                      >
                        Register
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Desktop Login & Signup Links */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center space-x-4">
                <ul className="flex items-center space-x-4">
                  <li className="hidden lg:block">
                    <button
                      onClick={() => openAuthModal('signin')}
                      className="text-white hover:text-[#b8860b] transition-colors"
                    >
                      Login
                    </button>
                  </li>
                  <li className="hidden lg:flex items-center h-auto">
                    <button
                      onClick={() => openAuthModal('register')}
                      className="inline-flex items-center justify-center py-6 rounded-md bg-[#b8860b] text-white hover:bg-[#9a7209] h-10 px-6 font-medium transition-colors"
                    >
                      Register
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} initialForm={authModalInitialForm} />
    </>
  )
}

export default PageHeader
