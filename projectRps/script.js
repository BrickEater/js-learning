function game() {

    let playRound = prompt("How many rounds would you like to play?");

    if (playRound > 4) {
        console.log("That is too many rounds and would be miserable to do. Here's 5.")
        let playRound = 5
    }

    let playerScore = 0
    let computerScore = 0


    for (let i = 0; i < playRound; i++) {

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
            const pick = prompt("Pick Rock, Paper, or Scissors")
            if (pick == null || pick == "") {
                alert("It has to be one of the three, idiot");
                getPlayerChoice()
              } else if (!/^[a-zA-Z]+$/.test(pick)) {
                alert("Did you think anything besides letters would work?");
                getPlayerChoice()
              } else if (pick != "Rock" || "Paper" || "Scissors") {
                console.log("That doesn't make sense, here's Rock")
                return "Rock"
              } else {alert("You picked something");
                return pick
              }
        }

        const compPick = getComputerChoice()
        const playPick = getPlayerChoice()

        console.log("Player = " + playPick + ", Computer = " + compPick)

        if (playPick === compPick) {
            console.log("Tied the round...")
            console.log("Score \n" + 
            "Player: " + playerScore + "\n" + 
            "Computer: " + computerScore)
            console.log("\n \n")

        }  else if ((playPick === "Rock" && compPick === "Scissors") || (playPick === "Paper" && compPick === "Rock") || (playPick === "Scissors" && compPick === "Paper")) {
            playerScore++
            console.log("You won the round!!")
            console.log("Score \n" + 
            "Player: " + playerScore + "\n" + 
            "Computer: " + computerScore)
            console.log("\n \n")

        } else {
            computerScore++
            console.log("You lost the round, you fucking idiot")
            console.log("Score \n" + 
            "Player: " + playerScore + "\n" + 
            "Computer: " + computerScore)
            console.log("\n \n")


        }
    }
    if (playerScore === computerScore) {
    console.log("**!!You tied and that's worse than losing, think about that!!**")
    } else if (playerScore > computerScore) {
        console.log("**!!You win, you're better than a dumb computer!!**")
    } else {
        console.log("**!!You lose, you suck, go back to bed and try again tomorrow!!**")
    }
}

game()
