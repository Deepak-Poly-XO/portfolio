
import React from "react";

export default function About(){
  return(

    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[60%] h-[80%] flex flex-col space-y-5 items-center justify-center">
        <div>
          <h1 className="text-[45px]">ABOUT HOLISTIC DIETITIAN</h1>
        </div>
        <div>
          <p className="text-[20px]">The Holistic Dietitian Website is a professional and responsive web platform designed for a certified dietitian to showcase services, client testimonials, and wellness programs. The goal was to provide a calming, user-friendly interface that reflects the dietitian’s holistic approach to nutrition and lifestyle.

            <br /> <br /> Special attention was given to color psychology, typography, and layout to convey a sense of health, balance, and approachability. The site not only highlights the dietitian’s expertise but also empowers users to take actionable steps toward a healthier lifestyle through intuitive navigation and mobile-first responsiveness.
          </p>
        </div>
        <div className="border p-3 hover:bg-gray-900 transition-colors duration-200">
          <a href="https://holistic-dietician.vercel.app/" target="_blank" rel="noopenreferar">VISIT WEBSITE</a>
        </div>
      </div>
    </div>

  )
}