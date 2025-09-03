import React from 'react';
import { CircleCheck } from 'lucide-react';

const WhyChooseUsSection = () => {
    return (
        <section className="bg-white" style={{ margin: 0, padding: 0 }}>
            <div className="flex flex-col lg:flex-row relative" style={{ margin: 0, padding: 0 }}>
                {/* Left content */}
                <div className="lg:w-1/2 px-4 sm:px-8 py-12 lg:py-20">
                    <div className="container px-4 sm:px-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                            Why choose Finasddee?
                        </h2>
                        
                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <CircleCheck className="text-gray-700" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Over 95+ countries
                                    </h3>
                                    <p className="text-gray-600">
                                        Send money to over 90+ countries conveniently
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <CircleCheck className="text-gray-700" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Lower Fees
                                    </h3>
                                    <p className="text-gray-600">
                                        Finasddee guarantees the lowest fees
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <CircleCheck className="text-gray-700" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Easy to Use
                                    </h3>
                                    <p className="text-gray-600">
                                        Finasddee maintains an engaging user experience
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <CircleCheck className="text-gray-700" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Faster Payments
                                    </h3>
                                    <p className="text-gray-600">
                                        Receiver typically receives funds immediately
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right image */}
                <div 
                    className="lg:w-1/2 min-h-96 lg:min-h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/assets/images/cashless.jpg)',
                        marginTop: 0
                    }}
                >
                    {/* Background image container */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
