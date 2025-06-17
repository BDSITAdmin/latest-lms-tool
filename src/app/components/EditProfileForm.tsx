'use client';

import React from 'react';
import { FiX } from 'react-icons/fi';

interface FormData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    occupation: string;
    bio: string;
}

interface Props {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileForm: React.FC<Props> = ({ formData, setFormData, setIsEditing }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
        // Optionally send to backend here
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Edit Profile</h3>
                <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-700">
                    <FiX size={24} />
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Occupation</label>
                        <input
                            type="text"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Biography</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;
