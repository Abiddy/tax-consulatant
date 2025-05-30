'use client';
import React from 'react';
import BenefitSection from "./BenefitSection"
import { motion } from 'framer-motion';
import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <section className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16 sm:mb-24">
                        Our Professional Services
                    </h2>
                </motion.div>

                <div className="space-y-24 sm:space-y-32">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <BenefitSection benefit={item} imageAtRight={index % 2 !== 0} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;