import { StaticImageData } from "next/image";

export type experienceProps = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  technologies?: string[];
  image?: StaticImageData;
  link?: string;
  index: number;
};

export const experienceDetails: experienceProps[] = [
  {
    title: "Software Development Engineer Intern",
    company: "Yuga Yatra Retail (OPC) Pvt. Ltd.",
    duration: "June 15, 2025 - August 15, 2025 (Present)",
    location: "Remote",
    description:
      "Working as a Software Development Engineer Intern at a startup India certified company. Developing and maintaining web applications using modern technologies. Contributing to the development of scalable software solutions and collaborating with the development team to deliver high-quality products. Gaining hands-on experience in full-stack development and agile methodologies.",
    technologies: ["React", "Node.js", "JavaScript", "Full-Stack Development", "Agile"],
    index: 0,
  },
  {
    title: "Training and Placement Coordinator",
    company: "Maharashtra Institute of Technology",
    duration: "July 2025 - Present",
    location: "Chh. Sambhaji Nagar",
    description:
      "Serving as the Training and Placement Coordinator at MIT, responsible for facilitating student placements and career development. Coordinating with companies for campus recruitment drives, organizing training sessions, and managing placement activities. Helping students prepare for interviews and connecting them with potential employers. Contributing to the overall career development ecosystem of the institution.",
    technologies: ["Placement Coordination", "Career Development", "Student Counseling", "Corporate Relations"],
    index: 1,
  },
  {
    title: "Web Development Intern",
    company: "Externs Club",
    duration: "Mar-2024 to Apr-2024 (1 month)",
    location: "Remote",
    description:
      "Developed and optimized web applications using modern technologies. Improved UI/UX and enhanced website performance. Created fully functional web design and user experience with functional UI. Worked on responsive web design.",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive Design"],
    index: 2,
  },
  {
    title: "DevOps Intern",
    company: "Code Alpha",
    duration: "Mar-2025 to Apr-2025 (1 month)",
    location: "Remote",
    description:
      "Worked on CI/CD pipelines, cloud deployment, and automation. Developed a CI/CD pipeline using Azure for seamless deployment. Implemented Docker and Kubernetes for containerization and orchestration. Integrated GitHub Actions for automated testing and deployment.",
    technologies: ["Azure", "CI/CD", "Docker", "Kubernetes", "GitHub Actions", "Cloud"],
    index: 3,
  },
  {
    title: "Python Developer",
    company: "Code Techie",
    duration: "Apr-2025 to Jun-2025 (2 months)",
    location: "Remote",
    description:
      "Built applications leveraging Python frameworks and APIs using Streamlit. Developed two AI-powered chatbots: LegalGPT (Together AI API & SerpAPI) for legal inquiries and Fake News Detector (OpenAI API) for misinformation detection. Integrated NLP models to enhance chatbot accuracy and response generation. Implemented database storage for user interactions and query history.",
    technologies: ["Python", "Streamlit", "AI", "NLP", "OpenAI API", "Together AI API", "SerpAPI", "Database"],
    index: 4,
  },
  {
    title: "Software Development Intern (Team Lead)",
    company: "Bluestock Fintech",
    duration: "Mar-2025 to May-2025 (2 months)",
    location: "Remote",
    description:
      "Developed a full-stack IPO listing web app using React, Tailwind CSS, and Node.js/Express to display real-time IPO data. Designed and integrated RESTful APIs for fetching, filtering, and displaying IPO listings with high performance. Automated testing and deployment pipelines using GitHub Actions, enabling seamless CI/CD integration. Deployed the application on Netlify, optimizing for speed, responsiveness, and user experience. Managed project documentation, tasks, and API contracts in Notion for streamlined team collaboration.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "REST API", "GitHub Actions", "Netlify", "Notion"],
    index: 5,
  },
]; 