import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import TextForm from "./components/TextForm";

// import About from "./components/About";
function App() {
  
  const [mode, setMode] = useState("light"); //Whether the dark mode is enable or not
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtil(Dark mode)";
      showAlert("Dark mode has been enabled", "success");
      // setTimeout(() => {
      //   document.title = "install now";
      // }, 1500);
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil(Light mode)";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* by using props */}
      <Alerts alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to analyse below"
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
