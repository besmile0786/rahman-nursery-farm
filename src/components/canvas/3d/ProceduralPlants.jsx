import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ============================================================
   WindPlantGroup – natural gentle sway base wrapper
   ============================================================ */
export const WindPlantGroup = ({
  children,
  windSpeed = 1.0,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  onClick,
}) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() * windSpeed;
      groupRef.current.rotation.z = rotation[2] + Math.sin(t * 1.2) * 0.025;
      groupRef.current.rotation.x = rotation[0] + Math.cos(t * 0.9) * 0.015;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      scale={scale}
      rotation={rotation}
      onClick={onClick}
    >
      {children}
    </group>
  );
};

/* ============================================================
   1. Monstera Deliciosa (fenestrated glossy leaves)
   ============================================================ */
export const Monstera3D = ({ position = [0, 0, 0], scale = 1, selected = false, onClick }) => (
  <WindPlantGroup position={position} scale={scale} onClick={onClick}>
    {/* Stem */}
    <mesh position={[0, 0.8, 0]} castShadow>
      <cylinderGeometry args={[0.04, 0.08, 1.6, 8]} />
      <meshStandardMaterial color="#1E3A2B" roughness={0.6} />
    </mesh>

    {/* Leaf blades – 5 fan leaves */}
    {[0, 72, 144, 216, 288].map((angle, idx) => {
      const rad = (angle * Math.PI) / 180;
      const leafY = 0.5 + idx * 0.28;
      return (
        <group
          key={idx}
          position={[Math.sin(rad) * 0.32, leafY, Math.cos(rad) * 0.32]}
          rotation={[0.4, rad, 0.3]}
        >
          {/* Petiole */}
          <mesh position={[0, 0.3, 0]} rotation={[0.3, 0, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.03, 0.7, 6]} />
            <meshStandardMaterial color="#2D5A3F" />
          </mesh>
          {/* Leaf */}
          <mesh position={[0, 0.72, 0.22]} rotation={[1.1, 0, 0]} castShadow>
            <circleGeometry args={[0.48, 14]} />
            <meshStandardMaterial
              color={selected ? '#4A7C59' : '#2A5235'}
              roughness={0.2}
              metalness={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Fenestration slot */}
          {idx % 2 === 0 && (
            <mesh position={[0.12, 0.72, 0.22]} rotation={[1.1, 0, 0]}>
              <circleGeometry args={[0.1, 8]} />
              <meshStandardMaterial color="#1B3D28" side={THREE.DoubleSide} />
            </mesh>
          )}
        </group>
      );
    })}
  </WindPlantGroup>
);

/* ============================================================
   2. Royal Date Palm Tree (tall trunk, 14-frond canopy)
   ============================================================ */
export const PalmTree3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={0.7} onClick={onClick}>
    {/* Segmented trunk */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <mesh key={i} position={[0, i * 1.0 + 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.28 - i * 0.02, 0.32 - i * 0.02, 1.05, 10]} />
        <meshStandardMaterial
          color={i % 2 === 0 ? '#5A4032' : '#4A3428'}
          roughness={0.9}
        />
      </mesh>
    ))}

    {/* Palm frond canopy */}
    {Array.from({ length: 14 }).map((_, i) => {
      const angle = (i / 14) * Math.PI * 2;
      const tilt = 0.35 + (i % 3) * 0.18;
      return (
        <group key={i} position={[0, 5.9, 0]} rotation={[tilt, angle, 0]}>
          {/* Frond stem */}
          <mesh position={[0, 1.0, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.07, 2.2, 5]} />
            <meshStandardMaterial color="#4A7C59" roughness={0.5} />
          </mesh>
          {/* Frond blade */}
          <mesh position={[0, 2.2, 0]} castShadow>
            <coneGeometry args={[0.38, 2.5, 4]} />
            <meshStandardMaterial color="#3A7251" roughness={0.4} side={THREE.DoubleSide} />
          </mesh>
        </group>
      );
    })}
  </WindPlantGroup>
);

