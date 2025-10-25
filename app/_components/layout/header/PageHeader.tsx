// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'
// import AuthModal from '@/app/_components/AuthModal'

// export function PageHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
//   const [authModalInitialForm, setAuthModalInitialForm] = useState<'signin' | 'signup' | 'register'>('signin')

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
//   const openAuthModal = (form: 'signin' | 'signup' | 'register') => {
//     setAuthModalInitialForm(form)
//     setIsAuthModalOpen(true)
//   }
//   const closeAuthModal = () => setIsAuthModalOpen(false)

//   return (
//     <>
//       <header
//         className="relative font-bold bg-[#0e1e33] text-lg border-b border-gray-200"
//       >
//         <div className="container mx-auto px-4 py-4 max-w-[1440px]">
//           <div className="flex items-center justify-between py-0">
//             {/* Logo Section */}
//             <div className="flex items-center justify-between">
//               <Link href="/" className="flex items-center" title="Finasddee">
//                 <div className="logo mr-3 flex flex-col items-center justify-center">
//                   <Image
//                     src="/Group.png"
//                     alt="finasddee"
//                     width={400}
//                     height={400}
//                     className="w-auto md:h-[80px] h-[50px]"
//                   />
//                 </div>
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden absolute right-4 p-2 text-white hover:text-[#dda822] transition-colors"
//                 type="button"
//                 onClick={toggleMenu}
//                 aria-label="Toggle navigation"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>

//               {/* Mobile Navigation */}
//               <nav className="lg:hidden">
//                 <div
//                   id="header-nav"
//                   className={cn(
//                     "absolute top-full left-0 right-0 bg-[#0e1e33] shadow-lg transition-all duration-300 z-50 border-t border-gray-600",
//                     isMenuOpen ? "block" : "hidden"
//                   )}
//                 >
//                   <ul className="flex flex-col p-4 space-y-4">
//                     <li>
//                       <Link
//                         href="/transactions"
//                         onClick={() => setIsMenuOpen(false)}
//                         className="text-white hover:text-[#dda822] transition-colors block py-2"
//                       >
//                         Transactions
//                       </Link>
//                     </li>
//                      <li>
//                     <Link
//                       href="/track-transactions"
//                       className="text-white hover:text-[#dda822] transition-colors font-medium"
//                     >
//                       Track transaction
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href='/verify-id' className='text-white hover:text-[#dda822] font-medium' >KYC</Link>
//                   </li>
//                     <li
//                       id="dis1"
//                       className="btn border border-[#dda822] rounded px-4 py-2 mt-2.5 lg:hidden"
//                     >
//                       <button
//                         onClick={() => {
//                           openAuthModal('signin')
//                           setIsMenuOpen(false)
//                         }}
//                         className="text-center block text-white w-full"
//                       >
//                         Login
//                       </button>
//                     </li>
//                     <li
//                       id="dis2"
//                       className="btn bg-[#dda822] text-white rounded px-4 py-2 mt-2.5 lg:hidden hover:bg-[#9a7209] transition-colors"
//                     >
//                       <button
//                         onClick={() => {
//                           openAuthModal('register')
//                           setIsMenuOpen(false)
//                         }}
//                         className="text-center block text-white w-full"
//                       >
//                         Register
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </nav>
//             </div>

//             {/* Center Navigation - Desktop Transaction Link */}
//             <div className="hidden lg:block">
//               <nav>
//                 <ul className="flex items-center gap-4">
//                   <li>
//                     <Link
//                       href="/transactions"
//                       className="text-white hover:text-[#dda822] transition-colors font-medium"
//                     >
//                       Transactions
//                     </Link>
//                   </li>
//                    <li>
//                     <Link
//                       href="/track-transactions"
//                       className="text-white hover:text-[#dda822] transition-colors font-medium"
//                     >
//                       Track transaction
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href='/verify-id' className='text-white hover:text-[#dda822] font-medium' >KYC</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             {/* Desktop Login & Signup Links */}
//             <div className="hidden lg:flex items-center">
//               <nav className="flex items-center space-x-4">
//                 <ul className="flex items-center space-x-4">
//                   <li className="hidden lg:block">
//                     <button
//                       onClick={() => openAuthModal('signin')}
//                       className="text-white hover:text-[#dda822] transition-colors"
//                     >
//                       Login
//                     </button>
//                   </li>
//                   <li className="hidden lg:flex items-center h-auto">
//                     <button
//                       onClick={() => openAuthModal('register')}
//                       className="inline-flex items-center justify-center py-6 rounded-md bg-[#dda822] text-white hover:bg-[#9a7209] h-10 px-6 font-medium transition-colors"
//                     >
//                       Register
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>
//       <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} initialForm={authModalInitialForm} />
//     </>
//   )
// }

// export default PageHeader

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import AuthModal from '@/app/_components/AuthModal'
import { handleScroll } from '@/app/_utils/smoothScoll'


type AuthFormType = 'signin' | 'signup' | 'register'

export function PageHeader() {
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
           {/* <button onClick={(e)=>handleScroll('how-it-works')} > */}
           <button >
            <Link
              href="/"
              className="text-gray-800 hover:text-[#ce9739] transition-colors"
            >
              Send Money
            </Link>
           </button>
            <Link
              href="/track-transactions"
              className="text-gray-800 hover:text-[#ce9739] transition-colors"
            >
              Track Transfer
            </Link>
            <Link
              href="/our-branches"
              className="text-gray-800 hover:text-[#ce9739] transition-colors"
            >
              Find Location
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-6 text-base">
            <Link
              href="https://finasddee-test-orm.remit.by/en"
              className="inline-flex items-center justify-center rounded-[50px] bg-[#ce9739] text-white hover:bg-[#e9a907] h-10 px-6 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://finasddee-test-orm.remit.by/en/register"
              className="inline-flex items-center justify-center rounded-[50px] bg-[#122D4B] text-white hover:bg-[#1a4170] h-10 px-6 font-medium transition-colors"
            >
              Register
            </Link>
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
        {/* Backdrop (fades) */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
          aria-hidden={!isMenuOpen}
        />
        {/* Drawer (slides) */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] bg-white shadow-xl lg:hidden transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isMenuOpen}
        >
          <div className="p-4 border-b flex items-center justify-between">
            <span className="font-medium">Finasddee</span>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-800 hover:text-[#ce9739]"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="p-4 flex flex-col space-y-4">
            <button>
            <Link
              href="/"
              className="text-black hover:text-gold-light transition-colors py-2"
              onClick={toggleMenu}
            >
              Send Money
            </Link>
            </button>
            <Link
              href="/track-transactions"
              className="text-black hover:text-gold-light text-center transition-colors py-2"
              onClick={toggleMenu}
            >
              Track Transfer
            </Link>
            <button>
            <Link
              href="/our-branches"
              className="text-black hover:text-gold-light transition-colors py-2"
              onClick={toggleMenu}
            >
              Find Location
            </Link>
            </button>
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
      
            <Link
              href="https://finasddee-test-orm.remit.by/en"
              className="inline-flex items-center justify-center rounded-[50px] bg-[#ce9739] text-white hover:bg-[#e9a907] h-9 px-6 text-sm font-medium transition-colors w-full"
            >
              Login
            </Link>
            <Link
              href="https://finasddee-test-orm.remit.by/en/register"
              className="inline-flex items-center justify-center rounded-[50px] bg-[#122D4B] text-white hover:bg-[#1a4170] h-10 px-6 font-medium transition-colors"
            >
              Register
            </Link>
            </div>
          </nav>
        </div>
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

const LandingPageNavBar = PageHeader;

export default LandingPageNavBar;
