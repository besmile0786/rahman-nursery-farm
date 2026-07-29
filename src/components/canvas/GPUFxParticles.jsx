import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const GPUFxParticles = ({ weatherMode = 'sunrise' }) => {
  const pollenRef = useRef();
  const firefliesRef = useRef();
  const rainRef = useRef();

  // Pollen particle buffers
  const pollenCount = 200;
  const pollenPositions = useMemo(() => {
    const pos = new Float32Array(pollenCount * 3);
    for (let i = 0; i < pollenCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 35;
      pos[i + 1] = Math.random() * 8 + 0.2;
      pos[i + 2] = (Math.random() - 0.5) * 35;
    }
    return pos;
  }, []);

  // Fireflies particle buffers
  const firefliesCount = 80;
  const fireflyPositions = useMemo(() => {
    const pos = new Float32Array(firefliesCount * 3);
    for (let i = 0; i < firefliesCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 30;
      pos[i + 1] = Math.random() * 4 + 0.5;
      pos[i + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  // Rain drop particle buffers
  const rainCount = 400;
  const rainPositions = useMemo(() => {
    const pos = new Float32Array(rainCount * 3);
    for (let i = 0; i < rainCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 35;
      pos[i + 1] = Math.random() * 15;
      pos[i + 2] = (Math.random() - 0.5) * 35;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Animate golden pollen floating gently
    if (pollenRef.current) {
      const positions = pollenRef.current.geometry.attributes.position.array;
      for (let i = 0; i < pollenCount * 3; i += 3) {
        positions[i + 1] += Math.sin(t + positions[i]) * 0.003;
        positions[i] += Math.cos(t * 0.5 + positions[i + 2]) * 0.002;
      }
      pollenRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Animate night fireflies glowing & drifting
    if (firefliesRef.current && weatherMode === 'night') {
      const positions = firefliesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < firefliesCount * 3; i += 3) {
        positions[i + 1] += Math.sin(t * 2 + i) * 0.008;
        positions[i] += Math.cos(t * 1.5 + i) * 0.006;
      }
      firefliesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Animate monsoon rain falling fast
    if (rainRef.current && weatherMode === 'rain') {
      const positions = rainRef.current.geometry.attributes.position.array;
      for (let i = 0; i < rainCount * 3; i += 3) {
        positions[i + 1] -= 0.35;
        if (positions[i + 1] < 0) {
          positions[i + 1] = 12;
        }
      }
      rainRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Floating Golden Pollen (Sunrise / Afternoon / Golden) */}
      {weatherMode !== 'rain' && (
        <points ref={pollenRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={pollenCount}
              array={pollenPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.08}
            color="#D4AF37"
            transparent={true}
            opacity={0.65}
            blending={THREE.AdditiveBlending}
          />
        </points>
      )}

      {/* Night Bioluminescent Fireflies */}
      {weatherMode === 'night' && (
        <points ref={firefliesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={firefliesCount}
              array={fireflyPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.16}
            color="#76FF03"
            transparent={true}
            opacity={0.9}
            blending={THREE.AdditiveBlending}
          />
        </points>
      )}

      {/* Monsoon Rain Drops */}
      {weatherMode === 'rain' && (
        <points ref={rainRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={rainCount}
              array={rainPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.06}
            color="#B0BEC5"
            transparent={true}
            opacity={0.7}
          />
        </points>
      )}
    </group>
  );
};
