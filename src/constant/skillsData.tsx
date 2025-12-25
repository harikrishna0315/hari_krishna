import React from "react";

import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaPython,
  FaReact,
  FaGaugeHigh,
  FaTruckMoving,
  FaWheelchair,
  FaBookOpen,
  FaCodeBranch,
  FaRobot,
  FaBootstrap,
  FaSearchengin,
  FaSquareJs,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiPostman,
  SiReplit,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "C/C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "HTML", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS", logoComponent: FaCss3, color: "#1572B6" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
       { title: "Flask", logoComponent: SiExpress, color: "#d4d4d8" }, // reuse SiExpress icon
      { title: "OpenCV", logoComponent: FaRobot, color: "#0A66C2" }, // placeholder icon
      { title: "MediaPipe", logoComponent: FaRobot, color: "#FF9800" }, // placeholder,
    ],
  },
  {
    title: "Dev Tools & Platforms",
    data: [
      { title: "Arduino IDE", logoComponent: FaLaptopCode, color: "#607D8B" },
      { title: "VS Code", logoComponent: FaLaptopCode, color: "#007ACC" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Jupyter/Colab", logoComponent: FaPython, color: "#FFCA28" },
    ],
  },
  {
    title: "IoT & Embedded",
    data: [
      { title: "Arduino", logoComponent: FaLaptopCode, color: "#009688" },
      { title: "Sensors", logoComponent: FaLaptopCode, color: "#FFC107" },
      { title: "Serial Communication", logoComponent: FaLaptopCode, color: "#FF5722" },
      { title: "Hardware-Software Automation", logoComponent: FaLaptopCode, color: "#795548" },
  
    ],
  },
  {
    title: "Web & Apps",
    data: [
      { title: "HTML", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS", logoComponent: FaCss3, color: "#1572B6" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "Google Workspace", logoComponent: FaLaptopCode, color: "#4285F4" }, // placeholder
    ],
  }
];
