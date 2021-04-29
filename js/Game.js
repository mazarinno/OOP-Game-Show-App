/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
 	constructor() {
 		this.missed = 0;
 		this.phrases = ['how are you', 'seize the day', 'adventure time', 'quick brown fox', 'mike and ike'];
 		this.activePhrase = 'null';
 	}

 	startGame() {
 		this.activePhrase = getRandomPhrase();
 		addPhraseToDisplay(this.activePhrase);
 	}

 	getRandomPhrase() {
 		var randomNum = (Math.floor(Math.random() * 5)); // chooses a number between 0 and 4
 		var randomPhrase = this.phrases[randomNum]; // the random phrase is a random index from the phrases array
 		return randomPhrase; // returns the random phrase
 	}

 	handleInteraction() {

 	}

 	removeLife() {

 	}

 	checkForWin() {

 	}

 	gameOver() {

 	}
 }