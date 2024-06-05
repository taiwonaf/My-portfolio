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
      location: "Ibadan, Nigeria",
      site: "https://sanwo.io",
      companyName: "Sanwo.io",
      description:
        " At Lelavtech, I design and develop captivating web solutions that seamlessly blend creativity and functionality.",
      tags: ["HTML", "CSS", "TAILWIND CSS", "REACT", "REDUX TOOLKIT"],
    },
    {
      title: "Frontend Intern - Sanwo",
      location: "Ibadan, Nigeria",
      site: "https://sanwo.io",
      companyName: "Sanwo.io",
      description:
        " At Lelavtech, I design and develop captivating web solutions that seamlessly blend creativity and functionality.",
      tags: ["HTML", "CSS", "TAILWIND CSS", "REACT", "REDUX TOOLKIT"],
    },
    {
      title: "Frontend Intern - Sanwo",
      location: "Ibadan, Nigeria",
      site: "https://sanwo.io",
      companyName: "Sanwo.io",
      description:
        " At Lelavtech, I design and develop captivating web solutions that seamlessly blend creativity and functionality.",
      tags: ["HTML", "CSS", "TAILWIND CSS", "REACT", "REDUX TOOLKIT"],
    },
  ];
  return (
    <SectionContainer
      className="pt-[50px] pb-[100px] text-center"
      id="experience"
    >
      <SectionTitle title="Experience" />
      <div className="flex justify-center items-center mb-[10px]">
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
              <AccordionTrigger>{item.title}</AccordionTrigger>
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
                <div className="py-[20px] flex justify-start items-center gap-3">
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
