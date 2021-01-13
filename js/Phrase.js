/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * manages individul phrases */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseUL = document.querySelector('#phrase ul');
            
        for(const char of this.phrase) {
            const phraseLi = document.createElement('li');
            phraseUL.appendChild(phraseLi);
            if(char === ' ') {
                phraseLi.classList.add('space');
            } else{
                phraseLi.classList.add('letter');
                phraseLi.textContent = char;
            }
        }
    }
    checkLetter() {
        //checks to see if the letters selected by player matches letters in the phrase.
    }
    showMatchedLetters() {
        /*reveals letters on the board that matches a letter in the phrase 

        */ 
    }
}

