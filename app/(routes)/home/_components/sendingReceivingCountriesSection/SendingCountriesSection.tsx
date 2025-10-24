"use client";

import React from "react";

type Country = {
  code: string;
  name: string;
  shortCode: string;
};

const sendFromCountries: Country[] = [
  { code: "GB", name: "United Kingdom", shortCode: "GB" },
  { code: "FR", name: "France", shortCode: "FR" },
  { code: "US", name: "USA", shortCode: "US" },
];

const SendingCountriesSection = () => {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#F7F8FC" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001E40] mb-3">
              Send money internationally from your location
            </h2>
          </div>

          {/* Countries Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
            {sendFromCountries.map((country) => (
              <button
                key={country.code}
                className="flex items-center gap-4 p-5 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-50 hover:border-blue-100 hover:shadow-md group"
              >
                {/* Flag Circle */}
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 relative"
                    style={{
                      border: "2px solid #E5E7EB",
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png 1x, https://flagcdn.com/w160/${country.code.toLowerCase()}.png 2x`}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Country Code Badge */}
                    <div className="absolute -bottom-1 bg-white px-2 py-0.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600">
                      {country.shortCode}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                  <p className="text-sm text-gray-500 font-medium mb-0.5">
                    Send from
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-[#001E40]">
                    {country.name}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendingCountriesSection;