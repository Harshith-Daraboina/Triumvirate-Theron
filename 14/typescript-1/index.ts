
// TypeScript Basics
// Assignment-1
let x: number | string = 10;
// ---------------------------------------------------
console.log(x); // Output: 10
x = "Hello";
console.log(x); // Output: Hello
// ---------------------------------------------------
// Assignment-2
function greet (firstName :string ){
    console.log(`Hello ${firstName}`);
}
// ---------------------------------------------------
// Assignment-3
function sum (num1: number, num2: number) {
    return num1 + num2;
}

let ans = sum( 10 , 20);
console.log(ans); // Output: 30

// ---------------------------------------------------
// Assignment-4
function isLegalAge (age: number) {
    if (age < 18) {
        return false;
    }
    return true;
}

console.log(isLegalAge(20)); // Output: true

// ---------------------------------------------------
// Assignment-5
function DelayedFunctioCall( fn : ()=> void){
    setTimeout(fn , 3000);
}

DelayedFunctioCall(() => {
    console.log("This is a delayed function call");
});

const greeting = (name : string ) => {
    console.log(`Hello ${name}`);
}
// ---------------------------------------------------

// Assignment-6
// implicit type inference
let person = {
    name: "John",
    age: 30,
}
// explicit type annotation
let person2: {
    name: string;
    age: number;
} = {
    name: "Jane",
    age: 25,
}

function printPersonDetails(person: { name: string; age: number }) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
printPersonDetails(person); // Output: Name: John, Age: 30
// ---------------------------------------------------

// Assignment-7

interface UseType{
    firstname : string ,
    lastname :string,
    age : number
}

function userDetails(user: UseType) {
    console.log(`User Details: ${user.firstname} ${user.lastname}, Age: ${user.age}`);
    if(user.age < 18) {
        console.log("User is a minor.");
    }
    else {
        console.log("User is an adult.");
    }
}

//---------------------------------------------------

type typo = number | string;

// function sum1(num1 :typo, num2 :typo) {
//     return num1 + num2;
// }


function twosum (num1 : typo, num2 : typo) {
    if( typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return num1.toString() + " " + num2.toString();
    }
}


// ---------------------------------------------------
// Assignment-8


interface user {
  name :string ;
  age : number;
}

interface employee extends user {
  salary : number;
  startDate : Date;
}

type user2 = {
  name :string ;
  age : number;
}

type employe2 = user2 & {
  salary : number;
  startDate : Date
}

let jhonDetails : employe2 ={
  name : "jhon",
  age : 25,
  salary : 10000,
  startDate : new Date()
}

console.log(jhonDetails)

// ---------------------------------------------------
// Interface implemtation in class 

interface person {
  name : string ;
  age : number ;
  greet: (name : string)=> string ;
}

class Indian implements person {
  name : string ;
  age : number ;
  aadhar : number;
  constructor(name : string , age : number , aadhar : number) {
    this.name = name ;
    this.age = age ;
    this.aadhar = aadhar ;
  }
  greet(name : string) : string {
    return ` I am ${name} ${this.name} and I am ${this.age} years old` ;
  }
}

let rahulDetails  = new Indian("rahul" , 23 , 123456789012);

let result = rahulDetails.greet("Dagupathi");

console.log(result)

// ---------------------------------------------------
// Abstraction and the Interface

abstract class animal {
  name : string ;
  sound : string ;
  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() : void {} ;
}

class cow extends animal{

  constructor(name : string , sound : string){
    super(name , sound) ;
  }
  makeSound(){
    console.log(`the ${this.name} says ${this.sound}`)
  }
}

let momo = new cow("cow" , "moo") ;
momo.makeSound();


interface animalInterface {
  name : string ;
  sound : string ;
  makeSound() : void ;
}


class cat implements animalInterface {
  name : string ;
  sound : string ;
  constructor(name : string , sound : string){
    this.name = name ;
    this.sound = sound ;
  }
  makeSound(){
    console.log(`the ${this.name} says ${this.sound}`)
  }
}

let kitty = new cat("cat" , "meow") ;
kitty.makeSound()

// ---------------------------------------------------
