import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/components/global";

const AboutMe = () => {
  return (
    <SectionContainer
      className="pt-[50px] pb-[100px] text-center md:text-left"
      id="about"
    >
      <SectionTitle title="About me" />
      <SectionDescription className="md:max-w-[600px] text-center md:text-left w-full mb-[20px] text-primary">
        Solving problems digitaly one component at a time
      </SectionDescription>
      <p className="text-[22px] font-normal">
        As a passionate and innovative frontend developer, I specialize in
        crafting seamless and intuitive user experiences for both mobile and web
        applications. With a keen eye for design and a knack for
        problem-solving, I bring ideas to life using frontend technologies like
        HTML, CSS, Javascript and various framewokrs. My experties spans from
        responsive design to dynamic interactions, ensuring fast, accessible,
        and modern interfaces that delight users. Let's connect and build
        something amazing together.
      </p>
    </SectionContainer>
  );
};

export default AboutMe;
