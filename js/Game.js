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
               this.activePhrase = null;
          }
          createPhrases() {
               const phrase = [new Phrase('Another one bites the dust'),
                              new Phrase('Pull yourself together'),
                              new Phrase('Speak of the devil'),
                              new Phrase('Cut to the chase'),
                              new Phrase('Curiousity killed the cat'),
                              new Phrase('Close but no cigar'),
                              new Phrase('I want to rock'),
                              new Phrase('Show me the money'),
                              new Phrase('Break a leg'),
                              new Phrase('Cutting corners'),
                              new Phrase('Hit the sack')
                         ];
               return phrase;
          }
          //makes the above createdPhrases populate randomly.
          getRandomPhrase() {
               const phraseIndex = Math.floor(Math.random() * this.phrase.length);
               const randomPhrase = this.phrase[phraseIndex];
               return randomPhrase;
               console.log(randomPhrase)
          }
          startGame() {
               document.getElementById('overlay').style.display = 'none';
               this.activePhrase = this.getRandomPhrase();
               this.activePhrase.addPhraseToDisplay();
          }
          handleInteractions() {
               const key = document.querySelection('.key');
               key.clicked;
               //clicked/chosen letter is captured
               if(this.activePhrase.checkLetter(key)) {
                    key.classList.add('chosen');
               }
                         
                    
               
               /*check for letter matches 
               }  else {
                    game must remove a life 
               } check if all letters in phrase are revealed {
                    player wins 
                    display winning message
               } else if (player live === 0 ) {
                    player lost
                    display losing message
               }
              */ 
          }
          //checks if game has been won returning a boolean
          checkForWin() {
               const showLetters = document.querySelectorAll('.show').length;
               const chosenLetter = document.querySelectorAll('.letter').length;
               return showLetters === chosenLetter;
          }
          /** increases the value of the missed property
           * removes a heart/life
           * checks for remaining life
           */
          removeLife(){
               let life = document.querySelectorAll('.tries');
               for(const lostlife of life) {

               }
              if(Phrase.checkLetter === false) {
                   this.missed = 1;
                   life = `<img src="images/loseHeart.png"`;
              }                                                      
               
          }
     }

