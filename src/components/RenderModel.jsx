'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

const RenderModel = ({ children }) => {

    return (
        <Canvas
            dpr={[1, 1.5]}
            gl={{
                antialias: false,
                powerPreference: 'high-performance',
            }}
            shadows={false}
            className='w-screen h-screen -z-10 relative'>
            <Suspense fallback={null}>
                {children}
            </Suspense>

            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 5]} intensity={1} />
        </Canvas>
    );
};

export default RenderModel;
