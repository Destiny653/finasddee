"use client";
import HeroSection from "./_components/heroSection/heroSection";
import HowItWorksSection from "./_components/howItWorksSection/HowItWorksSection";
import WhyChooseUsSection from "./_components/whyChooseUsSection/WhyChooseUsSection";
import NetworkSection from "./_components/networkSection/NetworkSection";
import TestimonialsSection from "./_components/testimonialsSection/TestimonialsSection";
import SpecialOfferSection from "./_components/specialOfferSection/SpecialOfferSection";
import FaqSection from "./_components/faqSection/FaqSection";
import LandingPageNavBar from "@/app/_components/layout/landingPage/navbar";
import MainLandingPageLayout from "@/app/_components/layout/landingPage/MainLandingPageLayout";

const HomePage = () => {
    return (
        <MainLandingPageLayout>
            <>
                <HeroSection />
                <HowItWorksSection />
                <WhyChooseUsSection />
                <NetworkSection />
                {/* <TestimonialsSection /> */}
                <SpecialOfferSection />
                <FaqSection />
            </>
        </MainLandingPageLayout>
    );
};

export default HomePage;
