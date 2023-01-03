import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <a href="#">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">DMG</h1>
          </a>
          <ul className="hidden md:flex">
            <a href="#">
              <li>Home</li>
            </a>

            <a href="#work">
              <li>Portfolio</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <a href="#home">
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
        </a>
        <a></a>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Portfolio</li>
        <a href="#contact">
          <li className="border-b-2 border-zinc-300 w-full">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
