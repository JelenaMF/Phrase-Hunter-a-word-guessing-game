/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * manages individul phrases */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    //method displays phrase 
    addPhraseToDisplay() {
        const phraseUL = document.querySelector('#phrase ul'); 
        for(const char of this.phrase) {
            const phraseLi = document.createElement('li');
            phraseUL.appendChild(phraseLi); 
            phraseLi.classList.add('hide'); 
            if(char === ' ') {
                phraseLi.classList.add('space');
            } else{
                phraseLi.classList.add('letter');
                phraseLi.classList.add(char);
                phraseLi.textContent = char;
            }
        }
        console.log(phraseUL);
    }
    //checking for matching letters 
    checkLetter(letter) {
        if(game.activePhrase.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    //shows matched letters 
    showMatchedLetters(letter) {
        const letters = document.querySelector('.hide');
        if (this.checkLetter(letter) === true) {
            letters.classList.remove('hide');
            letters.classList.add('show');
        } else {
            letters.classList.remove('show');
        }
    }
}

