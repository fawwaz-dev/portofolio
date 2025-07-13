"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import FloatingElements from "./FloatingElements";
import InteractiveGlobe from "./InteractiveGlobe";
import AnimatedShapes from "./AnimatedShapes";
import ParticleSystem from "./ParticleSystem";

interface Scene3DProps {
  mousePosition: { x: number; y: number };
}

export default function Scene3D({ mousePosition }: Scene3DProps) {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check device performance capabilities
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = navigator.hardwareConcurrency <= 4;
      const hasReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setIsLowPerformance(isMobile || isLowEnd || hasReducedMotion);
    };

    checkPerformance();
    window.addEventListener("resize", checkPerformance);

    return () => window.removeEventListener("resize", checkPerformance);
  }, []);

  useEffect(() => {
    // Delay 3D scene loading for better initial page load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return <div className="absolute inset-0 -z-10 bg-cyber-dark" />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{
          antialias: !isLowPerformance,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={isLowPerformance ? 1 : [1, 2]}
        className="hidden sm:block"
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Optimized Lighting */}
          <ambientLight intensity={0.2} color="#00ff88" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            color="#ffffff"
          />
          {!isLowPerformance && (
            <>
              <pointLight
                position={[-10, -10, -5]}
                color="#00ff88"
                intensity={1.2}
              />
              <pointLight
                position={[10, -10, 5]}
                color="#00d4ff"
                intensity={1.0}
              />
              <pointLight
                position={[0, 10, -5]}
                color="#ff0080"
                intensity={0.8}
              />
            </>
          )}

          {/* Cyberpunk Environment */}
          <Environment preset="night" />

          {/* Conditional 3D Elements */}
          {!isLowPerformance && (
            <>
              <FloatingElements mousePosition={mousePosition} />
              <InteractiveGlobe mousePosition={mousePosition} />
              <AnimatedShapes />
              <ParticleSystem />
            </>
          )}

          {/* Simplified Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isLowPerformance}
            autoRotate={!isLowPerformance}
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
