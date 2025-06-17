'use client';

import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

interface PageHeaderProps {
    title: string;
    breadcrumb: {
        label: string;
        href?: string;
    }[];
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-r from-[#b1e5d4] via-[#e7f1ee] to-[#b1e0d4] text-center">
            {/* Page title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mt-4 text-gray-700 text-sm">
                <FaHome className="text-sm" />
                {breadcrumb.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {item.href ? (
                            <Link href={item.href} className="hover:underline">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="font-medium">{item.label}</span>
                        )}
                        {index < breadcrumb.length - 1 && <span>{'>'}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}
