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

async function main() {
  const isHotWaterReady = JSON.parse(readLine());
  const isBreakfastReady = JSON.parse(readLine());

/* Please do not modify anything above this line */

  // Write your code here
  function takeShower(){
      return new Promise((resolve,reject) =>{
          if(isHotWaterReady){
              resolve("Taken Shower");
          }
          else{
              reject("Hot Water Not Ready")
          }
      });
  }
  
    function haveBreakfast(){
      return new Promise((resolve,reject) =>{
          if(isBreakfastReady){
              resolve("Had Breakfast");
          }
          else{
              reject("Breakfast Not Ready")
          }
      });
  }
  
  
  function getToWork(){
      return new Promise((resolve) =>{
          resolve("Got to Work");
      });
  }
  
  try{
      const showerStatus = await takeShower();
      console.log(showerStatus);
      
      const breakfastStatus = await haveBreakfast();
      console.log(breakfastStatus);
      
      const workStatus = await getToWork();
      console.log(workStatus);
  }
  catch(error){
      console.log(error);
  }
  
  
}