/* ============================================================
   3. Italian Olive Tree (gnarled trunk, silvery cloud foliage)
   ============================================================ */
export const OliveTree3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={0.9} onClick={onClick}>
    {/* Twisted trunk sections */}
    <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0.1]} castShadow>
      <cylinderGeometry args={[0.22, 0.38, 1.6, 8]} />
      <meshStandardMaterial color="#4A3B32" roughness={0.95} />
    </mesh>
    <mesh position={[0.1, 2.2, 0.05]} rotation={[-0.1, 0.4, -0.15]} castShadow>
      <cylinderGeometry args={[0.16, 0.22, 1.4, 8]} />
      <meshStandardMaterial color="#3E3028" roughness={0.95} />
    </mesh>

    {/* Silvery-green foliage cloud clusters */}
    {[
      [-0.4, 2.8, 0.2, 0.9],
      [0.45, 3.1, -0.3, 0.85],
      [0.0, 3.5, 0.4, 0.95],
      [-0.3, 3.7, -0.25, 0.8],
      [0.3, 3.9, 0.15, 0.75],
    ].map(([x, y, z, r], i) => (
      <mesh key={i} position={[x, y, z]} castShadow>
        <dodecahedronGeometry args={[r, 2]} />
        <meshStandardMaterial color={i % 2 === 0 ? '#6A8E72' : '#7FA880'} roughness={0.55} metalness={0.08} />
      </mesh>
    ))}
  </WindPlantGroup>
);

/* ============================================================
   4. Pakistani Kinnu Orange / Citrus Tree
   ============================================================ */
export const CitrusTree3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} onClick={onClick}>
    <mesh position={[0, 1.4, 0]} castShadow>
      <cylinderGeometry args={[0.18, 0.36, 2.8, 9]} />
      <meshStandardMaterial color="#3E2723" />
    </mesh>
    {/* Dense green crown */}
    <mesh position={[0, 2.95, 0]} castShadow>
      <sphereGeometry args={[1.35, 13, 13]} />
      <meshStandardMaterial color="#2E7D32" roughness={0.5} />
    </mesh>
    <mesh position={[0.5, 3.3, 0.5]} castShadow>
      <sphereGeometry args={[0.7, 10, 10]} />
      <meshStandardMaterial color="#388E3C" roughness={0.5} />
    </mesh>
    {/* Kinnu orange fruits */}
    {[
      [0.65, 2.5, 0.7],
      [-0.72, 2.95, 0.45],
      [0.2, 3.25, -0.85],
      [-0.55, 2.25, -0.55],
      [0.85, 3.05, -0.25],
      [-0.3, 3.5, 0.6],
    ].map((fp, idx) => (
      <mesh key={idx} position={fp} castShadow>
        <sphereGeometry args={[0.14, 9, 9]} />
        <meshStandardMaterial color="#FB8C00" roughness={0.25} />
      </mesh>
    ))}
  </WindPlantGroup>
);

/* ============================================================
   5. Pink Flame Bougainvillea Bush
   ============================================================ */
export const Bougainvillea3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={1.5} onClick={onClick}>
    <mesh position={[0, 1.0, 0]} castShadow>
      <cylinderGeometry args={[0.12, 0.24, 2, 6]} />
      <meshStandardMaterial color="#4E342E" />
    </mesh>
    {/* Main green foliage base */}
    <mesh position={[0, 2.2, 0]} castShadow>
      <sphereGeometry args={[1.0, 10, 10]} />
      <meshStandardMaterial color="#4CAF50" roughness={0.6} />
    </mesh>
    {/* Vivid pink bract clusters */}
    {[
      [0.35, 2.0, 0.0, '#D81B60'],
      [-0.45, 2.35, 0.3, '#E91E63'],
      [0.1, 2.7, -0.35, '#AD1457'],
      [0.55, 1.7, 0.45, '#F06292'],
      [-0.2, 2.5, 0.6, '#C2185B'],
    ].map(([x, y, z, col], idx) => (
      <mesh key={idx} position={[x, y, z]} castShadow>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial color={col} roughness={0.35} />
      </mesh>
    ))}
  </WindPlantGroup>
);

