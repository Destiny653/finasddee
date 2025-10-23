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

const SendingReceivingCountriesSection = () => {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#F7F8FC" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001E40] mb-3">
              Sending and receiving countries
            </h2>
            <p className="text-[#4b5563] max-w-xl leading-7">
              Whether you're supporting family abroad, managing finances across borders
              or sending emergency funds, we give you the flexibility to move money to the
              people and places that matter quickly, securely, and on your terms.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-6">
              {countries.map((c) => (
                <div key={c.code} className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center shadow-sm ring-1 ring-[#E5E7EB] bg-white"
                    aria-label={`${c.name} flag`}
                    title={c.name}
                  >
                    <span className="text-2xl md:text-3xl select-none">
                      {c.flag}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#001E40]">{c.name}</p>
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

export default SendingReceivingCountriesSection;
