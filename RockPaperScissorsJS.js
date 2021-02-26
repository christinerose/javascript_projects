
//Practicing JavaScript Syntax


function Rock_Paper_Scissors() {
    console.log(" ");
    console.log("**********");
    console.log(" ");

    console.log("Let's play Rock, Paper, Scissors!");

    i = Math.floor(Math.random() * 4);
    play = i;

    console.log(play);

    console.log("1. Rock");
    console.log("2. Paper");
    console.log("3. Scissors");

    console.log(" ");
    console.log("**********");
    console.log(" ");

    let guess = prompt("Choose a number above to throw Rock, Paper, or Scissors. See if you can beat me! One, two, three—GO! ");

    if (guess === play) {
        let p = play;
        if (p === 1) {
            console.log(" ");
            console.log("I threw a Rock too! It's a TIE! ");
        } else if (p === 2) {
            console.log(" ");
            console.log("I threw Paper too! It's a TIE! ");
        } else {
            console.log(" ");
            console.log("I threw Scissors too! It's a TIE! ");
        }
    } else if (guess === 1 && play != 1) {
        switch (play === 2) {
            case paper:
                console.log("I threw PAPER. Paper covers Rock. I win! ");
                break;
            case scissors: // or just default: ??
                console.log("I threw SCISSORS. Rock breaks Scissors. You win! ");
                break;
        }
    } else if (guess === 2 && play != 2) {
        switch (play === 1) {
            case rock:
                console.log("I threw a ROCK. Paper covers Rock. You win! ");
                break;
            default:
                console.log("I threw SCISSORS. Scissors cuts Paper. I win! ");
        }
    } else if (guess == 3 && play != 3) {
        if (play == 1) {
            console.log(" ");
            console.log("I threw a ROCK! Rock breaks Scissors. I win! ");
        } else {
            console.log(" ");
            console.log("I threw PAPER. Scissors cuts Paper. You win! ");
        }
    } else {
        console.log("Ooops! Something went wrong! ");
    }

    console.log(" ");
    console.log("**********");
    console.log(" ");





    let answer = prompt("What to play again? Y or N? ");

    if (answer === "Y" || answer === "y") {
        console.log(" ");
        console.log("Great! Here we go!");
        console.log(" ");
        Rock_Paper_Scissors();
    } else {
        console.log(" ");
        console.log("Thank you for playing! See you next time!");
        console.log(" ");
    }
}

Rock_Paper_Scissors();