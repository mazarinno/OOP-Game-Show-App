/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var game = '';
const button = document.getElementById("btn__reset");

button.addEventListener('click', (event) => {
	game = new Game();
	phrase = game.startGame();
});

const keyboard = document.getElementById("qwerty");
keyboard.addEventListener('click', (event) => {
	var letter = event.target;
	if (letter.classList == "key"){
		game.handleInteraction(letter);
	} 
});