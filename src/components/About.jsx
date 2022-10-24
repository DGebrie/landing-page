import React from "react";

export default function About() {
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="m-8">
          {/*  // Add paragraph about self ...where did you learn, Thinkful link ..where are you working, WaFd link ..
               // Background and interests */}
          <p className="text-lg">
            Quick snippet about myself: from? why i chose se? where did i learn?
            where do i currently work? how do i stay up to date with tech? what
            am i working on? where do i see myself in the future? interests?
          </p>
        </div>
      </div>
    </div>
  );
}
