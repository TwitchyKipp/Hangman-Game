    
    
    //main variables
    var gameStart = false;
    var winCount = 0;
    var loseCount = 0;
    var tryLeft = 13;

    // letters guessed already
    var userGuess = new Array();


    // list of words -array
    var heroes = [
        "Green Lantern", "Batman", "Batwoman",
        "Thor", "Spiderman", "Wolverine",
        "IronHeart", "Wonder Woman", "Jessica Jones",
        "Captain America", "Vision", "Nightwing",
    ];
    // randomize word selection
    var randomize = heroes[Math.floor(Math.random() * heroes.length)];
    // blank array to be filled in w/ "_" at start of game
    var blank = new Array();

    // when a player enters a key
    // replace text
    var replaceText = 0;
    //replace number
    var replaceNum = 0;
    // make sure the user doesn't double enter a guess
    var double = 0;

    // VARIABLES
    //change userGuess based on input
    var userGuess = document.getElementById("userGuess");
    // update tries
    var triesLeft = document.getElementById("triesLeft");
    // update wins + loses
    var winNum = document.getElementById("win");
    var loseNum = document.getElementById("lose");

    // replace hero array, update html selected array
    var showHero = document.getElementById("heroName");
    var guesses = document.getElementById("userGuess");

    // update data after each game
    var update = document.getElementById("update");

    // hit any key to restart game
    var anyKey = document.getElementById("anyKey");
    var guessed = [];
   
    // Select word out of random
    var comic = heroes[randomize]
    
    // show number of letters in word
    
   
    // account for spaces
    
    // start game when user presses key
    function start() {
        randomize = heroes[Math.floor(Math.random() * heroes.length)];
        blank = new Array();
        for (var i = 0; i < randomize.length; i++) {
            blank.push("_");
        }
        // show spaces
        showHero.textContent = blank.join(" ");
        userGuess = [];
        tryLeft = 13;

        // reset game text from previous game
        update.textContent = "";
        triesLeft.textContent = " ";
        guesses.textContent = "No Guesses Yet!";
        replaceText = "Let's Play Again!";

        // game restart
        gameStart = true;
    }
     
    // prepare word generator
    //  measure user input compared to word selected
    document.onkeyup = function(event) {
        var keyEnter = event.which || event.keyCode;
        letter = String.fromCharCode(keyEnter).toLowerCase();
        // run start if not game has not started yet
        if (gameStart === false) {
            start();
        }
        
        else {
            // make sure only letters are counted
           if ((keyEnter >= 65) && (keyEnter <= 90) || (keyEnter >= 97) && (keyEnter <= 122))
            //show player what was entered
            replaceText.textContent = "You entered '" + letter +"'";
            
            // run for-loop to check against letters of word chosen
            for (var i =0; i< randomize.length; i++) {
                if (letter === randomize.charAt(i)){
                    blank[i] = letter;
                    replaceText++;
                }        
            }
            showHero.textContent = blank.join(" ");
            for (var i = 0; i < blank.length; i++) {
                if (blank[i] !== "_") {
                    replaceNum++;
                }
            }
            
        }
        guessed.push(letter);
        console.log(guessed);
        
        tryLeft--;
        console.log(tryLeft);
       
    }
    // if true, enter letter
 
    // if false, deduct from guesses

    // if false, show guesses left

    // if user wins, add to wins

    // if user loses, add to loses
    