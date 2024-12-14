'use client';
import {
    GithubIcon,
    Linkedin,
    Phone,
    Mail,
    LocateIcon,
    CodeIcon,
} from 'lucide-react';
import ResponsiveComponent from '../ResponsiveComponent';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
// import html2pdf from 'html2pdf.js';

// firefox & chrome tested
const Resume = () => {
    const resumeRef = useRef(null);
    // const [isDownloading, setIsDownloading] = useState(false);
    // const [isClient, setIsClient] = useState(false);

    // Ensures that the code runs only on the client-side
    // useEffect(() => {
    //   setIsClient(true);
    // }, []);

    // const handlePrint = () => {
    //     if (resumeRef.current && !isDownloading && isClient) {
    //         setIsDownloading(true);

    //         html2pdf()
    //             .from(resumeRef.current)
    //             .set({
    //                 margin: [20, 0, 20, 0],
    //                 filename: 'Zvezda-Neycheva-Resume.pdf',
    //                 html2canvas: {
    //                     scale: 2, // Increase the quality of the rendered image
    //                 },
    //                 jsPDF: {
    //                     unit: 'mm',
    //                     format: 'a4',
    //                     orientation: 'portrait',
    //                 },
    //             })
    //             .save()
    //             .then(() => {
    //                 setIsDownloading(false);
    //             });
    //     }
    // };

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div ref={resumeRef} className="max-w-4xl mx-auto bg-white overflow-hidden">
                {/* Header Section */}
                <div className="bg-gray-600 text-white text-center p-8">
                    <h1 className="text-3xl font-bold">Zvezda Neycheva</h1>
                    <p className="text-lg mt-2">React Developer</p>
                </div>

                {/* Main Content */}
                <div className="p-8">
                    <ResponsiveComponent>
                        {({ width }) => {
                            const isDesktop = width >= 1024;

                            return (
                                <div className={`grid ${isDesktop ? 'grid-cols-2 gap-12' : 'gap-8'}`}>
                                    {/* Left Column */}
                                    <div className="space-y-8">
                                        {/* Profile Section */}
                                        <section>
                                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                                                Profile
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed">
                                                Enthusiastic and motivated Junior Front-End Developer with hands-on
                                                experience building responsive and dynamic web applications. Skilled
                                                in React, Next.js, Express.js, Socket.IO, and more. A fast learner
                                                and team player passionate about creating seamless user experiences.
                                            </p>
                                        </section>

                                        {/* Contact Section */}
                                        <section>
                                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                                                Contact
                                            </h2>
                                            <ul className="space-y-4">
                                                <li className="flex items-center text-gray-600">
                                                    <Phone className="w-5 h-5 mr-3 text-blue-600" /> +359884708256
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                                                    <Link href="mailto:neychevazvezda@gmail.com">
                                                        neychevazvezda@gmail.com
                                                    </Link>
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <GithubIcon className="w-5 h-5 mr-3 text-blue-600" />
                                                    <Link href="https://github.com/DreamersJS" target="_blank">
                                                        github.com/DreamersJS
                                                    </Link>
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <LocateIcon className="w-5 h-5 mr-3 text-blue-600" /> Sofia, Bulgaria
                                                </li>
                                            </ul>
                                        </section>

                                        {/* Education Section */}
                                        <section>
                                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                                                Education
                                            </h2>
                                            <ul className="space-y-3">
                                                <li>
                                                    <strong className="text-gray-700">
                                                        Telerik Academy - Alpha JavaScript Track
                                                    </strong>
                                                    <span className="block text-gray-500">2023-2024</span>
                                                </li>
                                                <li>
                                                    <strong className="text-gray-700">
                                                        1SOU Pencho P Slavekov - High School Diploma
                                                    </strong>
                                                    <span className="block text-gray-500">2011-2014</span>
                                                </li>
                                            </ul>
                                        </section>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-8">
                                        {/* Skills Section */}
                                        <section>
                                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                                                Skills
                                            </h2>
                                            <ul className="grid grid-cols-2 gap-2">
                                                <li className="text-gray-600">React.js</li>
                                                <li className="text-gray-600">Next.js</li>
                                                <li className="text-gray-600">Express.js</li>
                                                <li className="text-gray-600">Socket.IO</li>
                                                <li className="text-gray-600">Vite</li>
                                                <li className="text-gray-600">Firebase</li>
                                                <li className="text-gray-600">MySQL</li>
                                                <li className="text-gray-600">Docker</li>
                                                <li className="text-gray-600">HTML & CSS</li>
                                                <li className="text-gray-600">Tailwind CSS</li>
                                            </ul>
                                        </section>

                                        {/* Projects Section */}
                                        <section>
                                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                                                Projects
                                            </h2>
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-700">
                                                        ZAMO Chat App (Team Project)
                                                    </h3>
                                                    <Link
                                                        href="https://github.com/Alpha-55-JS-Web-Programming/Final-Project-Team5"
                                                        target="_blank"
                                                        className="text-blue-600"
                                                    >
                                                        GitHub Repository
                                                    </Link>
                                                    <ul className="list-disc list-inside text-gray-600 mt-2">
                                                        <li>Real-time communication with Firebase database management.</li>
                                                        <li>Tech Stack: React.js, Firebase, Tailwind CSS, Vite, NPM.</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-700">
                                                        JavaScript Chat App with Socket.IO
                                                    </h3>
                                                    <Link
                                                        href="https://github.com/DreamersJS/express-project1"
                                                        target="_blank"
                                                        className="text-blue-600"
                                                    >
                                                        GitHub Repository
                                                    </Link>
                                                    <ul className="list-disc list-inside text-gray-600 mt-2">
                                                        <li>Real-time chat app with MySQL and JWT for authentication.</li>
                                                        <li>Tech Stack: React.js, Socket.IO, MySQL, Bcrypt, CORS.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Work Experience */}
                                        <section>
                                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                                                Work Experience
                                            </h2>
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-700">Receptionist</h3>
                                                    <p className="text-gray-500">Hotel Slavyanska Beseda | 09/2023 - 01/2024</p>
                                                    <ul className="list-disc list-inside text-gray-600 mt-2">
                                                        <li>Managed client relationships via email, phone, and on-site.</li>
                                                        <li>Provided creative solutions to resolve client issues promptly.</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-700">Cashier</h3>
                                                    <p className="text-gray-500">Lidl International | 05/2018 - 04/2023</p>
                                                    <ul className="list-disc list-inside text-gray-600 mt-2">
                                                        <li>Maintained accuracy and speed during high-pressure tasks.</li>
                                                        <li>Collaborated with team members to achieve nightly restocking goals.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            );
                        }}
                    </ResponsiveComponent>
                </div>

            </div>

            {/* button to print the resume */}
            {/* <div className="text-center mt-6">
                <button
                    onClick={() => {
                        handlePrint();
                    }}
                    disabled={isDownloading}
                    className="px-4 py-2 bg-background text-white rounded-lg"
                >
                    {isDownloading ? (
                        <span>Downloading...</span>
                    ) : (
                        'Download as PDF'
                    )}
                </button>
            </div> */}

        </div>
    );
};

export default Resume;
