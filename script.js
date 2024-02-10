function getComputerChoice(){
  // Return "rock", "paper", "scissors"
}

function playRound(playerSelection, computerSelection){
  // Function that plays a single round of Rock Paper Scissors
  // Returns a string that declares the winner or tie
  // Ex "Player Loses! Paper beats rock"
  // Make the playerSelection parameter case-insensitive so user can input 
  // rock Rock, ROck, ROCK
}
function playGame(){
  // Use previous function playGame() inside of this one to play a five round game
  // that keeps score and reports the winne or loser at the end
  // NO LOOPING just call playRound() 5 times
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

// Return the results using the return key and not the console.log()
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user.