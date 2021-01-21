/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */
const game = new Game();
const keys = document.querySelectorAll('.key');
const startButton = document.querySelector('#btn__reset');
//event listener for the start button and onscreen keyboard buttons 
startButton.addEventListener('click', (e) => {
    game.startGame();
     
});

for(const key of keys) {
    key.addEventListener('click', () => {

        game.handleInteractions(key);
      
    }); 
    window.addEventListener('keyup', (e) =>{
        if(e.key == key.textContent) {
            game.handleInteractions(key);
            console.log(key);
        }       
    });
}