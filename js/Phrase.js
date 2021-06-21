/* 
 * Phrase.js 
 * manages individual phrases */

class Phrase {
    constructor(phrase, hint) {
        this.phrase = phrase.toLowerCase();
        this.hint = hint;
    }

    //method displays phrase 
    addPhraseToDisplay() {
        const div = document.getElementById('phrase');
 		const ul = div.firstElementChild;
 		const letters = this.phrase.split('');
 		letters.forEach((letter) => {
 			if(letter === ' '){
 				ul.innerHTML += `<li class="space"> </li>`;
 			} else {
 				ul.innerHTML += `<li class="hide letter ${letter}">&#8201</li>`;
 			}
 		});
 		ul.innerHTML = `<span class="word" style="display:inline-block">` + ul.innerHTML;
 		ul.innerHTML += `</span>`;
 		const replaceString = `</span><li class="space"> </li><span class="word" style="display:inline-block">`;
 		let ulHTML = ul.innerHTML;
 		ul.innerHTML = ulHTML.replace(/<li class="space"> <\/li>/g, replaceString);
        
    }
  
    //checking for matching letters 
    checkLetter(letter) {
        return this.phrase.includes(letter); 
    }
    //shows matching letters 
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.${letter}`);
        for(const char of letters) {
           char.textContent = `${letter}`
            if (char.innerHTML === letter) {
               char.classList.remove('hide');
               char.classList.add('show');
            } 
        }
        
    }
}
