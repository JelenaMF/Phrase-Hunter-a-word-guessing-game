/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * manages the function of the game includes methods for:
 * starting/ending game 
 * handling interactions 
 * getting random phrases 
 * checking for a win 
 * and removing life counter*/
/* step one */
//create a game class methods for starting and ending the game 
//handle interactions
//get a random phrase 
//check for wins 
//remove life from the scoreboard.
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
     }
/* step 4
     inside the Game class create method called 'createPhrase() that creates and returns 
     an array of 5 new Phrase objects and then set the 'phrases' property to call that 
     method.

     ** don't forget to pass the actual string phrase that the Phrase object is representing
     A string phrase should only include letters and spaces-- no numbers punctuation
     or other special characters. 
*/
