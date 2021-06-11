# What's that Phrase- a word guessing game
 This program is a game similarly to the game show wheel of fortune (without the wheel) There are a few phrases the user will have to guess the letters within the phrase and guess the phrase before they run out of time.
 
 ## **Custom Styles and Animation**
 > 1. The font for title class and header class was changed to 'Lobster', cursive
 > 2. The background color for the main-container class was changed to #1db8b8
 > 3. The background color for the show class was changed to #8c64f8
 > 4. The background color for start class was changed to #469191
 > 5. Add ons:
    * jackInTheBox added to the .letter class 
    * zoomIn added to the show class
    * shake added to the wrong class
    * rollIn added to the title class 
    * added a timer that counts down from 60 seconds to making guessing the phrase more intense.
    
 ## Object of the game
the object of the game is for the player to guess all the letters in a hidden, random phrase. 

At the start of the game, the player will be given the numbers of letters and words in the phrase. These are represented with black boxes on the screen.

 the player guesses the letters in a phrase by clicking letters on a keyboard that's on the screen or their physical keyboard. 

 once the letter is selected, it's disabled and the player can't select it again.

 if the selected letter is in the phrase atleast once, the letter and the position on the screen will be highlighted. all instances of the letter are made visible. I.E if there are 3 a's all a's in the phrase will appear at the same time.

 if the selected letter isn't in the phrase the player loses a heart.

 The player keeps choosing letters until they reveal the phrase or they lost their five lives. 
## Challenges in building the code 
One of the challenges I had while creating this program was the reset after the gameover method was run. I thought by using the ```location.reload()``` my goal would be accomplished but it turned out that all it did was refresh the page which caused the user to press play game twice once at the gameover page and then again at the startpage. 

they ```keyup eventlistener``` was also a little challenging at one point I could the interpreter was listening to the tab clicks and the user could click enter or the space bar to select the desired letter but that wasn't the goal. Also disabling the keyboard in the gameover page. I later add the over property to the Game property, called it in the gameover method and used it in a conditional of the app.js file. 

Adding the animation was by far the most fun. 

## Live Mode 
[Phrase Hunter- Guessing game](https://jelenamf.github.io/Whats-that-Phrase-game/) 
