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
          }
          startGame() {
               document.getElementById('overlay').style.display = 'none';
               this.activePhrase = this.getRandomPhrase();
               this.activePhrase.addPhraseToDisplay();
          }
           /*clicked/chosen letter is captured and disabled 
               checks if selected letter matches a letter in the activePhrase 
               giving it a classList of wrong/chosen depending on the result
               checks for win to end game
           */

          handleInteractions(button) {
               
              button.disabled = true;
               /*check for letter matches */
                 
                    if(!this.activePhrase.checkLetter(button.textContent)) {
                   // add wrong css class to selected/clicked letter
                   button.classList.add('wrong');
                   this.removeLife();
                } 
                    this.activePhrase.showMatchedLetter(button.textContent);
                    button.classList.add('chosen');
              
              if(this.checkForWin()) {
                   this.gameover(true);
              }
          }

          //checks if game has been won returning a @{boolean}
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
               this.missed++;
               const lives = document.querySelector('.tries img[src$="images/liveHeart.png"]');
               lives.setAttribute('src', "images/lostHeart.png");
          
               if(this.missed === 5){
                    this.gameover(false);
               }                                          
          }
          //returns true or false depending on if the game was won/lost
          gameover(gameWon) {
               const display = document.getElementById('overlay');
               const gameOver = document.getElementById('game-over-message');
               if(this.checkForWin() === true) {
                    gameOver.innerHTML = 'You Win!!';
                    display.classList.add('win');
                    display.style.display = 'block';
                          
               } else {
                    gameOver.innerHTML = 'Nice Try, try again';
                    display.classList.remove('win');
                    display.classList.add('lose');
                    display.style.display = 'block';
                 
               }
               //reloads the game 
               startButton.addEventListener('click', (e) => {
                    
                    this.startGame();
                    document.querySelector('#phrase ul').innerHTML = '';
                    this.activePhrase.addPhraseToDisplay();
                    for(const key of keys) {
                         key.disabled = false;
                         key.classList.remove('wrong', 'chosen');
                    }
                    this.missed = 0;
                });
          }
     }

