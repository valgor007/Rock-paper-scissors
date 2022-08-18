let choice = ["rock", "paper", "scissors"];
let playerSelection;
let playerScore = 0;
let computerScore = 0;



const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
// const playerScore = document.querySelector("#playerScore");
// const computerScore = document.querySelector("#computerScore")
const finalScore = document.querySelector("#final");
const choiceBtns = document.querySelectorAll('.choiceBtn');





choiceBtns.forEach(button => button.addEventListener('click', ()=> {

playerSelection = button.textContent;
computerSelection = getComputerChoice();
playerText.textContent = `Player: ${playerSelection}`;
computerText.textContent = `Computer: ${computerSelection}`;
resultText.textContent = checkWinner();
finalScore.textContent = finalWinner();

}))




// const rock = document.querySelector('.rock');
// rock.addEventListener('click', playRound);

//get computer input

 function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
}
function checkWinner(){
        if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")  || (playerSelection === "scissors" && computerSelection === "paper")){
            result = `You win! Player score: ${++playerScore}. Computer score: ${computerScore}.`
            return result
            
            
    
        }else if(playerSelection === computerSelection){
            result = 'Draw!'
            return result
            
    
        }else {
            result = `You lose! Player score: ${playerScore}. Computer score: ${++computerScore}.`
            return result;
        }
        
    } 

function finalWinner(){
    if((playerScore === 5)||(computerScore === 5)){
        choiceBtn.disabled = true;
        choiceBtn.disabled = true;

        choiceBtn.disabled = true;

        return (playerScore>computerScore)? (finalScore.textContent= 'You win'): (finalScore.textContent= 'Better luck next time...')
        // if(playerScore>computerScore){
        // finalScore.textContent = `You win`
        
        // else{
        //     finalScore.textContent= `Computer wins. Better luck next time`
        // }
                    // result = `Final score: 
                    //             Player score: ${playerScore}   
                    //             Computer score: ${computerScore}` 
                    //             return result;            
    }

}


                    // s

// function checkWinner(){
//     if(playerSelection == computerSelection){
//         return "Draw"
//     }else if(computerSelection == "rock"){
//         return (playerSelection == "paper") ? "You win" : "You lose"
//     }else if(computerSelection=="paper"){
//         return (playerSelection == "scissors") ? "You win" : "You lose"
//     }else if(computerSelection=="scissors"){
//         return (playerSelection == "rock") ? "You win" : "You lose"
//     }
// }


computerSelection = getComputerChoice();


//play round
// function playRound(playerSelection, computerSelection){
//     if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")  || (playerSelection === "scissors" && computerSelection === "paper")){
//         result = `You win! Player score: ${++playerScore}. Computer score:${computerScore}`
//         console.log(result)
    
        

//     }else if(playerSelection === computerSelection){
//         console.log(`It's a draw! 
//         Draws: ${++draw}`);
        

//     }else {
//         result = `You lose! Player score: ${playerScore}. Computer score: ${++computerScore}.`
//         console.log(result);
//     }
// } 

// function game(){
//     for (let i = 0; i < 20; i++) {
//         let playerSelection = getComputerChoice();
//         playerSelection.toLowerCase();
//         getComputerChoice();

//         playRound(playerSelection, computerSelection);  
        
//         if((playerScore === 5)||(computerScore===5)){
//             console.log(`Final score: 
//                         Player score: ${playerScore}   
//                         Computer score: ${computerScore}`)
//             break;
            
            
//         }
//      }
//      if(playerScore > computerScore){
//         console.log(`You are the winner!`)
//     }else{
//         console.log(`You lose. The computer wins.`);
//     }
//     }



 //START GAME   

// g ame(playerSelection, computerSelection);



// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
// document.write(playRound(playerSelection, computerSelection));
// game(playerSelection, computerSelection);