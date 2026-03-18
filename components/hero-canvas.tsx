"use client";

import { Float, OrbitControls } from "@react-three/drei";
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
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
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
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <div className="bauhaus-panel relative h-[420px] w-full overflow-hidden bg-card">
      <div className="absolute inset-x-0 top-0 bauhaus-strip">
        <span className="bg-highlight" />
        <span className="bg-secondary" />
        <span className="bg-primary" />
      </div>
      <div className="absolute inset-x-8 top-8 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4d4842]">
        <span>Form / Function</span>
        <span>Geometric System</span>
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={["#F0EDE8"]} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[2, 3, 4]} intensity={1.2} color="#1D4ED8" />
        <directionalLight position={[-3, -2, 2]} intensity={0.8} color="#E63946" />
        <pointLight position={[0, 0, 2]} intensity={0.5} color="#FFB703" />
        <Cube position={[-1.6, 1.15, -0.4]} scale={1.2} color="#1D4ED8" />
        <Cube position={[1.4, -0.1, -0.9]} scale={1.45} color="#E63946" />
        <Cube position={[0.2, 1.15, -1.8]} scale={0.8} color="#1A1A1A" />
        <Orb position={[-0.45, -1.2, 0.2]} scale={0.55} color="#FAFAF8" />
        <Orb position={[1.15, 1.25, 0.6]} scale={0.4} color="#FFB703" />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.9} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-8 bottom-8 border-2 border-ink bg-background p-4 shadow-[4px_4px_0_#1A1A1A]">
        <p className="font-display text-lg font-extrabold uppercase tracking-[-0.02em] text-ink">
          Practical systems, structural visuals.
        </p>
        <p className="mt-1 text-sm leading-6 text-[#4d4842]">
          Squares, spheres, and contrast blocks keep the hero expressive while staying true to the Bauhaus grid.
        </p>
      </div>
    </div>
  );
}
