import { StaticImageData } from "next/image";

export type educationProps = {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  gpa?: string;
  image?: StaticImageData;
  link?: string;
  index: number;
};

export const educationDetails: educationProps[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Electronics and Computer Engineering.",
    institution: "Maharashtra Institute Of Technology (Autonomous)",
    duration: "2024 - Appearing",
    location: "Chh. Sambhajinagar, Maharashtra",
    description: "Electronics And Component Designing, Computer and Software Engineering. Published research paper on Blockchain and Future Extends of Blockchain.",
    gpa: "8.1/10.0",
    index: 0,
  },
  {
    degree: "12th HSC in Science Stream",
    institution: "Deogiri College",
    duration: "2021 - 2022",
    location: "Chh. Sambhajinagar, Maharashtra",
    description: "Physics, Mathematics and Computer Science. Developed a strong foundation in analytical thinking, problem-solving, and scientific reasoning. Participated in science exhibitions and coding workshops, and consistently performed well in mathematics and computer science subjects.",
    gpa: "75%",
    index: 1,
  },
  {
    degree: "MERN Stack Development.",
    institution: "IT Corner (Cannought, Cidco)",
    duration: "Jan 2025 - Aug 2025",
    location: "Chh. Sambhajinagar, Maharashtra",
    description: "Comprehensive hands-on training in the MERN stack (MongoDB, Express.js, React, Node.js). Built and deployed full-stack web applications, learned RESTful API development, authentication, and best practices for scalable, production-ready apps. Collaborated on real-world projects and gained experience in team-based agile development.",
    index: 2,
  },
]; 
