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
// Write a function to get what the human is going to play from console
function human_choice() {
    let choice = prompt('Choose "ROCK", "PAPER" or "SCISSORS": ').toLowerCase();
    return choice;
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
            return "lose";
        } else if (robot_choice === "scissors") {
            console.log("You win! rock beats scissors");
            human_scores++;
            return "win";
        } else {
            console.log("Draw!");
            return "draw";
        }
    }
   if (user_choice === "paper") {
        if (robot_choice === "scissors") {
            console.log("You lose! scissors beats paper");
            computer_scores++;
            return "lose";
        } else if (robot_choice === "rock") {
            console.log("You win! paper beats rock");
            human_scores++;
            return "win";
        } else {
            console.log("Draw!");
            return "draw";
        }
    }
    if (user_choice === "scissors") {
        if (robot_choice === "rock") {
            console.log("You lose! rock beats scissors");
            computer_scores++;
            return "lose";
        } else if (robot_choice === "paper") {
            console.log("You win! scissors beats paper");
            human_scores++;
            return "win";
        } else {
            console.log("Draw!");
            return "draw";
        }
    }
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("click", (event) => {
        round(event.target.value);
    })
}
