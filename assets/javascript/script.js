console.log("script.js loaded");

var wins = 0;
var losses = 0;
var guessed = [];
var wordList = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'comet', 'meteor', 'asteroid'];
var chosenWord = '';
var remainingGuesses = 9;
var wordArray = [];
var wordDisplay = [];

function updateWordDisplay() {
    document.querySelector("#answer").innerHTML = wordDisplay;
}

function gameStart() {
    //choose random word from wordList
    for (i = 0; i < wordList.length; i++)
        chosenWord = wordList[Math.floor((Math.random() * wordList.length))];
    console.log('chosenWord: ', chosenWord);

    //splits chosenWord into array of individual letters
    wordArray = chosenWord.split('');
    console.log('wordArray: ', wordArray);

    //choses blanks for each letter in the wordArray
    wordArray.forEach(function () {
        wordDisplay.push('_');
    });
    console.log('wordDisplay: ', wordDisplay);

}

gameStart();
updateWordDisplay();

//pushes word display to the screen

/*  
### initial game setup ###
display wins/losses/guesses remaining

function gameStart() {
pull random element from answers array, display on screen as blanks (same # blanks as letters in word)
clear guessed array
}


### user input & game logic ###
event listener for each keypress (set for upper or lower case)

if ( key pressed already in the guessed array) {
disallow guess of same key,
}

else {
user-selected key pushed into guessed array
 & decrement number of remaining guesses
}

 if remainingGuesses = 0
    losses++, call function gameStart;

else check if user guess is in the answers array, display user guess on screen in place of blank(s)

if user guessed complete word, wins++, call function gameStart;
    else repeat loop






*/