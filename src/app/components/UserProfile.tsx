'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiEdit2, FiUser, FiMail, FiPhone, FiBriefcase, FiCalendar } from 'react-icons/fi';
import ProfileImage from '@/assate/Profile-image.webp';
import EditProfileForm from '../components/EditProfileForm';

const UserProfile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Sarah A.',
        lastName: 'Janney',
        username: 'janneysarah',
        email: 'info@gmail.com',
        phone: '+967 019 2425 990',
        occupation: 'Application Developer',
        bio: `Hello! I'm Sarah A. Janney, a 24-year-old web developer and student with a passion for
creating digital experiences. Currently pursuing a degree in web development at
Hatharvard University, I am enthusiastic about all things web development.`,
    });

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">My Profile</h2>
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>

            {isEditing ? (
                <EditProfileForm
                    formData={formData}
                    setFormData={setFormData}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <>
                    {/* Profile Picture and Basic Info */}
                    <div className="p-6 flex items-center gap-6 border-b border-gray-100">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                                <Image
                                    src={ProfileImage}
                                    alt="Sarah Janney"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-300 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <FiEdit2 className="text-blue-600 bg-white/80 p-1 rounded-full" size={20} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{formData.firstName} {formData.lastName}</h1>
                            <p className="text-blue-600 font-medium">{formData.occupation}</p>
                        </div>
                    </div>

                    {/* Table-Based Profile Information */}
                    <div className="p-6">
                        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-xs">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <ProfileTableRow label="Registration Date" value="December 25, 2024 12:30pm" icon={<FiCalendar className="text-blue-500" />} />
                                    <ProfileTableRow label="First Name" value={formData.firstName} icon={<FiUser className="text-blue-500" />} />
                                    <ProfileTableRow label="Last Name" value={formData.lastName} icon={<FiUser className="text-blue-500" />} />
                                    <ProfileTableRow label="Username" value={formData.username} />
                                    <ProfileTableRow label="Email" value={formData.email} icon={<FiMail className="text-blue-500" />} />
                                    <ProfileTableRow label="Phone Number" value={formData.phone} icon={<FiPhone className="text-blue-500" />} />
                                    <ProfileTableRow label="Occupation/Skill" value={formData.occupation} icon={<FiBriefcase className="text-blue-500" />} />
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-500">Biography</td>
                                        <td className="px-6 py-4 text-sm text-gray-800 max-w-prose">
                                            {formData.bio}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const ProfileTableRow: React.FC<{ label: string; value: string; icon?: React.ReactNode }> = ({ label, value, icon }) => (
    <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
                {icon && <div className="flex-shrink-0 mr-2">{icon}</div>}
                <div className="text-sm font-medium text-gray-500">{label}</div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{value}</td>
    </tr>
);

export default UserProfile;
