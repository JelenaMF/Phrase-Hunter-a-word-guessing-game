/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * performs basic DOM selection, add event listeners and resets the game
 * when it ends */
//add a new instance of the game class 
const game = new Game()
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
// const phrase = new Phrase('Life is like a box of chocolates.');
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
game.getRandomPhrase().addPhraseToDisplay();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
//console.log(game);
//add event listener for the start button and onscreen keyboard buttons 
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game.startGame();
    

});
