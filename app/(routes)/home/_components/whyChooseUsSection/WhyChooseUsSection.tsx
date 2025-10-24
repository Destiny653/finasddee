import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CircleCheck } from 'lucide-react';

const features = [
    {
        title: 'Multiple countries',
        desc: 'Send money to multiple countries conveniently.',
    },
    {
        title: 'Lower fees',
        desc: 'We work to keep our fees among the lowest.',
    },
    {
        title: 'Easy to use',
        desc: 'A clean, intuitive experience across devices.',
    },
    {
        title: 'Faster payments',
        desc: 'Recipients typically receive funds within minutes.',
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="relative overflow-hidden" style={{
            paddingBottom: '4rem',
        }}>
            <div className="flex flex-col lg:flex-row">
        
                {/* Main colored section */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
                            Why choose Finasddee?
                        </h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            {features.map((f, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm overflow-hidden transition-transform duration-200 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
                                >
                                    {/* top accent line */}
                                    <div
                                        className="pointer-events-none absolute left-0 right-0 top-0 h-1 rounded-t-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                        style={{ backgroundColor: '#ce9739' }}
                                    />
        
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5">
                                            <CircleCheck className="text-[#001E40]" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{f.title}</h3>
                                            <p className="text-sm text-gray-600 leading-6">{f.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* right section with background image - Desktop */}
                <div className="md:hidden lg:block lg:w-1/2 min-h-[300px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/images/cashless.jpg')",
                        WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 15% 100%, 0% 85%)',
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 15% 100%, 0% 85%)'
                    }}>
                </div>
                
            </div>
            
        </section>
    );
};

export default WhyChooseUsSection;
