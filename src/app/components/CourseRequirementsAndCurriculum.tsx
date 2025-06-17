'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaVideo, FaLock } from 'react-icons/fa';

interface Lecture {
    title: string;
    duration: string;
    locked?: boolean;
}

interface CurriculumSection {
    title: string;
    lectures?: Lecture[];
}

interface CurriculumAccordionProps {
    totalLectures: number;
    totalDuration: string;
    sections: CurriculumSection[];
}

export default function CurriculumAccordion({
    totalLectures,
    totalDuration,
    sections,
}: CurriculumAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // default open first

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Curriculum</h2>
            <p className="text-sm text-gray-500 mb-4">
                {totalLectures} lectures | {totalDuration}
            </p>

            <div className="rounded-md overflow-hidden border border-gray-200">
                {sections.map((section, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 focus:outline-none"
                        >
                            <span className="flex items-center font-semibold text-gray-800">
                                <span className="text-green-600 mr-2">Q.</span> {section.title}
                            </span>
                            <span className="text-gray-500">
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </button>

                        {openIndex === index && section.lectures && (
                            <div className="bg-gray-50 px-6 py-4 space-y-3">
                                {section.lectures.map((lecture, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center text-sm text-gray-700"
                                    >
                                        <span className="flex items-center gap-2">
                                            <FaVideo className="text-gray-500" />
                                            {lecture.title}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-400 text-xs">
                                            {lecture.duration}
                                            {lecture.locked && <FaLock />}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
