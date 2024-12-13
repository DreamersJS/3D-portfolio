import React, { useState } from 'react';
import ItemsLayout from './ItemLayout';

const AboutDetails = () => {

    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 sx:gap-6 md:gap-8 w-full'>

                <ItemsLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize  text-white'>
                        Architect of Enchantment
                    </h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>
                        My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.
                    </p>
                </ItemsLayout>

                <ItemsLayout className={'col-span-full sm:lg:col-span-2 lg:col-span-4 row-span-2'}>
                    <div className='text-center text-white'>
                        <h3 className='text-base sm:text-xl font-semibold'>15+ Technologies Practiced</h3>
                        <p className='font-light mt-2 sm:mt-4'>
                            <strong>After Graduation:</strong> Vite Proxy & CORS, Next.js 14, Express.js, REST APIs, JWT, Bcrypt, MySQL, MongoDB Atlas, Vercel Deployment, Docker, HTML Canvas, React Hooks, Recoil, Cookies.
                        </p>
                        <p className='font-light mt-2'>
                            <strong>In Telerik Academy:</strong> JavaScript, OOP, DSA, Async/Await, Promises, AJAX, Recursion, Classes, React, Firebase Realtime Database & Authentication.
                        </p>
                    </div>
                </ItemsLayout>


               {/* github stats */}
               <ItemsLayout className={'col-span-full sm:lg:col-span-2 lg:col-span-4 p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs?username=DreamersJS&theme=transparent&hide_border=true&title_color=FFF&text_color=FFF" alt="github lang stats" loading='lazy'/>
               </ItemsLayout>
               <ItemsLayout className={'col-span-full sm:lg:col-span-4 lg:col-span-8 p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=DreamersJS&theme=transparent&hide_border=true&title_color=FFF&text_color=FFF" alt="github stats" loading='lazy'/>
               </ItemsLayout>

               <ItemsLayout className={'col-span-full p-0'}>
                    <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,html,css,docker,firebase,git,github,jest,mint,mongodb,mysql,nextjs,npm,react,tailwind,vscode,vite" alt="skills" loading='lazy'/>
               </ItemsLayout>
            </div>
        </section>
    );
};
export default AboutDetails;