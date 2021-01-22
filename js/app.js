/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */

let game;
const keys = document.querySelectorAll('.key');
const startButton = document.querySelector('#btn__reset');
//add event listener for the start button and onscreen keyboard buttons 
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();

     
});

for(const key of keys) {
    key.addEventListener('click', (e) => {

        game.handleInteraction(key);
      
    }); 
    window.addEventListener('keyup', (e) =>{
        if(e.key == key.textContent && !key.disabled) {
            game.handleInteraction(key);
        
        } 
    });
}