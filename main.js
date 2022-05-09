// objects for player and computer
const player = {
    currentChoice: null
  }
  
  const computer = {
    currentChoice: null
  }
  
  // array to hold game options
  const choices = ["Rock", "Paper", "Scissors"];
  
  // create a function that listens for a click on the choice buttons and updates player.currentChoice
  function playerClick () {
   document.getElementById("btn1").addEventListener("click", function() {
        player.currentChoice = choices[0]
        compareChoices();
      })
    
   document.getElementById("btn2").addEventListener("click", function() {
        player.currentChoice = choices[1]
        compareChoices();
      })
  
   document.getElementById("btn3").addEventListener("click", function() {
        player.currentChoice = choices[2]
        compareChoices();
      })
  }
  playerClick();
  
  // function that contains randomIndex generator that determines computer choice
  function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  
  // function that compares player vs computer choice
  function compareChoices() {
    computerChooses()
    // tie scenario - when randomIndex matches player.currentChoice
    if (computer.currentChoice === player.currentChoice) {
      displayResult("It's a tie! The computer and player both chose " + computer.currentChoice + ".");          
    // conditional chain for each of 3 random choices computer can make; nest player choice vs computer choice if/else statements
    } else if (computer.currentChoice === choices[0]) {
        if (player.currentChoice === choices[1]) {
          displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
        } else {
          displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
        }
     } else if (computer.currentChoice === choices[1]) {
        if (player.currentChoice === choices[2]) {
          displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
        } else {
          displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
        }
      } else if (computer.currentChoice === choices[2]) {
        if (player.currentChoice === choices[0]) {
          displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
        } else {
          displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");    
        }
      }
    }
  
  // displayResult function creates new paragraph element
  function displayResult(result) {
    const resultText = document.createElement('p');
    resultText.innerText = result;
    document.body.appendChild(resultText);
  }
  