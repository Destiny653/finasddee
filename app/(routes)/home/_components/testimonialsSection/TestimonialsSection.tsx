"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const testimonials = [
        {
            quote: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry.",
            author: "Jay Shah",
            position: "Founder at Icomatic Pvt Ltd"
        },
        {
            quote: "I am happy Working with printing and typesetting industry.",
            author: "Patrick Cary",
            position: "Freelancer from USA"
        },
        {
            quote: "Fast easy to use transfers to a different currency. Much better value that the banks.",
            author: "De Mortel",
            position: "Online Retail"
        },
        {
            quote: "I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.",
            author: "Chris Tom",
            position: "User from UK"
        },
        {
            quote: "It's a real good idea to manage your money by Finasddee. The rates are fair and you can carry out the transactions without worrying!",
            author: "Mauri Lindberg",
            position: "Freelancer from Au"
        },
        {
            quote: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.",
            author: "Dennis Jacques",
            position: "User from USA"
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            goToSlide((currentSlide + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide, testimonials.length]);

    const goToSlide = useCallback((slideIndex: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(slideIndex);

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }, [isTransitioning]);

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % testimonials.length;
        goToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
        goToSlide(prevIndex);
    };

    return (
        <section className="section py-8 md:py-12 lg:py-16 flex items-center justify-center" style={{ backgroundColor: '#ce9739' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-normal text-black mb-4">
                    What people say about Finasddee
                </h2>
                <p className="text-lg md:text-xl text-center text-black mb-4">
                    A payments experience people love to talk about
                </p>

                <div className="px-4 md:px-8 lg:px-12">
                    <div className="max-w-4xl xl:max-w-5xl mx-auto">
                        <div className="relative overflow-hidden">
                            {/* Slider Container */}
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-2"
                                    >
                                        <div className="testimonial rounded text-center bg-white shadow-lg mx-0">
                                            {/* Quote Icon */}
                                            <div className="text-5xl md:text-7xl text-gray-300 opacity-30 mb-4 leading-none">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                            {/* Quote Text */}
                                            <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
                                                {testimonial.quote}
                                            </p>

                                            {/* Author Info */}
                                            <div className=" pt-2">
                                                <strong className="block font-semibold text-base md:text-lg text-gray-900 mb-1">
                                                    {testimonial.author}
                                                </strong>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    {testimonial.position}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 pointer-events-none px-2">
                                <button
                                    type="button"
                                    className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={prevSlide}
                                    disabled={isTransitioning}
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                </button>
                                <button
                                    type="button"
                                    className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={nextSlide}
                                    disabled={isTransitioning}
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>

                            {/* Dots Navigation */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        disabled={isTransitioning}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === currentSlide
                                                ? 'bg-gray-800 scale-125'
                                                : 'bg-gray-400 hover:bg-gray-600'
                                            }`}
                                        type="button"
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .testimonial {
                    min-height: 280px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                
                @media (max-width: 768px) {
                    .testimonial {
                        min-height: 320px;
                    }
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;