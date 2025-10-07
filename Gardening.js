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
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());

  /* Write your code here */
  const cutGrass = new Promise ((resolve,reject) =>{
      if(isGrassTrimmerFound){
          resolve("Grass Trimmed")
      }
      else{
          reject("Grass Trimmer Not Found")
      }
  });
  
    const waterPlants = new Promise ((resolve,reject) =>{
      if(isWaterHosePipeFound){
          resolve("Watered Plants")
      }
      else{
          reject("Water Hose Pipe Not Found")
      }
  });
      
    const clearGarden = new Promise((resolve) =>{
        resolve("Garden Cleaned")
    })
  

  const myPromise = async () => {
    try {
     
      /* Write your code here */
     const grassResult = await cutGrass;
      console.log(grassResult);
      
    const cleanResult = await clearGarden;
      console.log(cleanResult);
      
    const waterResult = await waterPlants;
      console.log(waterResult);
      
    } catch(error) {

      /* Write your code here */
    console.log(error);
      
    }
  };
  
  myPromise();
}