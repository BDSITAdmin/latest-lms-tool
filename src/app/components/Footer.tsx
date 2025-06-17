'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube,
    FaChevronDown, FaChevronUp, FaLanguage, FaQuestionCircle
} from 'react-icons/fa';
import logo from "@/assate/logo.png"; // Adjust the path as necessary

export default function Footer() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const languages = ['English', 'Spanish', 'French', 'German', 'Hindi'];

    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
                    {/* Column 1 - Brand Info */}
                    <div className="col-span-2">
                        <div className="flex items-center mb-4">
                            <Image
                                src={logo}
                                alt="LMS Logo"
                                width={150}
                                height={80}

                            />
                        </div>
                        <p className="text-sm mb-6 w-2/3">
                            Learn the latest skills with our comprehensive online courses.
                            Advance your career with industry-recognized certifications.
                        </p>
                        <div className="flex space-x-4 mb-6">
                            {[
                                {
                                    icon: <FaFacebook className="h-5 w-5" />,
                                    name: 'Facebook',
                                    color: 'hover:bg-blue-600',
                                },
                                {
                                    icon: <FaTwitter className="h-5 w-5" />,
                                    name: 'Twitter',
                                    color: 'hover:bg-sky-500',
                                },
                                {
                                    icon: <FaInstagram className="h-5 w-5" />,
                                    name: 'Instagram',
                                    color: 'hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
                                },
                                {
                                    icon: <FaLinkedin className="h-5 w-5" />,
                                    name: 'LinkedIn',
                                    color: 'hover:bg-blue-700',
                                },
                                {
                                    icon: <FaYoutube className="h-5 w-5" />,
                                    name: 'YouTube',
                                    color: 'hover:bg-red-600',
                                },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    aria-label={social.name}
                                    className={`text-white rounded-full p-3 bg-gray-700 transition duration-300 transform hover:scale-110 shadow-md ${social.color}`}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>


                        {/* Language Selector */}

                    </div>

                    {/* Mobile Accordion Sections */}
                    <div className="md:hidden space-y-4">
                        {[
                            { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Press', 'Contact Us'] },
                            { title: 'Categories', links: ['Development', 'Business', 'Design', 'Marketing', 'IT & Software'] },
                            { title: 'Support', links: ['Help Center', 'Terms of Service', 'Privacy Policy', 'Refund Policy', 'Sitemap'] }
                        ].map((section) => (
                            <div key={section.title} className="border-b border-gray-800 pb-2">
                                <button
                                    onClick={() => toggleSection(section.title)}
                                    className="flex justify-between items-center w-full text-white font-semibold text-lg py-2"
                                >
                                    {section.title}
                                    {expandedSection === section.title ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {expandedSection === section.title && (
                                    <ul className="space-y-2 pl-2 mt-2">
                                        {section.links.map((link) => (
                                            <li key={link}>
                                                <Link
                                                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                                                    className="block text-sm py-1.5 hover:text-white transition-colors"
                                                >
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Columns (hidden on mobile) */}
                    <>
                        <div className="hidden md:block">
                            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                            <ul className="space-y-2">
                                {['About Us', 'Careers', 'Blog', 'Press', 'Contact Us'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-sm hover:text-white transition-colors duration-300 hover:pl-1 block py-1.5"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden md:block">
                            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {['Development', 'Business', 'Design', 'Marketing', 'IT & Software'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-sm hover:text-white transition-colors duration-300 hover:pl-1 block py-1.5"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden md:block">
                            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                            <ul className="space-y-2">
                                {['Help Center', 'Terms of Service', 'Privacy Policy', 'Refund Policy', 'Sitemap'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-sm hover:text-white transition-colors duration-300 hover:pl-1 block py-1.5"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 flex items-center gap-4">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} LMS Platform, Inc. All rights reserved.
                        </p>
                        <Link
                            href="/help"
                            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                        >
                            <FaQuestionCircle size={14} />
                            Help
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {['Terms', 'Privacy', 'Cookie Policy', 'Sitemap'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-xs text-gray-500 hover:text-white transition-colors hover:underline"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}