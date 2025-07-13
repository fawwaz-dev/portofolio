"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox, Cylinder, Cone } from "@react-three/drei"
import type * as THREE from "three"

export default function AnimatedShapes() {
  const group1Ref = useRef<THREE.Group>(null)
  const group2Ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group1Ref.current) {
      group1Ref.current.rotation.x = state.clock.elapsedTime * 0.3
      group1Ref.current.rotation.z = state.clock.elapsedTime * 0.2
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.y = state.clock.elapsedTime * -0.4
      group2Ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <>
      {/* Animated Group 1 - Cyberpunk Colors */}
      <group ref={group1Ref} position={[-6, 0, -3]}>
        <RoundedBox args={[1, 1, 1]} radius={0.1}>
          <meshStandardMaterial
            color="#ff0080"
            emissive="#ff0080"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </RoundedBox>
      </group>

      {/* Animated Group 2 - Enhanced Cyberpunk */}
      <group ref={group2Ref} position={[6, 2, -4]}>
        <Cylinder args={[0.5, 0.8, 1.5, 8]}>
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.4}
            roughness={0.05}
            metalness={0.95}
          />
        </Cylinder>

        <Cone args={[0.6, 1, 6]} position={[0, 1.5, 0]}>
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </Cone>
      </group>
    </>
  )
}
