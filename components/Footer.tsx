import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <footer className="z-0 bg-[#0a0a0a] min-h-[30vh] flex flex-col justify-center items-center px-4 py-8 border-t">
      {/* Main Content */}
      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center"
          >
        
          </h1>
        </div>
        <nav
          className="mt-8 w-full flex flex-wrap justify-center gap-x-8 gap-y-4 text-base sm:text-lg"
        >
          <Link href="/">Home</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ fontFamily: "spectral, serif" }}
        className="w-full max-w-5xl mt-10 pt-8 border-t  flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm"
      >
        
        <div className="text-center">
          <p>© 2025 Deepak Poly. All rights reserved.</p>
        </div>
        <div className="text-center md:text-right">
          <p>
            Website by{" "}
            <a className="underline" href="https://www.linkedin.com/in/deepak-poly-416565236/" rel="noopener noreferrer" target="_blank">
              Deepak Poly
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
