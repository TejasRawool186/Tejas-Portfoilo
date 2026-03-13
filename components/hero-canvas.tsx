"use client";

import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Cube({
  position,
  scale,
  color,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color={color}
          emissive="#0b1220"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
          distort={0.15}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function Orb({
  position,
  scale,
  color,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.4} />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.3),transparent_32%),linear-gradient(180deg,#0f1b34_0%,#111d38_45%,#0b1220_100%)]">
      <div className="absolute inset-x-8 top-8 flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-white/55">
        <span>AI Visual Layer</span>
        <span>R3F Scene</span>
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 4]} intensity={1.6} color="#8B5CF6" />
        <directionalLight position={[-3, -2, 2]} intensity={1.1} color="#22D3EE" />
        <pointLight position={[0, 0, 2]} intensity={0.6} color="#6366F1" />
        <Cube position={[-1.6, 1.25, -0.4]} scale={1.2} color="#e2e8f0" />
        <Cube position={[1.4, -0.15, -0.9]} scale={1.45} color="#8B5CF6" />
        <Cube position={[0.25, 1.2, -1.8]} scale={0.8} color="#22D3EE" />
        <Orb position={[-0.4, -1.25, 0.2]} scale={0.55} color="#f8fafc" />
        <Orb position={[1.2, 1.3, 0.6]} scale={0.4} color="#f59e0b" />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-[1.5rem] bg-white/[0.04] p-4 backdrop-blur-md">
        <p className="font-display text-lg text-white">Practical systems, minimal surfaces.</p>
        <p className="mt-1 text-sm text-slate-300">
          Floating abstract cubes reflect the portfolio theme without turning the hero into decoration only.
        </p>
      </div>
    </div>
  );
}
