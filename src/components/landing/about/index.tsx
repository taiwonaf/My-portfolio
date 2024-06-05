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
        Transforming visions into exceptional portfolios
      </SectionDescription>
      <p className="text-[22px] font-normal">
        With over 4 years of hands-on experience in UX/UI design and frontend
        web development, I bring a wealth of expertise to every project.
        Meticulous attention to detail coupled with a deep understanding of user
        experience principles ensures that each design is not only visually
        captivating but also intuitive and user- friendly. From crafting elegant
        interfaces to implementing responsive layouts, I am dedicated to
        delivering top-notch solutions that exceed expectations.
      </p>
    </SectionContainer>
  );
};

export default AboutMe;
