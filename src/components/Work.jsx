import React from "react";
// import DejensSporting from "../assets/images/dejens-sporting1.png";
//import screenshots of projects
import FlashcardApp from "../assets/images/flashcardApp.png";
import TasteBudsSearch from "../assets/images/TasteBudsSearch.png";
import DejensSportingGoods from "../assets/images/DejensSportingGoods.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-zinc-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col  w-full h-full">
        <div className="pb-8 text-center">
          <p
            className="text-4xl font-bold inline border-b-4 border-pink-600"
            id="work"
          >
            Work
          </p>
          <p className="py-6"> // Check out my work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${FlashcardApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/DGebrie/sports-store">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DejensSportingGoods})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-Commerce Store
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://dejens-sporting-goods.netlify.app/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/DGebrie/sports-store"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TasteBudsSearch})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Recipe App
              </span>
              <div className="pt-8 text-center">
                <a href="https://dejen-tastebuds.netlify.app" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/DGebrie/tastebuds" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
