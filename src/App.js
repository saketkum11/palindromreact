import "./styles.css";
import React, { useState } from "react";
export default function App() {
  var date = {
    day: 5,
    month: 2,
    year: 2011
  };
  function inputHandler(event) {
    console.log(event.target.value);
  }
  function reverse(str) {
    var splitStr = str.split("");
    var reverseStr = splitStr.reverse();
    var reversedStr = reverseStr.join("");

    return reversedStr;
  }
  function palindrome(str) {
    var reversed = reverse(str);
    return reversed === str;
  }
  palindrome("nitin");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <input type="text" onChange={inputHandler}></input>
      <button>Check</button>
      <h1>{}</h1>
    </div>
  );
}
