console.log("sanity")

/*-------------------------- Constants --------------------------*/

/*-------------------------- Variables --------------------------*/

let presentQuestion = {};
// let clickableAnswers = false;
let score = 0;
let countingQuestions = 0;
let availableQuestions = [];


let questions =[
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
const questionDisplay = document.getElementById("question-display")

//turn answers box into an array
const answers = Array.from(document.getElementsByClassName("answer"))
console.log(answers)

/*----------------------- Event Listeners -----------------------*/

/*-------------------------- Functions --------------------------*/

init = () => {

  // spread operator gets complete copy of array 
  availableQuestions = [...questions]
  countingQuestions = 0
  getNextQuestion();
}
console.log(availableQuestions)

// create a function for the next question
// need to know how many questions are left
// select it randomly
// add 1 to the counter
// pull one question at a time

getNextQuestion = () => {

    countingQuestions++
    const numberOfQuestions = Math.floor(Math.random() * availableQuestions.length)

    presentQuestion = availableQuestions[numberOfQuestions]

    questionDisplay.innerText = presentQuestion.question

    // pulling the answers
    // use dataset

    answers.forEach( answer => {
      const number = answer.dataset['number'];
      answer.innerText = presentQuestion['answer' + number]
      console.log(number)
    } )
    
    // deleteQuestions slice method
    availableQuestions.slice(numberOfQuestions, 1)

    // clickableAnswers = true

}

answers.forEach(answer =>{

  answer.addEventListener("click", choice =>{
    console.log(choice.target)
    let clickedOption = choice.target
    let clickedAnswer = clickedOption.dataset["number"]
    console.log(clickedAnswer)
    getNextQuestion()
  })
  

})

init()
