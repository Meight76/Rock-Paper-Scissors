// Write a function that will choose what the computer will play
function computer_choice() {
    choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
// Declare two variables to keep track of scores
let human_scores = 0;
let computer_scores = 0;
// Write logic to play a single round
function round(user_choice){
    let robot_choice = computer_choice();

    if (user_choice === "rock") {
        if (robot_choice === "paper") {
            console.log("You lose! paper beats rock");
            computer_scores++;
            return "lose!";
        } else if (robot_choice === "scissors") {
            console.log("You win! rock beats scissors");
            human_scores++;
            return "win!";
        } else {
            console.log("Draw!");
            return "draw!";
        }
    }
   if (user_choice === "paper") {
        if (robot_choice === "scissors") {
            console.log("You lose! scissors beats paper");
            computer_scores++;
            return "lose!";
        } else if (robot_choice === "rock") {
            console.log("You win! paper beats rock");
            human_scores++;
            return "win!";
        } else {
            console.log("Draw!");
            return "draw!";
        }
    }
    if (user_choice === "scissors") {
        if (robot_choice === "rock") {
            console.log("You lose! rock beats scissors");
            computer_scores++;
            return "lose!";
        } else if (robot_choice === "paper") {
            console.log("You win! scissors beats paper");
            human_scores++;
            return "win!";
        } else {
            console.log("Draw!");
            return "draw!";
        }
    }
}
const resultsH1 = document.querySelector("#resultsH1");
const resultsH2 = document.querySelector("#resultsH2");
function updateScores() {
    resultsH1.textContent = `You: ${human_scores} / Robot: ${computer_scores}`;
}

function isGameOver() {
    if (human_scores >= 5) {
        resultsH1.textContent = "You Won the round!"
        human_scores = 0;
        computer_scores = 0;
    } else if (computer_scores >= 5) {
        resultsH1.textContent = "Computer won the round!"
        human_scores = 0;
        computer_scores = 0;
    }
}

updateScores();
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("click", (event) => {
        resultsH2.textContent = round(event.target.value);
        updateScores();
        isGameOver();
    })
}


