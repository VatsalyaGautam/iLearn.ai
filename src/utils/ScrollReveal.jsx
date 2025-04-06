'use client';
import { useEffect, useRef } from 'react';

const ANIMATIONS = {
  slideLeft: 'opacity-0 translate-x-64',
  slideRight: 'opacity-0 -translate-x-64',
  slideDown: 'opacity-0 -translate-y-64',
  slideUp: 'opacity-0 translate-y-64',
  fadeSlideLeft: 'opacity-0 translate-x-64 scale-95',
  fadeSlideRight: 'opacity-0 -translate-x-64 scale-95',
  fadeSlideDown: 'opacity-0 -translate-y-64 scale-95',
  fadeSlightDown: 'opacity-0 -translate-y-16 scale-95',
  fadeSlightUp: 'opacity-0 translate-y-16 scale-95',
  fadeSlideUp: 'opacity-0 translate-y-64 scale-95',
  slightLeft : 'opacity-0 translate-x-16',
  slightRight : 'opacity-0 -translate-x-16',
  slightUp : 'opacity-0 translate-y-16',
  slightDown : 'opacity-0 -translate-y-16',
  fadeIn: 'opacity-0 scale-95',
  scaleUp: 'opacity-0 scale-75',
  flipIn: 'opacity-0 rotateX-90',
  slideBottomLeft: 'opacity-0 translate-x-32 translate-y-32',
  slideBottomRight: 'opacity-0 -translate-x-32 translate-y-32',
  slightBottomLeft: 'opacity-0 translate-x-16 translate-y-16',
  slightBottomRight: 'opacity-0 -translate-x-16 translate-y-16',
  spinIn: 'opacity-0 rotate-180 scale-90',
  spinFromLeft: 'opacity-0 -translate-x-64 rotate-180 scale-90',
  spinFromRight: 'opacity-0 translate-x-64 rotate-180 scale-90',
  slightspinFromLeft: 'opacity-0 -translate-x-16 rotate-90 scale-90',
  spinRollLeft: 'opacity-0 -translate-x-64 rotate-360 scale-90',
  spinRollRight: 'opacity-0 translate-x-64 rotate-360 scale-90',
  MidUp : 'opacity-0 translate-y-32'
};

const EASINGS = {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  gentle: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

const ScrollReveal = ({
  children,
  className = '',
  animation = 'slideLeft',
  duration = 800,
  delay = 0,
  easing = 'smooth',
  index = 0,
  stagger = 0,
  disableBelow = 'md' // Default to disable animations below md
}) => {
  const elementRef = useRef(null);
  const animationCompleted = useRef(false);
  const isDisabled = typeof window !== 'undefined' && window.innerWidth < 768; // md breakpoint

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (isDisabled) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.style.transition = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationCompleted.current) {
            const totalDelay = delay + (index * stagger);
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translate(0, 0) rotate(0) scale(1)';
              animationCompleted.current = true;
            }, totalDelay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, duration, easing, index, stagger]);

  return (
    <div
      ref={elementRef}
      className={`${isDisabled ? '' : ANIMATIONS[animation]} ${className}`}
      style={{
        willChange: isDisabled ? 'none' : 'transform, opacity',
        transition: isDisabled ? 'none' : `all ${duration}ms ${EASINGS[easing]}`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;