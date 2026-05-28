import { TextureLoader, NearestFilter } from 'three';

const loader = new TextureLoader();
const cache = new Map();

export function getTexture(src) {
  if (cache.has(src)) {
    return cache.get(src);
  }

  const texture = loader.load(src);
  texture.magFilter = NearestFilter;

  cache.set(src, texture);

  return texture;
}