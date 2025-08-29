export type Skill = {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillsDetails: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Sass', level: 'Intermediate' },
      { name: 'Bootstrap', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'npm', level: 'Advanced' },
      { name: 'Figma', level: 'Advanced' },
      { name: 'Kali Linux', level: 'Expert' },
      { name: 'CEH', level: 'Expert' },
      { name: 'DevOps', level: 'Advanced' },
      { name: 'Cybersecurity', level: 'Expert' },
    ],
  },
]; 
