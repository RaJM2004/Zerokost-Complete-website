// Animation utility functions for scroll and hover effects

// Intersection Observer options
export const defaultObserverOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px'
};

// Animation classes for scroll reveal
export const scrollAnimationClasses = {
  fadeIn: 'opacity-0 transition-opacity duration-1000 ease-in-out',
  fadeInUp: 'opacity-0 translate-y-10 transition-all duration-1000 ease-out',
  fadeInDown: 'opacity-0 -translate-y-10 transition-all duration-1000 ease-out',
  fadeInLeft: 'opacity-0 -translate-x-10 transition-all duration-1000 ease-out',
  fadeInRight: 'opacity-0 translate-x-10 transition-all duration-1000 ease-out',
  scaleIn: 'opacity-0 scale-95 transition-all duration-1000 ease-out',
  visible: 'opacity-100 translate-y-0 translate-x-0 scale-100'
};

// Staggered animation delay utility
export const getStaggerDelay = (index: number, baseDelay = 100): string => {
  const delay = baseDelay * index;
  return `${delay}ms`;
};

// Setup scroll animation for an element
export const setupScrollAnimation = (
  element: HTMLElement | null,
  animationType: keyof typeof scrollAnimationClasses = 'fadeIn',
  options: IntersectionObserverInit = defaultObserverOptions as IntersectionObserverInit
): (() => void) => {
  if (!element) return () => {};
  
  // Add initial animation classes
  element.classList.add(...scrollAnimationClasses[animationType].split(' '));
  
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      // Add visible class when element is in view
      element.classList.add(...scrollAnimationClasses.visible.split(' '));
      observer.disconnect();
    }
  }, options);
  
  observer.observe(element);
  
  // Return cleanup function
  return () => observer.disconnect();
};

// Setup staggered animations for multiple elements
export const setupStaggeredAnimations = (
  elements: NodeListOf<HTMLElement> | HTMLElement[] | null,
  animationType: keyof typeof scrollAnimationClasses = 'fadeIn',
  options: IntersectionObserverInit = defaultObserverOptions as IntersectionObserverInit,
  baseDelay = 100
): (() => void) => {
  if (!elements || elements.length === 0) return () => {};
  
  const observers: IntersectionObserver[] = [];
  
  Array.from(elements).forEach((element, index) => {
    // Add initial animation classes
    element.classList.add(...scrollAnimationClasses[animationType].split(' '));
    
    // Set staggered delay
    element.style.transitionDelay = getStaggerDelay(index, baseDelay);
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add visible class when element is in view
        element.classList.add(...scrollAnimationClasses.visible.split(' '));
        observer.disconnect();
      }
    }, options);
    
    observer.observe(element);
    observers.push(observer);
  });
  
  // Return cleanup function
  return () => observers.forEach(observer => observer.disconnect());
};