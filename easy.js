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

const allChoices = document.querySelectorAll('#answers-box')

/*----------------------- Event Listeners -----------------------*/

answers.forEach( answer => {
  
  answer.addEventListener("click", handleClick)
})     



/*-------------------------- Functions --------------------------*/

function init() {

  // spread operator gets complete copy of array 
  availableQuestions = [...questions]

  handleTurn()
}

init()
function handleTurn(){
  allChoices.forEach((choice) =>{

    choice.classList.remove("correct")
    choice.classList.remove("wrong")
  })

  
  currentQuestion = getRandomQuestion()
  console.log(currentQuestion)
  render()
}

function getRandomQuestion(){

  const randomIdx = Math.floor(Math.random() * availableQuestions.length)
  if(availableQuestions[randomIdx].asked === false){
    console.log("notAsked")
    availableQuestions[randomIdx].asked = true
    console.log(availableQuestions[randomIdx])
    return availableQuestions[randomIdx]
  } else {
    console.log("asked")
    getRandomQuestion()
    
  }
}

function render(){
  questionDisplay.innerText = currentQuestion.question
  // currentQuestion = availableQuestions[numberOfQuestions]
  
  answers.forEach( answer => {
    const number = answer.dataset['number'];
    answer.innerText = currentQuestion['answer' + number]
    
  })
  
}

function handleClick(evt){
  console.log(evt.target)
  
  const clickedOption = evt.target
        const clickedAnswer = clickedOption.dataset["number"]
          if(clickedAnswer === currentQuestion.correctAnswer){
            //if the question is answered correctly,
            // re render with a new question
            clickedOption.parentElement.classList.add("correct")
            clickedOption.parentElement.classList.remove("correct")
            handleTurn()
      
            console.log('correct')
          } else if(clickedAnswer !== currentQuestion.correctAnswer){ 
            clickedOption.parentElement.classList.add("wrong")
          
            console.log ('wrong')
      
          } 

}