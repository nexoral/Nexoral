/**
 * In-memory cache utilities
 * Simple cache implementation for build-time and runtime data caching
 */

export class SimpleCache<T> {
  private cache: Map<string, { data: T; timestamp: number }>;
  private ttl: number; // Time to live in milliseconds

  constructor(ttl = 43200000) {
    // Default 12 hours in ms
    this.cache = new Map();
    this.ttl = ttl;
  }

  /**
   * Set a value in the cache
   */
  set(key: string, value: T): void {
    this.cache.set(key, {
      data: value,
      timestamp: Date.now(),
    });
  }

  /**
   * Get a value from the cache
   * Returns null if not found or expired
   */
  get(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    // Check if expired
    const now = Date.now();
    if (now - entry.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  /**
   * Check if a key exists and is not expired
   */
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   * Delete a key from the cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Get cache size
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Remove expired entries
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Global cache instances
export const projectCache = new SimpleCache<unknown>();
export const readmeCache = new SimpleCache<string>();
export const statsCache = new SimpleCache<unknown>();
