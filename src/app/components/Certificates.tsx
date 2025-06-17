'use client';

import React from 'react';
import { FaDownload, FaCertificate } from 'react-icons/fa';

const certificates = [
    {
        id: 1,
        course: 'React Fundamentals',
        issuedDate: '2024-08-12',
        certificateUrl: '/certificates/react-fundamentals.pdf',
    },
    {
        id: 2,
        course: 'Node.js Mastery',
        issuedDate: '2024-10-03',
        certificateUrl: '/certificates/nodejs-mastery.pdf',
    },
];

const Certificates: React.FC = () => {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <FaCertificate className="text-yellow-500" />
                Certificates
            </h2>
            {certificates.length === 0 ? (
                <p className="text-gray-500">No certificates issued yet.</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {certificates.map((cert) => (
                        <li key={cert.id} className="py-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">{cert.course}</h3>
                                <p className="text-sm text-gray-500">Issued on: {cert.issuedDate}</p>
                            </div>
                            <a
                                href={cert.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                <FaDownload />
                                Download
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Certificates;
