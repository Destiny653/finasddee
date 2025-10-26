"use client";

import React from "react";
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

const ReferFriendSection = () => {
  const router = useRouter();
  const t = useTranslations();
  return (
    <section className="py-8 px-8 md:py-12  bg-[#f1f1f1]">
      <div className="container mx-auto px-4">
        <div 
          className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6"
          style={{ backgroundColor: "#001E40" }}
        >
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "#ce9739" }}
            >
              {t('home.refer.title')}
            </h2>
            <p className="text-white">{t('home.refer.description')}</p>
          </div>

          {/* Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => router.push('/refer-friend')}
              className="px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              style={{
                color: "#ce9739",
                border: "2px solid #ce9739",
                backgroundColor: "transparent",
              }}
            >
                {t('home.refer.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferFriendSection;