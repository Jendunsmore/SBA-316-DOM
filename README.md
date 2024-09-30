

##Project Title
Spooky Trivia Game, a fun and dynamic single-page Halloween-themed trivia game.

##Project Description
The Spooky Trivia game is a dynamic single-page application where players answer multiple choice questions about Halloween traditions, history, fiction, and more. The user's score is given at the end of the game, illustrating how many questions the user correctly answered out of the total number of questions provided.

##Features
Multiple-choice trivia questions with four options.
Tracks and displays the player's score at the end.
Interactive DOM elements that update dynamically based on player input.
Halloween-themed CSS animation (bats flying across the page).
Mobile-responsive layout.

##Technologies Used
HTML: Structure of the web page.
CSS: Styling and animation (e.g., bat animations).
JavaScript: Game logic, DOM manipulation, and event handling.

##Installation Instructions
Clone this repository: git clone https://github.com/Jendunsmore/SBA-316-DOM
Navigate to the project directory: cd halloween-trivia-game
Open the index.html file in your preferred web browser.

##Usage Instructions
When the page loads, players will see a start screen.
Click "Start Game" to begin answering trivia questions.
Select the correct answer from the four options provided for each question.
At the end of the game, the total score will be displayed.

##Code Structure
index.html: Contains the HTML structure for the game.
styles.css: Contains the CSS styles and animations (including bat flying animations).
script.js: Handles game logic, question generation, answer validation, score tracking, and DOM updates.

##Game Logic Overview
Questions are stored in an array of objects, where each object contains the question, possible answers, and the correct answer.
Event listeners capture the player's choice, compare it with the correct answer, and update the score.
The game dynamically loads each question.
At the end of the game, the total score is displayed, and the user is given the option to play again.

##Future Improvements
Adding more questions for greater variety.
Implementing a timer for each question to increase difficulty.
Showing correct answer right after being answered.
Animating score updates or creating more interactive feedback.

##Credits
Trivia questions sourced from various online resources.
Bat animation: https://giphy.com/create/gifmaker
Documentation: https://developer.mozilla.org/en-US/
