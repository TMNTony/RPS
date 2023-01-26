let playerScore = 0
let computerScore = 0
const options = ["rock", "paper", "scissors"]
const computerSelection = getComputerChoice()
//create 3 buttons
const container = document.querySelector('#container')
const rock = document.createElement('button')
rock.textContent = "rock"
rock.classList.add('rock')
rock.addEventListener('click', function(e) {
    playerSelection = "rock"
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
})


const paper = document.createElement('button')
paper.textContent = "paper"
paper.classList.add('paper')
paper.addEventListener('click', function(e) {
    playerSelection = "paper"
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
})

const scissors = document.createElement('button')
scissors.textContent = "scissors"
scissors.classList.add('scissors')
scissors.addEventListener('click', function(e) {
    playerSelection = "scissors"
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
})


container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)



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
    

function game(){
    for (let i = 0; i < 5; i++){
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
