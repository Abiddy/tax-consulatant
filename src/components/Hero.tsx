'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiFileText, FiDollarSign, FiBriefcase, FiShoppingBag } from 'react-icons/fi';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        >
            {/* Background */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]">
                </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-sm h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.6)] to-[rgba(202,208,230,0.6)]">
            </div>

            <div className="relative w-full max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight sm:leading-tight md:leading-tight mb-8">
                        Expert Tax Solutions
                        <br /> 
                        for Your  
                        <br />
                        <motion.span 
                            className="relative inline-block ml-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="relative bg-yellow-200 z-10 px-1">Financial Success</span>
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-green-400/30 -rotate-1"></span>
                        </motion.span>
                    </h1>

                    {/* Service Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <FiFileText className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Tax Relief</h3>
                            <p className="text-gray-600 text-sm">Can not pay your taxes? We will help you find a solution for your tax debt problem.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <FiDollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Tax Audit</h3>
                            <p className="text-gray-600 text-sm">Think of us as your personal liaison between you and the IRS.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <FiBriefcase className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Tax Help</h3>
                            <p className="text-gray-600 text-sm">Our tax professionals are experts at navigating complicated tax audits.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <FiShoppingBag className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Small Business Help</h3>
                            <p className="text-gray-600 text-sm">We know small business inside and out, and we can help you too!</p>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link 
                            href="#contact" 
                            className="inline-flex items-center justify-center text-black bg-primary hover:bg-primary-accent px-6 py-3 rounded-full transition-all duration-300 font-medium text-base hover:scale-105 hover:shadow-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Reach Out to Us!
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
