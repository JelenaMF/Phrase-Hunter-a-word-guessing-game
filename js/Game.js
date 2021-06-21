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

          createPhrases(phrases, hint) {
               //add a hint property to display to user 
               const phrase = [new Phrase('Look at the flowers', 'from the TV series: The Walking Dead. Said by Carol to a little girl.'),
                              new Phrase('Pull it together', 'used when someone is losing their mind'),
                              new Phrase('Speak of the devil', 'used when someone shows up after being talked about'),
                              new Phrase('Cut to the chase', 'used when a story is taking too long to be told.'),
                              new Phrase('Hold your horses', ' another saying for "be patient"'),
                              new Phrase('Close but no cigar', 'is used when a goal is not met.'),
                              new Phrase('I want to rock', 'used when someone wants to party... an 80s phrase'),
                              new Phrase('Show me the money', 'used when someone should pay you'),
                              new Phrase('Break a leg', ' a term for good luck but it could be a threat depending on who says it.'),
                              new Phrase('Cutting corners', 'used when someone is cheating or using a short cut'),
                              new Phrase('Hit the sack', 'used for going to bed'),
                              new Phrase('Bringing home the bacon', 'used when going or coming from work'),
                              new Phrase('Life dealt him a bad hand', 'used when someone experiences a hard life'),
                              new Phrase('Wrong hole', 'when your partner tries to enter an exit only opening'),
                              new Phrase('Shake it like a polaroid picture', 'from an Outcast song in Y2K')
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
               document.getElementById('timer').style.display = '';
               startTimer(); 
               this.reset();

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
                   timePassed = 0;
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
               const gamePhrase = document.getElementById('phrase');
               gamePhrase.style.display = 'none';
               if(this.checkForWin(true)) {
                    gameover.innerHTML = 'Good guessing!! Winner!';
                    display.classList.remove('lose');
                    display.classList.add('win');
                    display.style.display = 'block';
                    document.getElementById('rule-container').style.display='none';
               } else {
                    gameover.innerHTML = `Nice Try, the phrase was "${this.activePhrase.phrase}"`;
                    display.classList.remove('win');
                    display.classList.add('lose');
                    display.style.display = 'block'; 
                    document.getElementById('rule-container').style.display='none';


               }
               display.style.display = "flex";
               document.getElementById('timer').style.display = 'none';
               timePassed = -1;
               stopTimer();
          }

          reset(game) {
               //reloads the game, resets the hearts, phrase, and keys
                    const hearts =document.querySelectorAll('.tries img[src$="images/lostHeart.png"]');
                    const gamePhrase = document.getElementById('phrase');
                    gamePhrase.style.display = 'block';
                    for(const heart of hearts) {
                         heart.src = 'images/liveHeart.png';
                    }
                    //removes previously used phrase
                   document.querySelector('#phrase ul').innerHTML = '';
                   this.activePhrase.addPhraseToDisplay();
                    for(const key of keys) {
                         key.disabled = false;
                         key.classList.remove('wrong', 'chosen');
                    }    
                    this.missed = 0;
                    resetTimer();
               }
     }

