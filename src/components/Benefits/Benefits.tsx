'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { benefits } from "@/data/benefits";
import { FiFileText, FiUserCheck, FiBriefcase, FiHome } from 'react-icons/fi';

const CARD_COLORS = [
    { bg: '#4169E1', text: 'white' },  // Royal Blue
    { bg: '#E6E6EA', text: '#1F2937' }, // Light Gray
    { bg: '#1F2937', text: 'white' },  // Dark Gray
    { bg: '#2563EB', text: 'white' },  // Blue
];

const ICONS = {
    'tax': <FiFileText className="w-8 h-8" />,
    'audit': <FiUserCheck className="w-8 h-8" />,
    'specialized': <FiBriefcase className="w-8 h-8" />,
    'realestate': <FiHome className="w-8 h-8" />
};

const Benefits: React.FC = () => {
    return (
        <section className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div 
                                className={`h-full rounded-[48px] p-12 transition-all duration-300 hover:scale-[1.02]`}
                                style={{ 
                                    backgroundColor: CARD_COLORS[index % CARD_COLORS.length].bg,
                                    color: CARD_COLORS[index % CARD_COLORS.length].text
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-8">
                                
                                    {/* @ts-expect-error icon is not defined */}
                                    {ICONS[benefit.icon] || <FiFileText className="w-8 h-8" />}
                                </div>

                                {/* Main Service */}
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold mb-4 tracking-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-lg opacity-90 font-normal leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                                
                                {/* Service Points */}
                                <div className="space-y-8">
                                    {benefit.bullets.map((bullet, bulletIndex) => (
                                        <div key={bulletIndex}>
                                            <h4 className="text-xl font-semibold mb-3">{bullet.title}</h4>
                                            <p className="text-base opacity-90 leading-relaxed">
                                                {bullet.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;