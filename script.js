// this is where I will capture the users input into a variable
const ps = require("prompt-sync");
const prompt = ps();

let input = prompt("Type digit between 1-4: ")
console.log(`${input}`)
// The above is part of menu-feature.

//  ASCII-feature
// generating random numbers for each body part
let gen = () =>{
  return  Math.floor(Math.random() * 3);
} 
// this function generates monster based on a random number
const run = () =>{

    let head = gen();
    let body = gen();
    let feet = gen();
    switch (head){
        case 0 : 
        ghostHead();
        break;
        case 1 : 
        bugHead();
        break;
        case 2 : 
        monsterHead();
        break;
    }
    switch (body){
        case 0 : 
        ghostBody();
        break;
        case 1 : 
        bugBody();
        break;
        case 2 : 
        monsterBody();
        break;
    }
    switch (feet){
        case 0 : 
        ghostFeet();
        break;
        case 1 : 
        bugFeet();
        break;
        case 2 : 
        monsterFeet();
        break;
    }
}

// specific body parts 

const ghostHead = ()=>{
    console.log("     ..-..");
    console.log("    ( o o )");
    console.log("    |  O  |");
};

const ghostBody = ()=>{
    console.log("    |     |");
    console.log("    |     |");
    console.log("    |     |");
};

const ghostFeet = ()=>{
    console.log("    |     |");
    console.log("    |     |");
    console.log("    '~~~~~'");
};

const bugHead = ()=>{
    console.log("     /   \\");
    console.log("     \\. ./");
    console.log("    (o + o)");
};

const bugBody = ()=>{
    console.log("  --|  |  |--");
    console.log("  --|  |  |--");
    console.log("  --|  |  |--");
};

const bugFeet = ()=>{
    console.log("     v   v");
    console.log("     *****");
};

const monsterHead = ()=>{
    console.log("     _____");
    console.log(" .-,;='';_),-.");
    console.log("  \\_\\(),()/_/");
    console.log("　  (,___,)");
};

const monsterBody = ()=>{
    console.log("   ,-/`~`\\-,___");
    console.log("  / /).:.('--._)");
    console.log(" {_[ (_,_)");
};

const monsterFeet = ()=>{
    console.log("    |  Y  |");
    console.log("   /   |   \\");
    console.log("   \"\"\"\" \"\"\"\"");
};

//  wordgen-feature
// Generate random word with its name (key) and meaning (value) from the array of objects

function words() {
  const arr = [
    { Deliquescent: "Becoming liquid, or having a tendency to become liquid" },
    { Flabbergast: "Surprise someone greatly" },
    { Flimflam: "Nonsensical or insincere talk" },
    {
      Floccinaucinihilipilification:
        "The action or habit of estimating something as worthless",
    },
    {
      Limerence:
        "The state of being infatuated or obsessed with another person",
    },
    {
      Loquacious: "Tending to talk a great deal; talkative",
    },
    {
      Obdurate:
        "Stubbornly refusing to change one’s opinion or course of action",
    },
  ];
  randomObj = arr[Math.floor(Math.random() * arr.length)];
  console.log(
    `Word: ${Object.keys(randomObj)} \nMeaning: ${Object.values(randomObj)}`
  );
};

// menu-feature
// This is the random num function, it generates and console logs a random number between 0 - 1000

let genRandomNum = () =>{
    num = Math.floor(Math.random() * 1001);
    console.log(num);
  };

// The Chinese proverb function, it generates a random number which then console logs the associated variable. 
let first = "Chinese proverb: A crisis is an opportunity riding the dangerous wind."
let second = "Chinese proverb: It's better to be without a book than to believe a book entirely."
let third = "Chinese proverb: A little impatience will spoil great plans."
let fourth = "A journey of a thousand miles begins with a single step."
let fifth = "Be not afraid of growing slowly, be afraid only of standing still."

let chinese = () =>{
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
    case '1': genRandomNum();
    break;
    case '2': run();
    break;
    case '3': chinese();
    break;
    case '4': words();
    break;
    default: console.log('Error: Invalid input!')
};