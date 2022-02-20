// this is where I will capture the users input into a variable
const ps = require("prompt-sync");
const prompt = ps();

let input = prompt("Type here: ")
console.log(`${input}`)

// These are the call functions that will be called upon to console the response

const theMessage = param => console.log(param);

// This is the switch statement that will check the user input to the response.

switch (input) {
    case '1': theMessage('Hi!');
    break;
    case '2': theMessage('Bye!');
    break;
    case '3': theMessage('Laters.');
    break;
    case '2': theMessage('Hi again!');
    break;
    case '2': theMessage('See you.');
    break;
    default: console.log('Error: Invalid input!')
};
