import React from "react";

function Portfolio() {
  return (
    <div className="w-full h-screen place-items-center bg-zinc-200 flex flex-col ">
      <h1 className="text-center text-xl">Projects</h1>
      <div className="grid md:grid-cols max-w-[1240px] m-auto">
        {/* center this entire div  */}

        <div className="flex row justify-between">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Project 1</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 place-content-center">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a>
                  <u>Github Repo</u>
                </a>
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a>
                  <u>Visit Site</u>
                </a>
              </span>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Project 2</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Project 3</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
