import React, { useRef, useState, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";

// Book component
function Book({ coverUrl, position = [0, 0, 0] }) {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(coverUrl);

  // Book dimensions (in scene units)
  const thickness = 0.3; // total book thickness
  const height = 3.05;
  const width = 2.0;

  // Materials
  const coverMat = useMemo(
    () => new THREE.MeshStandardMaterial({ map: texture }),
    [texture]
  );
  const pageMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#fffdf5" }),
    []
  );
  const spineMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#bfbfbf" }),
    []
  );

  // Animate rotation on hover (spine → front)
  useFrame(() => {
    if (!group.current) return;
    const targetY = hovered ? 0 : Math.PI / 2; // start spine, rotate to front
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.08;
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={[0, Math.PI / 2, 0]} // show spine initially
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Pages block */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[thickness * 0.6, height * 0.95, width * 0.95]} />
        <primitive object={pageMat} attach="material" />
      </mesh>

      {/* Spine (center thin section) */}
      <mesh position={[-thickness / 2, 0, 0]} castShadow>
        <boxGeometry args={[thickness * 0.2, height, width * 0.98]} />
        <primitive object={spineMat} attach="material" />
      </mesh>

      {/* Front Cover */}
      <mesh
        position={[thickness / 2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        castShadow
      >
        <planeGeometry args={[width, height]} />
        <primitive object={coverMat} attach="material" />
      </mesh>

      {/* Back Cover (same width as front) */}
      <mesh
        position={[-thickness / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        castShadow
      >
        <planeGeometry args={[width, height]} />
        <primitive object={coverMat} attach="material" />
      </mesh>
    </group>
  );
}

// Scene with multiple books
function Scene() {
  const coverUrls = [
    "/covers/book1.png",
    "/covers/book2.png",
    "/covers/book3.png",
    "/covers/book4.png",
    "/covers/book5.png",
    "/covers/book6.png",
  ];

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <Suspense fallback={null}>
        {coverUrls.map((url, i) => (
          <Book key={i} coverUrl={url} position={[i * 2.8 - 7, 0, 0]} />
        ))}
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function BookScrollSection() {
  return (
    <section className="relative h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </section>
  );
}
