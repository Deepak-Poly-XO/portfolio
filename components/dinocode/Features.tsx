
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
              <p className="text-[20px]">DinoCode offers real-time collaborative code editing, allowing multiple users to work together seamlessly on the same file. It supports syntax highlighting across multiple programming languages, ensuring clarity and ease of use for developers. The user interface is clean, responsive, and optimized for all devices—from desktops to mobile screens. Additionally, there is potential for future integration of a chat or comment feature to enhance team communication during coding sessions.</p>
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
                  <i className="devicon-java-plain colored text-1xl bg-red-100 m-[12px] p-[7px] rounded-lg "></i>
                  <div className="flex flex-col items-start">
                    <div className="text-[14px]">
                      Java
                    </div>
                    <div  className="opacity-75    text-[10px]">Backend Tool
                    </div>
                  </div>
            </div>
            </div>
          </div>

          <div className="flex">
            <div>
            <div className="websockets rounded-lg w-[18em] flex justify-start items-center my-auto mr-[15px] bg-[#1A1A1D]">
                  <i className="devicon-socketio-original colored text-1xl bg-red-100 m-[12px] p-[7px] rounded-lg "></i>
                  <div className="flex flex-col items-start">
                    <div className="text-[14px]">
                      WebSockets
                    </div>
                    <div  className="opacity-75    text-[10px]">Backend Tool
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