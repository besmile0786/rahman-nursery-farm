import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const WeatherLighting = ({ weatherMode = 'sunrise' }) => {
  const sunLightRef = useRef();

  // ULTRA-LIGHT warm palette — all weather modes are bright & airy
  let config = {
    skyColor:         '#E8F5E9',   // Very light mint green — day mode
    fogColor:         '#F1F8F2',
    fogNear:          40,
    fogFar:           100,
    sunColor:         '#FFF9E6',
    sunIntensity:     4.0,
    sunPosition:      [30, 45, 20],
    ambientColor:     '#D4EDDA',
    ambientIntensity: 2.0,
    fillColor:        '#FFFFFF',
    fillIntensity:    1.5,
  };

  switch (weatherMode) {
    case 'afternoon':
      config = {
        skyColor:         '#E3F2FD',   // Very light sky blue
        fogColor:         '#EBF5FE',
        fogNear:          45,
        fogFar:           110,
        sunColor:         '#FFFFFF',
        sunIntensity:     4.5,
        sunPosition:      [0, 65, 10],
        ambientColor:     '#E8F4FD',
        ambientIntensity: 2.2,
        fillColor:        '#FFFFFF',
        fillIntensity:    1.8,
      };
      break;
    case 'golden':
      config = {
        skyColor:         '#FFF8E1',   // Warm golden hour — ivory yellow
        fogColor:         '#FFF3CD',
        fogNear:          35,
        fogFar:           90,
        sunColor:         '#FFC107',
        sunIntensity:     4.2,
        sunPosition:      [40, 18, -20],
        ambientColor:     '#FFE57F',
        ambientIntensity: 1.8,
        fillColor:        '#FFD54F',
        fillIntensity:    1.0,
      };
      break;
    case 'rain':
      config = {
        skyColor:         '#ECEFF1',   // Light pearl grey — overcast
        fogColor:         '#E0E7EE',
        fogNear:          25,
        fogFar:           65,
        sunColor:         '#CFD8DC',
        sunIntensity:     2.2,
        sunPosition:      [15, 35, 15],
        ambientColor:     '#ECEFF1',
        ambientIntensity: 1.6,
        fillColor:        '#F5F5F5',
        fillIntensity:    1.2,
      };
      break;
    case 'night':
      // Soft moonlit indigo — still somewhat lit, never pitch black
      config = {
        skyColor:         '#263238',
        fogColor:         '#1C2B36',
        fogNear:          20,
        fogFar:           55,
        sunColor:         '#90CAF9',
        sunIntensity:     1.8,
        sunPosition:      [-25, 35, -20],
        ambientColor:     '#455A64',
        ambientIntensity: 1.1,
        fillColor:        '#80DEEA',
        fillIntensity:    0.6,
      };
      break;
    case 'sunrise':
    default:
      config = {
        skyColor:         '#E8F5E9',
        fogColor:         '#F1F8F2',
        fogNear:          40,
        fogFar:           100,
        sunColor:         '#FFE082',
        sunIntensity:     4.0,
        sunPosition:      [30, 45, 20],
        ambientColor:     '#D4EDDA',
        ambientIntensity: 2.0,
        fillColor:        '#FFFFFF',
        fillIntensity:    1.5,
      };
      break;
  }

  useFrame(() => {
    if (sunLightRef.current) {
      sunLightRef.current.position.set(...config.sunPosition);
    }
  });

  return (
    <>
      <color attach="background" args={[config.skyColor]} />
      <fog attach="fog" args={[config.fogColor, config.fogNear, config.fogFar]} />

      {/* Key sunlight */}
      <directionalLight
        ref={sunLightRef}
        intensity={config.sunIntensity}
        color={config.sunColor}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={80}
        shadow-camera-left={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
        shadow-camera-bottom={-22}
      />

      {/* Soft fill from opposite side — removes dark undersides */}
      <directionalLight
        position={[-20, 15, -20]}
        intensity={config.fillIntensity}
        color={config.fillColor}
      />

      {/* Warm ambient base */}
      <ambientLight intensity={config.ambientIntensity} color={config.ambientColor} />

      {/* Hemisphere sky-to-ground gradient */}
      <hemisphereLight skyColor={config.skyColor} groundColor="#4CAF50" intensity={1.0} />
    </>
  );
};
