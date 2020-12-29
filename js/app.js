/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */
//add a new instance of the game class 
const game = new Game()
// const phrase = new Phrase('Life is like a box of chocolates.');
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
const logPhrase = (phrases) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
//console.log(game);
//add event listener for the start button and onscreen keyboard buttons 
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    console.log('start game button working!');

});
