import { useEffect, useMemo, useState } from 'react';

export default function useCubeRotation(interval = 5000) {
  const [currentFace, setCurrentFace] = useState(0);

  const rotations = useMemo(
    () => [
      0,
      -Math.PI / 2,
      -Math.PI,
      -Math.PI * 1.5,
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % 4);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return {
    currentFace,
    targetRotation: rotations[currentFace],
  };
}