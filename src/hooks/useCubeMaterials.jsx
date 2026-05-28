import { useMemo } from 'react';
import { MeshStandardMaterial } from 'three';
// MeshStandardMaterial
export default function useCubeMaterials(textures) {
  return useMemo(() => {
    const createFaceMaterial = (map) =>
      new MeshStandardMaterial({
        map,
      });

    return [
      createFaceMaterial(textures.right),
      createFaceMaterial(textures.left),

      new MeshStandardMaterial({
        color: '#000000',
      }),

      new MeshStandardMaterial({
        color: '#000000',
      }),

      createFaceMaterial(textures.front),

      createFaceMaterial(textures.back),
    ];
  }, [textures]);
}