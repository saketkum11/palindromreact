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
  function convertDate(date) {
    var newDate = {
      day: "",
      month: "",
      year: ""
    };
    if (date.day < 10) {
      newDate.day = "0" + date.day;
    } else {
      newDate = date.day.toString();
    }
    if (date.month < 10) {
      newDate.month = "0" + date.month;
    } else {
      newDate = date.month.toString();
    }
    newDate.year = date.year.toString();
    return newDate;
    console.log(newDate);
  }
  convertDate(date);
  function newDateFormate(date) {}
  newDateFormate(date);
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
