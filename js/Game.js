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
 		// hide the start screen overlay, div with id of overlay
 		const overlay = document.getElementById('overlay');
 		overlay.style.display = 'none';
 		this.activePhrase = this.getRandomPhrase(); // the active phrase is obtained from calling randomphrase
 		var rando = new Phrase(this.activePhrase); // random phrase is implemented as a new Phrase class
 		rando.addPhraseToDisplay(); // then it is added to the display
 	}

 	getRandomPhrase() {
 		var randomNum = (Math.floor(Math.random() * 5)); // chooses a number between 0 and 4
 		var randomPhrase = this.phrases[randomNum]; // the random phrase is a random index from the phrases array
 		return randomPhrase; // returns the random phrase
 	}

 	handleInteraction(letter) {
		var rando = new Phrase(this.activePhrase);
		var key = letter;
		var letter = letter.innerText;

		if (rando.checkLetter(letter) == true) {
			// change key to used
			key.classList.add("chosen");
			rando.showMatchedLetter(letter);
		} else {
			// change key to incorrect
			key.classList.add("wrong");
			this.removeLife();
			if (this.missed == 5) {   // if the player has missed 5 times, the game over method is called
				this.gameOver(false);
			}
		}

		if (this.checkForWin() == true) {
			this.gameOver(true);
		}
 	}

 	removeLife() {
 		this.missed += 1;   // when a letter is missed, the missed counter goes up
 		const tries = document.getElementsByClassName("tries");
 		tries[this.missed - 1].innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
 	}

 	checkForWin() {
 		var sent = this.activePhrase;
 		const letterList = document.querySelector("ul");
 		var check = 0;
 		var length = sent.length;

 		for (var i = 0; i < sent.length; i++) {
			if (sent[i] == ' ') {
 				length -= 1;		
 			}
 		}

 		for (var i = 0; i < sent.length; i++) {
 			if (letterList.children[i].classList.contains('show')) {
 				check +=1;
 			}
 		}

 		if (check == length) {
 			return true;
 		} else {
 			check = 0;
 			return false;
 		}
 	}

 	gameOver(gameWon) {
 		const overlay = document.getElementById('overlay');
 		const message = document.getElementById("game-over-message");
 		const keys = document.getElementsByClassName("key");
 		const tries = document.getElementsByClassName("tries");

 		for (var i = 0; i < 26; i++) {   // this loop resets all of the keys 
 				keys[i].classList.remove("chosen");
 				keys[i].classList.remove("wrong");
 		}

 		for (var i = 0; i < 5; i++) {   // and this loop resets all of the heaarts
 			tries[i].innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
 		}

 		overlay.style.display = 'block';   // bringing the overlay back and removing the start class
 		overlay.classList.remove("start");

 		if (gameWon == false) {   // checks if the boolean passed in is true or false to determine win or loss message
 			overlay.classList.add("lose");
 			message.innerHTML = "You lost. Play again?";
 		} else {
 			overlay.classList.add("win");
 			message.innerHTML = "You won! Play again?";
 		}
 	}
 }