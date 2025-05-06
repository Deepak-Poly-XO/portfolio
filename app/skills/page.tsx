"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills(){

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return(
    <motion.div id="skills" className="flex flex-col justify-center text-center mt-[22em]" initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1.5 }}>
      <div className="w-[75%] self-center justify-start flex text-[34px] tracking-wide font-bold ">
      My Development Stack
      </div>
      <div className="w-[50%] self-center text-left mr-[24em] mt-[1em] opacity-70">
      I&#39;m proficient in modern technologies to build fast, scalable, and user-friendly applications. These are the tools I work with. 
      </div>
      <div className="flex justify-start mt-[2em]  ml-[12em]">
        <div className="react rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
        <i className="devicon-react-original colored text-4xl bg-blue-500 m-[12px] p-[7px] rounded-lg "></i>
        <div className="flex flex-col items-start">
          <div className="text-[18px]">React</div>
          <div className="opacity-75">Javascript Library</div>
        </div>
        </div>


        <div className="nextjs rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
        <i className="devicon-nextjs-plain text-4xl bg-gray-800 m-[12px] p-[7px] rounded-lg "></i>
        <div className="flex flex-col items-start">
          <div className="text-[18px]">NextJS</div>
          <div className="opacity-75">React Framework</div>
        </div>
        </div>


        <div className="typescript rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
        <i className="devicon-typescript-plain colored text-4xl bg-gray-700 m-[12px] p-[7px] rounded-lg"></i>
        <div className="flex flex-col items-start">
          <div className="text-[18px]">TypeScript</div>
          <div className="opacity-75">Better Javascript</div>
        </div>
        </div>


        <div className="nodejs rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
          <i className="devicon-nodejs-plain colored text-4xl bg-green-900 m-[12px] p-[7px] rounded-lg"></i>
          <div className="flex flex-col       items-start">
            <div className="text-[18px]">NodeJS</div>
            <div className="opacity-75">Backend</div>
          </div>
        </div>
      </div>


      
      <div className="flex justify-start mt-[1em]  ml-[12em]">
        <div className="tailwind rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
        <i className="devicon-tailwindcss-original colored text-4xl bg-blue-900 m-[12px] p-[7px] rounded-lg "></i>
        <div className="flex flex-col items-start">
          <div className="text-[18px]">Tailwind</div>
          <div className="opacity-75">Css Framework</div>
        </div>
        </div>

        <div className="mongo rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
          <i className="devicon-mongodb-plain colored text-4xl bg-green-900 m-[12px] p-[7px] rounded-lg"></i>
          <div className="flex flex-col       items-start">
            <div className="text-[18px]">MongoDB</div>
            <div className="opacity-75">Database</div>
          </div>
        </div>


        <div className="java rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
        <i className="devicon-java-plain colored text-4xl bg-red-100 m-[12px] p-[7px] rounded-lg "></i>
        <div className="flex flex-col items-start">
          <div className="text-[18px]">Java</div>
          <div className="opacity-75">Backend Tool</div>
        </div>
        </div>


        <div className="python rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
        <i className="devicon-python-plain colored text-4xl bg-yellow-800 m-[12px] p-[7px] rounded-lg"></i>
        <div className="flex flex-col items-start">
          <div className="text-[18px]">Python</div>
          <div className="opacity-75">Machine Learning</div>
        </div>
        </div>
      </div>


    </motion.div>
  )
}