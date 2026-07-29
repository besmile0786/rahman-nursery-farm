import React from 'react';
import { Html, Text } from '@react-three/drei';
import { EntranceArchGate, GlassGreenhouse, WaterStreamPond } from './3d/GardenStructures';
import {
  Monstera3D,
  PalmTree3D,
  OliveTree3D,
  CitrusTree3D,
  Bougainvillea3D,
  Bonsai3D,
  SnakePlant3D,
  MangoTree3D,
  GuavaTree3D,
  TimbTree3D,
} from './3d/ProceduralPlants';
import { Pot3D } from './3d/PotsAndPlanters';
import { Sparkles } from 'lucide-react';
import * as THREE from 'three';

// Reusable floating price badge
const HotspotBadge = ({ label, price, color = '#16a34a', onClick }) => (
  <Html center distanceFactor={13}>
    <div
      onClick={onClick}
      style={{
        background: 'rgba(255,255,255,0.97)',
        border: `1.5px solid ${color}40`,
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        padding: '5px 12px',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        transition: 'transform 0.2s ease',
      }}
    >
      <span style={{
        width: 9, height: 9, borderRadius: '50%',
        background: color,
        display: 'inline-block',
        animation: 'pulse 2s infinite',
        flexShrink: 0,
      }} />
      <span style={{ fontWeight: 700, fontSize: 12, color: '#1E3A2B', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {label}
      </span>
      <span style={{
        background: color + '18',
        color: color,
        fontWeight: 800,
        fontSize: 11,
        padding: '2px 8px',
        borderRadius: '999px',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
      }}>
        {price}
      </span>
    </div>
  </Html>
);

export const WorldScene = ({ onSelectPlant, selectedPlant, activePotType = 'terracotta' }) => {
  return (
    <group>
      {/* === TERRAIN & GROUND === */}
      {/* Rich emerald grass plane */}
      <mesh position={[0, -0.01, -10]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#3E8B45" roughness={0.85} metalness={0} />
      </mesh>

      {/* Decorative darker grass patches */}
      <mesh position={[-8, -0.005, -5]} rotation={[-Math.PI / 2, 0, 0.3]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#2D7A35" roughness={0.9} />
      </mesh>
      <mesh position={[8, -0.005, -12]} rotation={[-Math.PI / 2, 0, -0.2]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#2D7A35" roughness={0.9} />
      </mesh>

      {/* Main polished ivory stone walkway */}
      <mesh position={[0, 0.01, -10]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4.5, 60]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.35} metalness={0.05} />
      </mesh>

      {/* Stone walkway edge strips */}
      <mesh position={[-2.5, 0.02, -10]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.3, 60]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[2.5, 0.02, -10]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.3, 60]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* Left wood deck area */}
      <mesh position={[-5.5, 0.02, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 10]} />
        <meshStandardMaterial color="#8D6E63" roughness={0.6} />
      </mesh>

      {/* Right stone patio */}
      <mesh position={[5.5, 0.02, -12]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 10]} />
        <meshStandardMaterial color="#B0BEC5" roughness={0.5} />
      </mesh>

      {/* === STRUCTURES === */}
      <EntranceArchGate position={[0, 0, 10]} />
      <GlassGreenhouse position={[-7, 0, 1]} />
      <WaterStreamPond position={[6, 0, -4]} />

      {/* === DECORATIVE FLOWER BEDS === */}
      {/* Left flower bed (pink/red dots) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`fl${i}`} position={[-3.2 + (i % 4) * 0.6, 0.12, 9.5 - Math.floor(i / 4) * 0.6]}>
          <sphereGeometry args={[0.12, 8, 8]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#E91E63' : '#FF6D00'} roughness={0.3} />
        </mesh>
      ))}
      {/* Right flower bed */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`fr${i}`} position={[2.8 + (i % 4) * 0.55, 0.12, 9.5 - Math.floor(i / 4) * 0.6]}>
          <sphereGeometry args={[0.12, 8, 8]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#FFEB3B' : '#F06292'} roughness={0.3} />
        </mesh>
      ))}

      {/* === DECORATIVE HEDGE WALLS === */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`hl${i}`} position={[-5.5, 0.6, 8 - i * 2]}>
          <boxGeometry args={[0.7, 1.2, 1.8]} />
          <meshStandardMaterial color="#2D7A35" roughness={0.7} />
        </mesh>
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`hr${i}`} position={[5.5, 0.6, 8 - i * 2]}>
          <boxGeometry args={[0.7, 1.2, 1.8]} />
          <meshStandardMaterial color="#2D7A35" roughness={0.7} />
        </mesh>
      ))}

      {/* === PLANT COLLECTION WITH HOTSPOTS === */}

      {/* 1. Snake Plant Laurentii – left of entrance */}
      <group position={[-2.2, 0, 8]}>
        {selectedPlant?.id === 'snake-plant-laurentii' && (
          <Pot3D type={activePotType} position={[0, 0, 0]} />
        )}
        <SnakePlant3D
          scale={selectedPlant?.id === 'snake-plant-laurentii' ? 1.4 : 1.1}
          selected={selectedPlant?.id === 'snake-plant-laurentii'}
          onClick={() => onSelectPlant('snake-plant-laurentii', [-2.2, 0, 8])}
        />
        <HotspotBadge
          label="Snake Plant"
          price="PKR 850"
          color="#16a34a"
          onClick={() => onSelectPlant('snake-plant-laurentii', [-2.2, 0, 8])}
        />
      </group>

      {/* 2. Areca Golden Palm – right of entrance */}
      <group position={[2.5, 0, 7]}>
        {selectedPlant?.id === 'areca-palm-golden' && (
          <Pot3D type={activePotType} position={[0, 0, 0]} />
        )}
        <Monstera3D
          scale={selectedPlant?.id === 'areca-palm-golden' ? 1.4 : 1.2}
          onClick={() => onSelectPlant('areca-palm-golden', [2.5, 0, 7])}
        />
        <group position={[0, 2.6, 0]}>
          <HotspotBadge
            label="Areca Palm"
            price="PKR 550"
            color="#16a34a"
            onClick={() => onSelectPlant('areca-palm-golden', [2.5, 0, 7])}
          />
        </group>
      </group>

      {/* 3. Royal Date Palm LEFT – tall landmark */}
      <group position={[-4.5, 0, 3]}>
        <PalmTree3D
          scale={1.3}
          onClick={() => onSelectPlant('mature-royal-date-palm', [-4.5, 0, 3])}
        />
        <group position={[0, 7, 0]}>
          <HotspotBadge
            label="Royal Date Palm 25ft"
            price="PKR 35,000"
            color="#D4AF37"
            onClick={() => onSelectPlant('mature-royal-date-palm', [-4.5, 0, 3])}
          />
        </group>
      </group>

      {/* 4. Royal Date Palm RIGHT */}
      <PalmTree3D
        position={[4.8, 0, 2]}
        scale={1.4}
        onClick={() => onSelectPlant('mature-royal-date-palm', [4.8, 0, 2])}
      />

      {/* 5. Monstera Deliciosa */}
      <group position={[-3.2, 0, -2]}>
        {selectedPlant?.id === 'monstera-deliciosa' && (
          <Pot3D type={activePotType} position={[0, 0, 0]} />
        )}
        <Monstera3D
          scale={selectedPlant?.id === 'monstera-deliciosa' ? 1.4 : 1.15}
          selected={selectedPlant?.id === 'monstera-deliciosa'}
          onClick={() => onSelectPlant('monstera-deliciosa', [-3.2, 0, -2])}
        />
        <group position={[0, 3.5, 0]}>
          <HotspotBadge
            label="Monstera Deliciosa"
            price="PKR 2,500"
            color="#1B5E20"
            onClick={() => onSelectPlant('monstera-deliciosa', [-3.2, 0, -2])}
          />
        </group>
      </group>

      {/* 6. Ancient Olive Tree (Italian Silvery Olive) */}
      <group position={[3.5, 0, -1]}>
        <OliveTree3D
          scale={1.3}
          onClick={() => onSelectPlant('ancient-italian-olive', [3.5, 0, -1])}
        />
        <group position={[0, 4, 0]}>
          <HotspotBadge
            label="15yr Olive Tree"
            price="PKR 45,000"
            color="#D4AF37"
            onClick={() => onSelectPlant('ancient-italian-olive', [3.5, 0, -1])}
          />
        </group>
      </group>

      {/* 7. Kinnu Orange Tree */}
      <group position={[4.5, 0, -6]}>
        <CitrusTree3D
          scale={1.25}
          onClick={() => onSelectPlant('pakistani-citrus-kinnu', [4.5, 0, -6])}
        />
        <group position={[0, 3.8, 0]}>
          <HotspotBadge
            label="Kinnu Orange"
            price="PKR 1,800"
            color="#F57F17"
            onClick={() => onSelectPlant('pakistani-citrus-kinnu', [4.5, 0, -6])}
          />
        </group>
      </group>

      {/* 8. Pink Flame Bougainvillea */}
      <group position={[-3.5, 0, -7]}>
        <Bougainvillea3D
          scale={1.2}
          onClick={() => onSelectPlant('bougainvillea-glabra', [-3.5, 0, -7])}
        />
        <group position={[0, 3, 0]}>
          <HotspotBadge
            label="Bougainvillea"
            price="PKR 450"
            color="#C2185B"
            onClick={() => onSelectPlant('bougainvillea-glabra', [-3.5, 0, -7])}
          />
        </group>
      </group>

      {/* 9. Master Japanese Bonsai on brass pot */}
      <group position={[-4.5, 0, -9]}>
        <Pot3D type="brass" scale={0.8} position={[0, 0, 0]} />
        <Bonsai3D
          position={[0, 0.45, 0]}
          scale={1.25}
          onClick={() => onSelectPlant('master-japanese-bonsai-juniper', [-4.5, 0, -9])}
        />
        <group position={[0, 1.9, 0]}>
          <HotspotBadge
            label="20yr Master Bonsai"
            price="PKR 35,000"
            color="#D4AF37"
            onClick={() => onSelectPlant('master-japanese-bonsai-juniper', [-4.5, 0, -9])}
          />
        </group>
      </group>

      {/* 10. Chaunsa Mango Tree */}
      <group position={[4.5, 0, -13]}>
        <MangoTree3D
          scale={1.3}
          onClick={() => onSelectPlant('mango-chaunsa-tree', [4.5, 0, -13])}
        />
        <group position={[0, 4.5, 0]}>
          <HotspotBadge
            label="Chaunsa Mango"
            price="PKR 2,500"
            color="#F9A825"
            onClick={() => onSelectPlant('mango-chaunsa-tree', [4.5, 0, -13])}
          />
        </group>
      </group>

      {/* 11. Teak / Sheesham commercial timber */}
      <group position={[-4.5, 0, -14]}>
        <TimbTree3D
          scale={1.4}
          onClick={() => onSelectPlant('teak-wood-sagaun', [-4.5, 0, -14])}
        />
        <group position={[0, 5, 0]}>
          <HotspotBadge
            label="Teak Sagaun Timber"
            price="PKR 450"
            color="#5D4037"
            onClick={() => onSelectPlant('teak-wood-sagaun', [-4.5, 0, -14])}
          />
        </group>
      </group>

      {/* 12. Guava / Amrood Tree */}
      <group position={[0.5, 0, -16]}>
        <GuavaTree3D
          scale={1.2}
          onClick={() => onSelectPlant('guava-amrood-surahi', [0.5, 0, -16])}
        />
        <group position={[0, 3.5, 0]}>
          <HotspotBadge
            label="Surahi Guava"
            price="PKR 650"
            color="#7CB342"
            onClick={() => onSelectPlant('guava-amrood-surahi', [0.5, 0, -16])}
          />
        </group>
      </group>

      {/* Extra palms for depth/scenic value */}
      <PalmTree3D position={[6.5, 0, -9]}  scale={1.45} />
      <PalmTree3D position={[-7.0, 0, -16]} scale={1.55} />
      <PalmTree3D position={[7.5, 0, -20]} scale={1.35} />
      <OliveTree3D position={[-6.5, 0, -20]} scale={1.2} />
      <CitrusTree3D position={[-2.5, 0, -20]} scale={1.1} />
    </group>
  );
};
