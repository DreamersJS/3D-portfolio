import React from 'react';
import ItemsLayout from './ItemLayout';

const AboutDetails = () => {

    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 sx:gap-6 md:gap-8 w-full'>

                <ItemsLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize  text-white'>
                        Full-Stack Developer focused on  conjuring real-time web applications
                    </h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>
                        I build modern web applications with a strong focus on real-time
                        experiences, scalable architecture, and responsive UI design.
                        <br />
                        My recent projects include collaborative whiteboards, chat platforms,
                        authentication systems, REST APIs, and production-ready full-stack
                        applications using React, Next.js, Express.js, Socket.IO,
                        PostgreSQL, Prisma ORM, and Docker.
                        <br />
                        I enjoy improving application architecture, and building features that
                        feel fast and intuitive for users.
                    </p>
                </ItemsLayout>

                <ItemsLayout className={'col-span-full lg:col-span-4 row-span-2'}>
                    <div className='text-white'>
                        <h3 className='text-lg sm:text-xl font-semibold mb-4'>
                            Core Technologies
                        </h3>

                        <div className='space-y-3 text-sm sm:text-base font-light'>
                            <div>
                                <strong>Frontend:</strong> React, Next.js, Vite,
                                TailwindCSS, Recoil
                            </div>

                            <div>
                                <strong>Backend:</strong> Express.js, Node.js,
                                REST APIs, Socket.IO
                            </div>

                            <div>
                                <strong>Database & Auth:</strong> PostgreSQL,
                                Prisma ORM, MySQL, JWT, Firebase
                            </div>

                            <div>
                                <strong>Tools:</strong> Docker, Git, Jest,
                                Vitest, SuperTest
                            </div>
                        </div>
                    </div>
                </ItemsLayout>


                {/* github stats */}
                <ItemsLayout className={'col-span-full sm:col-span-4 md:col-span-8 p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats-sigma-five.vercel.app/api?username=DreamersJS&theme=transparent&hide_border=true" alt="github lang stats" onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }} loading='lazy' />
                </ItemsLayout>
                <ItemsLayout className={'col-span-full sm:col-span-2 md:col-span-4 p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs?username=DreamersJS&theme=transparent&hide_border=true" alt="github stats" onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }} loading='lazy' />
                </ItemsLayout>

                <ItemsLayout className={'col-span-full p-0'}>
                    <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,html,css,docker,firebase,git,github,jest,mint,mongodb,mysql,nextjs,npm,react,tailwind,vscode,vite" alt="skills" loading='lazy' />
                </ItemsLayout>
            </div>
        </section>
    );
};
export default AboutDetails;