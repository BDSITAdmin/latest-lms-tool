"use client"
import Image from 'next/image';
import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import MachineLearning from '@/assate/Machine Learning.jpeg';
import DataScience from '@/assate/Data Science.png';
import WebDevelopment from '@/assate/Web devlopment.jpg';
import CloudComputing from '@/assate/Cloud.jpg';
import Cybersecurity from '@/assate/Cybersecurity.jpg';
import Blockchain from '@/assate/Supply Chain.jpg';
import DevOps from '@/assate/DevOps.jpg';

const PopularTopics = () => {
    const topics = [
        { name: 'Artificial Intelligence', image: MachineLearning },
        { name: 'Data Science', image: DataScience },
        { name: 'Machine Learning', image: WebDevelopment },
        { name: 'Web Development', image: Cybersecurity },
        { name: 'Cloud Computing', image: CloudComputing },
        { name: 'Cybersecurity', image: Blockchain },
        { name: 'Blockchain', image: DevOps },
        { name: 'DevOps', image: DevOps },
    ];

    // Animation variants
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-6xl mx-auto px-5 py-12 font-sans">
            <div className="flex items-center gap-3 text-2xl mb-8 text-gray-800">
                <FiTrendingUp className="text-blue-600 text-3xl" />
                <h2 className="font-bold">Popular Topics</h2>
            </div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                initial="hidden"
                animate="show"
                variants={{
                    show: {
                        transition: {
                            staggerChildren: 0.05
                        }
                    }
                }}
            >
                {topics.map((topic, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{
                            y: -8,
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        className="group relative"
                    >
                        <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center h-full cursor-pointer">
                            <div className="relative w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 p-4">
                                <Image
                                    src={topic.image}
                                    alt={topic.name}
                                    width={48}
                                    height={48}
                                    className="object-contain w-full h-full"
                                    style={{
                                        filter: 'brightness(1.05) contrast(1.1)',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base">
                                {topic.name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 font-medium shadow-sm hover:shadow-md text-sm sm:text-base">
                    View All Topics
                </button>
            </div>
        </div>
    );
};

export default PopularTopics;