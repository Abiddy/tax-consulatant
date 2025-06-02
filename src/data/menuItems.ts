import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: 'Our Services',
        url: '/#our-services',
        onClick: () => {
            document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' });
        }
    },
    {
        text: 'About Us',
        url: '/about'
    },
    {
        text: 'Testimonials',
        url: '/#testimonials'
    }
];