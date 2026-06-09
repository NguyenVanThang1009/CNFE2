const baseUrl = import.meta.env.BASE_URL;

export const navLinks = [
  {
    id: 1,
    name: 'Trang Chu',
    href: '#home',
  },
  {
    id: 2,
    name: 'Gioi thieu',
    href: '#about',
  },
  {
    id: 3,
    name: 'Du An',
    href: '#work',
  },

];

export const myProjects = [
  {
    title: 'Jewelry E-commerce System',
    desc: 'Hệ thống quản lý cửa hàng bán trang sức trực tuyến.',
    subdesc: 'Dự án tập trung vào phân tích thiết kế hệ thống, phân rã chức năng và vẽ biểu đồ UML để xây dựng kiến trúc phần mềm chặt chẽ.',
    href: '#', 
    texture: `${baseUrl}textures/project/jewelry-demo.mp4`, 
    logo: `${baseUrl}assets/project-logo1.png`,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: `${baseUrl}assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: `${baseUrl}assets/react.svg`,
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'Trường Cao đẳng Công nghệ Thủ Đức (FIT-TDC)',
    pos: 'Sinh viên chuyên ngành Công nghệ Thông tin',
    duration: '09/2023 - 05/2026',
    title: "Tập trung nghiên cứu và thực hành các môn học cốt lõi như Phân tích thiết kế hệ thống, Lập trình hướng đối tượng (OOP) và Quản trị Cơ sở dữ liệu.",
    icon: `${baseUrl}assets/tdc-logo.jpg`, 
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Full-stack Web Development',
    pos: 'Kỹ năng chuyên môn',
    duration: 'Định hướng phát triển',
    title: "Thành thạo xây dựng giao diện tương tác với HTML, CSS, Bootstrap 5. Định hướng làm chủ toàn diện các sản phẩm web.",
    icon: `${baseUrl}assets/bootstrap.jpg`, 
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Backend & Database',
    pos: 'Kỹ năng chuyên môn',
    duration: 'Định hướng phát triển',
    title: "Vận dụng linh hoạt C#, Java, PHP cho phần xử lý logic backend và thiết kế, tối ưu hệ thống trên SQL Server.",
    icon: `${baseUrl}assets/sql.jpg`, 
    animation: 'salute',
  }
];

// Hàm tính toán kích thước & tọa độ các mô hình 3D trong khu vực Hero
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    // Điều chỉnh vị trí bàn máy tính HackerRoom (Gốc là -5.5, đổi thành -6.5 để hạ thấp xuống một chút)
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -5.5, 0] : [0.25, -6.5, 0],
    

    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [14, 6, -2],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-35, 10, -10] : [-40, 10, -15],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-10, -10, -10],
  };
};