console.log("sanity")

/*-------------------------- Constants --------------------------*/

/*-------------------------- Variables --------------------------*/

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let countingQuestions = 0;
let availableQuestions = [];



let questions = [
    {
      question: "2+2",
      answer1: "4",
      answer2: "3",
      answer3: "2",
      answer4: "12",
      answer: 1
    },

    {
      question: "2+1",
      answer1: "4",
      answer2: "3",
      answer3: "2",
      answer4: "12",
      answer: 2
    },

    {
      question: "2+0",
      answer1: "4",
      answer2: "3",
      answer3: "2",
      answer4: "12",
      answer: 3
    },

]

/*------------------ Cached Element References ------------------*/
const questionDisplay = document.querySelector("#question-display")

//turn answers box into an array
const answers = Array.from(document.getElementsByClassName("answer"))
console.log(answers)

/*----------------------- Event Listeners -----------------------*/

/*-------------------------- Functions --------------------------*/

init = () => {
  countingQuestions = 0
  // spread operator gets complete copy of array 
  availableQuestions = [...questions]
  
  getNextQuestion();
}
console.log(availableQuestions)

// create a function for the next question
// need to know how many questions are left
// select it randomly
// add 1 to the counter

getNextQuestion = () => {

    countingQuestions++
    const numberOfQuestions = Math.floor(Math.random() * availableQuestions.length)

    presentQuestion = availableQuestions[numberOfQuestions]

    questionDisplay.innerText = presentQuestion.questions

}

init()