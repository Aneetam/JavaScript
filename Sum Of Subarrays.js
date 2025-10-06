"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());a
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const nestedArray = JSON.parse(readLine());

  /* Write your code here */
  const result = nestedArray.map(subArray =>{
      const hasEven = subArray.some( num => num%2 ===0);
      if(hasEven){
          return subArray.reduce((sum,num) => sum + num ,0);
      }
      else{
          return 0;
      }
      
  });
  console.log(result);
}