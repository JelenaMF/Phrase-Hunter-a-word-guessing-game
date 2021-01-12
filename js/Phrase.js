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
            
        for(const el of this.phrase) {
            const phraseLi = document.createElement('li');
            phraseLi.classList.add('hide-letter');
            phraseUL.appendChild(phraseLi);
            if(document.querySelector('#qwerty') === game.activePhrase) {
                phraseLi.classList.remove('hide-letter');
                phraseLi.classList.add('letter');
                phraseLi.textContent = this.phrase;
            }
            if(game.activePhrase === /\s/.test(game.activePhrase)){
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

