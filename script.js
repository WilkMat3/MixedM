// this program will display options based on user input 


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
}

words();
