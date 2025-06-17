'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const tabData = [
  {
    mainHref: '/account',
    label: 'Executive Education',
    subTabs: [
      { href: '/account/popular', label: 'Popular' },
      { href: '/account/ai', label: 'AI & Digital Transformation' },
      { href: '/account/sustainability', label: 'Sustainability' },
      { href: '/account/leadership', label: 'Leadership & Interpersonal Skills' },
      { href: '/account/strategy', label: 'Business Management & Strategy' },
    ],
  },
  {
    mainHref: '/company',
    label: 'Certificate Courses',
    subTabs: [
      { href: '/company/college-credit', label: 'College Credit' },
      { href: '/company/ai', label: 'Artificial Intelligence (AI)' },
      { href: '/company/digital-marketing', label: 'Digital Marketing' },
      { href: '/company/project-management', label: 'Project Management' },
      { href: '/company/it', label: 'IT' },
      { href: '/company/python', label: 'Python' },
      { href: '/company/business', label: 'Business' },
      { href: '/company/machine-learning', label: 'Machine Learning' },
    ],
  },
  {
    mainHref: '/team-members',
    label: 'Master Degree Courses',
    subTabs: [
      { href: '/team-members/mba', label: 'MBA' },
      { href: '/team-members/mscs', label: 'MS in CS' },
    ],
  },
  {
    mainHref: '/billing',
    label: 'Bachelor Degree',
    subTabs: [
      { href: '/billing/bca', label: 'BCA' },
      { href: '/billing/bba', label: 'BBA' },
    ],
  },
];

const CenteredTabs: React.FC = () => {
  const pathname = usePathname();

  // Find which tab group is active
  const activeTabGroup = tabData.find(tab =>
    pathname === tab.mainHref ||
    tab.subTabs.some(subTab => pathname === subTab.href)
  ) || tabData[0]; // Default to first tab (Executive Education)

  // Check if we should redirect to first sub-tab
  const shouldRedirectToSubTab = tabData.some(tab =>
    pathname === tab.mainHref && tab.subTabs.length > 0
  );

  // If on a main tab with sub-tabs, redirect to first sub-tab
  if (shouldRedirectToSubTab && typeof window !== 'undefined') {
    const tab = tabData.find(tab => pathname === tab.mainHref);
    if (tab) {
      window.location.href = tab.subTabs[0].href;
    }
    return null; // Return null while redirecting
  }

  return (
    <div key={pathname}>
      {/* Header and Main Tabs */}
      <div className="border-b border-gray-200 py-4">
        <h2 className="text-center text-xl font-bold text-gray-800 mb-4">Explore Our Programs</h2>

        <nav className="flex justify-center">
          <div className="inline-flex flex-wrap gap-2 bg-white rounded-lg shadow-md px-2 py-1">
            {tabData.map((tab) => (
              <Link
                key={tab.mainHref}
                href={tab.mainHref}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTabGroup.mainHref === tab.mainHref
                  ? 'bg-blue-500 text-white shadow-inner'
                  : 'text-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-lg'
                  }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Sub-tabs - Show for active tab group */}
      {activeTabGroup.subTabs.length > 0 && (
        <div className=" border-b border-gray-200 py-3">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap gap-2">
              {activeTabGroup.subTabs.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-md border-2 border-blue-200 text-sm font-medium transition-all duration-200 ${pathname === href
                    ? 'bg-blue-500 text-white border-blue-500 shadow-inner'
                    : 'text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg '
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CenteredTabs;