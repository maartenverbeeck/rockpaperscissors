// JavaScript Rock, Paper, Scissors
let playgame = confirm("Shall we play rock, paper or scissors?");
if(playgame) {
    //play
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

            let result = 
            playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
            alert(result);
            let playAgain = confirm('Play again?');
            playAgain ? location.reload() : alert("Ok, thanks for playing.");
        } else {
            //Wrong input
            alert("You didn't enter rock, paper or scissors.");
        }
    } else {
        //Canceled
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    // don't play
    alert("Okay, maybe next time.");
}