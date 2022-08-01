var startBtn = document.querySelector(".startBtn");
var initialBox = document.querySelector(".coding-quiz-container");
var quizBox = document.querySelector(".multiple-choice-container");
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 75;
var messageLog = document.querySelector(".message")

var aBtnEl = document.querySelector(".aBtn")
var bBtnEl = document.querySelector(".bBtn")
var cBtnEl = document.querySelector(".cBtn")
var dBtnEl = document.querySelector(".dBtn")

var setOne = ["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"]
var setTwo = ["The condition in an if / else statement is enclosed within", "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]
var setThree = ["Arrays in Javascript can be used to store ______.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
var setFour = ["String values must be enclosed within __________ when being assigned to variables.", "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]
var setFive = ["A very useful tool used during development and debugging for printing content to the debugger is: ", "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"]


var arraySets = [setOne, setTwo, setThree, setFour, setFive]

var questionEl = document.querySelector(".multiple-choice-title")

var answerSheetQuestion = ["Commonly used data types DO NOT include:", 
"The condition in an if / else statement is enclosed within", 
"Arrays in Javascript can be used to store ______.", 
"String values must be enclosed within __________ when being assigned to variables.",
"A very useful tool used during development and debugging for printing content to the debugger is: "
]
var answerSheetAnswer = [
    "3. alerts",
    "3. parenthesis",
    "4. all of the above",
    "3. quotes",
    "4. console.log"
]

var currentQuestion;
var currentAnswer;
var isTrue;



function setTime() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
    }, 1000);

    
};

startBtn.addEventListener("click", function() {
    var arraySets = [setOne, setTwo, setThree, setFour, setFive]
    initialBox.setAttribute("style", "display: none")
    quizBox.setAttribute("style", "display: block")
    setQuestion();
    setTime();
});


aBtnEl.addEventListener("click", function() {
    console.log(currentQuestion);
    console.log(currentAnswer);
    console.log(this.textContent)
    checkAnswer(this);
    console.log(isTrue);
    ///
    if (isTrue === true) {
        setQuestion(); 
    } else {
        messageLog.textContent = "Incorrect. Please try it again."
    }
    console.log(arraySets);

    
});

bBtnEl.addEventListener("click", function() {
    console.log(currentQuestion);
    console.log(currentAnswer);
    console.log(this.textContent)
    checkAnswer(this);
    console.log(isTrue);
    ///
    if (isTrue === true) {
        setQuestion(); 
    } else {
        messageLog.textContent = "Incorrect. Please try it again."
    }
    console.log(arraySets);


});

cBtnEl.addEventListener("click", function() {
    console.log(currentQuestion);
    console.log(currentAnswer);
    console.log(this.textContent)
    checkAnswer(this);
    console.log(isTrue);
    ///
    if (isTrue === true) {
        setQuestion(); 
    } else {
        messageLog.textContent = "Incorrect. Please try it again."
    }
    console.log(arraySets);


});

dBtnEl.addEventListener("click", function() {
    console.log(currentQuestion);
    console.log(currentAnswer);
    console.log(this.textContent)
    checkAnswer(this);
    console.log(isTrue);
    ///
    if (isTrue === true) {
        setQuestion(); 
    } else {
        messageLog.textContent = "Incorrect. Please try it again."
    }
    console.log(arraySets);

});



function checkAnswer(btn) {
    if (currentAnswer === btn.textContent) {
        isTrue = true;
    } else {
        isTrue = false;
    }
}

function setQuestion() {
    
    var randomNum = Math.floor(Math.random() * arraySets.length)
    var selectedArray = arraySets[randomNum]
    
    questionEl.textContent = selectedArray[0];
    aBtnEl.textContent = selectedArray[1];
    bBtnEl.textContent = selectedArray[2];
    cBtnEl.textContent = selectedArray[3];
    dBtnEl.textContent = selectedArray[4]; 

    currentQuestion = arraySets[randomNum][0]
    currentAnswer = answerSheetAnswer[
    answerSheetQuestion.indexOf(currentQuestion)
    ];
    arraySets.splice(randomNum, 1)
    messageLog.textContent = "";

}