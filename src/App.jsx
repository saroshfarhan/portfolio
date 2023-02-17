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
      <Showcase projectData={data.projects} />
    </div>
  );
}

export default App;
