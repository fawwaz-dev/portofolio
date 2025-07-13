"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import FloatingElements from "./FloatingElements";
import InteractiveGlobe from "./InteractiveGlobe";
import AnimatedShapes from "./AnimatedShapes";
import ParticleSystem from "./ParticleSystem";

interface Scene3DProps {
  mousePosition: { x: number; y: number };
}

export default function Scene3D({ mousePosition }: Scene3DProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="hidden sm:block"
      >
        <Suspense fallback={null}>
          {/* Cyberpunk Lighting */}
          <ambientLight intensity={0.2} color="#00ff88" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            color="#ffffff"
          />
          <pointLight
            position={[-10, -10, -5]}
            color="#00ff88"
            intensity={1.2}
          />
          <pointLight position={[10, -10, 5]} color="#00d4ff" intensity={1.0} />
          <pointLight position={[0, 10, -5]} color="#ff0080" intensity={0.8} />

          {/* Cyberpunk Environment */}
          <Environment preset="night" />

          {/* 3D Elements with Cyberpunk Colors */}
          <FloatingElements mousePosition={mousePosition} />
          <InteractiveGlobe mousePosition={mousePosition} />
          <AnimatedShapes />
          <ParticleSystem />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
