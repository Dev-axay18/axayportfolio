import { skillsDetails, Skill } from "./skillsDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { Icon } from "@iconify/react";

const iconMap: Record<string, string> = {
  'React': 'logos:react',
  'Next.js': 'logos:nextjs-icon',
  'TypeScript': 'logos:typescript-icon',
  'JavaScript': 'logos:javascript',
  'HTML5': 'logos:html-5',
  'CSS3': 'logos:css-3',
  'Tailwind CSS': 'logos:tailwindcss-icon',
  'Sass': 'logos:sass',
  'Bootstrap': 'logos:bootstrap',
  'Node.js': 'logos:nodejs-icon',
  'Express.js': 'skill-icons:expressjs-light',
  'Python': 'logos:python',
  'Java': 'logos:java',
  'MongoDB': 'logos:mongodb-icon',
  'PostgreSQL': 'logos:postgresql',
  'MySQL': 'logos:mysql',
  'Git': 'logos:git-icon',
  'Docker': 'logos:docker-icon',
  'AWS': 'logos:aws',
  'npm': 'logos:npm-icon',
  'Figma': 'logos:figma',
  'DevOps': 'devicon:devops',
  'Cybersecurity': 'mdi:shield-lock',
  'Kali Linux': 'simple-icons:kalilinux',
  'CEH': 'simple-icons:ceph', // No official CEH, using ceph as placeholder
};

function renderLevel(level: Skill["level"]) {
  if (level === "Expert") return <span title="Expert" className="text-yellow-400 text-lg">★★★</span>;
  if (level === "Advanced") return <span title="Advanced" className="text-blue-400 text-lg">★★☆</span>;
  if (level === "Intermediate") return <span title="Intermediate" className="text-gray-400 text-lg">★☆☆</span>;
  return null;
}

const Skills = () => {
  return (
    <section id="skills" className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 pb-10 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Skills"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,100px)]`}
        />
        <AnimatedBody
          text="Technologies, Tools, and Platforms I Use to Build Exceptional Products"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="grid w-[90%] max-w-[1345px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillsDetails.map((category) => (
          <div key={category.category} className="flex flex-col gap-4 rounded-[23px] border-[3px] border-[#212531] bg-transparent p-6 min-h-[320px]">
            <h3 className="text-[22px] font-bold uppercase text-[#e4ded7] mb-2 tracking-tight">{category.category}</h3>
            <ul className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[18px] font-medium text-[#e4ded7]">
                    <span className="text-xl">
                      <Icon icon={iconMap[skill.name] || 'mdi:star-outline'} width={28} height={28} />
                    </span> {skill.name}
                  </span>
                  {renderLevel(skill.level)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 