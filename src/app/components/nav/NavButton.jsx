import Link from "next/link";
import React from "react";
import { BookOpenText, GithubIcon, Home, Linkedin, Palette, Phone, User } from "lucide-react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
};

const NavLink = motion(Link);

const getIcon = (icon) => {
    switch (icon) {
        case 'home':
            return <Home className='w-full h-auto' strokeWidth={1.5} />
        case 'about':
            return <User className='w-full h-auto' strokeWidth={1.5} />
        case 'projects':
            return <Palette className='w-full h-auto' strokeWidth={1.5} />
        case 'contact':
            return <Phone className='w-full h-auto' strokeWidth={1.5} />
        case 'github':
            return <GithubIcon className='w-full h-auto' strokeWidth={1.5} />
        case 'linkedin':
            return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
        case 'resume':
            return <BookOpenText className='w-full h-auto' strokeWidth={1.5} />
        default:
            return <Home className='w-full h-auto' strokeWidth={1.5} />
    }
}

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection="right" }) => {
    return (
        <ResponsiveComponent>
            {({ width, height }) => {
                if (width && width >= 480 && height > 480) {
                    // Desktop Layout
                    return (
                        <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x},${y})` }}>
                            <NavLink 
                            variants={item}
                            href={link} target={newTab ? "_blank" : "_self"} className='text-foreground rounded-full flex items-center custom-bg' aria-label={label} name={label}>
                                <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'>
                                    {getIcon(icon)}
                                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap z-50'>
                                        {label}
                                    </span>
                                </span>
                            </NavLink>
                        </div>
                    );
                } else if (width >= 480 && width > height) {
                    // Mobile Landscape Layout
                    return (
                        <div className="w-fit absolute cursor-pointer z-50 space-x-2">
                            <NavLink variants={item} href={link} target={newTab ? "_blank" : "_self"} className='text-foreground rounded-full flex items-center custom-bg' aria-label={label} name={label}>
                                <span className='relative w-10 h-10 p-2.5 xs:w-14 xs:h-14 xs:p-4 hover:text-accent'>
                                    {getIcon(icon)}
                                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                                    <span className={`absolute hidden peer-hover:block px-2 py-1 mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap z-50 ${labelDirection === "left" ? "right-full left-auto" : "left-full"}`}>
                                        {label}
                                    </span>
                                </span>
                            </NavLink>
                        </div>
                    );
                } else {
                    // Mobile Portrait Layout
                    return (
                        <div className="w-fit absolute cursor-pointer z-50">
                            <NavLink variants={item} href={link} target={newTab ? "_blank" : "_self"} className='text-foreground rounded-full flex items-center custom-bg' aria-label={label} name={label}>
                                <span className='relative w-10 h-10 p-2.5 xs:w-14 xs:h-14 xs:p-4 hover:text-accent'>
                                    {getIcon(icon)}
                                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                                    <span className={`absolute hidden peer-hover:block px-2 py-1 mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap z-50 ${labelDirection === "left" ? "right-full left-auto" : "left-full"}`}>
                                        {label}
                                    </span>
                                </span>
                            </NavLink>
                        </div>
                    );
                }
            }}
        </ResponsiveComponent>
    );
};


export default NavButton;
