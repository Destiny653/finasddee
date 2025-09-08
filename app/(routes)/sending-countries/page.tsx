import React from 'react';
import CountryList from 'country-list-with-dial-code-and-flag';

const SendingCountries = () => {
  // Define the countries we want to display based on the original HTML
  const sendingCountryCodes = [
    'AU', // Australia
    'BH', // Bahrain
    'BR', // Brazil
    'CA', // Canada
    'CN', // China
    'DK', // Denmark
    'FR', // France
    'DE', // Germany
    'IS', // Iceland
    'IT', // Italy
    'NZ', // New Zealand
    'NO', // Norway
    'RU', // Russia
    'ES', // Spain
    'GB', // United Kingdom
    'US', // United States
    'VN'  // Vietnam
  ];

  // Get country data for our specific countries
  const sendingCountries = sendingCountryCodes
    .map(code => CountryList.findOneByCountryCode(code))
    .filter(country => country !== undefined);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sending Countries
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We support money transfers from these countries. Select your location to get started.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {sendingCountries.map((country, index) => (
            <div
              key={country.code}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-blue-300 cursor-pointer group"
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
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
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
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Send Money?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Choose your sending country and start your secure money transfer today.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Statistics section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {sendingCountries.length}
            </div>
            <div className="text-gray-600">Sending Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5★</div>
            <div className="text-gray-600">Trusted Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendingCountries;