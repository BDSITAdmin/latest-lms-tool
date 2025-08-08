'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import LoginImage from '@/assate/image12(1).png';
import axios from 'axios';
import type { GoogleSignInButtonProps } from '@/app/components/GoogleSignInButton';
import { useAuth } from '@/context/AuthContext';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const GoogleSignInButton = dynamic<GoogleSignInButtonProps>(
    () => import('../components/GoogleSignInButton'),
    { ssr: false }
);

const LoginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginFormData = z.infer<typeof LoginSchema>;

const LoginPage = () => {
    const router = useRouter();
    const [authStatus, setAuthStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const { executeRecaptcha } = useGoogleReCaptcha();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setAuthStatus('idle');
        setErrorMessage('');

        

        if (!executeRecaptcha) {
            console.error("Recaptcha not yet available");
            return;
        }

        try {
            // ✅ Get real captcha token from Google
            const captchaToken = await executeRecaptcha('login_form');

            const payload = {
                email: data.email,
                password: data.password,
                captchaToken, // 👈 Now real token
            };

            const response = await axios.post('http://localhost:5000/api/auth/login', payload);

            if (response.data.success) {
                const userId = response.data.data.user?.id;
                const token = response.data.data?.accessToken;
                if (userId) {
                    await login(userId, token);
                    setAuthStatus('success');
                    reset();
                    router.push('/');
                } else {
                    throw new Error('User ID not returned in response.');
                }
            } else {
                setErrorMessage(response.data.message || 'Login failed');
                setAuthStatus('error');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred during login');
            setAuthStatus('error');
        }
    };

    return (
        <>
            {/* 🔹 your existing UI remains unchanged */}
            {/* Just your form now calls onSubmit which uses captchaToken */}
            <div className="min-h-screen bg-gray-50">
                {/* <Navbar /> */}
               <Navbar />
                <div className="h-20"></div>

                <section className="flex justify-center items-center py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Left Panel */}
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

                            {/* Right Panel */}
                            <div className="lg:w-1/2 p-8 md:p-12">
                                <div className="max-w-md mx-auto">
                                    <div className="text-center mb-8">
                                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h1>
                                        <p className="text-gray-600">Enter your credentials to continue</p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        {/* Email Field */}
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
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                        </div>

                                        {/* Password Field */}
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
                                                    type={showPassword ? 'text' : 'password'}
                                                    {...register('password')}
                                                    className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                                        } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                >
                                                    {showPassword ? 'Hide' : 'Show'}
                                                </button>
                                            </div>
                                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                                }`}
                                        >
                                            {isSubmitting ? 'Signing in...' : 'Sign In'}
                                        </button>

                                        {authStatus === 'error' && (
                                            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{errorMessage}</div>
                                        )}
                                        {authStatus === 'success' && (
                                            <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">Login successful!</div>
                                        )}

                                        <div className="relative my-6">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                            </div>
                                        </div>

                                        <GoogleSignInButton onSuccess={(email) => setValue('email', email)} />

                                        <div className="text-center text-sm text-gray-600">
                                            <p>
                                                Don’t have an account?{' '}
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
