import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();

    setText(newText); //text will get change on the click on the button
    props.showAlert("Converted to upper case", "success");
  };

  const handleOnChange = (event) => {
    // console.log("m");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear TextBox", "success");
  };
  const handleNumClick = () => {
    const reg = /[0-9]/g;

    const newText = text.match(reg);
    const res = newText.join("");
    setText(res);
    props.showAlert("All numbers are here", "success");
  };

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied your text", "success");
  };

  const [text, setText] = useState(""); //text is value, setText is a function
  // setText("new Text");
  return (
    <>
      <div
        className="conatiner my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange} //otherwise we will not be able to type anything
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            }} //object
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleNumClick}
        >
          Numbers in the text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Yout text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something int the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
