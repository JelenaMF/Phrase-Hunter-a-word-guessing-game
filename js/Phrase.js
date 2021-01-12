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
            phraseLi.classList.add('hide-letter');
            phraseUL.appendChild(phraseLi);
            if(char === '') {
                phraseLi.className = 'space';
                phraseLi.innerText = ' ';
            } else{
                phraseLi.className = 'hide';
                phraseLi.className = 'letter';
                phraseLi.className = `${char}`;
                phraseLi.innerText = char;
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

