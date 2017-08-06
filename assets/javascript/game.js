      
$(document).ready(function() {
  
    // This array will hold what the player guesses
    var guessedLetters = ["a"];

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

    // function reset () {
    //     var guessesLeft = 9;
    //     guessedLetters = [];
    //     var letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    //     console.log("Next letter: " + letterToGuess)
    //     };

    // if (guessedLetters.indexOf(playerGuess) < 0 && alphabet.indexOf(playerGuess) >= 0) {
    //         guessedLetters[guessedLetters.length] = playerGuess;
    //         guessesLeft--;
    //     }


    //Creat onkeyup event function for when the player presses their guesses
    document.onkeyup = function(event) {
        // Lowercase the letter
        var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // We'll check if there's a match.
        console.log(playerGuess);

        if (letterToGuess === playerGuess) {
            // If there is a match, then player wins and we'll update the HTML to display the win.
            wins++; 
            console.log("You win!");
            guessesLeft = 9;
            guessedLetters = [];
            letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Next letter: " + letterToGuess);                     
            alert("Well done! Perhaps you have the gift...care to try again?");
        } 
        else {
            guessedLetters.push(playerGuess);
            guessesLeft--;
        } 

         
         if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessedLetters = [];
            letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Next letter: " + letterToGuess);  
            alert("Not quite.  Really try to focus this time!");                   
        }

        // if (wins === 1) {
        //     alert("You are AMAZING!!");
        //     document.getElementByClass(".winner").innerHTML('<img src="assets/images/winner.jpeg" style="width: 100%;">');
        // }


        var html =  
        "<p><h3>Guessed so far: " + guessedLetters + "</h3></p>" + 
        "<p><h3>Remaining guesses: " + guessesLeft + "</h3></p>" + 
        "<p><h3>Wins: " + wins + "</h3></p>" + 
        "<p><h3>Losses: " + losses + "</h3></p>";
        "<p><h3>Guess me: " + letterToGuess + "</h3></p>";

        // place html into the game ID
        document.querySelector(".stats").innerHTML = html;
        
    }
})

// Need to do:
//have the computer redo its choice
//reset the board after a win/loss
//Stats need to not be addative 

