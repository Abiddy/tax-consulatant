'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FiPhone } from 'react-icons/fi';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent flex justify-between items-center py-2 px-4 md:px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 min-w-0">
                        <img 
                            src="/images/logo2.png" 
                            alt={`${siteDetails.siteName} Logo`}
                            width={100}
                            height={100}
                            className="w-auto h-6 md:h-12 pr-2 md:pr-5" // Smaller height on mobile, larger on desktop
                        />
                        <span className="manrope text-lg md:text-xl font-semibold text-foreground cursor-pointer truncate">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-foreground hover:text-foreground-accent transition-colors text-base font-medium"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a 
                                href="tel:1-888-547-1110" 
                                className="flex items-center text-foreground hover:text-foreground-accent transition-colors text-base font-medium whitespace-nowrap"
                            >
                                <FiPhone className="mr-2" />
                                1-888-547-1110
                            </a>
                        </li>
                        <li>
                            <Link 
                                href="/contact" 
                                className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors font-medium whitespace-nowrap"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
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
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white w-full">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-4">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-foreground hover:text-primary block py-2 text-base font-medium" 
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a 
                                href="tel:1-888-547-1110" 
                                className="flex items-center text-foreground hover:text-primary py-2 text-base font-medium"
                                onClick={toggleMenu}
                            >
                                <FiPhone className="mr-2" />
                                1-888-547-1110
                            </a>
                        </li>
                        <li>
                            <Link 
                                href="/#contact" 
                                className="text-black bg-primary hover:bg-primary-accent px-6 py-3 rounded-full inline-block font-medium" 
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
