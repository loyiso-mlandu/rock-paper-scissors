function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper or scissors: ").toLowerCase();
    return userInput; 
}

function playRound(humanChoice, computerChoice) {

    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (rounds < 5) {

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            alert("It's a draw");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") || 
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            alert("You win!");
            humanScore++;
        } else {
            alert("You lose this round")
            computerScore++;
        }

        rounds++;
    }

    alert(`Final score: You: ${humanScore} points. Computer: ${computerScore} points.`);

    if (humanScore > computerScore) {
        alert("Yay! You win.");
    } else if (humanScore < computerScore) {
        alert("Tough. Try again.");
    } else {
        alert("It's a draw.")
    }
}

playRound();