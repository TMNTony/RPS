var playerScore = 0
var computerScore = 0
const computerSelection = getComputerChoice()
const playerSelection = "Rock"
function getComputerChoice(){
    const choice = Math.random()
    if (choice <= 0.33){
        return "Rock"
    }
    else if (choice <= 0.66){
        return "Paper"
    }
    if (choice <= 1.0){
        return "Scissors"
    }
}

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
    
function game () {
    for (let i = 0; i < 5; i++)
    playRound(playerSelection, computerSelection)
}
    console.log(game())