import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WaveSphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.002;

    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <mesh ref={mesh} scale={3}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial
        color="#2563eb"
        distort={0.55}
        speed={2}
        roughness={0}
        metalness={0.2}
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

export default function WaterBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          color="#60a5fa"
        />

        <WaveSphere />
      </Canvas>
    </div>
  );
}