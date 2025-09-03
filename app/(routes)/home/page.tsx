'use client'
import HeroSection from "./_components/heroSection/heroSection";
import HowItWorksSection from "./_components/howItWorksSection/HowItWorksSection";
import WhyChooseUsSection from "./_components/whyChooseUsSection/WhyChooseUsSection";
import NetworkSection from "./_components/networkSection/NetworkSection";
import TestimonialsSection from "./_components/testimonialsSection/TestimonialsSection";
import SpecialOfferSection from "./_components/specialOfferSection/SpecialOfferSection";
import FaqSection from "./_components/faqSection/FaqSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <HowItWorksSection />
            <WhyChooseUsSection />
            <NetworkSection />
            <TestimonialsSection />
            <SpecialOfferSection />
            <FaqSection />
        </>
    );
};

export default HomePage;
