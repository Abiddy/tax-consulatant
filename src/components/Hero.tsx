'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiFileText, FiDollarSign, FiBriefcase, FiShoppingBag } from 'react-icons/fi';

const Hero: React.FC = () => {
    return (
        <section className="relative pb-10 p-5 pt-20 md:pt-32 overflow-hidden">
            {/* Main Hero Section */}
            <div className="relative bg-white border border-gray-200 min-h-[40vh] rounded-[40px] p-10 sm:p-6 lg:px-8">
                <div className="max-w-7xl pt-12 pb-24 md:pb-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left max-w-xl mx-auto lg:mx-0"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight tracking-tight">
                                Expert Tax Solutions for Your Financial Success
                            </h1>
                            <p className="text-lg md:text-xl text-text mb-8 max-w-lg font-normal">
                                Easy-to-manage tax solutions, designed to improve financial wellness and enhance your peace of mind.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center text-primary bg-accent hover:bg-sidebar px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg"
                                >
                                    Contact Us
                                </Link>
                                <a
                                    href="tel:3109784650"
                                    className="inline-flex items-center justify-center text-primary bg-accent hover:bg-sidebar px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg"
                                    style={{ textDecoration: 'none' }}
                                >
                                    310-978-4650
                                </a>
                            </div>
                        </motion.div>
                        {/* Logo Image */}
                        <div className="flex justify-center items-center">
                            <img 
                                src="/images/heroImage.png" 
                                alt="Hero Illustration"
                                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-3xl border shadow-2xl rotate-[-5deg]" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <FiFileText className="w-6 h-6" />,
                            title: "Tax Relief",
                            description: "Can't pay your taxes? We'll help you find a solution for your tax debt problem."
                        },
                        {
                            icon: <FiDollarSign className="w-6 h-6" />,
                            title: "Tax Audit",
                            description: "Think of us as your personal liaison between you and the IRS."
                        },
                        {
                            icon: <FiBriefcase className="w-6 h-6" />,
                            title: "Tax Help",
                            description: "Our tax professionals are experts at navigating complicated tax audits."
                        },
                        {
                            icon: <FiShoppingBag className="w-6 h-6" />,
                            title: "Small Business Help",
                            description: "We know small business inside and out, and we can help you too!"
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                            <p className="text-text font-normal">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
