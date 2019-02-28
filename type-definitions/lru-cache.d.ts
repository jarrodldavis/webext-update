import LRUCache from 'lru-cache';

declare module 'lru-cache' {
  type Cache<K, V> = LRUCache<K, V>;
}

export {} // force module augmentation
