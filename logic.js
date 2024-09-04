let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomOption = Math.floor(Math.random() * 3);
    return options[randomOption];
};

const drawgame = () => {
    console.log("Game was a draw");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "gray"; // Optional: Use a neutral color for draws
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreElement.innerText = userScore; // Update user score display
    } else {
        console.log("You lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreElement.innerText = compScore; // Update computer score display
    }
};

const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = gencompchoice();
    console.log("Computer choice", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            userWin = compChoice === "scissor";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissor") {
            userWin = compChoice === "paper";
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playgame(userChoice);
    });
});
