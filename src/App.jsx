import React from "react";
import IntroHeader from "./components/introHeader";
import Cta from "./components/cta";
import Showcase from "./components/showcase";
import data from "../data.json";

function App() {
  return (
    <div className="container mt-10 px-4 md:w-[580px] lg:mx-auto lg:w-[580px]">
      <IntroHeader introData={data.intro} />
      <Cta />
      <Showcase projectData={data.projects} skillsData={data.skills} />
      <div className="pt-8 pb-5 text-center text-sm font-normal text-grey">
        <p className="inline-flex items-center justify-center gap-2">
          Crafted in <span className="text-xl">🇮🇳</span> with{" "}
          <span className="text-xl">❤️</span>
        </p>
        <p>© All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
