'use client';

import React from 'react';
import { FiUser, FiFileText, FiBriefcase, FiGlobe } from 'react-icons/fi';

const AboutPage = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Comprehensive Tax & Financial Solutions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our platform offers a wide range of tax services and solutions that will help you manage your financial responsibilities effectively. From personal tax to business planning.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Personal Tax Services */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <FiUser className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Tax Services</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>Personal Tax Returns</li>
                            <li>Unfiled Returns Resolution</li>
                            <li>Real Estate Tax Planning</li>
                            <li>Trust and Estate Planning</li>
                        </ul>
                    </div>

                    {/* Tax Audit & Resolution */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <FiFileText className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Audit & Resolution</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>IRS EDD Sales Tax</li>
                            <li>Tax Resolution Services</li>
                            <li>Tax Payment Plans</li>
                            <li>Liens Resolution</li>
                            <li>IRS Audit & Appeals</li>
                        </ul>
                    </div>

                    {/* Business Tax Services */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <FiBriefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Tax Services</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>Business Tax Planning</li>
                            <li>Payroll Tax Management</li>
                            <li>Corporate Tax Planning</li>
                            <li>Partnership Taxation</li>
                            <li>LLC Tax Services</li>
                        </ul>
                    </div>

                    {/* Additional Services */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <FiGlobe className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">International Services</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>International Tax Planning</li>
                            <li>Cross-border Taxation</li>
                            <li>Foreign Income Reporting</li>
                            <li>FBAR Compliance</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('contact');
                            if (element) {
                                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                window.scrollTo({
                                    top: elementPosition,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        Reach Out to Us!
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage; 