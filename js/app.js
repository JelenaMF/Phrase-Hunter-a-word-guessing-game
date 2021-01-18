/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */
//add a new instance of the game class 
let game; 

//add event listener for the start button and onscreen keyboard buttons 
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game = new Game()
    game.startGame();
    
});

const keys = document.querySelectorAll('.key');
for(const key of keys) {
    console.log(keys);
    key.addEventListener('click', (e) => {
        console.log(`you picked a letter key`)
    }); 
}