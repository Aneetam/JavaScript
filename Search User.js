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
  const userName = readLine();
  const users = ["Abhiram", "Gabrill", "Mosh", "Alia", "Rehman", "Manoj"];
  
  /* Write your code here */
  const userPromise = new Promise((resolve,reject) =>{
     if(users.includes(userName)){
         resolve("User Found");
     }
     else{
         reject("User Not Found");
     }
  });
  try{
        const result =await userPromise;
      console.log(result); 
  }
  catch(error){
    console.log(error); 
  }
}