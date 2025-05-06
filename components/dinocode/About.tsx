import React from "react";

export default function About(){
  return(

    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[60%] h-[80%] flex flex-col space-y-5 items-center justify-center">
        <div>
          <h1 className="text-[45px]">ABOUT DINOCODE</h1>
        </div>
        <div>
          <p className="text-[20px]">DinoCode is a real-time collaborative coding platform designed for developers, students, and teams who want to code together, learn, and build projects remotely. Inspired by the challenges of remote collaboration and the lack of lightweight, intuitive platforms, DinoCode focuses on simplicity, speed, and shared learning.

            <br /> <br /> During team-based projects and online hackathons, I noticed how hard it was to collaborate in real time without clunky setups or expensive tools. DinoCode was born out of a need for a streamlined coding experience that lets multiple users write and edit code simultaneously—no installations, just productivity.
          </p>
        </div>
        <div className="border p-3 hover:bg-gray-900 transition-colors duration-200">
          <a href="https://dino-code-frontend.vercel.app/" target="_blank" rel="noopenreferar">VISIT WEBSITE</a>
        </div>
      </div>
    </div>

  )
}