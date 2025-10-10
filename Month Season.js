"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const month = readLine();

/* Please do not modify anything above this line */

  // Write your code here
  let season
  switch (month) {
      case 'December':
      case 'January':
          // code
          season = "Winter"
          break;
      case 'February':
      case 'March':
          // code
          season = "Spring"
          break;
      case 'April':
      case 'May':
      case  'June':
          // code
          season = "Summer"
          break;
      case 'July':
      case 'August':
      case  'September':
          // code
          season = "Monsoon"
          break;
      case 'October':
      case 'November':
          // code
          season = "Autumn"
          break;
      
      default:
          // code
          console.log("Invalid Month");
          return;
  }
  console.log(season);
}