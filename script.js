let playerScore = 0
let computerScore = 0


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

for (let i = 0; i < 5; i++) {
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
            return "It's a tie";}
    
    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++
            return "You Lose";}
        else  {
            playerScore++
            return "You Win!!";}
        }

    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            computerScore++
            return "You Lose";}
        else  {
            playerScore++
            return "You Win!!";}
        }

    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock"){
            computerScore++
            return "You Lose";}
        else  {
            playerScore++
            return "You Win!!";}
        }
    } 
} 


    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore)
    console.log(computerScore)