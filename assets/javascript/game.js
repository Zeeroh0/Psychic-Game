      
$(document).ready(function() {
    //*******************************//
    //DECLARE VALIABLES
    //*******************************//

    // This array will hold what the player guesses
    var guessedLetters = [];

    // This variable will be randomly assigned one of the 26 letters in var letters
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Guess me: " + letterToGuess);
    // $(".mysteryNumber").html("<p>" + letterToGuess + "</p>")

    // This is what we'll use to count down from
    var guessesLeft = 9;

    // This is the counter for wins/losses
    var wins = 0;
    var losses = 0;

    var playerGuess = null;


    //*******************************
    //DO SOMETHING WITH THOSE VARIABLES
    //*******************************

    //Creat onkeyup event function for when the player presses their guesses
    document.onkeyup = function(event) {
        // Lowercase the letter
        var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(playerGuess);

        // We'll check if there's a match.
        if (letterToGuess === playerGuess) {
            // If there is a match, tally a win,
            wins++; 
            //reset the board,
            console.log("You win!");
            guessesLeft = 9;
            guessedLetters = [];
            letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Next letter: " + letterToGuess);      
            //and let the player know they rock.                
            alert("Well done! Perhaps you have the gift...care to try again?");
        } 
        //But if there isn't a match...
        else {
            //add the guessed letters to the guessedLetters array 
            guessedLetters.push(playerGuess);
            //and lower the remaining guess allowance.
            guessesLeft--;
        } 

        //if the player's remaining guesses hits zero...
         if (guessesLeft === 0) {
            //tally a loss,
            losses++;
            //reset the board,
            guessesLeft = 9;
            guessedLetters = [];
            letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Next letter: " + letterToGuess);  
            //and tell the player they suck. 
            alert("Not quite.  Really try to focus this time!");                   
        }

        //If the player gets enough wins,
        if (wins === 5) {
            //then praise the player, 
            alert("You are AMAZING!!");
            //and troll the player. 
            document.getElementById("winner").innerHTML ='<img src="assets/images/winner.jpeg" style="width: 100%;">';
        }


        //Keeping track of stats
        var newStats =  
        "<p><h3>Guessed so far: " + guessedLetters + "</h3></p>" + 
        "<p><h3>Remaining guesses: " + guessesLeft + "</h3></p>" + 
        "<p><h3>Wins: " + wins + "</h3></p>" + 
        "<p><h3>Losses: " + losses + "</h3></p>";

        document.querySelector(".stats").innerHTML = newStats;
        
    }


})

// Need to do:
//Make the user's guesses only letters
//Don't penalize the player for guessing the same letter in the same round

