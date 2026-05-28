'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges, Html } from '@react-three/drei';
import * as THREE from 'three';
import useImageTexture from './hooks/useImageTexture.jsx';

export default function PortfolioCube() {
  const meshRef = useRef();
  let cubeScale = 2.5;

  // WHICH SIDE IS ACTIVE
  const [currentFace, setCurrentFace] = useState(0);

  // IMAGES
  const frontImage = useImageTexture('/images/project1.png');
  const rightImage = useImageTexture('/images/project2.png');
  const backImage = useImageTexture('/images/project3.png');
  const leftImage = useImageTexture('/images/about.png');

  // MATERIALS
  const materials = useMemo(() => {
    return [
      // RIGHT
      new THREE.MeshPhysicalMaterial({
        map: rightImage,
        roughness: 0.8,
        metalness: 0.1,
        clearcoat: 0.25,
        clearcoatRoughness: 0.8,
        opacity : 1,
      }),

      // LEFT (ABOUT)
      new THREE.MeshPhysicalMaterial({
        // color: '#111111',
        map: leftImage,
        roughness: 0.8,
        metalness: 0.1,
        clearcoat: 0.25,
        clearcoatRoughness: 0.8,
        opacity : 1,
      }),

      // TOP
      new THREE.MeshPhysicalMaterial({
        color: '#000000',
      }),

      // BOTTOM
      new THREE.MeshPhysicalMaterial({
        color: '#000000',
      }),

      // FRONT
      new THREE.MeshPhysicalMaterial({
        map: frontImage,
        roughness: 0.8,
        metalness: 0.1,
        clearcoat: 0.8,
        clearcoatRoughness: 0.8,
        opacity : 1,
      }),

      // BACK
      new THREE.MeshPhysicalMaterial({
        map: backImage,
        roughness: 0.8,
        metalness: 0.1,
        clearcoat: 0.25,
        clearcoatRoughness: 0.8,
        opacity : 1,
      }),
    ];
  }, [frontImage, rightImage, backImage, leftImage]);

  // ROTATION VALUES
  const rotations = [
    0,                 // FRONT
    -Math.PI / 2,      // RIGHT
    -Math.PI,          // BACK
    -Math.PI * 1.5,    // LEFT
  ];

  // TARGET ROTATION
  const targetRotation = rotations[currentFace];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // SMOOTH ROTATION
  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotation,
      0.08
    );

    // meshRef.current.rotation.x = 0.3; // -0.3
  });

  // TITLE UNDER CUBE
  const titles = [
    'Zamo chat',
    'Whiteboard',
    'Wellness',
    'About',
  ];

  return (
    <>
      <mesh
        ref={meshRef}
        scale={cubeScale}
        material={materials}
      >
        <boxGeometry args={[1, 1, 1]} />
        <Edges
          scale={1.001}
          threshold={15}
          color="#fefe5b"
        />
      </mesh>

      <Html position={[0, -2.2, 0]} center>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-accent text-2xl font-bold">
            {titles[currentFace]}
          </h2>
        </div>
      </Html>
    </>
  );
}