'use client';

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function AssetPreloader() {
  useEffect(() => {
    // Preload the assets
    useGLTF.preload("/models/wizard-transformed.glb");
    useGLTF.preload("/models/staff-transformed.glb");
    useGLTF.preload("/models/hat-transformed.glb");
  }, []); 

  return null; 
}
