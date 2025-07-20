export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "VibeSocial",
    description:
      "VibeSocial is an Instagram-inspired streaming app featuring a visually rich, aesthetic UI for sharing and exploring vibrant social content. Users can post, like, and comment on photos and videos, follow friends, and discover trending content. The app emphasizes seamless navigation and a modern, immersive experience.",
    technologies: ["ReactJS", "Tailwinds CSS", "Pexels API", "Mongodb"],
    github: "https://github.com/Dev-axay18/VibeSocial",
    demo: "https://vibesocials.netlify.app/",
    image: "https://cdn.dribbble.com/userupload/30442909/file/original-a94632ec8df1d2f76959a2617bb6006d.png?resize=1504x1128&vertical=center",
    available: true,
  },
  {
    id: 1,
    name: "Truth Sense",
    description:
      "Truth Sense is a real-time fake news detection tool using NLP and OpenAI API to analyze and verify news credibility with high accuracy. It provides instant feedback on news articles, helping users distinguish between factual and misleading information. The platform leverages advanced machine learning and language models for robust analysis.",
    technologies: ["ReactJS", "Tailwinds CSS", "Python", "Machine Learning", "NLP", "LLM"],
    github: "https://github.com/Dev-axay18/Truth_Sense",
    demo: "https://www.linkedin.com/posts/akshay-kale-88792932a_fakenewsdetection-aiforgood-nlp-activity-7327005204510318592-H5lA?utm_source=share&utm_medium=member_android&rcm=ACoAAFMTL6cBVRYFmEYqFqZ_LBeIEdUxOp0wKqM",
    image: "https://raw.githubusercontent.com/Dev-axay18/Truth_Sense/refs/heads/main/assets/banner.png",
    available: true,
  },
  {
    id: 2,
    name: "E-Connect",
    description:
      "E-Connect seamlessly links users to critical emergency hotlines with a clean, user-friendly interface. The app ensures quick access to essential services during emergencies, featuring intuitive navigation and reliable performance. Designed for speed and accessibility, it’s a must-have safety tool.",
    technologies: ["React Native", "Android Studio", "API"],
    github: "https://github.com/Dev-axay18",
    demo: "https://www.linkedin.com/posts/akshay-kale-88792932a",
    image: "https://cdn.dribbble.com/userupload/23173377/file/original-417eb83501079f4348d6daf9672d6d41.jpg?resize=752x564&vertical=center",
    available: true,
  },
  {
    id: 3,
    name: "Obsidian",
    description:
      "Obsidian is a minimalist operating system built from scratch using C and Assembly, with Makefile for seamless compilation. It features a lightweight kernel, basic file management, and a simple command-line interface. The project demonstrates low-level programming and OS design skills.",
    technologies: ["MAKEFILE", "C", "Assembly", "Code"],
    github: "https://github.com/Dev-axay18",
    demo: "https://www.linkedin.com/posts/akshay-kale-88792932a_day-day1-obsidianos-activity-7257477309245382658-kWSE?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFMTL6cBVRYFmEYqFqZ_LBeIEdUxOp0wKqM&utm_campaign=copy_link",
    image: "https://akshaykale.netlify.app/obsidian.png",
    available: true,
  },
  {
    id: 4,
    name: "SkyCast Weather App",
    description:
      "SkyCast is a social media dashboard with integrated weather analytics, providing real-time updates and interactive charts. Users can track weather trends, share insights, and customize their dashboard for a personalized experience. The app combines utility with a sleek, modern design.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Code", "Live Demo"],
    github: "https://github.com/Dev-axay18",
    demo: "https://www.linkedin.com/posts/akshay-kale-88792932a_reactjs-tailwindabrcss-javascript-activity-7282418713276923904-3OxZ",
    image: "https://cdn.dribbble.com/userupload/8911521/file/original-5b32dd8606b98dbdb38cd0c75e674ded.jpg?resize=752x&vertical=center",
    available: true,
  },
  {
    id: 5,
    name: "Resonix",
    description:
      "Resonix is a sleek music streaming platform built with React.js, Tailwind CSS, and powerful APIs for seamless audio playback and discovery. Users can create playlists, explore trending tracks, and enjoy high-quality streaming. The interface is designed for both beauty and usability.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Dev-axay18",
    demo: "https://www.linkedin.com/posts/akshay-kale-88792932a_html-tailwindcss-javascript-activity-7289675149266567169-jKqa",
    image: "https://cdn.dribbble.com/userupload/37283049/file/original-9b8dac9e625097de6e7188e065964f0c.jpg?resize=1504x1132&vertical=center",
    available: true,
  },
  {
    id: 6,
    name: "Tic-Tac-Toe",
    description:
      "A dynamic Tic Tac Toe game featuring an unbeatable AI and multiplayer mode. Challenge friends or test your skills against a perfect opponent, with smooth animations and a responsive design. The game offers a fun and competitive experience for all ages.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Dev-axay18/tic-tac-toe",
    demo: "https://dev-axay18.github.io/tic-tac-toe/",
    image: "https://cdn.dribbble.com/userupload/23561442/file/original-6949846fca1e58c64051035aabf4a771.gif",
    available: true,
  },
  {
    id: 7,
    name: "Remove.it",
    description:
      "Remove.it is a web app that instantly removes image backgrounds using smart AI, offering fast and clean cutouts like Remove.bg. Users can upload images, process them in seconds, and download high-quality results. The tool is perfect for designers, marketers, and everyday users.",
    technologies: ["HTML", "CSS", "Javascript", "Removebg API"],
    github: "https://github.com/Dev-axay18/remove.it",
    demo: "https://dev-axay18.github.io/remove.it/",
    image: "https://cdn.dribbble.com/userupload/35531287/file/original-dd7ed48b5796383bfda45426ba84f205.png?resize=1504x1128&vertical=center",
    available: true,
  },
  {
    id: 8,
    name: "Blacktrap",
    description:
      "BlackTrap is a powerful Python-based network sniffing tool designed to monitor and analyze real-time network traffic with precision. It features packet capture, protocol analysis, and detailed reporting, making it ideal for security professionals and network administrators.",
    technologies: ["Python"],
    github: "https://github.com/Dev-axay18/BlackTrap",
    demo: "https://www.linkedin.com/posts/akshay-kale-88792932a_cybersecurity-python-networking-activity-7322097836177657856-26xz",
    image: "https://hlassets.paessler.com/common/files/preview/packet-sniffing-13-one-third.png",
    available: true,
  },
  {
    id: 9,
    name: "Clickfury",
    description:
      "Clickfury is an advanced typing test analyzer that tracks WPM, CPM, time, and errors to boost your speed and accuracy. The app provides detailed insights, progress tracking, and a clean, motivating interface for users aiming to improve their typing skills.",
    technologies: ["Reactjs", "Tailwind CSS", "Javascript"],
    github: "https://github.com/Dev-axay18/clickfury",
    demo: "https://clickfuryy.netlify.app/",
    image: "https://cdn.dribbble.com/userupload/6387357/file/original-1919bb1fb4c272ec9561685e756ef867.png?resize=1504x1128&vertical=center",
    available: true,
  },
  {
    id: 10,
    name: "Cinescape",
    description:
      "CineScape is a stunning cinema website landing page with smooth animations and a sleek, modern UI that captures the magic of movies. Users can browse upcoming releases, watch trailers, and enjoy a visually immersive experience tailored for film enthusiasts.",
    technologies: ["HTML", "CSS", "Javascript", "Material UI"],
    github: "https://github.com/Dev-axay18",
    demo: "https://www.linkedin.com/posts/akshay-kale-88792932a_cinescape-cinescape-javascript-activity-7285347642698559493-M4W4",
    image: "https://cdn.dribbble.com/userupload/43117160/file/original-148c98000b0503a8c04e47a2b911a3ca.jpg?resize=2048x1680&vertical=center",
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
