import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const Book = ({ cover, spine }) => {
  const bookRef = useRef();
  const [hovered, setHovered] = useState(false);

  const coverTexture = useLoader(TextureLoader, cover);
  const spineTexture = useLoader(TextureLoader, spine);

  // Rotate book smoothly only on hover
  useFrame(() => {
    if (bookRef.current) {
      bookRef.current.rotation.y = THREE.MathUtils.lerp(
        bookRef.current.rotation.y,
        hovered ? 0 : Math.PI / 2.5,
        0.08
      );
      bookRef.current.rotation.x = THREE.MathUtils.lerp(
        bookRef.current.rotation.x,
        hovered ? 0 : 0.5,
        0.08
      );
    }
  });

  return (
    <group
      ref={bookRef}
      scale={[1.5, 1.5, 1.5]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <boxGeometry args={[1, 1.4, 0.2]} />
        {/* Define each book face */}
        <meshStandardMaterial attach="material-0" map={coverTexture} /> {/* right */}
        <meshStandardMaterial attach="material-1" map={spineTexture} /> {/* left */}
        <meshStandardMaterial attach="material-2" color="#fff" /> {/* top */}
        <meshStandardMaterial attach="material-3" color="#fff" /> {/* bottom */}
        <meshStandardMaterial attach="material-4" map={coverTexture} /> {/* front */}
        <meshStandardMaterial attach="material-5" color="#fff" /> {/* back */}
      </mesh>
    </group>
  );
};

const BookModel = ({ cover, spine }) => {
  return (
    <div className="w-[250px] h-[500px] flex justify-center items-center bg-black">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 2]} intensity={4} />

        <Book cover={cover} spine={spine} />

        {/* Disable all user interaction */}
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default BookModel;
