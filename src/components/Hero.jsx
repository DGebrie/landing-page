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
          <p className="text-2xl font-bold pb-5 text-center">
            Hi, I am a Software Engineer.
          </p>
          <p>
            I have experience blah blah blah i am the best I have experience
            blah blah blah i am the bestI have experience blah blah blah i am
            the bestI have experience blah blah blah i am the best I have
            experience blah blah blah i am the bestI have experience blah blah
            blah i am the best
          </p>
          {/* Add Icons of languages  */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
