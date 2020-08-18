//convert html ID to JS variable
const startButton = document.getElementById('start-button');
var timeEl = document.getElementById("time-id");
var headerElem = document.getElementById('header-elem')
var finalScore = document.getElementById('final-score')
var questionElem = document.getElementById('questionElem')
var rightWrongBox= document.getElementById('right-wrong-box')
var secondsLeft =75;
var counter = 0;

//Displays current time left in quiz
timeEl.textContent = "Time: " + secondsLeft;

// on load displays header and prompt messages ---source--- https://www.w3schools.com/jsref/event_onload.asp
headerElem.addEventListener('load', displayGreeting());

function displayGreeting() {
    headerElem.innerText = "Coding Quiz Challenge";
    document.getElementById('prompt-elem').innerText = 'Try to anwser the following code related questions within the time limit. Every incorrect answer penalizes your scoretime by 10 seconds.'
}

// Event listener that runs callback function setTime to start timer
startButton.addEventListener('click', function setTime() {
    startButton.setAttribute('disabled', true);
    // ^^^^^ solution to disable start button, preventing double click running fuction setTime mulitple times ----> https://stackoverflow.com/questions/20281546/how-to-prevent-calling-of-en-event-handler-twice-on-fast-clicks    
    startButton.style.display = 'none';
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            alert('Time is up!')
            window.stop();
        }
    }, 1000);
});
// event listener that hides headerElem & promptElem when start button is clicked -- src= https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
startButton.addEventListener('click', function clearMessage() {
    var headerElem = document.getElementById('header-elem');
    if (headerElem.style.display === 'none') {
        headerElem.style.display = 'block';
    } else {
        headerElem.style.display = 'none';
    }
    var promptElem = document.getElementById('prompt-elem');
    if (promptElem.style.display === 'none') {
        promptElem.style.display = 'block';
    } else {
        promptElem.style.display = 'none';
    }   
});

startButton.addEventListener('click', function displayQA() {
    
    var questionArray = [
        {
            question: 'Why is the sky blue?',
            correct: 'Because ozone releases blue light when heated',
            answers: [
                {
                    text: 'Because we live in the eye of a blue eyed giant',
                    
                },
                {
                    text: 'Because it reflects the ocean',
                    
                },
                {
                    text: 'Because ozone releases blue light when heated',
                    
                }
            ]
        },
        {
            question: "Who's the Greatest?",
            answers: [
                {
                    text: 'muhammad Ali',
                    correct: false
                },
                {
                    text: 'Michael Jordan',
                    correct: false
                },
                {
                    text: 'Shonuff',
                    correct: true
                }
            ]
        },
        {
            question: 'Which way is up?',
            answers: [
                {
                    text: '>',
                    correct: false
                },
                {
                    text: 'V',
                    correct: false
                },
                {
                    text: '<',
                    correct: false
                },
                {
                    text: '^',
                    correct: true
                }
            ]
        }];
    
    var questionElem = document.getElementById('question-elem')
    var answerElem = document.getElementById('answer-buttons')
    var currentQuestion = questionArray[counter]
    var answersArray = currentQuestion.answers
    var questionText = currentQuestion.question
    var correctAnswer = currentQuestion.correct    
    var userAnswer = questionArray[j]    
    var newQuestion = document.createElement('h3')    
    questionElem.innerHTML = ''
    answerElem.innerHTML = ''    
    newQuestion.innerText = questionText;
    questionElem.append(newQuestion)   
    
    for (var j = 0; j < answersArray.length; j++) {
        
        var answerButton = document.createElement('button')
        var currentAnswer = answersArray[j]
        answerButton.innerText = currentAnswer.text
        // answerButton.setAttribute('is-correct', currentAnswer.correct)
        // console.log(currentAnswer.correct)
        answerButton.addEventListener('click', function () {            
           counter++;        
           displayQA();               
        });
        
        answerElem.append(answerButton)
    }
    //https://stackoverflow.com/questions/54471618/how-to-get-the-inner-text-of-dynamically-generated-buttons-in-javascript
    function getTextCompare() {
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
              var answerText=this.innerText;
              console.log(answerText);
              console.log(answerButton.innerText);
              if (answerText===answerButton.innerText){
                  rightWrongBox.textContent="Correct!"
              } else {
                  rightWrongBox.textContent='Wrong!';
                  secondsLeft-=10;                                
              }
            }
          }
        } 
        document.getElementById('answer-buttons').appendChild(answerButton);
        getTextCompare();
        console.log(timeEl)
    function showHighScore(){
        let scoreList= document.getElementById('score-list');
    }
});






