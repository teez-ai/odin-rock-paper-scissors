
const playerSelection = prompt("Enter rock, scissors, or paper: ").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice(){
  let choice = "scissors"
  return choice;
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === "rock" &&  computerSelection === "scissors") {
      console.log(`${playerSelection} beats ${computerSelection}. You Win!`);
   } 
   else if(playerSelection === "rock" &&  computerSelection === "paper"){
      console.log(`Computer chose: ${computerSelection}. ${computerSelection} beats ${playerSelection}. You Lose`);
   } 
   else if(playerSelection === "rock" &&  computerSelection === "rock"){
      console.log(`Tie`);
   } 
   else if (playerSelection === "paper" &&  computerSelection === "rock") {
      console.log(`${playerSelection} beats ${computerSelection}. You Win!`);
   } 
   else if(playerSelection === "paper" &&  computerSelection === "scissors"){
      console.log(`Computer chose: ${computerSelection}. ${computerSelection} beats ${playerSelection}. You Lose.`);
   } 
   else if(playerSelection === "paper" &&  computerSelection === "paper"){
      console.log(`Tie`);  
   }
   else if (playerSelection === "scissors" &&  computerSelection === "paper") {
      console.log(`${playerSelection} beats ${computerSelection}. You Win!`);
   } 
   else if(playerSelection === "scissors" &&  computerSelection === "rock"){
      console.log(`Computer chose: ${computerSelection}. ${computerSelection} beats ${playerSelection}. You Lose.`);
   } 
   else if(playerSelection === "scissors" &&  computerSelection === "scissors"){
      console.log(`Tie`);  
   }
   else {
      playGame();   
   }
}

function playGame(){
  playRound(playerSelection, computerSelection);
}
playGame();
playGame();
playGame();
playGame();

// Return the results using the return key and not the console.log()
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user.