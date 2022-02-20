// this program will display options based on user input 


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
}

const ghostBody = ()=>{
    console.log("    |     |");
    console.log("    |     |");
    console.log("    |     |");
}
const ghostFeet = ()=>{
    console.log("    |     |");
    console.log("    |     |");
    console.log("    '~~~~~'");
}

const bugHead = ()=>{
    console.log("     /   \\");
    console.log("     \\. ./");
    console.log("    (o + o)");
}

const bugBody = ()=>{
    console.log("  --|  |  |--");
    console.log("  --|  |  |--");
    console.log("  --|  |  |--");
}
const bugFeet = ()=>{
    console.log("     v   v");
    console.log("     *****");
}

const monsterHead = ()=>{
    console.log("     _____");
    console.log(" .-,;='';_),-.");
    console.log("  \\_\\(),()/_/");
    console.log("　  (,___,)");
}

const monsterBody = ()=>{
    console.log("   ,-/`~`\\-,___");
    console.log("  / /).:.('--._)");
    console.log(" {_[ (_,_)");
}
const monsterFeet = ()=>{
    console.log("    |  Y  |");
    console.log("   /   |   \\");
    console.log("   \"\"\"\" \"\"\"\"");
}
run();