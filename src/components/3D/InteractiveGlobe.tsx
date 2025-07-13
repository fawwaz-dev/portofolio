"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import type * as THREE from "three"

interface InteractiveGlobeProps {
  mousePosition: { x: number; y: number }
}

export default function InteractiveGlobe({ mousePosition }: InteractiveGlobeProps) {
  const globeRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.2
      globeRef.current.position.x = mousePosition.x * 0.2
      globeRef.current.position.y = mousePosition.y * 0.1
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = state.clock.elapsedTime * -0.1
      wireframeRef.current.rotation.x = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group position={[0, 0, -5]}>
      {/* Main Globe with Distortion */}
      <Sphere
        ref={globeRef}
        args={[2.5, 64, 64]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#00ff88" : "#00d4ff"}
          attach="material"
          distort={hovered ? 0.6 : 0.3}
          speed={2}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>

      {/* Wireframe Overlay */}
      <Sphere ref={wireframeRef} args={[2.6, 32, 32]}>
        <meshBasicMaterial
          color={hovered ? "#ff0080" : "#00ff88"}
          wireframe
          transparent
          opacity={hovered ? 0.9 : 0.5}
        />
      </Sphere>

      {/* Inner Core */}
      <Sphere args={[0.8]}>
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} transparent opacity={0.7} />
      </Sphere>

      {/* Orbiting Elements */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={0.5}>
          <Sphere args={[0.1]} position={[Math.cos((i / 8) * Math.PI * 2) * 4, Math.sin((i / 8) * Math.PI * 2) * 4, 0]}>
            <meshStandardMaterial
              color={["#00ff88", "#00d4ff", "#ff0080", "#8b5cf6"][i % 4]}
              emissive={["#00ff88", "#00d4ff", "#ff0080", "#8b5cf6"][i % 4]}
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}
