import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AppDownloadSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="flex flex-col lg:flex-row">
                {/* Left section with background image - Desktop */}
                <div className="hidden lg:block lg:w-1/2 min-h-[600px] bg-cover bg-center bg-no-repeat bg-[#ce9739]"
                    style={{
                        backgroundImage: "url('/assets/images/pic/conver.png')"
                    }}>
                </div>

                {/* Mobile Image Section */}
                <div className="block lg:hidden w-full bg-[#ce9739]">
                    <div className="relative w-full max-w-[400px] mx-auto pt-16 px-4 pb-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ce9739] rounded-[40px] transform translate-y-4 scale-[0.95] blur-xl"></div>
                        <Image
                            src="/assets/images/pic/conver.png"
                            alt="Finasddee Mobile App"
                            width={400}
                            height={800}
                            className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl"
                        />
                    </div>
                </div>

                {/* Main colored section */}
                <div className="lg:w-1/2 bg-[#ce9739]">
                    <div className="px-4 pt-4 lg:pt-24 lg:px-12">
                        {/* Mobile App Image (visible on mobile) */}
                        <div className="lg:w-1/2 mb-10 lg:mb-0 relative lg:hidden">
                            <div className="relative w-full max-w-[400px] mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 rounded-[40px] transform translate-y-4 scale-[0.95] blur-xl"></div>
                                <Image
                                    src="/assets/images/pic/conver.png"
                                    alt="Finasddee Mobile App"
                                    width={400}
                                    height={800}
                                    className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                                Banking at Your Fingertips
                            </h2>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
                                Transform your financial experience with our powerful mobile app. 
                                Send money globally, track transactions in real-time, and manage 
                                your finances securely — all from your smartphone.
                            </p>
                        
                            {/* Features List */}
                            <div className="mb-10">
                                <div className="flex items-start mb-4">
                                    <div className="mr-3 mt-1">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p className="text-white/90">Global money transfers with competitive rates</p>
                                </div>
                                <div className="flex items-start mb-4">
                                    <div className="mr-3 mt-1">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p className="text-white/90">Real-time transaction tracking and notifications</p>
                                </div>
                                <div className="flex items-start mb-4">
                                    <div className="mr-3 mt-1">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p className="text-white/90">Bank-grade security and 24/7 support</p>
                                </div>
                            </div>

                            {/* App Store Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link 
                                    href="https://play.google.com/store" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="transform hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src="/assets/images/pic/google-play-badge.svg"
                                        alt="Get it on Google Play"
                                        width={180}
                                        height={53}
                                        className="h-[53px] w-auto"
                                    />
                                </Link>
                                <Link 
                                    href="https://apps.apple.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="transform hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src="/assets/images/pic/app-store-badge.svg"
                                        alt="Download on the App Store"
                                        width={180}
                                        height={53}
                                        className="h-[53px] w-auto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
