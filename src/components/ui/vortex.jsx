// "use client";
// import { cn } from "@/lib/utils";
// import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
// import { createNoise3D } from "simplex-noise";
// import { motion } from "framer-motion";
// import RetroGrid from "./retro-grid";
// import { isMobile as isMobileDevice } from "react-device-detect";

// export const Vortex = (props) => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const animationFrameId = useRef(null);
//   const noise3D = useRef(createNoise3D());
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const [isMobile, setIsMobile] = useState(isMobileDevice);
//   const center = useRef([0, 0]);
//   const tick = useRef(0);
//   const lastFrameTime = useRef(0);
//   const targetFPS = useRef(isMobile ? 30 : 60);
//   const frameInterval = useRef(1000 / targetFPS.current);

//   // Configuration
//   const config = useMemo(() => ({
//     baseRadius: isMobile ? 0.3 : 1,
//     rangeRadius: isMobile ? 0.5 : 1.5,
//     baseHue: 220,
//     rangeHue: 60,
//     noiseSteps: isMobile ? 4 : 6,
//     particleCount: isMobile ? 30 : 200,
//     particlePropCount: 9,
//     rangeY: isMobile ? 40 : props.rangeY || 85,
//     baseTTL: isMobile ? 20 : 40,
//     rangeTTL: isMobile ? 60 : 120,
//     baseSpeed: isMobile ? 0.1 : props.baseSpeed || 0.2,
//     rangeSpeed: isMobile ? 0.8 : props.rangeSpeed || 1.5,
//     xOff: isMobile ? 0.001 : 0.00175,
//     yOff: isMobile ? 0.001 : 0.00175,
//     zOff: isMobile ? 0.0003 : 0.00075,
//     backgroundColor: props.backgroundColor || 'transparent'
//   }), [isMobile, props.rangeY, props.baseSpeed, props.rangeSpeed, props.backgroundColor]);

//   const particleProps = useRef(new Float32Array(config.particleCount * config.particlePropCount));

//   // Utility functions
//   const rand = useCallback((n) => n * Math.random(), []);
//   const randRange = useCallback((n) => n - rand(2 * n), [rand]);
//   const fadeInOut = useCallback((t, m) => {
//     let hm = 0.5 * m;
//     return Math.abs(((t + hm) % m) - hm) / hm;
//   }, []);
//   const lerp = useCallback((n1, n2, speed) => (1 - speed) * n1 + speed * n2, []);

//   // Particle initialization
//   const initParticle = useCallback((i) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     let x = rand(canvas.width * 1.2) - canvas.width * 0.1;
//     let y = center.current[1] + randRange(config.rangeY * 1.5);
//     let vx = 0;
//     let vy = 0;
//     let life = 0;
//     let ttl = config.baseTTL + rand(config.rangeTTL);
//     let speed = config.baseSpeed + rand(config.rangeSpeed);
//     let radius = config.baseRadius + rand(config.rangeRadius);
//     let hue = config.baseHue + rand(config.rangeHue);

//     particleProps.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
//   }, [config, rand, randRange]);

//   const initParticles = useCallback(() => {
//     tick.current = 0;
//     for (let i = 0; i < config.particleCount * config.particlePropCount; i += config.particlePropCount) {
//       initParticle(i);
//     }
//   }, [config.particleCount, config.particlePropCount, initParticle]);

//   // Bounds checking
//   const checkBounds = useCallback((x, y) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return true;
//     return (
//       x > canvas.width * 1.1 ||
//       x < -canvas.width * 0.1 ||
//       y > canvas.height * 1.1 ||
//       y < -canvas.height * 0.1
//     );
//   }, []);

//   // Particle drawing
//   const drawParticle = useCallback((x, y, x2, y2, life, ttl, radius, hue, ctx) => {
//     ctx.save();
//     ctx.lineCap = "round";
//     ctx.lineWidth = radius;
//     ctx.strokeStyle = `hsla(${hue},85%,65%,${fadeInOut(life, ttl)})`;
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
//     ctx.closePath();
//     ctx.restore();
//   }, [fadeInOut]);

