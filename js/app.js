/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */
//add a new instance of the game class 
const game = new Game();
const startButton = document.querySelector('#btn__reset');
//add event listener for the start button and onscreen keyboard buttons 
startButton.addEventListener('click', (e) => {
    game.startGame();
    //when game is completed the gameboard resets by clicking startbutton
        //removes all li elements from the Phrase ul element 
        //enables all of the onscreen keyboard buttons and update keys class to hide
        //resets all the heart images in the score board to display all liveHeart. 
});

const keys = document.querySelectorAll('.key');
for(const key of keys) {
    
    key.addEventListener('click', (e) => {
        game.handleInteractions(key);
        
    }); 
}