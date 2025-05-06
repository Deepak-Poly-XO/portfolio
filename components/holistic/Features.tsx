
import React from "react";

export default function Features(){
  return(

    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[60%] h-[90%] flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-col justify-center items-center space-y-5">
          <div>
            <h1 className="text-[45px]">FEATURES</h1>
          </div>
          <div>
              <p className="text-[20px]">The Holistic Dietitian website features a clean and calming design that reflects a wellness-focused aesthetic, creating a soothing experience for visitors. Its mobile-responsive layout ensures seamless access across all devices, enhancing user convenience. The site includes a dynamic service listing and an easy-to-update blog section, allowing for regular content updates and service management. An integrated appointment request and contact form streamlines client engagement, while the SEO-optimized structure boosts visibility on search engines, helping the site reach a broader audience.</p>
          </div>
        </div>

        <div className=" w-[100%] flex flex-col space-y-3">
          <div>TECH</div>

          <div className="flex">
          <div>
            <div className="react rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
                  <i className="devicon-react-original colored text-1xl bg-blue-500 m-[12px] p-[7px] rounded-lg "></i>
                  <div className="flex flex-col items-start">
                    <div className="text-[14px]">
                      React
                    </div>
                    <div  className="opacity-75    text-[10px]">Javascript Library
                    </div>
                  </div>
            </div>
          </div>

          <div>
            <div className="tailwind rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
                  <i className="devicon-tailwindcss-original colored text-1xl bg-blue-900 m-[12px] p-[7px] rounded-lg "></i>
                  <div className="flex flex-col items-start">
                    <div className="text-[14px]">
                      Tailwind
                    </div>
                    <div  className="opacity-75    text-[10px]">Css Framework
                    </div>
                  </div>
            </div>
            </div>

            <div>
            <div className="java rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
                  <i className="devicon-nextjs-plain colored text-1xl bg-red-100 m-[12px] p-[7px] rounded-lg "></i>
                  <div className="flex flex-col items-start">
                    <div className="text-[14px]">
                      Next Js
                    </div>
                    <div  className="opacity-75    text-[10px]">Framework
                    </div>
                  </div>
            </div>
            </div>
          </div>

          <div className="flex">
            <div>
            <div className="websockets rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
                  <i className="devicon-nodejs-plain colored  text-1xl bg-red-100 m-[12px] p-[7px] rounded-lg "></i>
                  <div className="flex flex-col items-start">
                    <div className="text-[14px]">
                      Node Js
                    </div>
                    <div  className="opacity-75    text-[10px]">Backend
                    </div>
                  </div>
            </div>
            </div>

            <div>
            <div className="websockets rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
                  <i className="devicon-mongodb-plain colored  text-1xl bg-red-100 m-[12px] p-[7px] rounded-lg "></i>
                  <div className="flex flex-col items-start">
                    <div className="text-[14px]">
                      MongoDB
                    </div>
                    <div  className="opacity-75    text-[10px]">Database
                    </div>
                  </div>
            </div>
            </div>
          </div>
          

        </div>
      </div>
      
    </div>

  )
}