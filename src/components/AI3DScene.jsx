import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#0ea5e9"
        roughness={0.1}
        metalness={0.8}
        emissive="#001122"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function Particles() {
  const points = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#10b981" />
    </points>
  );
}

const AI3DScene = () => {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#0ea5e9" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#10b981" />
        
        <AnimatedSphere />
        <Particles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default AI3DScene;