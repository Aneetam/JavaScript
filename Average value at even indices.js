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
  const integers = JSON.parse(readLine());

  /* Write your code here */
  let sum =0 ;
  let count = 0;
  
  integers.forEach((value,index) =>{
      if(index % 2 ==0){
          sum +=value;
          count ++;
      }
  });
  const average = count > 0 ? sum/count :0;
  console.log(average);
}