'use client';

import React from 'react';
import { FiEye, FiEdit, FiTrash2, FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi';

const QuizAttempts: React.FC = () => {
    // Sample assignment data
    const assignments = [
        {
            id: 1,
            user: 'Mahadeo',
            quiz: 'React Fundamentals',
            time: '45 mins',
            status: 'Completed',
            submittedDate: '2023-05-15'
        },
        {
            id: 2,
            user: 'Mahadeo',
            quiz: 'TypeScript Basics',
            time: '38 mins',
            status: 'Completed',
            submittedDate: '2023-05-18'
        },
        {
            id: 3,
            user: 'Mahadeo',
            quiz: 'Next.js Advanced',
            time: '--',
            status: 'Pending',
            submittedDate: ''
        },
        {
            id: 4,
            user: 'Mahadeo',
            quiz: 'Tailwind CSS',
            time: '52 mins',
            status: 'Completed',
            submittedDate: '2023-05-20'
        },
        {
            id: 5,
            user: 'Mahadeo',
            quiz: 'Node.js Fundamentals',
            time: '--',
            status: 'Overdue',
            submittedDate: ''
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Completed':
                return <FiCheckCircle className="text-green-500" />;
            case 'Pending':
                return <FiClock className="text-yellow-500" />;
            case 'Overdue':
                return <FiXCircle className="text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">My Quiz Attempts</h3>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quiz
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {assignments.map((assignment) => (
                                <tr key={assignment.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        #{assignment.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {assignment.user}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {assignment.quiz}
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {assignment.time}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${assignment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            assignment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {getStatusIcon(assignment.status)}
                                            <span className="ml-1">{assignment.status}</span>
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-3">
                                            <button
                                                className="text-blue-600 hover:text-blue-900"
                                                title="View"
                                            >
                                                <FiEye className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6 px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                                <span className="font-medium">5</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Previous</span>
                                    Previous
                                </a>
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                >
                                    1
                                </a>
                                <a
                                    href="#"
                                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                >
                                    3
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Next</span>
                                    Next
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizAttempts;