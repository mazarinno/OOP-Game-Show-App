/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase;
 	}

 	addPhraseToDisplay() {
 		var phraseTempTwo = '';
 		var sent = this.phrase;

 		for (var i = 0; i < sent.length; i++) {
 			if ((/[a-zA-Z]/).test(sent[i]) == true) {
 				phraseTempTwo += `<li class="hide letter ${sent[i]}">${sent[i]}</li>`
 			} else if (sent[i] == ' ') {
 				phraseTempTwo += `<li class="space"> </li>`
 			}
 		};

 		const letterList = document.querySelector("ul");
 		letterList.innerHTML = ""; 
 		letterList.insertAdjacentHTML('beforeend', phraseTempTwo);
 	}
/*
 	checkLetter(letter) {
 		if letter in this.phrase {
 			return true;
 		} else {
 			return false;
 		}
 	}

 	showMatchedLetter() {

 	}*/
 }