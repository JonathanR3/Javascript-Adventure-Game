console.log("script is loading");

///obtain container for game description
const gameDescription = document.querySelector(".txtAdventureDescription");
const optionButtons = document.getElementsByClassName("button");

let startIndex = 0;

//function that starts the game
function startAdventure(textAdventureIndex) {
    console.log("The Adventure has started");
    showGameOptions(textAdventureIndex);
}

//function that shows the game description
function showGameOptions(textAdventureID) {
    const newGameDescription = textAdventure.find((gameNode) => gameNode.id === textAdventureID);

    if(!newGameDescription.options) {
        document.getElementById("first_btn").style.display = "none";
        gameDescription.innerHTML = newGameDescription.message;
        document.getElementById("second_btn").innerHTML = "Play Again";
        return;
    }

    gameDescription.innerText = newGameDescription.dialogue;

    //iterate through buttons to show new text options
    for (let i = 0; i < newGameDescription.options.length; i++) {
        optionButtons[i].innerText = newGameDescription.options[i].bottomText;
    }
}

function buttonOptions() {
    const adventureIndex = textAdventure.find((gameNode) => gameNode.id === startIndex);

    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons.addEventListener("click", function () {});
    }
}

function onPlay() {
    let ids = textAdventure.map((item) => {
        return item.id;
    }); 

    if (startIndex > ids.length - 1) {
        startIndex = 0;
    }

    showGameOptions(ids[startIndex]);
}

//functions for button event
function onNextOption(event) {
    event.preventDefault();
    startIndex++;
    onPlay();
}

function onPlayAgain(event) {
    event.preventDefault();
    document.getElementByIdById("first_btn").style.display = "inline";
    startIndex = 0;
    onPlay();
}

//creates object that holds the game text and keeps track of its state
const textAdventure = [
    {
        id: 1,
        dialogue: "Gilbert woke up in the middle of a hallway in a mansion and is confused. Get him out of it!",
        options: [
            {
            bottomText: "start heading up the hall", 
            setState: { continue: true },
            nextText: 2,
            },
            {
            bottomtext: "start heading down the hall",
            message: console.log("It's a dead end, try again."),
            },
        ],
    },
    {
        id: 2,
        dialogue: "Gilbert sees a mysterious shaped key on the floor but hears rumbling coming from behind him",
        options: [
            {
                bottomText: "start running right with the key",
                setState: { continue: true},
                nextText: 3,
            },
            {
                bottomText: "turn back and investigate the noise",
                message: console.log("A monster grabs you! Try again"),
            },
        ],
    },
    {
        id: 3,
        dialogue: "Gilbert sees a wide open door in front of him, but also notices a smaller door with a lock on it",
        options: [
            {
                bottomText: "Head through the open door",
                message: console.log("Try again"),
            },
            {
                bottomText: "Unlock the smaller door with the key",
                setState: { continue: true},
                nextText: 4,
            },
        ],
    },
    {
        id: 4,
        dialogue: "In front of Gilbert is a wide open path and",
        message: console.log("Thank you for playing and helping Gilbert escape!"),
    },
];

onPlay();

