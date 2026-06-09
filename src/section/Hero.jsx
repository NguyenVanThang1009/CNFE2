import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// Đã import thêm Environment, Sparkles, Stars để làm đẹp
import { PerspectiveCamera, Environment, Sparkles, Stars } from "@react-three/drei"; 
import Rings from "../components/Rings";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10 pointer-events-none">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Thang <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
            
                rotation={[0, -Math.PI, 0]} 
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

        
            <Environment preset="city" />

            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

            <Sparkles count={80} scale={15} size={3} speed={0.4} opacity={0.6} color="#61dafb" />

            <spotLight position={[0, 10, 5]} angle={0.5} penumbra={1} intensity={1.5} color="#4e00ff" />
            <ambientLight intensity={0.3} />

          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;