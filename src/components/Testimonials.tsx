'use client';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-sm">
                            <FiUser className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                            <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent text-center lg:text-left">&quot;{testimonial.message}&quot;</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
