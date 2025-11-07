import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Custom hook for GSAP animations
 * @param {Function} setup - Animation setup function
 * @param {Array} dependencies - Dependencies array
 */
export const useGSAP = (setup, dependencies = []) => {
  const scope = useRef(null)

  useEffect(() => {
    if (scope.current && setup) {
      const ctx = gsap.context(setup, scope)
      return () => ctx.revert()
    }
  }, dependencies)

  return scope
}

export default useGSAP

