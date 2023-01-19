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
var playerSelection

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        result = "It/'s a tie!";}

    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper"){
            result = "You Lose"; }
        else (computerSelection === "Scissors"){
            result = "You Win!!";}
        }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors"){
            result = "You Lose"; }
        else (computerSelection === "Rock"){
            result = "You Win!!";}
        }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock"){
            result = "You Lose"; }
        else (computerSelection === "Paper"){
            result = "You Win!!";}
        }
    

}

console.log(playRound("Rock"))