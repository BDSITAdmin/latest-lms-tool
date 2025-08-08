"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignupSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().optional(),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirm_password: z.string().min(6, { message: "Please confirm your password" }),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

type SignupFormData = z.infer<typeof SignupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      // ✅ Ensure recaptcha is ready
      if (!executeRecaptcha) {
        console.error("Recaptcha not yet available");
        return;
      }

      // ✅ Get captcha token
      const captchaToken = await executeRecaptcha("signup_form");

      const payload = {
        first_name: data.first_name,
        last_name: data.last_name || "",
        email: data.email,
        password: data.password,
        provider: "email",
        providerId: "",
        captchaToken, // send actual token
      };

      const response = await axios.post(
        `http://localhost:5000/api/auth/register`,
        payload
      );

      if (response.status === 201) {
        alert("Account created successfully!");
        reset();
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.data.errors) {
          const errors = error.response.data.errors;
          Object.keys(errors).forEach((key) => {
            setError(key as keyof SignupFormData, {
              type: "server",
              message: errors[key][0],
            });
          });
        } else {
          alert(error.response.data.message || "Registration failed");
        }
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  const onCancel = () => {
    reset();
    console.log("Form reset/canceled");
  };

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Header with z-index to stay above everything */}
                <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                    <Header />
                </header>
                <div className="h-20"></div>
                {/* Registration Form Section */}
                <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                        <div className="w-8 h-1 bg-blue-400 mb-4"></div>

                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
                            Registration
                        </h2>

                        <div className="mt-6">
                            <h3 className="text-xl font-medium text-gray-700 mb-6">
                                Student Details:
                            </h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Right Column - Email/Password Form */}
                                <div className="space-y-6 border-r border-gray-200 pr-6">
                                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* First Name */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                First Name <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("first_name")}
                                                className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.first_name ? "border-red-600" : "border-sky-500"
                                                    }`}
                                            />
                                            {errors.first_name && (
                                                <p className="text-red-600 text-sm mt-1">{errors.first_name.message}</p>
                                            )}
                                        </div>

                                        {/* Last Name */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                {...register("last_name")}
                                                className="w-full border border-sky-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            {...register("email")}
                                            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                                           ${errors.email ? 'border-red-600' : 'border-sky-500'}`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Password <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            {...register("password")}
                                            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${errors.password ? 'border-red-600' : 'border-sky-500'}`}
                                        />
                                        {errors.password && (
                                            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Confirm Password <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            {...register("confirm_password")}
                                            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${errors.confirm_password ? 'border-red-600' : 'border-sky-500'}`}
                                        />
                                        {errors.confirm_password && (
                                            <p className="text-red-600 text-sm mt-1">{errors.confirm_password.message}</p>
                                        )}
                                    </div>

                                    {/* Form Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`flex-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-500 ease-in-out transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Processing...' : 'Submit'}
                                        </button>

                                        <button
                                            type="button"
                                            className="flex-1 bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:bg-gray-400"
                                            onClick={onCancel}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                                {/* Left Column - Google Sign Up */}

                                <div>
                                    <h4 className="text-lg font-medium text-gray-700 mb-4">Sign up with Google</h4>
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        Continue with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}