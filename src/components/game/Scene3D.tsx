import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

// Rock formation component
const RockFormation = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  return (
    <group position={position}>
      {/* Central large rock */}
      <mesh position={[0, 0.5 * scale, 0]} castShadow>
        <dodecahedronGeometry args={[0.6 * scale, 0]} />
        <meshStandardMaterial color="#9e8a6f" roughness={0.9} />
      </mesh>
      {/* Surrounding smaller rocks */}
      <mesh position={[0.3 * scale, 0.2 * scale, 0.2 * scale]} castShadow>
        <dodecahedronGeometry args={[0.3 * scale, 0]} />
        <meshStandardMaterial color="#b5a18a" roughness={0.9} />
      </mesh>
      <mesh position={[-0.3 * scale, 0.15 * scale, -0.2 * scale]} castShadow>
        <dodecahedronGeometry args={[0.25 * scale, 0]} />
        <meshStandardMaterial color="#8a7a62" roughness={0.9} />
      </mesh>
    </group>
  );
};

// Building component
const Building = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Main building structure */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#c9b8a0" roughness={0.8} />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <boxGeometry args={[0.85, 0.1, 0.85]} />
        <meshStandardMaterial color="#8a6f5a" roughness={0.9} />
      </mesh>
      {/* Damage detail */}
      <mesh position={[0.3, 0.6, 0.4]} castShadow>
        <boxGeometry args={[0.2, 0.3, 0.1]} />
        <meshStandardMaterial color="#7a5f4a" roughness={0.9} />
      </mesh>
    </group>
  );
};

// Crate/barrel component
const Crate = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color="#6b5844" roughness={0.7} />
    </mesh>
  );
};

// Main 3D scene
const Scene3DContent = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#d4ba8f" roughness={0.9} />
      </mesh>

      {/* King's Hill - Central rock formation (largest) */}
      <RockFormation position={[0, 0, 0]} scale={1.5} />

      {/* Secondary rock formations */}
      <RockFormation position={[4, 0, 3]} scale={0.8} />
      <RockFormation position={[-3, 0, 4]} scale={0.9} />
      <RockFormation position={[5, 0, -3]} scale={0.7} />
      <RockFormation position={[-4, 0, -4]} scale={0.8} />

      {/* Buildings around the perimeter */}
      <Building position={[3, 0, -5]} />
      <Building position={[-3, 0, -5]} />
      <Building position={[5, 0, 0]} />
      <Building position={[-5, 0, 1]} />
      <Building position={[2, 0, 5]} />
      <Building position={[-4, 0, 5]} />
      <Building position={[6, 0, 3]} />
      <Building position={[-6, 0, -2]} />

      {/* Crates and barrels */}
      <Crate position={[2, 0.15, -3]} />
      <Crate position={[-2, 0.15, 3]} />
      <Crate position={[4, 0.15, 1]} />
      <Crate position={[-3, 0.15, -2]} />

      {/* Camera and controls */}
      <PerspectiveCamera makeDefault position={[8, 8, 8]} fov={50} />
      <OrbitControls 
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene3DContent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
