'use client';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';

const RenderModel = ({ children, className }) => {
    const [clsx, setClsx] = useState(null);

    useEffect(() => {
        // Dynamically import clsx to check if import issues are resolved
        import('clsx').then(module => setClsx(() => module.default));
    }, []);

    if (!clsx) return <div>Loading...</div>; // Wait until clsx is loaded

    return (
        <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
            {/* <ambientLight intensity={0.5} /> */}
            <Environment preset="sunset" />
        </Canvas>
    );
};

export default RenderModel;
