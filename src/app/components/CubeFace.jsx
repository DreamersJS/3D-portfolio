'use client';
import { MeshBasicMaterial } from 'three'
import { useVideoTexture } from './useVideoTexture'

// That’s literally a video screen
export default function CubeFace({ video }) {
  const texture = useVideoTexture(video)

  return new MeshBasicMaterial({
    map: texture,
  })
}