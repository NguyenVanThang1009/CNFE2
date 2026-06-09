import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { workExperiences } from '../constants/index.js';
import CanvasLoader from './CanvasLoader.jsx';

const TechCard = ({ url, index, total, radius }) => {
  const meshRef = useRef();
  
  const texture = useTexture(url);

  const theta = (index / total) * Math.PI * 2;
  const initialX = Math.cos(theta) * radius;
  const initialZ = Math.sin(theta) * radius;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <mesh ref={meshRef} position={[initialX, 0, initialZ]}>
      <planeGeometry args={[2.5, 1.8]} /> 
      <meshBasicMaterial map={texture} transparent={true} side={2} />
    </mesh>
  );
};

const RotatingGroup = ({ children }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const Experience = () => {
  const techImages = workExperiences.map((item) => item.icon);
  const total = techImages.length;
  const radius = 4;

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <h3 className="head-text">Học vấn & Kỹ năng</h3>

        <div className="work-container">
        
          <div className="work-canvas">
            <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
              <ambientLight intensity={1.5} />
              
              <Suspense fallback={<CanvasLoader />}>
              
                <RotatingGroup>
                  {techImages.map((url, index) => (
                    <TechCard 
                      key={index} 
                      url={url} 
                      index={index} 
                      total={total} 
                      radius={radius} 
                    />
                  ))}
                </RotatingGroup>
              </Suspense>
              
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div key={index} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="logo" />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">{item.pos} -- <span>{item.duration}</span></p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;