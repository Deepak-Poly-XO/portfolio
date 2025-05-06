import React from "react";
import About from "@/components/holistic/About"
import Hero from "@/components/holistic/Hero"
import Drop from "@/components/holistic/Drop"
import Features from "@/components/holistic/Features"
import FadeInSection from "@/components/FadeIn";

export default function Dinocode(){
  return(

    <div>
      <FadeInSection>
      <Hero />
      <About />
      <Drop />
      <Features />
      </FadeInSection>
    </div>

  )
}