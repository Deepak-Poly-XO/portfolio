import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
export default function About(){
  return (
    <div id="about" className="flex justify-center text-center flex-col m-[10em]">

      {/*Backdrop*/}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 -z-10"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      {/*Content*/}
      <div><h1 className="text-[3.2em] mt-3">Hi, I&#39;m <span className="text-blue-400">Deepak Poly</span></h1></div>
      <div className="text-xl mt-4 mb-2">Software Developer</div>
      <div className="tracking-wider text-xs opacity-80" ><p>BASED IN CANADA</p>
      </div>
      <div className="mt-10  w-[24em] self-center"> I Craft dynamic, responsive, and efficient web applications with modern technologies</div>

      <div className="flex justify-center text-center space-x-5 mt-[20px]">
      <a href="https://github.com/Deepak-Poly-XO" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-[20px] hover:text-gray-400 transition-colors duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/deepak-poly-416565236/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-[20px] hover:text-blue-500 transition-colors duration-300" />
      </a>
      <a href="mailto:deepakpoly1980@email.com">
        <FaEnvelope className="text-[20px] hover:text-red-500 transition-colors duration-300" />
      </a>
      </div>
      <div className="relative flex justify-center text-center self-center">
        <a href="#skills"><FaArrowDown className="absolute top-32 text-[20px] text-gray-400 hover:text-gray-700 transition-transform duration-300 cursor-pointer animate-pulse " /></a>
      
      </div>
      

    </div>
    
  )
}