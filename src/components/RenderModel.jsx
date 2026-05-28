'use client';
// import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
// import { Html } from '@react-three/drei';

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
            {/* <Environment preset="sunset" /> */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 5]} intensity={1} />
        </Canvas>
    );
};

export default RenderModel;
