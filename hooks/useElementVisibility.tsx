import { useState, useEffect, RefObject, useRef } from 'react';

export function useElementVisibility<T extends Element>(
  ref: RefObject<T>,
  options?: IntersectionObserverInit
) {
  const [isVisible, setIsVisible] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const previousVisibilityState = useRef(false);
 
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const defaultOptions = { 
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], 
      rootMargin: '0px' 
    };
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      
      setIntersectionRatio(entry.intersectionRatio);
      
    
      const significantlyVisible = entry.intersectionRatio > 0.1;
      
      if (previousVisibilityState.current !== significantlyVisible) {
        setIsVisible(significantlyVisible);
        previousVisibilityState.current = significantlyVisible;
        console.log(`Video visibility changed: ${significantlyVisible ? 'visible' : 'hidden'}, ratio: ${entry.intersectionRatio.toFixed(2)}`);
      }
    }, { ...defaultOptions, ...options });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { isVisible, intersectionRatio };
}
