/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//add a new instance of the game class 
const game = new Game();
const phrase = new Phrase('Life is like a box of chocolates.');
console.log(`Phrase - phrase: ${phrase.phrase}`);
console.log(game);
//add event listener for the start button and onscreen keyboard buttons 
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    console.log('phrase');

});
/* step 4 
    test the Game class 'phrases' property that was initialized and populated. 
    using temporary code 
    using the variable game above and 
    game.phrases.forEach((phrase, index) => {
        console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
    });
*/  