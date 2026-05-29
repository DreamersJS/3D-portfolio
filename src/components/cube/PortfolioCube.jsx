'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges, Html } from '@react-three/drei';
import { faces } from './data';
import useImageTexture from '@/hooks/useImageTexture';
import useCubeMaterials from '../../hooks/useCubeMaterials';
import useCubeRotation from '../../hooks/useCubeRotation';
import { MathUtils } from 'three';

export default function PortfolioCube({ cubeScale }) {
  const meshRef = useRef();

  const textures = {
    front: useImageTexture(faces[0].image),
    right: useImageTexture(faces[1].image),
    back: useImageTexture(faces[2].image),
    left: useImageTexture(faces[3].image),
  };

  const materials = useCubeMaterials(textures);

  const { currentFace, targetRotation } = useCubeRotation();

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y = MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotation,
      0.08
    );
  // meshRef.current.rotation.x = 0.3; // -0.3
  });

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
        <h2 className="text-accent text-2xl font-bold">
          {faces[currentFace].title}
        </h2>
      </Html>
    </>
  );
}