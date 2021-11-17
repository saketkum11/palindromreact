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
  }
  convertDate(date);
  function dateFormate(date) {
    var converted = convertDate(date);
    var ddmmyyyy = converted.day + converted.month + converted.year;
    var mmddyyyy = converted.month + converted.day + converted.year;
    var yyyymmdd = converted.year + converted.month + converted.day;

    var ddmmyy = converted.day + converted.month + converted.year.slice(-2);
    var mmddyy = converted.month + converted.day + converted.year.slice(-2);
    var yymmdd = converted.year.slice(-2) + converted.month + converted.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  }
  dateFormate(date);
  function isPalindrome(date) {
    var allDate = dateFormate(date);
    var flag = false;
    for (var i = 0; i < allDate.length; i++) {
      if (palindrome(allDate[i])) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  isPalindrome(date);
  function getNextDate(date) {}
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
