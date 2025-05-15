// import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero(){
  return (
    <div id="about" className="h-screen text-black">

      {/*Backdrop*/}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{backgroundImage: `url('/about_bg.jpg')`}}
      ></div>

      <div className=" w-[50%] h-[70%] flex flex-col justify-center items-center">
        <div className="flex w-[57%] text-[15px]" style={{ fontFamily: "Lora, serif" }}><h1>About Me,</h1></div>
        <div className="flex w-[57%] text-[30px]" style={{ fontFamily: "Playfair Display, serif" }}><p>I don’t just build websites. <br /> I build stories users can click.</p></div>
      </div>
      
      

    </div>
    
  )
}