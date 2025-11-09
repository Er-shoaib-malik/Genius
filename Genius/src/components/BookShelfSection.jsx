import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

// Individual Book component
function Book({ position, textureUrl }) {
  const bookRef = useRef();
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(TextureLoader, textureUrl);

  // Animate rotation smoothly on hover
  useFrame(() => {
    if (bookRef.current) {
      bookRef.current.rotation.y = THREE.MathUtils.lerp(
        bookRef.current.rotation.y,
        hovered ? 0 : Math.PI / 2, // 90° shows spine, 0° shows front cover
        0.08
      );
    }
  });

  return (
    <group
      ref={bookRef}
      position={position}
      rotation={[0, Math.PI / 2, 0]} // show only spine initially
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Book Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.2, 3, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

// Main Shelf Section
export default function BookShelfSection() {
  const books = [
    { textureUrl: "/covers/book1.png", x: -6 },
    { textureUrl: "/covers/book2.png", x: -3.5 },
    { textureUrl: "/covers/book3.png", x: -1 },
    { textureUrl: "/covers/book4.png", x: 1.5 },
    { textureUrl: "/covers/book5.png", x: 4 },
    { textureUrl: "/covers/book6.png", x: 6.5 },
  ];

  return (
    <section className="w-full h-[600px] bg-black flex items-center justify-center">
      <Canvas
        shadows
        camera={{ position: [0, 2, 10], fov: 50 }}
        style={{ background: "#000" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          {/* Bookshelf surface */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
            <planeGeometry args={[30, 20]} />
            <meshStandardMaterial color="#222" />
          </mesh>

          {/* Books */}
          {books.map((b, i) => (
            <Book key={i} position={[b.x, 0, 0]} textureUrl={b.textureUrl} />
          ))}
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </section>
  );
}
