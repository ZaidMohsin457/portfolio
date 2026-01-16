import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const SkillsSection = () => {
  return (
    <SectionWrapper 
      id="skills" 
      className="w-full min-h-screen h-[100dvh] sm:h-[120dvh] md:h-[150dvh] pointer-events-none"
    >
      <SectionHeader 
        id='skills' 
        title="Tech Stack" 
        desc="(hint: press a key on the 3D keyboard)" 
        className="px-4 md:px-0"
      />
    </SectionWrapper>
  );
};

export default SkillsSection;
