import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const WeatherLighting = ({ weatherMode = 'sunrise' }) => {
  const sunLightRef = useRef();

  // SUPER BRIGHT PRISTINE LIGHT PALETTE — NO DARKNESS
  let config = {
    skyColor:         '#F4F9F5',   // Crystal bright white-green sky
    fogColor:         '#F8FCF9',
    fogNear:          55,
    fogFar:           140,
    sunColor:         '#FFFFFF',
    sunIntensity:     5.0,
    sunPosition:      [30, 55, 25],
    ambientColor:     '#FFFFFF',
    ambientIntensity: 2.8,
    fillColor:        '#FFFFFF',
    fillIntensity:    2.2,
  };

  switch (weatherMode) {
    case 'afternoon':
      config = {
        skyColor:         '#EBF5FB',   // Crystal light blue sky
        fogColor:         '#F2F8FD',
        fogNear:          60,
        fogFar:           150,
        sunColor:         '#FFFFFF',
        sunIntensity:     5.5,
        sunPosition:      [0, 70, 15],
        ambientColor:     '#FFFFFF',
        ambientIntensity: 3.0,
        fillColor:        '#FFFFFF',
        fillIntensity:    2.5,
      };
      break;
    case 'golden':
      config = {
        skyColor:         '#FFFDF5',   // Bright warm ivory sky
        fogColor:         '#FFFBF0',
        fogNear:          50,
        fogFar:           130,
        sunColor:         '#FFF0B5',
        sunIntensity:     5.0,
        sunPosition:      [40, 25, -20],
        ambientColor:     '#FFFDF0',
        ambientIntensity: 2.6,
        fillColor:        '#FFFFFF',
        fillIntensity:    2.0,
      };
      break;
    case 'rain':
      config = {
        skyColor:         '#F0F4F8',   // Bright pearl overcast
        fogColor:         '#F5F8FA',
        fogNear:          40,
        fogFar:           100,
        sunColor:         '#E3EDF7',
        sunIntensity:     3.5,
        sunPosition:      [15, 45, 15],
        ambientColor:     '#F5F8FA',
        ambientIntensity: 2.2,
        fillColor:        '#FFFFFF',
        fillIntensity:    1.8,
      };
      break;
    case 'night':
      // Bright soft indigo moonlight — clear and lit
      config = {
        skyColor:         '#37474F',
        fogColor:         '#263238',
        fogNear:          30,
        fogFar:           80,
        sunColor:         '#B2EBF2',
        sunIntensity:     2.5,
        sunPosition:      [-25, 45, -20],
        ambientColor:     '#607D8B',
        ambientIntensity: 1.8,
        fillColor:        '#E0F7FA',
        fillIntensity:    1.2,
      };
      break;
    case 'sunrise':
    default:
      config = {
        skyColor:         '#F4F9F5',
        fogColor:         '#F8FCF9',
        fogNear:          55,
        fogFar:           140,
        sunColor:         '#FFFFFF',
        sunIntensity:     5.0,
        sunPosition:      [30, 55, 25],
        ambientColor:     '#FFFFFF',
        ambientIntensity: 2.8,
        fillColor:        '#FFFFFF',
        fillIntensity:    2.2,
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
        shadow-camera-far={100}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />

      {/* Soft fill from opposite side — removes dark undersides */}
      <directionalLight
        position={[-20, 20, -20]}
        intensity={config.fillIntensity}
        color={config.fillColor}
      />

      {/* Super bright ambient base */}
      <ambientLight intensity={config.ambientIntensity} color={config.ambientColor} />

      {/* Hemisphere sky-to-ground gradient */}
      <hemisphereLight skyColor={config.skyColor} groundColor="#81C784" intensity={1.5} />
    </>
  );
};
