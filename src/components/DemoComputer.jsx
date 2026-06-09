import React, { useRef } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoComputer = (props) => {
  const group = useRef();
  
  // Đã sửa đường dẫn trỏ đúng vào thư mục public/models/
  const { nodes, materials } = useGLTF('/models/mylaptop.glb');
  
  // Tải file video 1.3MB của bạn (có kèm lệnh ép tắt tiếng để trình duyệt không chặn)
  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/jewelry-demo.mp4', {
    crossOrigin: 'Anonymous',
    muted: true,
    loop: true,
    playsInline: true
  });

  // Hiệu ứng xoay mượt mà khi load
  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [props.texture]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.005, 0.044, 0.15]} rotation={[0, 0, -Math.PI]} scale={[0.288, 0.412, 0.295]}>
          
          {/* MẢNH 1: Lớp vỏ máy tính */}
          <mesh geometry={nodes['Material19-material-material'].geometry} material={materials['Material19-material']} />
          
          {/* MẢNH 2: CÁI MÀN HÌNH - Chúng ta dán cái video (txt) vào đây! */}
          <mesh geometry={nodes['Material20-material-material'].geometry}>
             <meshBasicMaterial map={txt} toneMapped={false} />
          </mesh>

        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/mylaptop.glb');

export default DemoComputer;