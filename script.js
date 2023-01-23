let playerScore = 0
let computerScore = 0
const options = ["rock", "paper", "scissors"]
const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()


function getComputerChoice(){
    const selection = Math.random()
    if (selection <= 0.33){
        return "rock"
    }
    else if (selection <= 0.66){
        return "paper"
    }
    else if (selection <= 1.0) {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
            return "It's a tie";}
    
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++
            return "You Lose";}
        else  {
            playerScore++
            return "You Win!!";}
        }

    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++
            return "You Lose";}
        else  {
            playerScore++
            return "You Win!!";}
        }

    else if (playerSelection === "scissors") {
        if (computerSelection === "rock"){
            computerScore++
            return "You Lose";}
        else  {
            playerScore++
            return "You Win!!";}
        }
    }  
    
function getPlayerChoice (){
    let validatedInput = false
    while (validatedInput == false) {
    const choice = prompt ("Rock Paper Scissors")
    if (choice == null) {
        continue
    } 
    const choiceInLower = choice.toLowerCase()
    if (options.includes(choiceInLower)){
        validatedInput = true
        return choiceInLower
    }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore, computerScore)
}
if (playerScore > computerScore) {
    console.log("CONGRATS")
}
if (playerScore < computerScore){
    console.log("EAT SHIT")
}
if (playerScore == computerScore)
    console.log("LIKE KISSING YOUR SISTER")
}
game()