//   const updateParticle = useCallback((i, ctx) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     let i2 = 1 + i,
//         i3 = 2 + i,
//         i4 = 3 + i,
//         i5 = 4 + i,
//         i6 = 5 + i,
//         i7 = 6 + i,
//         i8 = 7 + i,
//         i9 = 8 + i;

//     let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

//     x = particleProps.current[i];
//     y = particleProps.current[i2];
//     n = noise3D.current(x * config.xOff, y * config.yOff, tick.current * config.zOff) * config.noiseSteps * (2 * Math.PI);
//     vx = lerp(particleProps.current[i3], Math.cos(n), 0.6);
//     vy = lerp(particleProps.current[i4], Math.sin(n), 0.6);
//     life = particleProps.current[i5];
//     ttl = particleProps.current[i6];
//     speed = particleProps.current[i7];
//     x2 = x + vx * speed;
//     y2 = y + vy * speed;
//     radius = particleProps.current[i8];
//     hue = particleProps.current[i9];

//     drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

//     life++;

//     particleProps.current[i] = x2;
//     particleProps.current[i2] = y2;
//     particleProps.current[i3] = vx;
//     particleProps.current[i4] = vy;
//     particleProps.current[i5] = life;

//     (checkBounds(x, y) || life > ttl) && initParticle(i);
//   }, [config, lerp, drawParticle, checkBounds, initParticle]);

//   const drawParticles = useCallback((ctx) => {
//     for (let i = 0; i < config.particleCount * config.particlePropCount; i += config.particlePropCount) {
//       updateParticle(i, ctx);
//     }
//   }, [config.particleCount, config.particlePropCount, updateParticle]);

//   // Rendering effects
//   const renderGlow = useCallback((canvas, ctx) => {
//     ctx.save();
//     ctx.filter = "blur(8px) brightness(180%)";
//     ctx.globalCompositeOperation = "lighter";
//     ctx.drawImage(canvas, 0, 0);
//     ctx.restore();

//     ctx.save();
//     ctx.filter = "blur(4px) brightness(180%)";
//     ctx.globalCompositeOperation = "lighter";
//     ctx.drawImage(canvas, 0, 0);
//     ctx.restore();
//   }, []);

//   const renderToScreen = useCallback((canvas, ctx) => {
//     ctx.save();
//     ctx.globalCompositeOperation = "lighter";
//     ctx.drawImage(canvas, 0, 0);
//     ctx.restore();
//   }, []);

//   // Main draw function
//   const draw = useCallback((canvas, ctx) => {
//     if (!canvas || !ctx) return;

//     const currentTime = performance.now();
//     const elapsed = currentTime - lastFrameTime.current;

//     if (elapsed < frameInterval.current) {
//       animationFrameId.current = requestAnimationFrame(() => draw(canvas, ctx));
//       return;
//     }

//     lastFrameTime.current = currentTime - (elapsed % frameInterval.current);
//     tick.current++;

//     // Clear with transparency
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Only fill background if explicitly provided
//     if (props.backgroundColor) {
//       ctx.fillStyle = props.backgroundColor;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     }

//     ctx.beginPath();
//     drawParticles(ctx);
//     ctx.stroke();

//     if (!isMobile) {
//       renderGlow(canvas, ctx);
//     }
//     renderToScreen(canvas, ctx);

//     animationFrameId.current = requestAnimationFrame(() => draw(canvas, ctx));
//   }, [config, isMobile, drawParticles, renderGlow, renderToScreen, frameInterval, props.backgroundColor]);

//   // Resize handling
//   const handleResize = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const scale = isMobile ? 0.75 : 1;
//     const width = window.innerWidth * scale;
//     const height = window.innerHeight * scale;

//     canvas.style.width = `${window.innerWidth}px`;
//     canvas.style.height = `${window.innerHeight}px`;
//     canvas.width = width;
//     canvas.height = height;
    
