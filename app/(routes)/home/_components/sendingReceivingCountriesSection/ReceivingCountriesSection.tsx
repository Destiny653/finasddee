"use client";

import React from "react";

type Country = {
  code: string;
  name: string;
  flag: string; // Unicode flag
};

const countries: Country[] = [
  { code: "CM", name: "Cameroon", flag: "🇨🇲" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "SN", name: "Senegal", flag: "🇸🇳" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "UG", name: "Uganda", flag: "🇺🇬" },
  { code: "ZM", name: "Zambia", flag: "🇿🇲" },
  { code: "ZW", name: "Zimbabwe", flag: "🇿🇼" },
];

const ReceivingCountriesSection = () => {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#F7F8FC" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001E40] mb-3">
              Receiving Countries
            </h2>
            <p className="text-[#4b5563] leading-7">
              Whether you're supporting family abroad, managing finances across borders
              or sending emergency funds, we give you the flexibility to move money to the
              people and places that matter quickly, securely, and on your terms.
            </p>
          </div>

          {/* Countries Grid Section */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4 md:gap-8">
              {countries.map((c) => (
                <div key={c.code} className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center shadow-md mb-3"
                    style={{ 
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #E5E7EB'
                    }}
                    aria-label={`${c.name} flag`}
                    title={`Send money to ${c.name}`}
                  >
                    <img
                      src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png 1x, https://flagcdn.com/w160/${c.code.toLowerCase()}.png 2x`}
                      alt={`${c.name} flag`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-medium text-[#001E40] leading-snug">
                      Send money to {c.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceivingCountriesSection;