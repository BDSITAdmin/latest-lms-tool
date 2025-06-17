"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
    const [email, setEmail] = useState('mohit8944@gmail.com');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your password recovery logic here
        console.log('Recovery attempt with:', { email, password });
        router.push('/reset-password'); // Redirect to reset page
    };

    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-2xl font-medium text-gray-800 mb-6">Account recovery</h1>

                <div className="mb-6">
                    <p className="text-sm text-gray-600">{email}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-2">
                            Enter the last password you remember using with this account
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter last password"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="showPassword" className="ml-2 block text-sm text-gray-700">
                            Show password
                        </label>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={() => router.push('/alternative-recovery')}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Try another way
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}