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

  // Ép chiều video hiển thị đúng, không bị ngược đầu
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
      {/* 🟢 ĐÃ TRẢ LẠI: Trục xoay và scale nguyên bản của mô hình */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.005, 0.044, 0.15]} rotation={[0, 0, -Math.PI]} scale={[0.288, 0.412, 0.295]}>
          
          {/* MẢNH 1: Lớp vỏ máy tính - Trả lại đúng tên node gốc của fen */}
          <mesh 
            geometry={nodes['Material19-material-material'].geometry} 
            material={materials['Material19-material']} 
          />
          
          {/* MẢNH 2: Màn hình hiển thị Video */}
          <mesh geometry={nodes['Material20-material-material'].geometry}>
             <meshBasicMaterial map={txt} toneMapped={false} />
          </mesh>

        </group>
      </group>
    </group>
  );
};

useGLTF.preload(`${import.meta.env.BASE_URL}models/mylaptop.glb`);

export default DemoComputer;