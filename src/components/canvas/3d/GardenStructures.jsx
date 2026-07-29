import React from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const EntranceArchGate = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Left Pillar */}
      <mesh position={[-3, 3, 0]}>
        <boxGeometry args={[0.8, 6, 0.8]} />
        <meshStandardMaterial color="#EBE2CD" roughness={0.6} />
      </mesh>

      {/* Right Pillar */}
      <mesh position={[3, 3, 0]}>
        <boxGeometry args={[0.8, 6, 0.8]} />
        <meshStandardMaterial color="#EBE2CD" roughness={0.6} />
      </mesh>

      {/* Top Arch Bar */}
      <mesh position={[0, 6.2, 0]}>
        <boxGeometry args={[7, 0.6, 1]} />
        <meshStandardMaterial color="#2D5A3F" roughness={0.4} />
      </mesh>

      {/* Gold Signboard Header */}
      <mesh position={[0, 7.2, 0.1]}>
        <boxGeometry args={[5.2, 1.0, 0.2]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* 3D Gold Text Banner */}
      <Text
        position={[0, 7.2, 0.25]}
        fontSize={0.38}
        color="#1E3A2B"
        font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_RJ3ijVRub3A.woff"
        anchorX="center"
        anchorY="middle"
      >
        RAHMAN NURSERY FARM
      </Text>

      {/* Lantern Lights */}
      {[-3, 3].map((x, idx) => (
        <group key={idx} position={[x, 5.5, 0.6]}>
          <mesh>
            <boxGeometry args={[0.3, 0.5, 0.3]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} />
          </mesh>
          <pointLight color="#FFB74D" intensity={1.5} distance={5} />
        </group>
      ))}
    </group>
  );
};

export const GlassGreenhouse = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Structural Steel Frame */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[8, 5, 10]} />
        <meshStandardMaterial
          color="#A3C4AC"
          wireframe={true}
          roughness={0.2}
        />
      </mesh>

      {/* Translucent Frosted Glass Walls */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[7.9, 4.9, 9.9]} />
        <meshPhysicalMaterial
          color="#E1EBE4"
          transparent={true}
          opacity={0.35}
          roughness={0.1}
          transmission={0.8}
          thickness={0.5}
        />
      </mesh>
    </group>
  );
};

export const WaterStreamPond = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Water Surface Sheet */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial
          color="#00695C"
          roughness={0.05}
          metalness={0.6}
          opacity={0.85}
          transparent={true}
        />
      </mesh>
      {/* Stone Border Rocks */}
      {Array.from({ length: 16 }).map((_, i) => {
        const x = -5.5 + i * 0.75;
        const z = (i % 2 === 0 ? 2.1 : -2.1);
        return (
          <mesh key={i} position={[x, 0.1, z]}>
            <dodecahedronGeometry args={[0.25, 1]} />
            <meshStandardMaterial color="#78909C" roughness={0.9} />
          </mesh>
        );
      })}
    </group>
  );
};
