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

/* Please do not modify anything above this line */

function main() {
  const inputString = readLine();
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  
  /* Write your code here */
  const upper = inputString.toUpperCase();
  let endWithVowel = false;
  for(let i =0;i<vowels.length ;i++){
      if(upper.endsWith(vowels[i])){
          endWithVowel = true;
          break;
      }
  }
  
  console.log(endWithVowel);
}
