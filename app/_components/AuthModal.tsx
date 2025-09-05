'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SignInForm from '@/app/(auth)/signin/_forms/signInForm'
import SignUpForm from '@/app/(auth)/sign-up/_forms/SignUpForm'
import RegistrationForm from '@/app/(routes)/registration-service/_forms/RegistrationForm'
import RegistrationReview from '@/app/(routes)/registration-service/_forms/RegistrationReview'

type AuthFormType = 'signin' | 'signup' | 'register' | 'registration-review' | 'registration-success'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialForm?: AuthFormType
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialForm = 'signin' }) => {
  const [currentForm, setCurrentForm] = useState<AuthFormType>(initialForm)
  const [registrationData, setRegistrationData] = useState<any>(null)

  useEffect(() => {
    if (isOpen) {
      setCurrentForm(initialForm)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, initialForm])

  const handleFormSwitch = (formType: AuthFormType) => {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setCurrentForm(formType)
    }, 50)
  }

  const handleRegistrationSubmit = (data: any) => {
    console.log('Registration data:', data)
    // Handle registration submission
    setRegistrationData(data);
    setCurrentForm('registration-review');
  }

  const handleAmendDetails = () => {
    setCurrentForm('register');
  }

  const handleFinalSubmit = () => {
    setCurrentForm('registration-success');
  }

  const renderForm = () => {
    switch (currentForm) {
      case 'signin':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-600">Welcome back! Please sign in to your account.</p>
            </div>
            <SignInForm />
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => handleFormSwitch('signup')}
                  className="text-[#cc9408] hover:text-[#b8860b] font-medium"
                >
                  Sign up
                </button>
              </p>
              <p className="text-sm text-gray-600">
                Need to register as a service?{' '}
                <button
                  onClick={() => handleFormSwitch('register')}
                  className="text-[#cc9408] hover:text-[#b8860b] font-medium"
                >
                  Register Service
                </button>
              </p>
            </div>
          </div>
        )
      case 'signup':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
              <p className="text-gray-600">Create your account to get started.</p>
            </div>
            <SignUpForm />
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => handleFormSwitch('signin')}
                  className="text-[#cc9408] hover:text-[#b8860b] font-medium"
                >
                  Sign in
                </button>
              </p>
              <p className="text-sm text-gray-600">
                Need to register as a service?{' '}
                <button
                  onClick={() => handleFormSwitch('register')}
                  className="text-[#cc9408] hover:text-[#b8860b] font-medium"
                >
                  Register Service
                </button>
              </p>
            </div>
          </div>
        )
      case 'register':
        return (
          <div className='flex items-center justify-center'>
            <div className="space-y-6  flex-col">

              {/* <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Register Service</h2>
              <p className="text-gray-600">Register your service with us.</p>
            </div> */}
              <RegistrationForm onSubmit={handleRegistrationSubmit} />
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => handleFormSwitch('signin')}
                    className="text-[#cc9408] hover:text-[#b8860b] font-medium"
                  >
                    Sign in
                  </button>
                </p>
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => handleFormSwitch('signup')}
                    className="text-[#cc9408] hover:text-[#b8860b] font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </div>
        )
      case 'registration-review':
        return (
          <div className="space-y-6 flex items-center justify-center">
            {/* <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Registration</h2>
              <p className="text-gray-600">Please review your details before submitting</p>
            </div> */}
            <RegistrationReview data={registrationData} onAmend={handleAmendDetails} onFinalSubmit={handleFinalSubmit} />
          </div>
        )
      case 'registration-success':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-600 mb-2">Registration Successful!</h2>
              <p className="text-gray-600">Your registration has been submitted successfully.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Registration Details</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Status:</strong> Pending Review</p>
                <p><strong>Next Steps:</strong> Our team will review your application within 24-48 hours.</p>
                <p><strong>Confirmation:</strong> You will receive an email confirmation shortly.</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={onClose}
                className="bg-[#cc9408] hover:bg-[#b8860b] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.5
            }}
            className="fixed inset-0 z-[70] bg-white overflow-y-auto"
          >
            <div className="min-h-screen flex items-center justify-center p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-[80]"
                aria-label="Close modal"
              >
                <X size={24} className="text-gray-500 fixed right-10" />
              </button>

              {/* Form content with smooth transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentForm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: 'spring',
                    damping: 25,
                    stiffness: 300,
                    duration: 0.3
                  }}
                  className="w-full max-w-md mx-auto"
                >
                  {renderForm()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default AuthModal
