import React from 'react';

const NetworkSection = () => {
    const countries = [
        { code: 'AL', name: 'Albania', flag: '🇦🇱' },
        { code: 'DZ', name: 'Algeria', flag: '🇩🇿' },
        { code: 'AU', name: 'Australia', flag: '🇦🇺' },
        { code: 'BS', name: 'Bahamas', flag: '🇧🇸' },
        { code: 'BY', name: 'Belarus', flag: '🇧🇾' },
        { code: 'KH', name: 'Cambodia', flag: '🇰🇭' },
        { code: 'CN', name: 'China', flag: '🇨🇳' },
        { code: 'HR', name: 'Croatia', flag: '🇭🇷' },
        { code: 'DE', name: 'Germany', flag: '🇩🇪' },
        { code: 'IR', name: 'Iran', flag: '🇮🇷' },
        { code: 'IT', name: 'Italy', flag: '🇮🇹' },
        { code: 'LV', name: 'Latvia', flag: '🇱🇻' },
        { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
        { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
        { code: 'RO', name: 'Romania', flag: '🇷🇴' },
        { code: 'RU', name: 'Russia', flag: '🇷🇺' },
        { code: 'RS', name: 'Serbia', flag: '🇷🇸' },
        { code: 'ES', name: 'Spain', flag: '🇪🇸' },
        { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
        { code: 'US', name: 'United States', flag: '🇺🇸' },
        { code: 'VN', name: 'Vietnam', flag: '🇻🇳' }
    ];

    return (
        <section className="py-8 sm:py-12 md:py-16 " id="network-section" style={{ backgroundColor: '#f1f1f1', color: 'white' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Our Partners
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
                        We partner with trusted payment providers to ensure secure and reliable transactions worldwide
                    </p>
                </div>
                {/* Payment gateway partners */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 md:gap-x-24 lg:gap-x-27 gap-y-8 mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
                    <img 
                        src="/assets/images/partner/paytree-1.png" 
                        alt="PayTree" 
                        className="h-10 sm:h-14 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
                    />
                    <img 
                        src="/assets/images/partner/mastercard-1.png" 
                        alt="Mastercard" 
                        className="h-10 sm:h-14 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
                    />
                    <img 
                        src="/assets/images/partner/visa-1.png" 
                        alt="Visa" 
                        className="h-10 sm:h-14 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
                    />
                    <img 
                        src="/assets/images/partner/pci-logo.png" 
                        alt="PCI" 
                        className="h-10 sm:h-14 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
                    />
                </div>

                {/* <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {countries.map((country) => (
                        <div key={country.code} className="flex items-center text-left py-2 sm:py-3">
                            <div className="mr-2 sm:mr-3">
                                <span className="text-lg sm:text-xl md:text-2xl">{country.flag}</span>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
                                    {country.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default NetworkSection;