'use client';

import { motion } from 'framer-motion';
// import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import {
  FaStar,
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaFolder,
  FaInfoCircle,
  FaGraduationCap,
  FaListAlt,
  FaChevronDown,
  FaPlayCircle,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaStarHalf
} from 'react-icons/fa';
import CurriculumAccordion from '../components/CourseRequirementsAndCurriculum';
import PageHeader from '../components/PageHeader';
import Header from '../components/Header';
import LearningList from '../components/LearningList';
import Course from '@/assate/course-thumb.jpeg';
const requirements = [
  'Basic understanding of computer usage and internet browsing',
  'No prior programming knowledge is required',
  'A computer with access to the internet',
];

const curriculum = [
  'Introduction to Web Development',
  'Building Your First Web Page',
  'JavaScript Basics',
  'JavaScript DOM Manipulation',
  'Advanced JavaScript: ES6+',
  'React Basics',
  'Full-Stack Development with Node.js',
];

const learningPoints = [
  'Build fully responsive websites using HTML, CSS, and JavaScript',
  'Develop web applications using modern JavaScript frameworks like React',
  'Implement back-end services with Node.js and Express',
  'Understand RESTful APIs and connect front-end to back-end',
  'Work with databases like MongoDB and MySQL for full-stack applications',
  'Learn how to deploy web applications to the cloud',
];

const curriculumData = [
  {
    title: 'Introduction to Web Development',
    lectures: [
      { title: 'Overview of HTML, CSS, and JavaScript', duration: '08:45', locked: true },
      { title: 'Setting up your development environment', duration: '10:22', locked: true },
    ],
  },
  {
    title: 'Building Your First Web Page',
    lectures: [
      { title: 'HTML Structure and Elements', duration: '12:30', locked: false },
      { title: 'Basic CSS Styling', duration: '15:45', locked: false },
    ],
  },
  {
    title: 'JavaScript Basics',
    lectures: [
      { title: 'Variables and Data Types', duration: '10:15', locked: false },
      { title: 'Functions and Scope', duration: '14:20', locked: false },
    ],
  },
  {
    title: 'JavaScript DOM Manipulation',
    lectures: [
      { title: 'Selecting Elements', duration: '09:30', locked: false },
      { title: 'Event Listeners', duration: '11:45', locked: false },
    ],
  },
  {
    title: 'Advanced JavaScript: ES6+',
    lectures: [
      { title: 'Arrow Functions', duration: '08:15', locked: false },
      { title: 'Destructuring', duration: '10:30', locked: false },
    ],
  },
  {
    title: 'React Basics',
    lectures: [
      { title: 'Components and Props', duration: '12:45', locked: false },
      { title: 'State and Lifecycle', duration: '14:20', locked: false },
    ],
  },
];

const CourseDetails = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <PageHeader
          title="Course Details"
          breadcrumb={[
            { label: 'iStudy', href: '/' },
            { label: 'Courses', href: '/courses' },
            { label: 'Web Development' },
          ]}
        />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 py-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title with fade-in animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Complete Guide to Web Development: Beginner to Advanced
            </motion.h2>

            {/* Rating with pulse animation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2"
            >
              <div className="flex text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5" />
                ))}
                <FaStarHalf className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-gray-700 text-sm ml-1">(1,230 reviews)</span>
              <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Bestseller
              </span>
            </motion.div>

            {/* Stats with staggered animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4 p-4 bg-gray-50 rounded-xl"
            >
              <motion.div
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-blue-100 rounded-full">
                  <FaUser className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Created by</p>
                  <p className="mt-1 text-gray-700">John Doe</p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-purple-100 rounded-full">
                  <FaUsers className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Total Enrolled</p>
                  <p className="mt-1 text-gray-700">12,580 students</p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-green-100 rounded-full">
                  <FaCalendarAlt className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Last Update</p>
                  <p className="mt-1 text-gray-700">15 September 2024</p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-orange-100 rounded-full">
                  <FaFolder className="text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Category</p>
                  <p className="mt-1 text-gray-700">Web Development</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Description with slide-in */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-blue-500" />
                <span>Description</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This comprehensive course covers all aspects of web development from the basics of HTML, CSS, and JavaScript
                to advanced topics like React, Node.js, and database integration. Whether you're a complete beginner or an
                experienced developer looking to hone your skills, this course has everything you need to master web development.
                Learn best practices and gain hands-on experience with real-world projects.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Beginner Friendly</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">Hands-on Projects</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Certification</span>
              </div>
            </motion.div>

            {/* Learning outcomes with checkmark animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-purple-500" />
                <span>What you'll learn</span>
              </h3>
              <LearningList items={learningPoints} />
            </motion.div>

            {/* Curriculum section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaListAlt className="text-orange-500" />
                <span>Course Curriculum</span>
              </h3>
              <CurriculumAccordion
                totalLectures={40}
                totalDuration="10h 15m"
                sections={curriculumData}
              />
            </motion.div>
          </div>

          {/* Right Section - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="sticky top-6 h-fit"
          >
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              {/* Image with hover zoom effect */}
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer"
                  onClick={() => {
                    // Add your navigation logic here, for example:
                    // router.push('/video-page');
                  }}
                >
                  <Image
                    src={Course}
                    alt="Course thumbnail"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />

                  {/* Play button overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                  >
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-indigo-600"
                      >
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-6">
                {/* Price with emphasis */}
                <div className="flex items-end gap-2 mb-4">
                  <p className="text-3xl font-bold text-gray-900">$129.00</p>
                  <p className="text-gray-400 line-through">$1925.00</p>
                  <span className="ml-auto bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    93% OFF
                  </span>
                </div>

                {/* Countdown timer */}
                <div className="mb-6 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div className="flex items-center justify-center gap-1 text-yellow-800">
                    {/* <FaClock className="text-yellow-600" /> */}
                    <span className="text-sm font-medium">Offer ends in 2 days 5 hours</span>
                  </div>
                </div>

                {/* Course details */}
                <ul className="space-y-3 text-gray-700 text-sm mb-6">
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">Beginner to Advanced</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Lectures:</span>
                    <span className="font-medium">48 Lectures</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">32h 45m</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Access:</span>
                    <span className="font-medium">Lifetime</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Certificate:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </li>
                </ul>

                {/* Buttons with hover effects */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  <span>Add To Cart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaHeart />
                  <span>Add To Wishlist</span>
                </motion.button>

                <button className="mt-3 w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium py-2 transition-colors">
                  <FaShareAlt className="inline mr-2" />
                  Share this course
                </button>

                {/* Money-back guarantee */}
                <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
                  <FaShieldAlt className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">30-Day Money-Back Guarantee</p>
                    <p className="text-xs text-gray-500 mt-1">Full refund if you're not satisfied with the course</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructor card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaChalkboardTeacher className="text-purple-500" />
                  <span>About the Instructor</span>
                </h3>
                <div className="flex items-start gap-4">
                  <Image
                    src="/instructor.jpg"
                    alt="Instructor"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-purple-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">John Doe</h4>
                    <p className="text-sm text-gray-600 mb-2">Senior Web Developer & Educator</p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center text-yellow-500">
                        <FaStar className="w-4 h-4" />
                        <span className="ml-1 text-gray-700">4.9 Instructor Rating</span>
                      </div>
                      <span>•</span>
                      <span className="text-gray-700">12,580 Students</span>
                      <span>•</span>
                      <span className="text-gray-700">8 Courses</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm">
                  John has over 10 years of experience in web development and has worked with companies like Google and Amazon.
                  He specializes in making complex concepts easy to understand for beginners.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;