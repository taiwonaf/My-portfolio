import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/components/global";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LinkIcon, MapPin } from "lucide-react";
import Link from "next/link";
import WorkTag from "../works/WorkTag";

const index = () => {
  const experience = [
    {
      title: "Frontend Intern - Sanwo",
      location: "Remote",
      site: "https://sanwo.io",
      companyName: "Sanwo.io",
      description:
        " At Sanwo, I worked with another frontend developer to work on sanwo dashboard, sanwo membership (another product of sanwo) and product showcase sites.",
      tags: [
        "CSS",
        "TAILWIND CSS",
        "REACT",
        "REDUX TOOLKIT",
        "CHAKRA UI",
        "NEXT JS",
      ],
    },
    {
      title: "Frontend Mobile and Web Developer - NDIA (Food devliery startup)",
      location: "Remote",
      site: "https://ndia.ng",
      companyName: "NDIA",
      description:
        " At NDAI, I collaborated with other frontend developers to build the NDIA vendor, customer and rider app using react native and the NDIA admin dashboard using NEXT JS",
      tags: [
        "REACT",
        "REACT NATIVE",
        "TAILWIND CSS",
        "SHADCN UI",
        "REDUX TOOLKIT",
      ],
    },
    {
      title: "Frontend Freelancer - FIVERR",
      location: "Ibadan, Nigeria",
      site: "https://sanwo.io",
      companyName: "Sanwo.io",
      description:
        "On the FIVERR freelancing platfrom, I offer paid consultation to individuals or businesses using code and no code tools. ",
      tags: [
        "HTML",
        "CSS",
        "TAILWIND CSS",
        "REACT",
        "REDUX TOOLKIT",
        "REACT NATIVE",
        "WORDPRESS",
        "WEBFLOW",
        "FRAMER",
        "WIX",
        "BUBBLE.io",
        "ADALO",
      ],
    },
    {
      title: "Frontend Intern - HGN INTERNSHIP",
      location: "Remote",
      site: "https://internship.zuri.team/",
      companyName: "HGN",
      description:
        "During the HNG intership 9 cohort, I collaborated with other frontend developers, backend developers, project managers and devops as a frontend developer to build a stock recommendation web application. ",
      tags: ["TAILWIND CSS", "REACT", "NEXT JS"],
    },
  ];
  return (
    <SectionContainer
      className="pt-[50px] pb-[100px] text-center"
      id="experience"
    >
      <SectionTitle title="Experience" />
      <div className="flex justify-center items-center mb-[20px]">
        <SectionDescription className="max-w-[700px] w-full mb-[20px] text-primary">
          Here is a quick summary of my most recent experiences
        </SectionDescription>
      </div>
      <Accordion type="single" collapsible className="w-full text-left">
        {experience.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="px-5 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md mb-2"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-start items-center gap-[20px] mb-[10px]">
                  <div className="flex justify-start items-center gap-[5px]">
                    <MapPin className="h-[18px] w-[18px]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex justify-start items-center gap-[5px]">
                    <LinkIcon className="h-[18px] w-[18px]" />
                    <Link href={item.site} className="underline">
                      {item.companyName}
                    </Link>
                  </div>
                </div>
                <p>{item.description}</p>
                <div className="py-[20px] flex justify-start items-center flex-wrap gap-3">
                  {item?.tags.map((tag, index) => (
                    <WorkTag tag={tag} key={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </SectionContainer>
  );
};

export default index;
