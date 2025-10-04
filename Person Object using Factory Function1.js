"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function createPerson(firstName, lastName) {
  /* Write your code here. */
  return {
      firstName : firstName,
      lastName : lastName,
      getFullName : function(){
          return `${this.firstName} ${this.lastName}`;
      }
  };
}

function main() {
  const firstName = readLine();
  const lastName = readLine();

  /* Write your code here. */
  const person = createPerson(firstName,lastName);
  console.log(person.getFullName());
}