import React, { useRef, useEffect } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoComputer = (props) => {
  const group = useRef();
  const baseUrl = import.meta.env.BASE_URL;
  
  const { nodes, materials } = useGLTF(`${baseUrl}models/mylaptop.glb`);
  
  const txt = useVideoTexture(props.texture ? props.texture : `${baseUrl}textures/project/jewelry-demo.mp4`, {
    crossOrigin: 'Anonymous',
    muted: true,
    loop: true,
    playsInline: true
  });

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [props.texture]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={1}>
        <mesh 
          geometry={nodes.Object_4.geometry} 
          material={materials.PaletteMaterial001}
        >
          <meshBasicMaterial map={txt} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload(`${import.meta.env.BASE_URL}models/mylaptop.glb`);

export default DemoComputer;