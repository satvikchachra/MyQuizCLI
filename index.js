const readlineSync = require('readline-sync');

// Get username
const userName = readlineSync.question('What is your good name?\n');
console.log('Hi ' + userName + '! How well do you know me? Lets put it to a test! Shall we?!');

console.log('\n* Warning: Negative Marking Ahead *\n');

// Keep score of the user
let score = 0;

// Evaluating answers given by user
const evaluateUser = (question, answer) => {
    const userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log('\nCorrect Answer');
        score++;
    } else {
        console.log('Incorrect Answer');
        score--;
    }
    console.log('Correct Answer was: ' + answer);
    console.log('Your score: ' + score + '\n');
}

// Question and Answer array for the quiz
const questionObjectArray = [
    {
        question: 'My current favourite song?\n',
        answer: 'New Light'
    },
    {
        question: 'My favourite Avenger?\n',
        answer: 'Ironman'
    },
    {
        question: 'My favourite DC Superhero?\n',
        answer: 'Batman'
    },
    {
        question: 'My current favourite game to watch?\n',
        answer: 'Chess'
    },
    {
        question: 'What is on my mind?\n',
        answer: 'Tanay Sir named this game: end-game and you know my favorite Avenger dont you'
    }
];

// Tracking High Score
const highScores = [
    {
        name: 'Satvik',
        score: 6,
        reason: 'You can not beat me at my own game'
    },
    {
        name: 'SATVIK',
        score: 6,
        reason: '*Evil laugh*'
    }
];

// Looping through questions
for (let i = 0; i < questionObjectArray.length; i++) {
    let currentQuestion = questionObjectArray[i];
    evaluateUser(currentQuestion.question, currentQuestion.answer);
}

// Concluding message
if (score === 3 || score === 5) {
    console.log('You won Mr. ' + userName + '\nBut at what cost...');
} else {
    console.log('Your final score = ' + score);
}

console.log('\n***    ***     ***\n');

// Fun highscore message
if (score > highScores) {
    console.log('Never gonna happen! unless...');
} else {
    console.log('Checkout my highscore: ');
    for (let i = 0; i < highScores.length; i++) {
        let highscoreUser = highScores[i];
        console.log('name: ' + highscoreUser.name);
        console.log('score: ' + highscoreUser.score);
        console.log('reason: ' + highscoreUser.reason);
    }

    console.log('By "my" highscore, I meant literally mine :P');
}