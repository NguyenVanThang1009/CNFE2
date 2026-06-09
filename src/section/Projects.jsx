import React, { useState } from "react";
import { myProjects } from "../constants";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = myProjects[currentIndex];

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">Sản Phẩm Của Mình</p>
      
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-24 w-full">
        {/* Phần thông tin dự án bên trái */}
        <div className="flex flex-col gap-5 relative sm:p-10 p-6 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={`${import.meta.env.BASE_URL}${currentProject.logo}`} alt="project logo" className="w-10 h-10 object-contain rounded-md" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold font-generalsans">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo flex justify-center items-center bg-black-300 rounded-md p-2">
                  <img src={`${import.meta.env.BASE_URL}${tag.path}`} alt={tag.name} className="w-6 h-6 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Điều hướng nút bấm mũi tên */}
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn bg-black-200 p-3 rounded-full border border-black-300" onClick={() => handleNavigation('previous')}>
              <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left arrow" className="w-4 h-4 object-contain" />
            </button>

            <button className="arrow-btn bg-black-200 p-3 rounded-full border border-black-300" onClick={() => handleNavigation('next')}>
              <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right arrow" className="w-4 h-4 object-contain" />
            </button>
          </div>
        </div>

        {/* Phần hiển thị mô hình 3D bên phải */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex justify-center items-center text-white">
          {/* Canvas hiển thị mô hình 3D của bạn ở đây */}
          <p className="text-gray-400 font-generalsans">Mô hình 3D Dự Án</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;