/*
REQUIREMENTS:
--------------------
1. Cache at least 1 element using | selectElementById


2. Cache at least 1 element using | querySelector or querySelectorAll


3. Use the parent-child-sibling relationship to navigate between elements
at least once (firstChild, LastChild, parentNode, nextElementSibling, etc)


4. Iterate over a collection of elements to accomplish some task


5. Create at least 1 element using | createElement


6. Use appendChild and/or prepend to add new elements to the DOM.


7. Use the DocumentFragment interface or HTML templated with the cloneNode
method to create templated content.


8. Modify the HTML or text content of at least one element in response to user
interaction using innerHTML, innerText, or textContent.


9. Modify the style and/or CSS classes of an element in response to user interactions
using the style or classList properties.


10. Modify at least one attribute of an element in response to user interaction.


11. Register at least two different event listeners and create the associated event
handler functions.


12. Use at least two Browser Object Model (BOM) properties or methods.


13. Include at least one form and/or input with HTML attribute validation.


14. Include at least one form and/or input with DOM event-based validation. (This can
be the same form or input as the one above, but should include event-based
validation in addition to the HTML attribute validation.)


15. Ensure that the program runs without errors (comment out things that do not work,
and explain your blockers - you can still receive partial credit).


16. Commit frequently to the git repository.
17. Include a README file that contains a description of your application.
18. Level of effort displayed in creativity, presentation, and user experience.
*/
//-----------------------------------------------------


//------ Cache elements from HTML --------------------------
const mainHeader = document.getElementById('main-header');
const nameForm = document.querySelector('#name-form');
const usernameInput = document.querySelector('#username');
const startGameSection = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const finalScoreText = document.getElementById('final-score');
const restartButton = document.getElementById('restart-btn');

//------- Questions Array ----------------------------------------
const questions = [
    { question:             }
    { question:             }
    { question:             }
    { question:             }
    { question:             }
    { question:             }
]

let questionIndex = 0;
let score = '';

//------- Form Submission/ Event Listener ------------------------------------------
nameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (usernameInput.value() === '') {
        alert("Name is required!");
    } else {
        startGameSection();
    }
});

function startGame() {
    startGameSection.style.display = 'none';
    gameContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    questionContainer.innerHTML = '';
    const questionData = questions[currentQuestionIndex];
    const questionText = document.createElement(h2);
    questionText.textContent = questionData.question;
    questionContainer.appendChild(questionText);

//------- Display answer options -----------------------------------------
    questionData.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.classList.add('answer-btn');
        answerButton.addEventListener('click', selectAnswer);
        questionContainer.appendChild(answerButton);
    });
    nextButton.style.display = 'none';
}

function selectAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
        event.target.style.backgroundColor = '';
    } else {
        event.target.style.backgroundColor = '';
    }
}
    const allAnswerButtons = document.querySelectorAll('.answer-btn');
    allAnswerButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = '';
        }
    });
    nextButton.style.display = 'inline-block';

