import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                       <Logo width={20} height={20} />
                        <h3 className="manrope text-base text-white font-semibold cursor-pointer pl-2">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-gray-300">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-base text-white font-semibold mb-4">Contact Us</h4>

                    <div className="flex items-start gap-2 text-gray-300 hover:text-white mb-2">
                        <FaMapMarkerAlt className="mt-1" />
                        <p>13778 Hawthorne Blvd, Hawthorne, CA 90250</p>
                    </div>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-gray-300 hover:text-white mb-2">Email: {footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-gray-300 hover:text-white">Phone: {footerDetails.telephone}</a>}

                    {/* {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )} */}
                </div>
            </div>
            <div className="mt-8 md:text-center text-gray-400 px-6">
                <p className="text-sm">Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-sm mt-2 text-gray-500">Made with ❤️ in Gardena</p>
            </div>
        </footer>
    );
};

export default Footer;
