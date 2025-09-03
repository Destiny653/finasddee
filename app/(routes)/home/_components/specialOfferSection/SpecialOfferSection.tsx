import React from 'react';

const SpecialOfferSection = () => {
    return (
        <section
            className="relative py-20 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/assets/images/bg/image-2.jpg')"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#161615] opacity-80"></div>

            <div className="relative container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-6 md:mb-0 md:mr-8 max-w-2xl">
                        Sign up today and get your first transaction fee free!
                    </h2>
                    <a
                        href="/signup"
                        className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                    >
                        Sign up Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SpecialOfferSection;
