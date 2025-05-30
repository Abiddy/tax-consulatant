'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
            {/* Background */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]">
                </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-sm h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.6)] to-[rgba(202,208,230,0.6)]">
            </div>

            <div className="relative w-full max-w-7xl mx-auto py-20 sm:py-24 lg:py-32">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground max-w-4xl mx-auto leading-tight sm:leading-tight md:leading-tight">
                        Need to get your{' '}
                        <motion.span 
                            className="relative inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="relative bg-yellow-200 z-10 px-1">taxes</span>
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1"></span>
                        </motion.span>
                        {', '}
                        <motion.span 
                            className="relative inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="relative bg-yellow-200 z-10 px-1">savings</span>
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1"></span>
                        </motion.span>
                        {' '}and{' '}
                        <motion.span 
                            className="relative inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="relative bg-yellow-200 z-10 px-1">investments</span>
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-green-400/30 -rotate-1"></span>
                        </motion.span>
                        {' '}in order?
                    </h1>
                    <motion.p 
                        className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We are here to help you with all your financial planning needs
                    </motion.p>
                    <motion.div 
                        className="mt-8 sm:mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center text-black bg-primary hover:bg-primary-accent px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 hover:shadow-lg"
                        >
                            Get Started Today
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
