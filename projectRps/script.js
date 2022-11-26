function getComputerChoice() {
    const pick = Math.floor((Math.random() * 3) + 1)
    if (pick === 1) {
        return "Rock"
    } else if (pick === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getPlayerChoice() {
    const pick = Math.floor((Math.random() * 3) + 1)
    if (pick === 1) {
        return "Rock"
    } else if (pick === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

const compPick = getComputerChoice()
const playPick = getPlayerChoice()

console.log("Player = " + playPick + ", Computer = " + compPick + ", It's a tie = " + (playPick === compPick))

console.log("The computer picked " + compPick + " and the player picked " + playPick)

if (playPick === compPick) {
    console.log("It's a tie!")
}  else if ((playPick === "Rock" && compPick === "Scissors") || (playPick === "Paper" && compPick === "Rock") || (playPick === "Scissors" && compPick === "Paper")) {
    console.log("You Win!!")
} else {
    console.log("You lose, you fucking idiot")
}

