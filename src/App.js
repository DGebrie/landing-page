import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Work from "./components/Work";

library.add(fab);
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
