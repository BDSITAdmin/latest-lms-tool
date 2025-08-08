
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';


const Contact = () => {
    return (
    <>
            <Header />
            <div className="bg-gray-50 min-h-screen">
                {/* Header */}
                <PageHeader
                    title="Contact Us"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Contact Us', href: '/contact' },
                        
                    ]}
                />



                <div className="min-h-screen bg-[#e272b9] flex items-center justify-center px-4 py-10">
                    <div className="w-full max-w-6xl bg-white rounded-[30px] shadow-xl p-10 grid md:grid-cols-2 gap-8">
                        {/* Left side - Contact Info */}
                        <div className="flex flex-col justify-between relative">
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-900 mb-2">Let’s Work together!</h2>
                                <div className="mt-6 space-y-4 text-sm text-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <FaMapMarkerAlt className="text-pink-600" />
                                        <span>1140 3rd Street NE, Banglore, 560076</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaEnvelope className="text-pink-600" />
                                        <span>info@bigdoorsolutions.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-0 ">
                                <img
                                    src= "girlbg.png" // 👈 Use your actual image path
                                    alt="Girl reading"
                                    className="w-78 object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div>
                            <div className="text-center mb-6">
                                <h1 className="text-4xl font-bold text-white">Get In Touch</h1>
                                <p className="text-white text-sm mt-1">
                                    Fill up the form and our Team will get back to you within 24 hours.
                                </p>
                            </div>
                            <form className="space-y-4">
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-full px-4 py-2 h-28 rounded-xl bg-white border border-gray-300 focus:outline-none resize-none"
                                />
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="px-10 py-2 bg-[#e272b9] hover:bg-[#d15ca9] text-white rounded-full font-medium transition duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </>
            );
};

            export default Contact;
