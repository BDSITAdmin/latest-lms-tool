"use client";

import React from 'react';
import { FaCloudDownloadAlt, FaAward, FaClock, FaUserGraduate } from 'react-icons/fa';
import Link from "next/link";
type IconType = "cloud-download-alt" | "award" | "clock" | "user-graduate";

interface CourseDetail {
  icon: IconType;
  text: string;
}

interface CourseBoxProps {
  level: string;
  title: string;
  type: string;
  image: string;
  description: string;
  details: CourseDetail[];
}

const CourseBox: React.FC<CourseBoxProps> = ({ level, title, type, image, description, details }) => {
  const getIconComponent = (icon: IconType) => {
    const baseClasses = "rounded-full p-1.5 w-6 h-6 flex items-center justify-center";

    switch (icon) {
      case "cloud-download-alt":
        return <FaCloudDownloadAlt className={`${baseClasses} text-blue-600 bg-blue-100`} />;
      case "award":
        return <FaAward className={`${baseClasses} text-green-600 bg-green-100`} />;
      case "clock":
        return <FaClock className={`${baseClasses} text-purple-600 bg-purple-100`} />;
      case "user-graduate":
        return <FaUserGraduate className={`${baseClasses} text-orange-600 bg-orange-100`} />;
    }
  };

  return (
    
    

<Link href={`/courses_details`} passHref>
  <div className="cursor-pointer w-full max-w-[360px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    {/* Course Image */}
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>

    <div className="p-6">
      {/* Badge and Title */}
      <div className="flex justify-between items-start mb-3">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${type === "Premium"
          ? "bg-yellow-100 text-yellow-800"
          : type === "Standard"
          ? "bg-blue-100 text-blue-800"
          : "bg-green-100 text-green-800"
          }`}>
          {type}
        </span>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center space-x-2">
            {getIconComponent(detail.icon)}
            <span className="text-xs font-medium text-gray-600">{detail.text}</span>
          </div>
        ))}
      </div>

      {/* Enroll Button */}
      <button
        onClick={(e) => e.preventDefault()} // Prevent button click from navigating twice
        className="w-full bg-gradient-to-r from-[#080054] to-[#1aa5e5] hover:from-[#060046] hover:to-[#168bc7] text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]"
      >
        Enroll Now
      </button>
    </div>
  </div>
</Link>

  );
};

type CourseType = {
  level: string;
  title: string;
  type: string;
  image: string;
  description: string;
  details: CourseDetail[];
};

const CoursesSection = () => {
  const courses: CourseType[] = [
    {
      level: "one",
      title: "A1 Beginner",
      type: "Basic",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Start your learning journey with basic concepts and fundamentals.",
      details: [
        { icon: "cloud-download-alt", text: "27 Free tutorials" },
        { icon: "award", text: "Beginner Certificate" },
        { icon: "clock", text: "45-60 Hours" },
        // { icon: "user-gduate", text: "500+ Students" }
      ]
    },
    {
      level: "two",
      title: "A2 Elementary",
      type: "Premium",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Build upon your basics with more comprehensive lessons and exercises.",
      details: [
        { icon: "cloud-download-alt", text: "60+ Free tutorials" },
        { icon: "award", text: "Elementary Certificate" },
        { icon: "clock", text: "90-105 Hours" },
        { icon: "user-graduate", text: "800+ Students" }
      ]
    },
    {
      level: "three",
      title: "B1 Intermediate",
      type: "Premium",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Develop intermediate skills with practical applications and case studies.",
      details: [
        { icon: "cloud-download-alt", text: "80+ Free tutorials" },
        { icon: "award", text: "Intermediate Certificate" },
        { icon: "clock", text: "135-150 Hours" },
        { icon: "user-graduate", text: "600+ Students" }
      ]
    },
    {
      level: "one",
      title: "B2 Upper-Intermediate",
      type: "Standard",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Master complex concepts and prepare for advanced level coursework.",
      details: [
        { icon: "cloud-download-alt", text: "100+ Free tutorials" },
        { icon: "award", text: "Upper-Intermediate Certificate" },
        { icon: "clock", text: "180-195 Hours" },
        { icon: "user-graduate", text: "400+ Students" }
      ]
    },
    {
      level: "two",
      title: "C1 Advanced",
      type: "Premium",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Advanced level training with specialized topics and expert guidance.",
      details: [
        { icon: "cloud-download-alt", text: "120+ Free tutorials" },
        { icon: "award", text: "Advanced Certificate" },
        { icon: "clock", text: "225-240 Hours" },
        { icon: "user-graduate", text: "300+ Students" }
      ]
    },
    {
      level: "three",
      title: "C2 Proficiency",
      type: "Premium",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Mastery level program for professional certification and expertise.",
      details: [
        { icon: "cloud-download-alt", text: "150+ Free tutorials" },
        { icon: "award", text: "Proficiency Certificate" },
        { icon: "clock", text: "270-285 Hours" },
        { icon: "user-graduate", text: "200+ Students" }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Trending Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of courses designed for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseBox key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;