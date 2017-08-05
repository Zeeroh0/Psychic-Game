        // var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // This array will hold what the player guesses
        var guessedLetters = [];

        // This variable will be randomly assigned one of the 26 letters in var letters
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        $(".mysteryNumber").html("<p>" + letterToGuess + "</p>")

        // This is what we'll use to count down from
        var guessesLeft = 9;

        // This is the counter for wins/losses
        var wins = 0;
        var losses = 0;


        //Creat onkeyup event function for when the player presses their guesses
        document.onkeyup = function(event) {
            // Lowercase the letter
            var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
            // We'll check if there's a match.
            console.log(playerGuess);
            if (playerGuess == letterToGuess) {
                // If there is a match, then player wins and we'll update the HTML to display the win.
                wins++;
                $(".wins").append(wins);
            } else {
                //If a loss,
                losses++;
                $(".losses").append(losses);
                guessesLeft--;
                $(".remainingGuesses").append(guessesLeft);
                //add the guessed letter into the guessedLetters array
                $(".listGuesses").append(playerGuess);

            }
        }


// Need to do:
//have the computer redo its choice
//reset the board after a win/loss
//Stats need to not be addative 

