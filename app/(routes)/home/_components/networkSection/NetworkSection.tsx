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
        <section className="py-8 sm:py-12 md:py-16 bg-white" id="network-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 pb-2 sm:pb-4">
                        Our Network
                    </h2>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                </div>
            </div>
        </section>
    );
};

export default NetworkSection;