# typescript-basics
# TypeScript Basics

This repository contains my initial learning and basic examples of TypeScript. It includes fundamental concepts such as variables, arrays, tuples, enums, functions, objects, union types, and type aliases. This project serves as a resource for anyone new to TypeScript and looking for simple and clear examples to get started.

## Contents

- [Variables](#variables)
- [Arrays](#arrays)
- [Tuples](#tuples)
- [Enums](#enums)
- [Functions](#functions)
- [Objects](#objects)
- [Type Aliases](#type-aliases)
- [Union Types](#union-types)

## Variables

```typescript
let sales: number = 123_456_789;
Arrays
let numbers: number[] = [1, 2, 3];
Tuples
let user: [number, string] = [1, "soumya"];
Enums
Enums are only available in TypeScript, not in JavaScript. Always use const with enums for optimized JavaScript code.
const enum Size { Small = 1, Medium = 2, Large = 3 }
let mySize = Size.Medium;
console.log(mySize);
Functions
Always try to define a type for arguments and return type.
function calculateTax(income: number): number {
  if (income < 50000) {
    console.log("You're poor, but still need to pay tax.");
    return income;
  } else {
    console.log("You're rich, less tax for you.");
  }
  return 0;
}
Objects
let user1 = { id: 1 };
Type Aliases
Use type aliases to avoid repeating the same object structure.
type Employee = {
  readonly id: number,
  name: string,
  sex?: string,
  retire: (date: Date) => void
};

let employee: Employee = {
  id: 1,
  name: "soumya",
  sex: 'male',
  retire: (date: Date) => {
    console.log(date);
  }
};
Union Types
Union types allow you to assign multiple types to a variable.
function kgToLbs(weight: number | string): number {
  if (typeof weight === 'string') {
    return parseInt(weight);
  } else {
    return weight;
  }
}
Literal Types
Literal types allow you to specify exact values a variable can hold.
let x: 90 = 90; // Any value other than 90 will give an error.
How to Run
To run the examples in this repository, you'll need to have Node.js and TypeScript installed.

Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install TypeScript:
npm install -g typescript
Compile and run the TypeScript files:
tsc filename.ts
node filename.js
Feel free to explore the code and modify it as you learn more about TypeScript!
' SoumyRanjan890' and 'soumya ranjan jena' repository name'typescript-basics'. This `README.md` file provides a clear and structured overview of your project and includes instructions on how to run the examples.
