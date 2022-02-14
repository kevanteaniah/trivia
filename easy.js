

/*-------------------------- Constants --------------------------*/

/*-------------------------- Variables --------------------------*/

let availableQuestions 

let score = 0

let currentQuestion




const questions =[
    {
      question: "2+2",
      answer1: "4",
      answer2: "3",
      answer3: "2",
      answer4: "12",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "What goes roof?",
      answer1: "dog",
      answer2: "cat",
      answer3: "Jurgen",
      answer4: "Tom",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "What is tall?",
      answer1: "an ant",
      answer2: "a cat",
      answer3: "a cup",
      answer4: "a tree",
      correctAnswer: "4",
      asked: false,
    },

    

]

/*------------------ Cached Element References ------------------*/
const questionDisplay = document.getElementById("question-display")

//turn answers box into an array
const answers = Array.from(document.getElementsByClassName("answer"))
console.log(answers)

/*----------------------- Event Listeners -----------------------*/

/*-------------------------- Functions --------------------------*/

function init() {

  // spread operator gets complete copy of array 
  availableQuestions = [...questions]

  handleTurn()
}

init()
function handleTurn(){
  currentQuestion = getRandomQuestion()
  console.log(currentQuestion)
  render()
}

function getRandomQuestion(){

  const randomIdx = Math.floor(Math.random() * availableQuestions.length)
  if(availableQuestions[randomIdx].asked === false){
    
    availableQuestions[randomIdx].asked = true
    return availableQuestions[randomIdx]
  } else {
    getRandomQuestion()
  }
}

function render(){
  questionDisplay.innerText = currentQuestion.question
  // currentQuestion = availableQuestions[numberOfQuestions]

  answers.forEach( answer => {
    const number = answer.dataset['number'];
    answer.innerText = currentQuestion['answer' + number]

    answer.addEventListener("click", choice =>{
      
            console.log(answer)
          // clickableAnswers = false
          const clickedOption = choice.target
          const clickedAnswer = clickedOption.dataset["number"]
          if(clickedAnswer === currentQuestion.correctAnswer){
            answer.parentElement.classList.add("correct")
            
      
            console.log('correct')
          } else if(clickedAnswer !== currentQuestion.correctAnswer){ 
            answer.parentElement.classList.add("wrong")
          
            console.log ('wrong')
      
          } 
    })
    
    
    

})








// create a function for the next question
// need to know how many questions are left
// select it randomly
// add 1 to the counter
// pull one question at a time

// function nextQuestion(){

//     countingQuestions++
//     const numberOfQuestions = Math.floor(Math.random() * availableQuestions.length)

//     presentQuestion = availableQuestions[numberOfQuestions]

//     questionDisplay.innerText = presentQuestion.question

//     // pulling the answers
//     // use dataset

//     answers.forEach( answer => {
//       const number = answer.dataset['number'];
//       answer.innerText = presentQuestion['answer' + number]
      
//     } )
    
    
    // deleteQuestions slice method
    // availableQuestions.slice(numberOfQuestions, 1)

//     // clickableAnswers = true

}

// answers.forEach(answer =>{

    
//   answer.addEventListener("click", choice =>{
//     // if(!clickableAnswers) return
//       console.log(answer)
//     // clickableAnswers = false
//     const clickedOption = choice.target
//     const clickedAnswer = clickedOption.dataset["number"]
    
    
//     if(clickedAnswer === presentQuestion.correctAnswer){
//       answer.parentElement.classList.add("correct")
//       setTimeout(() => {
        
        
//       }, 5000);
//       nextQuestion()

//       console.log('correct')
//     } else if(clickedAnswer !== presentQuestion.correctAnswer){ 
//       answer.parentElement.classList.add("wrong")
    
//       console.log ('wrong')

//     } 
    
//   })
  

// })

// setTimeout(() => {
        
        
// }, 5000);


// init()
