import {
  FigmaImage,
  GitImage,
  JavascriptImg,
  NextImage,
  NpmImage,
  TailwindImage,
  TypescriptImage,
} from "@/assets";
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/components/global";
import Skill from "./Skill";

const skills = [
  {
    name: "Javascript",
    img: JavascriptImg,
  },
  {
    name: "Typescript",
    img: TypescriptImage,
  },
  {
    name: "Npm",
    img: NpmImage,
  },
  {
    name: "Next",
    img: NextImage,
  },
  {
    name: "Git",
    img: GitImage,
  },
  {
    name: "Figma",
    img: FigmaImage,
  },
  {
    name: "Tailwindcss",
    img: TailwindImage,
  },
];

const Skills = () => {
  return (
    <SectionContainer className="pt-[50px] pb-[100px] text-center" id="skills">
      <SectionTitle title="Skills" />
      <div className="flex justify-center items-center">
        <SectionDescription className="max-w-[700px] w-full mb-[20px] text-primary">
          The skills, tools and technologies I am really good at:
        </SectionDescription>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-[20px]">
        {skills.map((item, index) => {
          return <Skill {...item} key={index} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default Skills;

// Languages : Javascript, python, html, css, typescript, sass
// Ui frameworks: Tailwind css , Chakra ui, mantine ui, shadcn
// Frameworks: React native, react js, next js
// tools: Git, github, npm, yarn, figma
