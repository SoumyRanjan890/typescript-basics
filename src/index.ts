let sales: number = 123_456_789;

// Array
let numbers: number[] = [1, 2, 3];

// Tuple
let user: [number, string] = [1, "soumya"];

// Enum (always use const with enum for optimized JavaScript code)
const enum Size { Small = 1, Medium = 2, Large = 3 };
let mySize = Size.Medium;
console.log(mySize);

// Function basic in TypeScript (always try to define a type for argument and return type)
function calculateTax(income: number): number {
  if (income < 50000) {
    console.log("You're poor, but still need to pay tax.");
    return income;
  } else {
    console.log("You're rich, less tax for you.");
  }
  return 0;
}

// Object
let user1 = { id: 1 };
// This won't work in TypeScript but would in JavaScript: user1.name = "soumya"
// To use it, we define a type

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

// let employee: {
//   readonly id: number,
//   name: string,
//   sex?: string,
//   retire: (date: Date) => void
// } = {
//   id: 1,
//   name: "soumya",
//   sex: 'male',
//   retire: (date: Date) => {
//     console.log(date);
//   }
// }; // This can be converted to a type alias

// sex? is an optional field so you can omit it if you don't want to use it

// Function with union type
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'string') {
    return parseInt(weight);
  } else {
    return weight;
  }
}

// Here we assign two types to a variable using union. We can use them by narrowing them with conditionals.
// Another is type intersection (use & instead of |). In this, the variable is both types at the same time.
// There is also literal type 
let x: 90 = 90; // Any value other than 90 will give an error. We can use it with union like x: 90 | 100.
