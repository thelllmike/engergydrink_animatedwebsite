'use client'

import { useEffect, useLayoutEffect } from 'react'

// Use useLayoutEffect only on client-side, useEffect on server
const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * Custom hook to safely use GSAP in Next.js
 * Ensures animations only run on client-side after component mount
 */
export function useGSAP(callback, dependencies = []) {
  useIsomorphicLayoutEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    // Execute GSAP animation callback
    const cleanup = callback()

    // Return cleanup function if provided
    return typeof cleanup === 'function' ? cleanup : undefined
  }, dependencies)
}

export default useGSAP