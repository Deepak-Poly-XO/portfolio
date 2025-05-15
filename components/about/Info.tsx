

export default function Info(){
  return (
    <div className="h-screen bg-[#deded8] flex justify-center items-center text-black">
      <div className=" w-[90%] h-[80%] flex flex-col space-y-5">
        <div className="text-center text-[25px]"><h1>CREATIVE. INNOVATIVE. AMBITIOUS.</h1></div>
        <div className=" w-[100%] h-[90%] justify-between flex itmes-center">
          <div className="w-[48%] flex justify-center items-center">
            <div className="w-[80%] flex flex-col space-y-5"><h1 className="text-[30px]" style={{ fontFamily: "Playfair Display, serif" }}>Hey,</h1><p>I’m Deepak Poly — a software and web developer who enjoys building things that actually work and look good doing it. I’ve worked on everything from client websites to personal projects that helped me grow my skills in the real world. <br /><br /> I’m always learning, always improving, and I care about writing clean code that makes sense — for users and for developers. No fluff, just solid, thoughtful work.</p></div>
          </div>
          <div className="w-[1px] h-[100%] flex items-center"><div className="w-[1px] h-[60%] border border-black"></div></div>
          <div className="w-[44%] h-[100%]">

            <div className=" w-[80%] h-[92%] flex flex-col justify-center space-y-5 items-center">
                <div><h1 className="text-[30px]" style={{ fontFamily: "Playfair Display, serif" }}>Tech i work with</h1></div>

                <div className="w-[52%] flex flex-col space-y-5 items-center">
                  <div className="mt-10">
                    <i className="devicon-react-original text-4xl p-[7px] rounded-lg "></i>
                  <i className="devicon-nextjs-plain text-4xl  m-[12px] p-[7px] rounded-lg "></i>
                  <i className="devicon-typescript-plain text-4xl m-[12px] p-[7px] rounded-lg"></i>
                  <i className="devicon-java-plain  text-4xl m-[12px] p-[7px] rounded-lg "></i>
                  </div>
                  <div>
                    <i className="devicon-python-plain text-4xl p-[7px] rounded-lg"></i>
                    <i className="devicon-mongodb-plain text-4xl m-[12px] p-[7px] rounded-lg"></i>
                  </div>
                  
                </div>
            </div>

          </div>
        </div>
      </div>
      

    </div>
    
  )
}