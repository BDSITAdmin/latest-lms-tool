'use client';

import { FaCheck } from 'react-icons/fa';

interface LearningListProps {
    items: string[];
}

export default function LearningList({ items }: LearningListProps) {
    const mid = Math.ceil(items.length / 2);
    const leftItems = items.slice(0, mid);
    const rightItems = items.slice(mid);

    return (
        <section className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What you'll learn</h2>

            <div className="bg-gray-100 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                {[leftItems, rightItems].map((group, index) => (
                    <ul key={index} className="space-y-4">
                        {group.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                <div className="text-green-500 bg-green-100 rounded-full p-1">
                                    <FaCheck size={14} />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
}
