// this is where I will capture the users input into a variable
const ps = require("prompt-sync");
const prompt = ps();

let input = prompt("Type here: ")
console.log(`${input}`)

// This is the universial function used to call

const theMessage = param => console.log(param);

// The Chinese proverb function 

let gen = () =>{
    num = Math.floor(Math.random() * 5);
    switch (num) {
        case 0: console.log("Chinese proverb: A crisis is an opportunity riding the dangerous wind.");
        break;
        case 1: console.log("Chinese proverb: It's better to be without a book than to believe a book entirely.");
        break;
        case 2: console.log("Chinese proverb: A little impatience will spoil great plans.");
        break;
        case 3: console.log("Chinese proverb: A journey of a thousand miles begins with a single step.");
        break;
        case 4: console.log("Chinese proverb: Behave toward everyone as if receiving a guest.");
        break;
    }
    return(num)
  };

// This is the switch statement that will check the user input to the response.

switch (input) {
    case '1': theMessage('Random word!');
    break;
    case '2': run();
    break;
    case '3': gen();
    break;
    case '2': theMessage('Hi again!');
    break;
    case '2': theMessage('See you.');
    break;
    default: console.log('Error: Invalid input!')
};
