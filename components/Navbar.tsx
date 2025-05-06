"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`z-10 p-4 text-white flex flex-col justify-center items-center m-5 fixed top-0 right-[36%] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[105%]"
      }`}
    >
      <ul className="flex space-x-8 w-120 bg-[#1A1A1D] items-center justify-center px-8 py-4 rounded-xl border">
        <li>
          <Link href="/" className="hover:text-gray-400 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <a href="/about"  className="hover:text-gray-400 transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <Link href="/#projects" className="hover:text-gray-400 transition-colors duration-200">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 transition-colors duration-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
