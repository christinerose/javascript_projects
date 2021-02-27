
//Practicing JavaScript Syntax

window.confirm("Let's play Rock, Paper, Scissors!");

//const ROCK = 1;
//const PAPER = 2;
//const SCISSORS = 3;
// Start with these constants, and then replace the 1, 2, 3 with the constant names
// Doing it now resulted in lots of errors "ROCK has already been defined" 
// because I'm testing it in a browser console over and over
// FOR NOW! IT WORKS LIKE THIS! (even if it's not as readable as it could be)

function Rock_Paper_Scissors() {

    i = Math.floor(Math.random() * 3) + 1;
    play = i;

    console.log(play);

    let guess = prompt("Choose one of these numbers to play:\n1. Rock\n2. Paper\n3. Scissors\nSee if you can beat me!\nOne, two, three—GO! ");

    if (parseInt(guess) === play) {
        let p = play;
        if (p === 1) {
            window.confirm("I threw a Rock too! It's a TIE!");
        } else if (p === 2) {
            window.confirm("I threw Paper too! It's a TIE!?");
        } else {
            window.confirm("I threw Scissors too! It's a TIE! ");
        }
    } else if (parseInt(guess) === 1 && play != 1) {
        switch (play) {
            case 1:
                window.confirm("I threw PAPER. Paper covers Rock. I win!   ");
                break;
            case 3: // or just default: ??
                window.confirm("I threw SCISSORS. Rock breaks Scissors. You win!   ");
                break;
        }
    } else if (parseInt(guess) === 2 && play != 2) {
        switch (play) {
            case 1:
                window.confirm("I threw a ROCK. Paper covers Rock. You win!   ");
                break;
            default:
                window.confirm("I threw SCISSORS. Scissors cuts Paper. I win!   ");
        }
    } else if (parseInt(guess) == 3 && play != 3) {
        if (play == 1) {
            window.confirm("I threw a ROCK! Rock breaks Scissors. I win!   ");
        } else {
            window.confirm("I threw PAPER. Scissors cuts Paper. You win!   ");
        }
    } else {
        window.confirm("Ooops! Something went wrong! ");
    }


    let answer = prompt("What to play again? Y or N? ");

    if (answer === "Y" || answer === "y") {
        window.confirm("Great! Here we go!");
        Rock_Paper_Scissors();
    } else {
        window.confirm("Thank you for playing! See you next time!");
    }
}

Rock_Paper_Scissors();