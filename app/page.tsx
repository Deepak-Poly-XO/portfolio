import Hero from "./hero/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import FadeInSection from "@/components/FadeIn";


export default function Home() {
  return (
    <div>
      <FadeInSection>
        <Hero /> 
      </FadeInSection>
         <Skills />
      <FadeInSection>
          <Projects />
      </FadeInSection>
    </div>
  );
}
