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

async function main() {
  const isSticksFound = JSON.parse(readLine());
  const isLighterFound = JSON.parse(readLine());

  /* Write your code here */
  
  async function gatherSticks(isSticksFound){
      if(isSticksFound){
          return "Sticks Gathered";
      }
      else{
          throw "Sticks Not Found";
      }
  }
  
  async function arrangeSticks(){
      return "Sticks Arranged"
  }
  
async function lightCampFire(isLighterFound){
      if(isLighterFound){
          return "Campfire Lighted";
      }
      else{
          throw "Lighter Not Found";
      }
  }
  try{
    const sticks = await gatherSticks(isSticksFound);
      console.log(sticks);  
      
    const arranged = await arrangeSticks();
      console.log(arranged); 
    const fire = await lightCampFire(isLighterFound);
      console.log(fire);  
  }
  catch (error){
    console.log(error);
  }
}