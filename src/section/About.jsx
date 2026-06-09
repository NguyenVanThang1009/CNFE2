import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  // Hàm xử lý copy email vào clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText('thangnv.work@gmail.com');
    setHasCopied(true);

    // Tự động tắt thông báo "Đã copy" sau 2 giây
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Ô 1: Giới thiệu bản thân */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid1.png`}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Xin chào, mình là Thắng</p>
              <p className="grid-subtext">
                Mình là một lập trình viên đam mê phát triển Web Full-stack. Mình tập trung vào các công nghệ xây dựng giao diện mượt mà và hệ thống backend tối ưu.
              </p>
            </div>
          </div>
        </div>

        {/* Ô 2: Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid2.png`}
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Công Nghệ Sử Dụng</p>
              <p className="grid-subtext">
                Mình làm chủ và thường xuyên làm việc với các ngôn ngữ, framework mạnh mẽ bao gồm HTML/CSS, Bootstrap 5, JavaScript, React, C# (.NET), Java, PHP và SQL Server.
              </p>
            </div>
          </div>
        </div>

        {/* Ô 3: Vị trí địa lý (Quả địa cầu) */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 10.8231, 
                    lng: 106.6297, 
                    text: "Mình ở đây, TP.HCM!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Linh hoạt thời gian & Địa điểm</p>
              <p className="grid-subtext">
                Hiện tại mình đang sinh sống tại Thành phố Hồ Chí Minh và có quê quán tại Lâm Đồng. Mình luôn sẵn sàng làm việc từ xa hoặc trực tiếp theo lịch trình linh hoạt, đặc biệt là chuẩn bị cho kỳ thực tập CNTT sắp tới.
              </p>
              <a href="#contact" className="w-fit">
                <Button name="Liên Hệ Với Mình" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Ô 4: Đam mê cá nhân */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
          
            <img
              src={`${import.meta.env.BASE_URL}assets/grid3.png`}
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Đam Mê Lập Trình</p>
              <p className="grid-subtext">
                Mình yêu thích việc giải quyết các bài toán logic và xây dựng những sản phẩm thực tế thông qua code. Bên cạnh phát triển web, mình cũng hứngthu với kiến trúc hệ thống, tối ưu hóa hiệu năng phần mềm và chơi các tựa game chiến thuật như Đấu Trường Chân Lý hay Liên Minh Huyền Thoại. Đối với mình, lập trình không chỉ là một chuyên ngành học — đó là hành trình không ngừng học hỏi và phát triển cá nhân.
              </p>
            </div>
          </div>
        </div>

      
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
          
            <img
              src={`${import.meta.env.BASE_URL}assets/grid4.png`}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Liên hệ qua Email</p>
              <div className="copy-container" onClick={handleCopy}>
                
                <img
                  src={hasCopied ? `${import.meta.env.BASE_URL}assets/tick.svg` : `${import.meta.env.BASE_URL}assets/copy.svg`}
                  alt="copy-icon"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  {hasCopied ? "Đã sao chép!" : "thangnv.work@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;