/* ============================================================
   6. Master Japanese Bonsai
   ============================================================ */
export const Bonsai3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={0.4} onClick={onClick}>
    {/* Trunk with visible twist */}
    <mesh position={[0, 0.42, 0]} rotation={[0.2, 0.5, -0.3]} castShadow>
      <cylinderGeometry args={[0.07, 0.16, 0.85, 9]} />
      <meshStandardMaterial color="#3E2723" roughness={0.92} />
    </mesh>
    {/* Nebari surface roots */}
    {[0, 72, 144, 216, 288].map((ang, i) => {
      const r = (ang * Math.PI) / 180;
      return (
        <mesh key={i} position={[Math.sin(r) * 0.18, 0.06, Math.cos(r) * 0.18]} rotation={[1.4, r, 0]}>
          <cylinderGeometry args={[0.025, 0.04, 0.22, 5]} />
          <meshStandardMaterial color="#3E2723" roughness={0.9} />
        </mesh>
      );
    })}
    {/* Cloud foliage pads */}
    {[
      [-0.22, 0.72, 0.1, 0.55, 0.2],
      [0.28, 0.92, -0.12, 0.5, 0.18],
      [0, 1.18, 0, 0.58, 0.2],
    ].map(([x, y, z, rx, ry], i) => (
      <mesh key={i} position={[x, y, z]} castShadow>
        <boxGeometry args={[0.55, rx, 0.45]} />
        <meshStandardMaterial color={i % 2 === 0 ? '#1B5E20' : '#2E7D32'} roughness={0.65} />
      </mesh>
    ))}
  </WindPlantGroup>
);

/* ============================================================
   7. Snake Plant (Sansevieria) – upright blade leaves
   ============================================================ */
export const SnakePlant3D = ({ position = [0, 0, 0], scale = 1, selected = false, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={0.3} onClick={onClick}>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => {
      const r = (ang * Math.PI) / 180;
      const height = 0.9 + (i % 3) * 0.35;
      const lean = 0.1 + (i % 2) * 0.07;
      return (
        <mesh
          key={i}
          position={[Math.sin(r) * 0.18, height / 2, Math.cos(r) * 0.18]}
          rotation={[lean, r + 0.2, 0]}
          castShadow
        >
          <boxGeometry args={[0.08, height, 0.04]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#2E7D32' : '#F4E347'}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      );
    })}
    {/* Soil surface */}
    <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.28, 12]} />
      <meshStandardMaterial color="#5D4037" roughness={0.8} />
    </mesh>
  </WindPlantGroup>
);

/* ============================================================
   8. Mango Tree (Chaunsa / Anwar Ratol)
   ============================================================ */
export const MangoTree3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={0.6} onClick={onClick}>
    {/* Trunk */}
    <mesh position={[0, 1.8, 0]} castShadow>
      <cylinderGeometry args={[0.28, 0.5, 3.6, 10]} />
      <meshStandardMaterial color="#4E342E" roughness={0.85} />
    </mesh>
    {/* Lower branch spread */}
    <mesh position={[-0.6, 3.2, 0.2]} rotation={[0, 0, 0.45]} castShadow>
      <cylinderGeometry args={[0.1, 0.18, 1.2, 7]} />
      <meshStandardMaterial color="#4E342E" roughness={0.85} />
    </mesh>
    <mesh position={[0.6, 3.2, -0.2]} rotation={[0, 0, -0.45]} castShadow>
      <cylinderGeometry args={[0.1, 0.18, 1.2, 7]} />
      <meshStandardMaterial color="#4E342E" roughness={0.85} />
    </mesh>
    {/* Dense canopy clusters */}
    {[
      [0, 4.0, 0, 1.55],
      [-0.8, 3.6, 0.4, 0.9],
      [0.9, 3.7, -0.4, 0.85],
      [0.3, 4.5, 0.5, 0.8],
    ].map(([x, y, z, r], i) => (
      <mesh key={i} position={[x, y, z]} castShadow>
        <sphereGeometry args={[r, 12, 12]} />
        <meshStandardMaterial color={i % 2 === 0 ? '#1B5E20' : '#2E7D32'} roughness={0.55} />
      </mesh>
    ))}
    {/* Mango fruits */}
    {[
      [0.6, 3.4, 0.7, '#FFA000'],
      [-0.7, 3.6, 0.5, '#FF8F00'],
      [0.3, 3.8, -0.9, '#FFB300'],
      [-0.4, 3.2, -0.6, '#F9A825'],
    ].map(([x, y, z, col], idx) => (
      <mesh key={idx} position={[x, y, z]} castShadow>
        <sphereGeometry args={[0.18, 9, 9]} />
        <meshStandardMaterial color={col} roughness={0.3} />
      </mesh>
    ))}
  </WindPlantGroup>
);

