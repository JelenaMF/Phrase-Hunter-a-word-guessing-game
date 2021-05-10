/* 
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
               this.over = false; //disabling keys during game over 
               this.activePhrase = null;
          }
          createPhrases() {
               //add a hint property to display to user 
               const phrase = [new Phrase('Look at the flowers'),
                              new Phrase('Pull it together'),
                              new Phrase('Speak of the devil'),
                              new Phrase('Cut to the chase'),
                              new Phrase('Hold your horses'),
                              new Phrase('Close but no cigar'),
                              new Phrase('I want to rock'),
                              new Phrase('Show me the money'),
                              new Phrase('Break a leg'),
                              new Phrase('Cutting corners'),
                              new Phrase('Hit the sack')
                         ];
               return phrase;
          }
          //create a showHint method



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
               document.getElementById('timer').style.display = '';
               startTimer(); 
               console.log(this.activePhrase);
          }
           /*clicked/chosen letter is captured and disabled 
               checks if selected letter matches a letter in the activePhrase 
               giving it a classList of wrong/chosen depending on the result
               checks for win to end game
           */

          handleInteraction(button) {
               
              button.disabled = true;
               /*check for letter matches */
                 
               if(!this.activePhrase.checkLetter(button.textContent)) {
                   button.classList.add('wrong');
                   this.removeLife();
                } 
               if(this.activePhrase.checkLetter(button.textContent)){
                    button.classList.add('chosen');
                    this.activePhrase.showMatchedLetter(button.textContent);
                 }  
              
              if(this.checkForWin()) {
                   this.gameOver(true);
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
                    this.gameOver(false);
               }                                          
          }
          //returns true or false depending on if the game was won/lost
          gameOver(gameWon) {
               this.over = true;   
               const display = document.getElementById('overlay');
               const gameover = document.getElementById('game-over-message');
               if(this.checkForWin(true)) {
                    gameover.innerHTML = 'You Win!!';
                    display.classList.remove('lose');
                    display.classList.add('win');
                    display.style.display = 'block';
                    console.log(this.activePhrase.phrase);

               } else {
                    gameover.innerHTML = `Nice Try, the phrase was "${this.activePhrase.phrase}"`;
                    display.classList.remove('win');
                    display.classList.add('lose');
                    display.style.display = 'block'; 
                    console.log(this.activePhrase.phrase);
               }
               this.reset(Game);
                display.style.display = "flex";

          }

          reset(game) {
               //reloads the game, resets the hearts, phrase, and keys
               startButton.addEventListener('click', (e) => {
                    const hearts =document.querySelectorAll('.tries img[src$="images/lostHeart.png"]');
                    for(const heart of hearts) {
                         heart.src = 'images/liveHeart.png';
                    }
                    //removes old phrase? 
                    document.querySelector('#phrase ul').innerHTML = '';
                    this.activePhrase.addPhraseToDisplay();
                    console.log(this.activePhrase);
                    for(const key of keys) {
                         key.disabled = false;
                         key.classList.remove('wrong', 'chosen');
                    }    
                    this.missed = 0;
                   
                });
          }
     }

