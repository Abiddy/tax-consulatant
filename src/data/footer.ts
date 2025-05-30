import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Professional tax and real estate services to help you achieve your financial goals.",
    quickLinks: [
        {
            text: "Tax Services",
            url: "/tax-services"
        },
        {
            text: "Real Estate Planning",
            url: "/real-estate-planning"
        },
        {
            text: "About Us",
            url: "/about"
        },
        {
            text: "Contact",
            url: "/contact"
        }
    ],
    email: 'info@guardiantaxrealty.com',
    telephone: '1-888-547-1110',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}