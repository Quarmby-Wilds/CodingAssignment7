// Welcome prompt

let name = prompt("Welcome to Bear, Ninja, Hunter. Please enter your name.")
alert("Hi, " + name + ". Let's get started.")

// Start game

let choice = prompt("Please enter Bear, Ninja, or Hunter.").toLocaleLowerCase()

while (choice != "bear" && choice != "ninja" && choice != "hunter") {
    choice = prompt("Uh oh! That wasn't one of the choices. Please choose Bear, Ninja, or Hunter.").toLocaleLowerCase()
}


// Generate computer answer

let compChoice
const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
    compChoice = "Bear";
} else if (randomNumber === 2) {
    compChoice = "Ninja";
} else {
    compChoice = "Hunter";
}

// Calculate who wins

let results

if (compChoice.toLowerCase() === choice) {
    results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nIt was a tie."
} else if (compChoice === "Bear" && choice === "ninja") {
    results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins."
} else if (compChoice === "Ninja" && choice === "hunter") {
    results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins."
} else if (compChoice === "Hunter" && choice === "bear") {
    results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins."
} else if (compChoice === "Bear" && choice === "hunter") {
    results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!"
} else if (compChoice === "Hunter" && choice === "ninja") {
    results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!"
} else if (compChoice === "Ninja" && choice === "bear") {
    results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!"
}

const resultElement = document.getElementById("results")
resultElement.innerHTML = results

// Display winner

console.log(results)
