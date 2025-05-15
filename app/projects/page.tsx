"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Projects(){

  const [activeTab,setActiveTab] = useState("personal");

  return(

    <div id="projects" className="flex flex-col justify-center text-center mt-[12em] mb-[10em]">
      <div className="w-[75%] self-center justify-start flex text-[34px] tracking-wide font-bold ">My Projects</div>

      <div className="w-[50%] self-center text-left mr-[24em] mt-[1em] flex space-x-[4em]">
        <div className={`border rounded-md p-[10px] w-[6em] self-center flex justify-center cursor-pointer hover:bg-gray-900 transition-[.5s]${activeTab ==="personal" ? "bg-[#021526] opacity-70" : ""}`}
        onClick={() => setActiveTab("personal")}>
          <button className="text-white ">Personal</button>
        </div>
        <div className={`border rounded-md p-[10px] w-[6em] self-center flex justify-center cursor-pointer hover:bg-gray-900 transition-[.5s]${
            activeTab === "work" ? "bg-[#021526] opacity-70" : ""
          }`}
          onClick={() => setActiveTab("work")}>
          <button className="text-white">Work</button>
        </div>
      </div>

      {/* Personal Projects */}
      {activeTab === "personal" && (
        <div className="flex flex-col justify-center">
          <div className="dinocode flex flex-col  bg-[#1A1A1D] p-[2em] mt-[2em] w-[75%] h-[40em] self-center rounded-xl">
            <div className="flex justify-center rounded-xl overflow-hidden ">
              <Link href="/dinocode" className="transition-transform duration-300 hover:scale-105 rounded-xl w-[80%]"><img  src="/dinocode.png" alt="dinocode" /></Link>
            </div>
            <div className="flex justify-between w-[100%]">
              <a href="/dinocode" className="cursor-pointer">
                <div className="ml-[110px] mt-[20px] text-[30px] flex group">DinoCode
                  <div className="text-[20px] ml-[10px] mt-[14px] transition-transform duration-300 group-hover:translate-x-2"> 
                    <FaArrowRight />
                  </div>
                </div>
              </a>
              <div>
                <div className="flex mt-[20px] w-[26em] mr-[7em] space-x-10">
                  <div className="p-[10px] border w-[120px] text-[13px] self-center">React</div>
                  <div className="p-[10px] border w-[120px] text-[13px] self-center">Java</div>
                  <div className="p-[10px] border w-[120px] text-[13px] self-center">Tailwind</div>
                </div>
                <div className="flex mt-[10px] w-[18em] mr-[7em] space-x-10 mt-[25px]">
                  <div className="p-[10px] border w-[120px] text-[13px] self-center">WebSockets</div>
                  <div className="p-[10px] border w-[120px] text-[13px] self-center">MongoDB</div>
                </div>
              </div>
            </div>
            <div>
              {/* Arrow Right */}
              
            </div>
          </div>
        </div>
      )}

      {/* Work Projects */}
      {activeTab === "work" && (
        <div className="flex flex-col justify-center">
        <div className="holistic flex flex-col  bg-[#1A1A1D] p-[2em] mt-[2em] w-[75%] h-[40em] self-center rounded-xl">
          <div className="flex justify-center rounded-xl overflow-hidden ">
            <Link href="/dietitian" className="transition-transform duration-300 hover:scale-105 rounded-xl w-[80%]"><img  src="/Holistic.png" alt="Holistic" /></Link>
          </div>
          <div className="flex justify-between w-[100%]">
            <a href="/dietitian" className="cursor-pointer">
              <div className="ml-[110px] mt-[20px] text-[30px] flex group">Holistic Dietitian
                <div className="text-[20px] ml-[10px] mt-[14px] transition-transform duration-300 group-hover:translate-x-2"> 
                  <FaArrowRight />
                </div>
              </div>
            </a>
            <div>
              <div className="flex mt-[20px] w-[26em] mr-[7em] space-x-10">
                <div className="p-[10px] border w-[120px] text-[13px] self-center">React</div>
                <div className="p-[10px] border w-[120px] text-[13px] self-center">Next Js</div>
                <div className="p-[10px] border w-[120px] text-[13px] self-center">Tailwind</div>
              </div>
              <div className="flex mt-[10px] w-[18em] mr-[7em] space-x-10 mt-[25px]">
                <div className="p-[10px] border w-[120px] text-[13px] self-center">Node Js</div>
                <div className="p-[10px] border w-[120px] text-[13px] self-center">MongoDB</div>
              </div>
            </div>
          </div>
          <div>
            {/* Arrow Right */}
            
          </div>
        </div>
      </div>
      )}
    </div>

  )
}