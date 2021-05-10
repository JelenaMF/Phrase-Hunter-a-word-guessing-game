/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */

let game;
// const phrases = [
//     {
//             phrase:'Look at the flowers',
//             hint: `Carol's line from the Walking Dead.` //add hint property 
//         }, 
//         {
//             phrase: 'protect the planet',
//             hint: 'environment phrase'
//         },
//         {
//             phrase: 'Speak of the devil',
//             hint: `phrase said when speaking about someone who comes up shortly after`
//         },
//         {
//             phrase: 'Cut to the chase',
//             hint: 'Said when someone is rushing a story being told'
//         },
//         {
//             phrase: 'Hold your horses',
//             hint: 'A figure of speech telling someone to calm down'
//         },
//         {
//             phrase:'Close but no cigar',
//             hint: 'a saying when someone comes close in a win'
//         },
//         {
//             phrase: 'I want to rock',
//             hint: 'A famous rock song'
//         },
//         {
//             phrase: 'Show me the money',
//             hint: 'A saying regarding money'
//         },
//         {
//             phrase: 'Break a leg',
//             hint: 'A phrase with many meanings one being for luck'
//         },
//         {
//             phrase:'cutting corners',
//             hint: 'cheating or taking a short cut'
//         },
//         {
//             phrase:'Hit the sack',
//             hint: 'A bedtime saying'
//         }
    
// ]
// console.log(phrases);
const keys = document.querySelectorAll('.key');
document.getElementById('timer').style.display = 'none';
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