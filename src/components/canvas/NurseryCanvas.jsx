import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { WeatherLighting } from './WeatherLighting';
import { CameraTrack } from './CameraTrack';
import { GPUFxParticles } from './GPUFxParticles';
import { WorldScene } from './WorldScene';

export const NurseryCanvas = ({
  scrollProgress = 0,
  weatherMode = 'sunrise',
  selectedPlant = null,
  activePotType = 'terracotta',
  onSelectPlant = () => {}
}) => {
  return (
    // Background div matches WeatherLighting sunrise default; JS will update via Three.js
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto bg-[#F4F9F5]">
      <Canvas
        shadows
        camera={{ position: [0, 2.5, 12], fov: 50 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <WeatherLighting weatherMode={weatherMode} />
          <GPUFxParticles weatherMode={weatherMode} />
          <WorldScene
            onSelectPlant={onSelectPlant}
            selectedPlant={selectedPlant}
            activePotType={activePotType}
          />
          <CameraTrack
            scrollProgress={scrollProgress}
            targetFocusPlant={selectedPlant}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};
