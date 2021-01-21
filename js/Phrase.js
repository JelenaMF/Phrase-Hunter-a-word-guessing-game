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
    }
    //checking for matching letters 
    checkLetter(letter) {
        return game.activePhrase.phrase.includes(letter); 
    }
    //shows matching letters 
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.letter');
        for(const char of letters) {
           
            if (char.innerText === letter) {
               char.classList.remove('hide');
               char.classList.add('show');
            } 
        }
        
    }
}

