"use client";
import DetailsStep from "@/app/(routes)/send-money/_component/steps/DetailsStep";
import { cn } from "@/lib/utils";

const HeroSection = () => {
    return (
        <section
            className={cn(
                "relative min-h-screen flex items-center overflow-hidden",
                "before:absolute before:inset-0 before:bg-black before:opacity-70 before:z-10",
            )}
        >
            {/* Static background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: 'url(/assets/images/new_cover_photo.jpg)',
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col lg:flex-row items-center pt-24 lg:pt-32">
                    {/* Left content */}
                    <div className="lg:w-7/12 xl:w-7/12 text-center lg:text-left pb-8 lg:pb-0">
                        <h2 className="text-6xl lg:text-7xl text-white font-normal mb-4">
                            <span className="font-light text-4xl lg:text-5xl block">A better way to</span>
                            Send Money
                        </h2>
                        <p className="text-xl text-white mb-4">You&apos;ve got the money. We&apos;ve got the speed.</p>
                    </div>

                    {/* Right form */}
                    <div className="lg:w-5/12 xl:w-5/12 mt-8 lg:mt-0 p-4 w-full">
                        <div className="relative z-30">
                            <DetailsStep onNext={() => {}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
