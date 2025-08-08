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
import CoursesSection from '../components/CoureseCard';


const CourseDetails = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <PageHeader
          title="All Courses"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Courses', href: '/courses' },
            
          ]}
        />

        {/* Main Content */}
        <CoursesSection/>
      </div>
    </>
  );
};

export default CourseDetails;