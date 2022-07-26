let choice = ["rock", "paper", "scissors"];
let playerSelection;

let playerScore = 0;
let computerScore = 0;
let draw = 0;


//get computer input

 function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
}
computerSelection = getComputerChoice();


//play round
function playRound(playerSelection, computerSelection){
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")  || (playerSelection === "scissors" && computerSelection === "paper")){
        result = `You win! Player score: ${playerScore++}. Computer score:${computerScore}`
        console.log(result)
    
        

    }else if(playerSelection === computerSelection){
        console.log(`It's a draw! 
        Draws: ${draw++}`);
        

    }else {
        result = `You lose! Player score: ${playerScore}. Computer score:${computerScore++}.`
        console.log(result);
    }
}

function game(){
    for (let i = 0; i < 10; i++) {
        let playerSelection = prompt("Choose please");
        playerSelection.toLowerCase();
        getComputerChoice();
        
        playRound(playerSelection, computerSelection);  
        
        if((playerScore === 5)||(computerScore===5)){
            console.log(playerScore, computerScore);
            break
            
        }
     }
    }



 //START GAME   

game(playerSelection, computerSelection);



// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
// document.write(playRound(playerSelection, computerSelection));
// game(playerSelection, computerSelection);