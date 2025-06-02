'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3, HiChevronDown } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-100">
            <Container className="!px-0">
                <nav className="flex justify-between items-center py-4 px-4 md:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 min-w-0">
                        <img 
                            src="/images/logo2.png" 
                            alt={`${siteDetails.siteName} Logo`}
                            width={100}
                            height={100}
                            className="w-auto h-8 md:h-10" 
                        />
                        <span className=" text-xl md:text-xs font-bold text-gray-900">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {menuItems.map(item => (
                                <div key={item.text} className="relative group">
                                    <Link 
                                        href={item.url} 
                                        className="flex items-center gap-1 py-2 text-gray-600 hover:text-gray-900 transition-colors text-base font-medium"
                                    >
                                        {item.text}
                                        <HiChevronDown className="w-4 h-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                      
                        
                        <div className="flex items-center gap-4">
                            <Link 
                                href="/#contact" 
                                className="text-white bg-black hover:bg-gray-800 px-6 py-2 rounded-full transition-colors font-medium text-sm"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                <div className="lg:hidden bg-white border-t border-gray-100">
                    <div className="px-4 py-6 space-y-6">
                        {menuItems.map(item => (
                            <div key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="flex items-center justify-between py-2 text-base font-medium text-gray-600 hover:text-gray-900" 
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                    <HiChevronDown className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                        <div className="pt-4 space-y-4">
                            <Link 
                                href="/#contact" 
                                className="block w-full text-center py-3 px-4 text-white bg-black hover:bg-gray-800 rounded-full font-medium text-sm"
                                onClick={toggleMenu}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
