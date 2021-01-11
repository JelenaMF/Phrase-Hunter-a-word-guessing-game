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
        
        console.log(phraseUL);
        //add letter placeholders to the display when game starts
        //each letter is represented by an empty box give each letter an <li> element
            /* call <ul> in <div> with id 'phrase' 
                append <li> with class name "hide letter" to ul 
                if (letter === letter.charAt()) {
                    give <li> class attribute "show letter"
                }*/
    }
    checkLetter() {
        //checks to see if the letters selected by player matches letters in the phrase.
    }
    showMatchedLetters() {
        /*reveals letters on the board that matches a letter in the phrase 

        */ 
    }
}

