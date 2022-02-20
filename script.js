// this is where I will capture the users input into a variable
const ps = require("prompt-sync");
const prompt = ps();

let input = prompt("Type here: ")
console.log(`${input}`)

// This is the random word function, it generates a random number which then console logs the associated variable.

let A = "Football"
let b = "Pray"
let c = "Jump"
let d = "Happy"
let e = "Grind"

let genRandomWord = () =>{
    word = Math.floor(Math.random() * 5);
    switch (word) {
        case 0: console.log(A);
        break;
        case 1: console.log(b);
        break;
        case 2: console.log(c);
        break;
        case 3: console.log(d);
        break;
        case 4: console.log(e);
        break;
    }
  };

// The Chinese proverb function, it generates a random number which then console logs the associated variable. 
let first = "Chinese proverb: A crisis is an opportunity riding the dangerous wind."
let second = "Chinese proverb: It's better to be without a book than to believe a book entirely."
let third = "Chinese proverb: A little impatience will spoil great plans."
let fourth = "A journey of a thousand miles begins with a single step."
let fifth = "Be not afraid of growing slowly, be afraid only of standing still."


let gen = () =>{
    num = Math.floor(Math.random() * 5);
    switch (num) {
        case 0: console.log(first);
        break;
        case 1: console.log(second);
        break;
        case 2: console.log(third);
        break;
        case 3: console.log(fourth);
        break;
        case 4: console.log(fifth);
        break;
    }
  };

// This is the switch statement that will check the user input to the response. It checks the users input and
// compares it to the below values, if it matches it will call the associated function.

switch (input) {
    case '1': genRandomWord();
    break;
    case '2': run();
    break;
    case '3': gen();
    break;
    default: console.log('Error: Invalid input!')
};