//     center.current = [0.5 * width, 0.5 * height];
//     setDimensions({ width, height });
//   }, [isMobile]);

//   // Setup and cleanup
//   useEffect(() => {
//     let resizeTimeout;
//     const resizeObserver = new ResizeObserver((entries) => {
//       const { width } = entries[0].contentRect;
//       setIsMobile(width < 768 || isMobileDevice);
      
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(handleResize, 150);
//     });

//     if (containerRef.current) {
//       resizeObserver.observe(containerRef.current);
//     }

//     // Set initial mobile state considering both width and device type
//     setIsMobile(window.innerWidth < 768 || isMobileDevice);

//     const canvas = canvasRef.current;
//     if (canvas) {
//       const ctx = canvas.getContext('2d', {
//         alpha: true,
//         desynchronized: true,
//         willReadFrequently: false
//       });
//       if (ctx) {
//         ctx.imageSmoothingEnabled = !isMobile;
//         ctx.imageSmoothingQuality = isMobile ? 'low' : 'high';
//         handleResize();
//         initParticles();
//         draw(canvas, ctx);
//       }
//     }

//     return () => {
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//       resizeObserver.disconnect();
//       clearTimeout(resizeTimeout);
//     };
//   }, [handleResize, draw, initParticles, isMobile]);

//   return (
//     <div className={cn("relative h-full w-full  bg-transparent", props.containerClassName)}>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         ref={containerRef}
//         className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
//         style={{
//           willChange: "transform",
//           transform: "translate3d(0,0,0)",
//           backfaceVisibility: "hidden",
//           perspective: 1000,
//           WebkitPerspective: 1000
//         }}
//       >
//         <canvas
//           className="absolute w-full overflow-x-clip h-[47rem] top-[-21rem] max-h-[1100px]"
//           ref={canvasRef}
//           style={{
//             willChange: "transform",
//             transform: "translate3d(0,0,0)",
//             backfaceVisibility: "hidden",
//             perspective: 1000,
//             WebkitPerspective: 1000
//           }}
//         />
//       </motion.div>
//       <div className={cn("relative z-10 overflow-hidden ", props.className)}>
//         {props.children}
//         <RetroGrid dimensions={dimensions} isMobile={isMobile} />
//       </div>
//     </div>
//   );
// };

// export default Vortex;
"use client";
import {isMobile} from "react-device-detect"
import { cn } from "@/lib/utils";
import React, { useEffect,useState, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

export const Vortex = (props) => {



  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });



  const baseSpeed=isMobile ? 0.05 : 0.25;
  const baseRadius=isMobile ? 0.7 : 1;
  const rangeY=isMobile ? 120 : 150;
  const canvasRef = useRef(null);
  const containerRef = useRef(null); 
  const particleCount = isMobile? 15 : 100;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  // const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  // const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  // const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";


  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  const HALF_PI = 0.5 * Math.PI;
  const TAU = 2 * Math.PI;
  const TO_RAD = Math.PI / 180;
  const rand = (n) => n * Math.random();
  const randRange = (n) => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) =>
    (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = rand(canvas.width);
    y = center[1] + randRange(rangeY);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas, ctx) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    window.requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i, ctx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i;
    let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

    x = particleProps[i];
    y = particleProps[i2];
    n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    vx = lerp(particleProps[i3], Math.cos(n), 0.5);
    vy = lerp(particleProps[i4], Math.sin(n), 0.5);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    radius = particleProps[i8];
    hue = particleProps[i9];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x, y, x2, y2, life, ttl, radius, hue, ctx
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x, y, canvas) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0;
  };

  const resize = (canvas, ctx) => {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const renderGlow = (canvas, ctx) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (canvas, ctx) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas, ctx);
      }
    });
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
    <div
        className={cn(
          "absolute inset-0 block sm:hidden",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className=" flex sm:hidden pointer-events-none absolute inset-0  items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10 ", props.className)}>
        {props.children}
    
       
        
      
      </div>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
};