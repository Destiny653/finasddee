import React from 'react';
import CountryList from 'country-list-with-dial-code-and-flag';

const ReceivingCountries = () => {
  // Define the receiving countries based on the original HTML
  const receivingCountryCodes = [
    // 'AL', // Albania
    // 'DZ', // Algeria
    // 'AU', // Australia
    // 'BS', // Bahamas
    // 'BY', // Belarus
    // 'KH', // Cambodia
    // 'CN', // China
    // 'HR', // Croatia
    // 'DE', // Germany
    // 'IR', // Iran
    // 'IT', // Italy
    // 'LV', // Latvia
    // 'MA', // Morocco
    // 'NP', // Nepal
    // 'RO', // Romania
    // 'RU', // Russia
    // 'RS', // Serbia
    // 'ES', // Spain
    // 'GB', // United Kingdom
    // 'US', // United States
    // 'VN',  // Vietnam
    'CM' // Cameroon
  ];

  // Get country data for our specific countries
  const receivingCountries = receivingCountryCodes
    .map(code => CountryList.findOneByCountryCode(code))
    .filter(country => country !== undefined);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Receiving Countries
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Send money to these countries safely and securely. Choose your destination to see transfer options.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {receivingCountries.map((country, index) => (
            <div
              key={country.code}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-green-400 cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span 
                    className="text-4xl"
                    role="img"
                    aria-label={`${country.name} flag`}
                  >
                    {country.flag}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    {country.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {country.code}
                  </p>
                </div>
              </div>
              
              {/* Optional: Add dial code display */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  Dial Code: {country.dial_code}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a call-to-action section */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Send Money Worldwide
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Choose your receiving country and start sending money to your loved ones today with competitive rates and fast delivery.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 mr-4">
              Send Money Now
            </button>
            <button className="bg-transparent border border-green-600 text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200">
              Check Rates
            </button>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Exchange Rates</h3>
            <p className="text-gray-600">Get competitive rates with transparent fees and no hidden charges.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Transfer</h3>
            <p className="text-gray-600">Send money instantly or within minutes to most countries.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Bank-level security with 24/7 customer support and tracking.</p>
          </div>
        </div>

        {/* Statistics section */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                {receivingCountries.length}+
              </div>
              <div className="text-green-100">Receiving Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-green-100">Total Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-green-100">Trusted Service</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReceivingCountries;