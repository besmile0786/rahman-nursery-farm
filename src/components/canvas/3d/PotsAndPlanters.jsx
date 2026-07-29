import React from 'react';

export const Pot3D = ({ type = 'terracotta', scale = 1, position = [0, 0, 0] }) => {
  let potColor = '#D27D56';
  let roughness = 0.8;
  let metalness = 0.0;
  let potShape = 'cylinder';

  switch (type) {
    case 'ivory':
      potColor = '#FDFBF7';
      roughness = 0.15;
      metalness = 0.05;
      break;
    case 'brass':
      potColor = '#D4AF37';
      roughness = 0.25;
      metalness = 0.85;
      break;
    case 'concrete':
      potColor = '#9E9E9E';
      roughness = 0.9;
      metalness = 0.0;
      break;
    case 'bamboo':
      potColor = '#8B5A2B';
      roughness = 0.7;
      metalness = 0.0;
      break;
    case 'terracotta':
    default:
      potColor = '#D27D56';
      roughness = 0.85;
      metalness = 0.0;
      break;
  }

  return (
    <group position={position} scale={scale}>
      {/* Main Pot Body */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.45, 0.32, 0.7, 16]} />
        <meshStandardMaterial color={potColor} roughness={roughness} metalness={metalness} />
      </mesh>
      
      {/* Top Rim */}
      <mesh position={[0, 0.7, 0]}>
        <torusGeometry args={[0.46, 0.05, 8, 24]} />
        <meshStandardMaterial color={potColor} roughness={roughness} metalness={metalness} />
      </mesh>

      {/* Dark Nutrient Soil Fill */}
      <mesh position={[0, 0.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.43, 16]} />
        <meshStandardMaterial color="#211510" roughness={0.95} />
      </mesh>
    </group>
  );
};
