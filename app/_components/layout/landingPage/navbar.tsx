
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'


export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white font-[500] z-40 shadow-md ">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/pic/logoRed.png"
                alt="Finasddee"
                className="h-40 w-auto"
                width={500}
                height={500}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xl">
            <Link
              href="#how-it-works"
              className="text-white hover:text-gold-light transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-gold-light transition-colors"
            >
              Help
            </Link>
            <Link
              href="#network-section"
              className="text-white hover:text-gold-light transition-colors"
            >
              Our Network
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-8 text-xl">
            <Link href="/login" className="text-white hover:text-gold-light transition-colors">Login</Link>
            <Link
              href="/registration-service"
              className="inline-flex items-center justify-center rounded-md bg-[#cc9408] text-white hover:bg-[#e9a907] h-12 px-8 font-medium transition-colors text-xl"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-gold-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-dark-blue/95 backdrop-blur-sm rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#how-it-works"
                className="text-white hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                How it works
              </Link>
              <Link
                href="/faq"
                className="text-white hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                Help
              </Link>
              <Link
                href="#network-section"
                className="text-white hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                Our Network
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Link
                  href="/signin"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md border border-white text-white  hover:text-black h-9 px-3 text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/registration-service"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md bg-[#b8860b] text-white hover:bg-[#9a7209] h-9 px-3 text-sm font-medium transition-colors"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

const LandingPageNavBar = MainHeader;

export default LandingPageNavBar;
