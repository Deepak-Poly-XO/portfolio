import React from "react";
import About from "@/components/dinocode/About"
import Hero from "@/components/dinocode/Hero"
import Drop from "@/components/dinocode/Drop"
import Features from "@/components/dinocode/Features"
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