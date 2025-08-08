'use client';

import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import { FaCheckCircle, FaUsers, FaBook, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import Header from '../components/Header';
import Profile from '@/assate/Profile-image.webp';
import UserProfile from '../components/UserProfile';
import Assignments from '../components/Assignments';
import QuizAttempts from '../components/QuizAttempts';
import Certificates from '../components/Certificates';

const TABS = [
    'Dashboard',
    'My Profile',
    'Enrolled Courses',
    'Wishlist',
    'My Quiz Attempts',
    'Assignments',
    'Certificates',
];

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Dashboard');

    return (
        <>
            {/* <Header /> */}

            <div className="min-h-screen bg-gray-50 pt-20">

                {/* Profile Banner */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-20 rounded-b-xl relative shadow-md">
                    <div className="container mx-auto flex items-center space-x-4">
                        <div className="relative group">
                            <Image
                                src={Profile}
                                alt="Michael Smith"
                                width={80}
                                height={80}
                                className="rounded-full border-4 border-white transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-800 transition-all duration-300"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Mahadeo</h2>
                            <p className="text-white">Web App Development</p>
                            <p className="text-sm mt-1 text-white">5 Courses Enrolled • 2 Courses Complete</p>
                        </div>
                    </div>
                </div>

                {/* Main Dashboard */}
                <div className="container mx-auto flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 p-6 bg-white shadow-sm mt-4 rounded-lg sticky top-20">
                        <p className="text-gray-700 font-semibold mb-4">Welcome, Smith</p>
                        <ul className="space-y-2">
                            {TABS.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => setActiveTab(item)}
                                    className={`text-sm cursor-pointer px-3 py-2 rounded-md transition-all duration-200 bg-gray-100  hover:bg-blue-50 hover:text-blue-600 hover:pl-4 ${activeTab === item
                                        ? 'text-gray-800 font-bold bg-blue-100 border-l-4 border-blue-600'
                                        : 'text-gray-700'
                                        }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dynamic Content */}
                    <div className="flex-1 p-6 mt-4">
                        {activeTab === 'Dashboard' && (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">My Status</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <StatusCard
                                        icon={<FaBook className="text-green-600" />}
                                        title="Total Courses Taken"
                                        value="15"
                                    />
                                    <StatusCard
                                        icon={<FaClipboardList className="text-blue-600" />}
                                        title="Courses Enrolled"
                                        value="11"
                                    />
                                    <StatusCard
                                        icon={<FaBook className="text-purple-600" />}
                                        title="Active Courses"
                                        value="9"
                                    />
                                    <StatusCard
                                        icon={<FaCheckCircle className="text-yellow-600" />}
                                        title="Courses Completed"
                                        value="95+"
                                    />
                                    <StatusCard
                                        icon={<FaUsers className="text-red-600" />}
                                        title="Total Students in Courses"
                                        value="595+"
                                    />
                                    <StatusCard
                                        icon={<FaDollarSign className="text-green-600" />}
                                        title="Total Fees Paid"
                                        value="95$"
                                    />
                                </div>
                            </>
                        )}

                        {/* Other tabs content - Removed the duplicate heading */}
                        {activeTab !== 'Dashboard' && (
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                {activeTab === 'My Profile' ? (
                                    <UserProfile />
                                ) :
                                    activeTab === 'Assignments' ? (
                                        <Assignments />
                                    ) :
                                        activeTab === 'My Quiz Attempts' ? (
                                            <QuizAttempts />
                                        ) :
                                            activeTab === 'Certificates' ? (
                                                <Certificates />
                                            ) :

                                                (
                                                    <>
                                                        <h3 className="text-2xl font-bold mb-6 text-gray-800">{activeTab}</h3>
                                                        <p className="text-gray-600">
                                                            {activeTab === 'Analytics' && "Analytics data will be shown here."}
                                                            {activeTab === 'Enrolled Courses' && "List of enrolled courses."}
                                                            {activeTab === 'My Books' && "Book library or list will be shown here."}
                                                            {activeTab === 'Wishlist' && "Your saved wishlist will appear here."}
                                                            {activeTab === 'My Quiz Attempts' && "All your quiz attempts and scores."}
                                                            {activeTab === 'Certificates' && "All your past transactions."}
                                                        </p>
                                                    </>
                                                )}

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

interface StatusCardProps {
    icon: ReactNode;
    title: string;
    value: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ icon, title, value }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-blue-300 group">
        <div className="flex items-center space-x-4">
            <div className="bg-green-50 p-3 rounded-full text-2xl group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div>
                <p className="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">{value}</p>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{title}</p>
            </div>
        </div>
    </div>
);

export default Dashboard;