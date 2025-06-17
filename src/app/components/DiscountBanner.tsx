'use client';

import Image from 'next/image';
import StudentImage from '@/assate/discount image.jpg'; // Replace with your actual image path
import { motion } from 'framer-motion';

const DiscountBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
            {/* Content container */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Text content with button */}
                    <div className="text-center lg:text-left lg:w-1/2 space-y-4">
                        <motion.h2
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold leading-tight"
                        >
                            Smart learning,
                        </motion.h2>
                        <motion.h2
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-200 mb-2"
                        >
                            smarter savings
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl mb-6 opacity-90 font-medium"
                        >
                            Upgrade your skills while saving with our exclusive offers
                        </motion.p>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(255,255,255,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-white text-indigo-600 rounded-xl font-extrabold hover:bg-gray-50 transition-all duration-300 shadow-lg text-lg"
                        >
                            Explore more →
                        </motion.button>
                    </div>

                    {/* Right side with image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative w-full lg:w-1/2 h-96 lg:h-[400px]"
                    >
                        <Image
                            src={StudentImage}
                            alt="Happy student"
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-500"
                            quality={100}
                            priority
                        />
                        {/* Floating discount badge */}
                        {/* <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute -bottom-4 -right-4 flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm rounded-full w-28 h-28 border-4 border-white/30 shadow-xl"
                        >
                            <span className="text-4xl font-black">30%</span>
                            <span className="text-sm font-bold mt-1">OFF</span>
                        </motion.div> */}
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </motion.div>
    );
};

export default DiscountBanner;