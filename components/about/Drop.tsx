import Link from "next/link"

export default function Info(){
  return (
    <div className="h-screen bg-[#deded8] flex justify-center items-center text-black">
      <div className="flex flex-col justify-center items-center w-[80%] mb-[15em] h-[60%] space-y-10">
        <div><h1 className="text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>Got an Idea? Let’s Make It Real</h1></div>
        <div>
          <Link href="/contact" className="text-[20px] border border-black p-[10px] transition duration-200  hover:bg-gray-400">Contact Me</Link>
        </div>
      </div>
      

    </div>
    
  )
}