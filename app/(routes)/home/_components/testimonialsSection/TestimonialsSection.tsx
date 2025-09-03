"use client";

import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section py-16" style={{ backgroundColor: '#ffff00' }}>
            <div className="container">
                <h2 className="text-6xl text-center font-normal text-black mb-4">
                    What people say about Finasddee
                </h2>
                <p className="text-xl text-center text-black mb-4">
                    A payments experience people love to talk about
                </p>

                <div className="row">
                    <div className="col-lg-10 col-xl-8 mx-auto">
                        <div className="owl-carousel owl-theme" style={{ position: 'relative' }}>
                            {/* Testimonial Content */}
                            <div className="item">
                                <div className="testimonial rounded text-center p-4 bg-white shadow-lg">
                                    <p className="text-6xl text-gray-400 opacity-20 mb-2">
                                        <i className="fa fa-quote-left"></i>
                                    </p>
                                    <p className="text-xl text-gray-800 mb-4">
                                        "{testimonials[currentSlide].quote}"
                                    </p>
                                    <strong className="block font-medium text-lg text-gray-900">
                                        {testimonials[currentSlide].author}
                                    </strong>
                                    <span className="text-gray-600">
                                        {testimonials[currentSlide].position}
                                    </span>
                                </div>
                            </div>

                            {/* Owl Navigation */}
                            <div className="owl-nav" style={{
                                position: 'absolute',
                                top: '50%',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none'
                            }}>
                                <button
                                    type="button"
                                    className="owl-prev bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                                    onClick={prevSlide}
                                    style={{ pointerEvents: 'auto' }}
                                >
                                    <i className="fa fa-chevron-left text-gray-600"></i>
                                </button>
                                <button
                                    type="button"
                                    className="owl-next bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                                    onClick={nextSlide}
                                    style={{ pointerEvents: 'auto' }}
                                >
                                    <i className="fa fa-chevron-right text-gray-600"></i>
                                </button>
                            </div>

                            {/* Owl Dots */}
                            <div className="owl-dots flex justify-center mt-6 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`owl-dot w-3 h-3 rounded-full transition-colors ${
                                            index === currentSlide ? 'bg-gray-800 active' : 'bg-gray-300'
                                        }`}
                                        type="button"
                                    >
                                        <span></span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
