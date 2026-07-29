import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraTrack = ({ scrollProgress = 0, targetFocusPlant = null }) => {
  const { camera, pointer } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 2.5, 12));
  const currentLookAt = useRef(new THREE.Vector3(0, 2, 0));

  // 6 Zone Spline Waypoints
  const waypoints = [
    { pos: [0, 2.5, 12], lookAt: [0, 2.0, 0] },     // Zone 0: Entrance
    { pos: [-3.5, 2.2, 4], lookAt: [0, 1.8, -1] },   // Zone 1: Greenhouse & Flowers
    { pos: [4.0, 3.2, -3], lookAt: [1, 2.5, -7] },   // Zone 2: Tropical Palm & Orchard
    { pos: [-2.0, 1.9, -10], lookAt: [0, 1.5, -13] },// Zone 3: Exotic Bonsai Pavilion
    { pos: [5.0, 3.8, -16], lookAt: [2, 2.0, -20] }, // Zone 4: Villa Landscaping
    { pos: [0, 2.6, -22], lookAt: [0, 2.2, -26] },   // Zone 5: Sunset Ending
  ];

  useFrame((_, delta) => {
    // If user clicked a plant to inspect, camera focuses directly on plant
    if (targetFocusPlant && targetFocusPlant.position) {
      const plantPos = new THREE.Vector3(...targetFocusPlant.position);
      const orbitPos = new THREE.Vector3(
        plantPos.x + Math.sin(pointer.x * 2) * 2.2,
        plantPos.y + 1.2 + pointer.y * 0.5,
        plantPos.z + Math.cos(pointer.x * 2) * 2.2
      );

      currentPos.current.lerp(orbitPos, delta * 4);
      currentLookAt.current.lerp(plantPos, delta * 4);

      camera.position.copy(currentPos.current);
      camera.lookAt(currentLookAt.current);
      return;
    }

    // Scroll progress mapping (0 to 1)
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
    const segmentCount = waypoints.length - 1;
    const scaledProgress = clampedProgress * segmentCount;
    const currentIndex = Math.floor(scaledProgress);
    const nextIndex = Math.min(currentIndex + 1, segmentCount);
    const subFactor = scaledProgress - currentIndex;

    const currentWaypoint = waypoints[currentIndex];
    const nextWaypoint = waypoints[nextIndex];

    // Smooth Lerp Position Calculation
    const targetX = THREE.MathUtils.lerp(currentWaypoint.pos[0], nextWaypoint.pos[0], subFactor);
    const targetY = THREE.MathUtils.lerp(currentWaypoint.pos[1], nextWaypoint.pos[1], subFactor);
    const targetZ = THREE.MathUtils.lerp(currentWaypoint.pos[2], nextWaypoint.pos[2], subFactor);

    // Mouse Parallax Offset
    const parallaxX = pointer.x * 0.4;
    const parallaxY = pointer.y * 0.3;

    const desiredPos = new THREE.Vector3(targetX + parallaxX, targetY + parallaxY, targetZ);

    const targetLookX = THREE.MathUtils.lerp(currentWaypoint.lookAt[0], nextWaypoint.lookAt[0], subFactor);
    const targetLookY = THREE.MathUtils.lerp(currentWaypoint.lookAt[1], nextWaypoint.lookAt[1], subFactor);
    const targetLookZ = THREE.MathUtils.lerp(currentWaypoint.lookAt[2], nextWaypoint.lookAt[2], subFactor);

    const desiredLookAt = new THREE.Vector3(targetLookX, targetLookY, targetLookZ);

    currentPos.current.lerp(desiredPos, delta * 3);
    currentLookAt.current.lerp(desiredLookAt, delta * 3);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
};
