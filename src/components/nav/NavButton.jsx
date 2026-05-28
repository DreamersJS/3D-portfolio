import Link from "next/link";
import React from "react";
import { BookOpenText, GithubIcon, Home, Linkedin, Palette, Phone, User } from "lucide-react";

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

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection = "right" }) => {
    return (
        <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x},${y})` }}>
            <Link
                
                href={link} target={newTab ? "_blank" : "_self"} className='group text-foreground rounded-full flex items-center custom-bg transition-transform duration-300 hover:scale-110' aria-label={label} name={label}>
                <span className='relative w-10 h-10 p-2.5 xs:w-14 xs:h-14 xs:p-4 xs:animate-spin-slow-reverse hover:text-accent'>
                    {getIcon(icon)}
                    <span className="bg-transparent absolute top-0 left-0 w-full h-full"></span>
                    <span className={` 
                    absolute opacity-0 pointer-events-none
                    transition-opacity duration-200
                    group-hover:opacity-100 
 px-2 py-1 mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap z-50 ${labelDirection === "left" ? "right-full left-auto" : "left-full"}`}>
                        {label}
                    </span>
                </span>
            </Link>
        </div>
    );
};


export default NavButton;
