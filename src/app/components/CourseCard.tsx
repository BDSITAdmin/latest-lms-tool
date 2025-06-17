import React from 'react';
import Image from 'next/image';

interface CourseCardProps {
    image: string;
    logo?: string;
    title: string;
    institution: string;
    tag: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, institution, tag }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-xs w-full">
            <div className="relative w-full h-40">
                <Image
                    src={image}
                    alt="course banner"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{institution}</p>
                <span className="inline-block mt-3 px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">
                    {tag}
                </span>
            </div>
        </div>
    );
};

export default CourseCard;
