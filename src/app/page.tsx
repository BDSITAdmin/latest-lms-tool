"use client";

import Header from './components/Header';
import Link from 'next/link';
import Tabs from './components/Tabs';
import CoursesSection from './components/CoureseCard';
import PopularTopics from './components/PapularCourese';
import Footer from './components/Footer';
import { FaBriefcase, FaBook, FaTools, FaSearch } from 'react-icons/fa';
import Testimonials from './components/Testimonials';
import DiscountBanner from './components/DiscountBanner';
import CourseCard from './components/CourseCard';

const courses = [
  {
    image: '/images/mit.jpg',
    logo: '/images/mit-logo.png',
    title: 'Artificial Intelligence: Implications for Business Strategy',
    institution: 'MITx',
    tag: 'Executive Education',
  },
  {
    image: '/images/maryville.jpg',
    logo: '/images/maryville-logo.png',
    title: 'Undergraduate Certificate in Artificial Intelligence',
    institution: 'Maryville',
    tag: 'Certificate',
  },
  {
    image: '/images/cs50.jpg',
    logo: '/images/harvard-logo.png',
    title: "CS50's Introduction to Artificial Intelligence with Python",
    institution: 'HarvardX',
    tag: 'Course',
  },
  {
    image: '/images/oxford.jpg',
    logo: '/images/oxford-logo.png',
    title: 'Artificial Intelligence Programme',
    institution: 'OxfordX',
    tag: 'Executive Education',
  },
];




const HomePage: React.FC = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url("/HomeImage.jpg")` }}>
        {/* Navbar */}
        <Header />

        {/* Hero Content - Centered on the image */}
        <div className="absolute inset-0 flex items-center">
          <div
            className="mt-10 ml-4 max-w-xl space-y-6  sptext-left bg-black bg-opacity-30 p-6 rounded-lg z-30 relative animate-floating"
          >
            <h1 className="text-xl md:text-5xl font-bold leading-tight text-white">
              Welcome to BigDoor IT <span className="text-blue-500">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-white">
              Learn on-the-go or right at home with BDS’s self-paced courses. Get started today!
            </p>
            <div className="pt-4">
              <Link href="/about">
                <button
                  className="
                 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600
                    text-white font-bold py-3 px-8 rounded-full text-lg
                    transition-all duration-500 ease-in-out transform hover:scale-105
                      hover:bg-blue-600 hover:border hover:border-white ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">

        <Tabs />
      </div>

      <CoursesSection />
      <div className="container mx-auto px-4 py-8">
        {/* Other content... */}
        <DiscountBanner />
        {/* More content... */}

        <div className="px-6 py-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Explore top courses</h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {['Artificial Intelligence', 'Computer Science', 'Data Science', 'Business', 'Healthcare'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 border border-blue-300 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="px-6 py-2 border rounded-full text-lg font-medium border-blue-300 text-gray-700  hover:bg-blue-600 hover:text-white">
              Explore more AI courses
            </button>
          </div>
        </div>
      </div>
      {/* <PopularTopics /> */}
      <PopularTopics />
      <main className="bg-gray-100 min-h-screen">
        <Testimonials />
      </main>




      {/* <Footer /> */}
    </>
  );
}
export default HomePage;    
