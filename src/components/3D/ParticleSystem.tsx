"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function ParticleSystem() {
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      // Use deterministic values based on index
      const x = (((i * 0.1) % 1) - 0.5) * 20;
      const y = (((i * 0.3) % 1) - 0.5) * 20;
      const z = (((i * 0.7) % 1) - 0.5) * 20;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    return positions;
  }, []);

  const particlesColors = useMemo(() => {
    const colors = new Float32Array(2000 * 3);
    const colorPalette = [
      new THREE.Color("#00ff88"), // neon green
      new THREE.Color("#00d4ff"), // electric blue
      new THREE.Color("#ff0080"), // neon pink
      new THREE.Color("#8b5cf6"), // electric purple
    ];

    for (let i = 0; i < 2000; i++) {
      const color = colorPalette[i % colorPalette.length];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return colors;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} colors={particlesColors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
