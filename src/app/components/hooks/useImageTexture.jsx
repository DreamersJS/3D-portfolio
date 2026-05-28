'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

export default function useImageTexture(src) {
  return useMemo(() => {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(src);
    texture.magFilter = THREE.NearestFilter;
    return texture;
  }, [src]);
}
//https://threejs.org/manual/#en/textures