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
  const candidatesList = JSON.parse(readLine().replace(/'/g, '"'));

/* Please do not modify anything above this line */
  
  // Write your code here
  
  const passedCandidated = candidatesList.filter(candidate =>{
                            return Object.values(candidate.points).every(point => point > 75);
                            });
                            
    const selectedCandidates = passedCandidated.map(candidate =>candidate.name);
    
    console.log(selectedCandidates);
}