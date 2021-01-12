/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * manages the function of the game includes methods for:
 * starting/ending game 
 * handling interactions 
 * getting random phrases 
 * checking for a win 
 * and removing life counter*/
     class Game {
          constructor () {
               this.missed = 0;
               this.phrase = this.createPhrases();
               this.activePhrase = this.getRandomPhrase();
          }
          createPhrases() {
               const phrase = [new Phrase('Another one bites the dust'),
                              new Phrase('Skeletons in the closet'),
                              new Phrase('Bury your head in the sand'),
                              new Phrase('Keep your friends close, but your enemies closer'),
                              new Phrase('Show me the money')];
               return phrase;
          }
          getRandomPhrase() {
               const phraseIndex = Math.floor(Math.random() * this.phrase.length);
               const randomPhrase = this.phrase[phraseIndex];
               return randomPhrase;
               console.log(randomPhrase)
          }
     }

