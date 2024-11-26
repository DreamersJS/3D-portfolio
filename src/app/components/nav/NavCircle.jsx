'use client'
import { BtnList } from '@/app/data';
import React from 'react';
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';

const Nav = () => {

    const angleIncrement = 360 / BtnList.length;
    const { width, height } = useScreenSize();
    console.log("Nav Component - width:", width, height);
    if (width === null || height === null) {
        return <div>Loading...</div>;
    }
    const isLargeScreen = width > 1024;
    const isMediumScreen = width > 768 && width <= 1024;

    return (
        <div className='w-full fixed h-screen flex items-center justify-center'>
            <ResponsiveComponent>
                {
                    ({ width, height }) => {
                        // Desktop Layout
                        if (width && width >= 480 && height > 480) {
                            return (
                                <div className='flex items-center justify-center relative hover:pause group animate-spin-slow'>
                                    {
                                        BtnList.map((btn, index) => {
                                            const angleRadiant = (angleIncrement * index * Math.PI) / 180;
                                            const radius = isLargeScreen ? `calc(20vw - 1rem)` : isMediumScreen ? `calc(30vw - 1rem)` : `calc(40vw - 1rem)`;
                                            const x = `calc(${radius} * ${Math.cos(angleRadiant)})`;
                                            const y = `calc(${radius} * ${Math.sin(angleRadiant)})`;

                                            return <NavButton key={btn.label} x={x} y={y} {...btn} />
                                        })
                                    }
                                </div>)
                        } else if ( width >= 480 && width > height) {
                            // Mobile Landscape Layout
                            return (
                                <>
                                    {/* Top side buttons of the Mobile Nav */}
                                    {/* <div className='w-full px-2.5 flex flex-row space-x-4 items-center justify-center py-4'>
                                        {
                                            BtnList.slice(0, BtnList.length / 2).map((btn) => {
                                                return <div key={btn.label} className='p-2 m-4'>
                                                    <NavButton key={btn.label} x={0} y={0} {...btn} />
                                                </div>
                                            })
                                        }
                                    </div> */}
                            
                                    {/* Bottom side buttons of the Mobile Nav */}
                                    <div className='w-full flex flex-row flex-wrap justify-evenly items-start mx-2'>
                                        {
                                            BtnList.map((btn) => {
                                                return <div key={btn.label} className=''>
                                                    <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" />
                                                </div>
                                            })
                                        }
                                    </div>
                                </>
                            )
                            
                        } else {
                            // Mobile (Portrait) Layout
                            return (
                                <>
                                    {/* Left side buttons of the Mobile Nav */}
                                    <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-32 items-start xs:items-center justify-center relative group'>
                                        {
                                            BtnList.slice(0, BtnList.length / 2).map((btn) => {
                                                return <div key={btn.label} className='p-2'> <NavButton key={btn.label} x={0} y={0} {...btn} /></div>
                                            })
                                        }
                                    </div>
                                    {/* Right side buttons of the Mobile Nav */}
                                    <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-32 items-end xs:items-center justify-center relative group'>
                                        {
                                            BtnList.slice(BtnList.length / 2, BtnList.length).map((btn) => {
                                                return <div key={btn.label} className='mr-12 px-1'><NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" /></div>
                                            })
                                        }
                                    </div>
                                </>
                            )
                            
                        }

                    }
                }

            </ResponsiveComponent>
        </div>
    )
}
export default Nav;