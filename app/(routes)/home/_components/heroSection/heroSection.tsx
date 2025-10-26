"use client";
import DetailsStep from "@/app/(routes)/send-money/_component/steps/DetailsStep";
import LandingPageNavBar from "@/app/_components/layout/landingPage/navbar";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const HeroSection = () => {
    const t = useTranslations();
    return (
        <div>
            <LandingPageNavBar/>
            <section
                className={cn(
                    "relative min-h-screen flex items-center overflow-hidden py-6 pt-26 md:pt-6 sm:py-8 md:py-12 lg:py-15",
                    "before:absolute before:inset-0 before:bg-black before:opacity-60 before:z-10",
                )}
            >
                {/* Static background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: 'url(/assets/images/new_cover_photo.jpg)',
                    }}
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex flex-col lg:flex-row items-center pt-16 sm:pt-20 md:pt-24 lg:pt-32">
                        {/* Left content */}
                        <div className="lg:w-7/12 xl:w-7/12 text-center lg:text-left pb-6 sm:pb-8 lg:pb-0 z-40">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal mb-3 sm:mb-4">
                                <span className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl block">{t("home.hero.subtitle")}</span>
                                {t("home.hero.title")}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6">{t("home.hero.tagline")}</p>
                        </div>

                        {/* Right form */}
                        <div className="lg:w-5/12 xl:w-5/12 mt-6 sm:mt-8 lg:mt-0 w-full max-w-md sm:max-w-lg mx-auto lg:mx-0 z-40">
                            <div className="relative z-30">
                                <DetailsStep onNext={() => { }} onDataChange={() => { }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;