/* ============================================================
   9. Guava / Amrood Tree
   ============================================================ */
export const GuavaTree3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={0.8} onClick={onClick}>
    <mesh position={[0, 1.2, 0]} castShadow>
      <cylinderGeometry args={[0.16, 0.30, 2.4, 9]} />
      <meshStandardMaterial color="#3E2723" roughness={0.8} />
    </mesh>
    {/* Compact round canopy */}
    <mesh position={[0, 2.7, 0]} castShadow>
      <sphereGeometry args={[1.1, 11, 11]} />
      <meshStandardMaterial color="#33691E" roughness={0.55} />
    </mesh>
    <mesh position={[0.5, 3.0, 0.4]} castShadow>
      <sphereGeometry args={[0.65, 9, 9]} />
      <meshStandardMaterial color="#558B2F" roughness={0.55} />
    </mesh>
    {/* Guava fruits */}
    {[
      [0.55, 2.4, 0.65, '#CDDC39'],
      [-0.65, 2.75, 0.4, '#D4E157'],
      [0.2, 3.0, -0.8, '#C0CA33'],
      [-0.4, 2.2, -0.55, '#DCEDC8'],
    ].map(([x, y, z, col], idx) => (
      <mesh key={idx} position={[x, y, z]} castShadow>
        <sphereGeometry args={[0.16, 9, 9]} />
        <meshStandardMaterial color={col} roughness={0.35} />
      </mesh>
    ))}
  </WindPlantGroup>
);

/* ============================================================
   10. Teak / Sheesham Timber Tree (Tall straight hardwood)
   ============================================================ */
export const TimbTree3D = ({ position = [0, 0, 0], scale = 1, onClick }) => (
  <WindPlantGroup position={position} scale={scale} windSpeed={0.55} onClick={onClick}>
    {/* Straight tall trunk */}
    <mesh position={[0, 2.5, 0]} castShadow>
      <cylinderGeometry args={[0.2, 0.38, 5.0, 10]} />
      <meshStandardMaterial color="#5D4037" roughness={0.9} />
    </mesh>
    {/* Upper canopy */}
    {[
      [0, 5.5, 0, 1.4],
      [-0.6, 5.0, 0.5, 0.85],
      [0.7, 5.2, -0.4, 0.9],
    ].map(([x, y, z, r], i) => (
      <mesh key={i} position={[x, y, z]} castShadow>
        <sphereGeometry args={[r, 11, 11]} />
        <meshStandardMaterial color={i === 0 ? '#1B5E20' : '#2E7D32'} roughness={0.6} />
      </mesh>
    ))}
    {/* Vertical bark lines */}
    {[0, 60, 120, 180, 240, 300].map((ang, i) => {
      const r = (ang * Math.PI) / 180;
      return (
        <mesh key={i} position={[Math.sin(r) * 0.22, 2.5, Math.cos(r) * 0.22]}>
          <boxGeometry args={[0.04, 5.0, 0.04]} />
          <meshStandardMaterial color="#4E342E" roughness={0.95} />
        </mesh>
      );
    })}
  </WindPlantGroup>
);
