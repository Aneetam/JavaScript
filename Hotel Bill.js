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
function calculateTotalBill(dayCharge,days){
    let bill = dayCharge * days;
    let discount =0 ;
    if(days > 5){
        discount = 15;
    }
    else if(days >2){
        discount = 5;
    }
    let discountedBill = bill -( bill * discount) / 100;
    return discountedBill;
}
function main() {
  const dayCharge = JSON.parse(readLine());
  const days = parseInt(readLine());
 
  /* Write your code here */
  let discountedBill=calculateTotalBill(dayCharge,days);
  console.log(discountedBill);
}