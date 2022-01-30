import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

import TextForm from "./components/TextForm";

// import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light"); //Whether the dark mode is enable or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* by using props */}
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyse below"  />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
