'use client';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import {  Html } from '@react-three/drei';

const RenderModel = ({ children, className }) => {
    const [clsx, setClsx] = useState(null);

    useEffect(() => {
        // Dynamically import clsx to check if import issues are resolved
        import('clsx').then(module => setClsx(() => module.default));
    }, []);

    if (!clsx) return <div>Loading...</div>; // Wait until clsx is loaded

    return (
        <Canvas shadows={false} className={clsx('w-screen h-screen -z-10 relative', className)}>
            <Suspense fallback={<Html center><div>Loading...</div></Html>}>
                {children}
            </Suspense>
            <Environment preset="sunset" />
        </Canvas>
    );
};

export default RenderModel;
