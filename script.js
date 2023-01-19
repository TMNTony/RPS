const playerSelection = "Rock"
var getComputerChoice = Math.random()
    if (getComputerChoice <= 0.33){
        getComputerChoice = "Rock"
    }
    else if (getComputerChoice <= 0.66){
        getComputerChoice = "Paper"
    }
    if (getComputerChoice <= 1.0){
        getComputerChoice = "Scissors"
    }

const computerSelection = getComputerChoice

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie";}
    
    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose";}
        else  {
            return "You Win!!";}
        }

    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "You Lose";}
        else {
            return "You Win!!";}
        }

    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock"){
            return "You Lose";}
        else  {
            return "You Win!!";}
        }
    } 
      

    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))