'use client';

import { useMemo } from 'react';
import { getTexture } from '@/lib/textureCache';

export default function useImageTexture(src) {
  return useMemo(() => getTexture(src), [src]);
}