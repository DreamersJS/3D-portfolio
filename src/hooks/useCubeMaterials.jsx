import { useMemo } from 'react';
import { MeshPhysicalMaterial, MathUtils } from 'three';

export default function useCubeMaterials(textures) {
  return useMemo(() => {
    const createFaceMaterial = (map) =>
      new MeshPhysicalMaterial({
        map,
        roughness: 0.8,
        metalness: 0.1,
        clearcoat: 0.25,
        clearcoatRoughness: 0.8,
      });

    return [
      createFaceMaterial(textures.right),
      createFaceMaterial(textures.left),

      new MeshPhysicalMaterial({
        color: '#000000',
      }),

      new MeshPhysicalMaterial({
        color: '#000000',
      }),

      createFaceMaterial(textures.front),

      createFaceMaterial(textures.back),
    ];
  }, [textures]);
}