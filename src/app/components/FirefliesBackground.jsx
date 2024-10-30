'use client';
import React, { useEffect, useState } from "react";

const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
})

const FirefliesBackground = () => {

    const [fireflies, setFireflies] = useState([]);

    useEffect(() => {

        const addFireflyPeriodically = () => {
            const newFirefly = createFirefly();
            setFireflies((currentFireflies) => [...currentFireflies.slice(-14), newFirefly]);
        }

        const interval = setInterval(addFireflyPeriodically, 3000);

        return () => clearInterval(interval);

    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {
                fireflies.map((firefly) => {
                    return (
                        <div key={firefly.id}
                            className="absolute rounded-full bg-accent w-[10px] h-[10px]"
                            style={{
                                top: firefly.top,
                                left: firefly.left,
                                animation: `move ${firefly.animationDuration} infinite alternate`,
                            }} > </div>
                    )
                })
            }
        </div>
    )
}
export default FirefliesBackground;