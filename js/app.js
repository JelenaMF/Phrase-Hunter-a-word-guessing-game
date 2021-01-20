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
     
});

const keys = document.querySelectorAll('.keyrow button');
for(const key of keys) {
    key.addEventListener('click', () => {

        game.handleInteractions(key);
      
    }); 
    window.addEventListener('keyup', (e) =>{
        if(e.key == key.textContent) {
            game.handleInteractions(key);
            console.log(key);
        } if(startButton){
            game.startGame();
        }

        
      
    });
}