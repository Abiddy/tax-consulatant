import { FiBarChart2, FiBriefcase, FiDollarSign, FiFileText, FiHome, FiShield, FiUserCheck } from "react-icons/fi";
import { IoBusiness, IoDocumentText } from "react-icons/io5";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Professional Tax Services",
        description: "Professional and timely financial reporting for Compilation, Review and Audit engagements for all types of businesses",
        bullets: [
            {
                title: "Tax Resolution Services",
                description: "Stop wage garnishment, bank levy, and get relief from spouse's tax debt",
                icon: <FiShield size={26} />
            },
            {
                title: "Tax Audit Support",
                description: "Get representation for tax audit and file back tax returns for multiple years",
                icon: <FiFileText size={26} />
            },
            {
                title: "Payment Solutions",
                description: "Settle or contest existing tax liability and re-negotiate monthly payment plans",
                icon: <FiDollarSign size={26} />
            }
        ],
        imageSrc: "/images/tax-services.webp"
    },
    {
        title: "IRS & Audit Representation",
        description: "Comprehensive IRS representation and audit mediation services to protect your interests",
        bullets: [
            {
                title: "Full IRS Representation",
                description: "Enrolled Agent Representation with the IRS and Payroll Audit Representation Nationally",
                icon: <FiUserCheck size={26} />
            },
            {
                title: "Tax Lien Resolution",
                description: "Release or withdraw tax liens and minimize liability from unpaid payroll tax",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Tax Planning & Preparation",
                description: "Professional tax preparation services and strategic tax planning for optimal outcomes",
                icon: <IoDocumentText size={26} />
            }
        ],
        imageSrc: "/images/irs-representation.webp"
    },
    {
        title: "Specialized Tax Services",
        description: "Comprehensive tax services for businesses and individuals, including specialized tax preparations",
        bullets: [
            {
                title: "Business Tax Services",
                description: "Corporate & Business Taxes Guidance, Gross Receipts Tax, and Franchise Tax support",
                icon: <IoBusiness size={26} />
            },
            {
                title: "Income Tax Management",
                description: "Estimated Income Tax planning and electronic filing of Income Tax Returns",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Tax Compliance",
                description: "State and Federal representation for Tax Delinquencies and Deficiencies",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/specialized-tax.webp"
    },
    {
        title: "Real Estate Tax Planning",
        description: "Purchase, sale and financing of all business as well as commercial and residential Real Estate",
        bullets: [
            {
                title: "Property Transactions",
                description: "Facilitating 1031 like-kind exchanges and structuring sales to reduce tax exposure",
                icon: <FiHome size={26} />
            },
            {
                title: "Entity Structure Planning",
                description: "Choice of entity for ownership and operation of real estate, including tax allocation strategies",
                icon: <IoBusiness size={26} />
            },
            {
                title: "Tax Credit Planning",
                description: "Cost Segregation Studies and Federal/State incentive tax credit planning",
                icon: <FiDollarSign size={26} />
            }
        ],
        imageSrc: "/images/real-estate-tax.webp"
    }
];