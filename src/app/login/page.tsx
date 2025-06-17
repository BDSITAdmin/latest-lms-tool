'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from '../components/Header';
import LoginImage from '@/assate/image12(1).png';
import type { GoogleSignInButtonProps } from '@/app/components/GoogleSignInButton';
import Footer from '../components/Footer';
import BanerHeader from '@/assate/Baner-02.png';

const LoginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const GoogleSignInButton = dynamic<GoogleSignInButtonProps>(
    () => import('../components/GoogleSignInButton'),
    { ssr: false }
);

type LoginFormData = z.infer<typeof LoginSchema>;

const LoginPage = () => {
    const router = useRouter();
    const [authStatus, setAuthStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        const hardcodedEmail = 'test@example.com';
        const hardcodedPassword = 'password123';

        if (data.email === hardcodedEmail && data.password === hardcodedPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem(
                'userProfile',
                JSON.stringify({ name: 'John Doe', email: data.email, role: 'Member' })
            );
            setAuthStatus('success');
            router.push('/');
        } else {
            setAuthStatus('error');
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 ">
                <Navbar />
                <div className="h-20"></div>
                {/* <div className="relative w-full h-96 overflow-hidden">
                    <Image
                        src={BanerHeader}
                        alt="Login Illustration"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div> */}
                <section className="flex justify-center items-center py-16 md:py-10 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Left Panel - Illustration */}
                            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
                                    <p className="text-blue-100 max-w-md">
                                        Sign in to access your personalized dashboard and manage your account.
                                    </p>
                                </div>
                                <div className="w-full max-w-xs">
                                    <Image
                                        src={LoginImage}
                                        alt="Login Illustration"
                                        className="w-full h-auto"
                                        width={500}
                                        height={400}
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Right Panel - Form */}
                            <div className="lg:w-1/2 p-8 md:p-12">
                                <div className="max-w-md mx-auto">
                                    <div className="text-center mb-8">
                                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h1>
                                        <p className="text-gray-600">Enter your credentials to continue</p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                placeholder="your@email.com"
                                                autoComplete="email"
                                                type="email"
                                                {...register('email')}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                    Password
                                                </label>
                                                <a
                                                    href="/forgot-password"
                                                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    placeholder="••••••••"
                                                    type={showPassword ? "text" : "password"}
                                                    {...register('password')}
                                                    className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                >
                                                    {showPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {errors.password && (
                                                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Signing in...
                                                </span>
                                            ) : (
                                                'Sign In'
                                            )}
                                        </button>

                                        {authStatus === 'error' && (
                                            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                                Invalid credentials. Please try again.
                                            </div>
                                        )}

                                        <div className="relative my-6">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                            </div>
                                        </div>

                                        <GoogleSignInButton
                                            onSuccess={(email) => setValue('email', email)}

                                        />

                                        <div className="text-center text-sm text-gray-600">
                                            <p>
                                                Don't have an account?{' '}
                                                <a href="/signup" className="font-medium text-blue-600 hover:text-blue-800 hover:underline">
                                                    Sign up
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;