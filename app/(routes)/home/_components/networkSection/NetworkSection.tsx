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
        <section className="py-16 bg-white" id="network-section">
            <div className="container mx-auto px-4 mt-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 pb-4">
                        Our Network
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {countries.map((country) => (
                        <div key={country.code} className="flex items-center text-left">
                            <div className="mr-3">
                                <span className="text-2xl">{country.flag}</span>
                            </div>
                            <div>
                                <h4 className="text-base font-medium text-gray-900">
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
