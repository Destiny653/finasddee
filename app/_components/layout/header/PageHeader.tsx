'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      className="relative mb-8 font-sans font-bold bg-white text-lg  border-b border-gray-200"
      style={{ marginBottom: '30px' }}
    >
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="flex items-center justify-between py-0">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="logo mr-3">
              <Link href="/" className="flex items-center" title="Finasddee">
                <Image
                  src="/assets/images/pic/logoRed.png"
                  alt="finasddee"
                  width={180}
                  height={60}
                  className="w-[170px] h-auto"
                />
              </Link>
            </div>

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
                    <Link
                      href="/login"
                      className="text-center block text-black w-min mx-auto"
                      onClick={toggleMenu}
                    >
                      Login
                    </Link>
                  </li>
                  <li
                    id="dis2"
                    className="btn bg-[#b8860b] text-white rounded px-2 py-1 mt-2.5 lg:hidden"
                  >
                    <Link
                      href="/signup"
                      className="text-center block text-white w-min mx-auto"
                      onClick={toggleMenu}
                    >
                      Register
                    </Link>
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
                  <Link 
                    href="/signin"
                    className="text-black hover:text-[#b8860b] transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li className="hidden lg:flex items-center h-auto">
                  <Link 
                    href="/sign-up"
                    className="inline-flex items-center justify-center py-6 rounded-md bg-[#b8860b] text-white hover:bg-[#9a7209] h-10 px-6 font-medium transition-colors"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>


    </header>
  )
}

export default PageHeader
