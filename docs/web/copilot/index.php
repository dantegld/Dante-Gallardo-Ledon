<?php

// Function to determine the winner
function determineWinner($playerChoice, $computerChoice) {
    if ($playerChoice == $computerChoice) {
        return "It's a tie!";
    } elseif (($playerChoice == 'rock' && $computerChoice == 'scissors') ||
              ($playerChoice == 'paper' && $computerChoice == 'rock') ||
              ($playerChoice == 'scissors' && $computerChoice == 'paper')) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Array of possible choices
$choices = ['rock', 'paper', 'scissors'];

// Get the player's choice
$playerChoice = $_POST['choice'];

// Randomly select the computer's choice
$computerChoice = $choices[array_rand($choices)];

// Determine the winner
$result = determineWinner($playerChoice, $computerChoice);

// Output the result
echo "Player chose: " . $playerChoice . "<br>";
echo "Computer chose: " . $computerChoice . "<br>";
echo "Result: " . $result;

?>