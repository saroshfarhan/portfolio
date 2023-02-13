import React from "react";
import IntroHeader from "./components/introHeader";
import data from "../data.json";

function App() {
  return (
    <div className="container mt-10 px-4 lg:mx-auto">
      <IntroHeader introData={data.intro} />
    </div>
  );
}

export default App;
