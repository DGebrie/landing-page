import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen  flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="p-8 text-center">
          <p className="text-5xl font-bold pb-5">Dejen Gebrie</p>
          <div className="">
            <a href="#work">
              <button
                id="btn"
                class="bg-pink-600 hover:bg-grey-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
              >
                Projects
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1IMOeA509Gge9ZjxI4wzqUzihNEoDa2Zx/view?usp=sharing"
              target="_blank"
            >
              <button class="bg-pink-600 hover:bg-grey-700 text-white font-bold py-2 px-4 border border-gray-700 rounded ml-3">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="p-8">
          <p>
            As a child, playing games, watching videos, even communicating with
            friends on social media sites, I've always wanted to learn what it
            took to create these apps and sites. After spending years as a
            banker, I decided to take a leap of faith and feed my inner child's
            desire to build sites. After attending a bootcamp, spending
            countless hours on Google, Youtube and other sites to expand my
            knowledge in coding, I am proud to call myself a ...
            <span className="text-2xl font-bold pb-5 ">Software Engineer.</span>
          </p>

          {/* Add Icons of languages  */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
