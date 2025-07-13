"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Box, Torus, Octahedron, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface FloatingElementsProps {
  mousePosition: { x: number; y: number }
}

export default function FloatingElements({ mousePosition }: FloatingElementsProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.position.x = mousePosition.x * 0.5
      groupRef.current.position.y = mousePosition.y * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Distorted Sphere */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8]} position={[-4, 2, -2]}>
          <MeshDistortMaterial
            color="#00ff88"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Glowing Sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.4]} position={[4, -1, -1]}>
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Morphing Box */}
      <Float speed={1.8} rotationIntensity={2} floatIntensity={1}>
        <Box args={[1, 1, 1]} position={[3, 3, -3]}>
          <MeshDistortMaterial
            color="#ff0080"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.7}
          />
        </Box>
      </Float>

      {/* Animated Torus */}
      <Float speed={1.2} rotationIntensity={1} floatIntensity={2.5}>
        <Torus args={[0.8, 0.3, 16, 32]} position={[-3, -2, -2]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.7}
            roughness={0.1}
            metalness={0.8}
          />
        </Torus>
      </Float>

      {/* Crystal Octahedron */}
      <Float speed={2.5} rotationIntensity={3} floatIntensity={1.8}>
        <Octahedron args={[0.9]} position={[2, -3, -1]}>
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.8}
          />
        </Octahedron>
      </Float>
    </group>
  )
}
