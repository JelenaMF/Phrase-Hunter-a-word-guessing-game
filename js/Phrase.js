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
        const phraseLi = document.createElement('li');
        phraseLi.classList.add('letter-hidden');
        phraseUL.appendChild(phraseLi);  
        for(const el of this.phrase) {
            if(this.phrase === /^[A-Za-z]+$/) {
                phraseLi.classList.add('letter');
            }
            if(this.phrase === /\s/.test(this.phrase)){
                phraseLi.classList.add('space');
            }
        }
             console.log(phraseUL);
    }
    checkLetter() {
        //checks to see if the letters selected by player matches letters in the phrase.
    }
    showMatchedLetters() {
        /*reveals letters on the board that matches a letter in the phrase 

        */ 
    }
}

