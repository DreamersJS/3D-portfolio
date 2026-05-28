'use client';
import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: null, // Start as null to avoid SSR issues
        height: null,
    });
// The useEffect hook ensures that the window-related logic (e.g., window.innerWidth) only executes in the browser environment.
    useEffect(() => {
         
        function handleResize() {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
};

export default useScreenSize;
