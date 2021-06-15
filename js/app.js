/* 
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */

let game;

const keys = document.querySelectorAll('.key');
document.getElementById('timer').style.display = 'none';
const startButton = document.querySelector('#btn__reset');
//add event listener for the start button and onscreen keyboard buttons 
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

const hintBttn = document.getElementById('hint-bttn');
hintBttn.addEventListener('click', (e) => {
   const hint = document.getElementById('hint');
   hint.innerText= `This hint is: ${game.activePhrase.hint}`;
   hintBttn.style.display = 'none';
   hint.style.display = 'block';

})

for(const key of keys) {
    key.addEventListener('click', (e) => {
        game.handleInteraction(key);
      
    }); 
   
}
addEventListener('keyup', (e) =>{
    if(game.over){
        e.preventDefault();
    } else {
        for(const key of keys) {
            if(e.key == key.textContent && !key.disabled) {
                game.handleInteraction(key);
            }
        }
    }
    
});