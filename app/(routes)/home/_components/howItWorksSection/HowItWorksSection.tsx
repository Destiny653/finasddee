import React from 'react';

const HowItWorksSection = () => {
    return (
        <section className="py-16" id="landing-page-send" style={{ backgroundColor: '#ffff00' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl lg:text-5xl text-center font-bold text-black mb-4">
                    The simple way to send money
                </h2>
                <p className="text-lg text-center text-black mb-12 max-w-4xl mx-auto">
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
                        <h3 className="text-xl font-bold text-black mb-4">Sign Up Your Account</h3>
                        <p className="text-black text-base">
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
                        <h3 className="text-xl font-bold text-black mb-4">Select Your Recipient</h3>
                        <p className="text-black text-base">
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
                        <h3 className="text-xl font-bold text-black mb-4">Send Money</h3>
                        <p className="text-black text-base">
                            After sending money, the recipient will be notified via an email when money has been transferred to their account.
                        </p>
                    </div>
                </div>
                
                <div className="text-center mt-8">
                    <a
                        href="/sign-up"
                        className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        style={{ backgroundColor: '#cc9408' }}
                    >
                        Sign up Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
