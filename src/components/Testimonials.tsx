'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { FiUser } from 'react-icons/fi';

const Testimonials = () => {
    return (
        <section className="py-20 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600">
                        Hear from those who have partnered with us.
                    </p>
                </div>

                {/* Testimonials Scroll Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10"></div>

                    {/* Scrolling Container */}
                    <div className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-none w-[calc(100%-2rem)] sm:w-[400px] snap-center"
                            >
                                <div className="h-full bg-primary text-accent rounded-3xl p-8 flex flex-col">
                                    {/* Avatar and Info */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                            <FiUser className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-accent">{testimonial.name}</h4>
                                            <p className="text-sidebar">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="flex-grow">
                                        <p className="text-sidebar leading-relaxed">
                                            {testimonial.message}
                                        </p>
                                    </blockquote>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
