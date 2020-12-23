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
               this.phrases = this.createPhrase();
               this.activePhrase = 'null';
          }
          createPhrase() {
               const phrases = [new Phrase('Another one bites the dust'),
                              new Phrase('Skeletons in the closet'),
                              new Phrase('Bury your head in the sand'),
                              new Phrase('Keep your friends close, but your enemies closer'),
                              new Phrase('Show me the money')];
               return phrases;
          }
          getRandomPhrase() {
               
          }
     }

