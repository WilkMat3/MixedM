// this is where I will capture the users input into a variable
const ps = require("prompt-sync");
const prompt = ps();

let input = prompt("Type here: ")
console.log(`${input}`)

// These are the call functions that will be called upon to console the response

const firstMessage = () => {
    console.log('message');
};

const secondMessage = () => {
    console.log('message');
};

const thirdMessage = () => {
    console.log('message');
};

const fourthMessage = () => {
    console.log('message');
};

const fifthMessage = () => {
    console.log('message');
};

// This is the if statement that will check the user input to the response.

if (input === '1') {
    firstMessage()
}
else if (input === '2') {
    secondMessage()
}
else if (input === '3') {
    thirdMessage()
}
else if (input === '4') {
    fourthMessage()
}
else if (input === '5') {
    fifthMessage()
}
else {
    console.log('Error: Invalid Input!')
}

