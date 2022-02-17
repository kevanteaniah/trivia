/*-------------------------- Constants --------------------------*/

/*-------------------------- Variables --------------------------*/

let availableQuestions 

let score = 0

let bonus = 100

let countQuestions = 0

let currentQuestion

let questionsAnswered = 0

const MAX_QUESTIONS = 9

let startTime = 5;

let correctSound 
let wrongSound 



const questions =[
    {
      question: "How many oceans are there?",
      answer1: "5",
      answer2: "2",
      answer3: "3",
      answer4: "4",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "How many continents are there?",
      answer1: "7",
      answer2: "8",
      answer3: "25",
      answer4: "157",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "What is the name of the longest river?",
      answer1: "Detroit",
      answer2: "Amazon",
      answer3: "Mississippi",
      answer4: "Nile",
      correctAnswer: "4",
      asked: false,
    },

    {
      question: "What is the name of the tallest mountain?",
      answer1: "Mt. Habab",
      answer2: "Mt. Everest",
      answer3: "Mt. Rushmore",
      answer4: "Mt. Money",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Which country are the famous pyramids located?",
      answer1: "Ethiopia",
      answer2: "Egypt",
      answer3: "USA",
      answer4: "Canada",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Which is not a country?",
      answer1: "Japan",
      answer2: "China",
      answer3: "Michigan",
      answer4: "Mexico",
      correctAnswer: "3",
      asked: false,
    },

    {
      question: "How many states are in the USA?",
      answer1: "51",
      answer2: "50",
      answer3: "52",
      answer4: "49",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Which continent is Canada in?",
      answer1: "North America",
      answer2: "It is a continent",
      answer3: "Africa",
      answer4: "Asia",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "How many countries are in Africa?",
      answer1: "54",
      answer2: "154",
      answer3: "254",
      answer4: "4",
      correctAnswer: "1",
      asked: false,
    },

    

    

]

/*------------------ Cached Element References ------------------*/
const questionDisplay = document.getElementById("question-display")
const answerBoxes = Array.from(document.getElementsByClassName("answers-box"))
//turn answers box into an array
const answers = Array.from(document.getElementsByClassName("answer"))
console.log(answers)

const questionCounter = document.getElementById('question-counter')
const scoretext = document.getElementById('score')

const resetButton = document.querySelector('.reset-btn')

const allChoices = document.querySelectorAll('#answers-box')

const timer = document.getElementById('timer')

/*----------------------- Event Listeners -----------------------*/

answers.forEach( answer => {
  
  answer.addEventListener("click", handleClick)
})     



/*-------------------------- Functions --------------------------*/

function init() {
  
  // spread operator gets complete copy of array 
  availableQuestions = [...questions]
  
  questionsAnswered = 0
  handleTurn()
}

init()
function handleTurn(){
  allChoices.forEach((choice) =>{
    correctSound = new sound("sounds/Mario Coin Sound - Sound Effect (HD).mp3")
    wrongSound = new  sound("sounds/gta 5 death (sound effect).mp3")

    choice.classList.remove("correct")
    choice.classList.remove("wrong")
  })

  
  currentQuestion = getRandomQuestion()
  console.log(currentQuestion)
  
  render()
}

function getRandomQuestion(){
  if(questionsAnswered >= availableQuestions.length){
    return
  }
  
  questionCounter.innerHTML = `${questionsAnswered}/${MAX_QUESTIONS}`
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
  if(currentQuestion !== undefined){
    questionDisplay.innerText = currentQuestion.question
    // currentQuestion = availableQuestions[numberOfQuestions]
    
    answers.forEach( answer => {
      const number = answer.dataset['number'];
      answer.innerText = currentQuestion['answer' + number]
      
    })
  } else {
    
    questionDisplay.innerText = "You are Brilliant, Try another category"
    
    
    answers.forEach(answer => answer.remove() )
    answerBoxes.forEach(answerBox => answerBox.remove() )
    answerBoxes.style.borderColor = "white"
    
    
    
  }
  
  
}

function handleClick(evt){
  console.log(evt.target)
  console.log("click")
  
  
  const clickedOption = evt.target
        const clickedAnswer = clickedOption.dataset["number"]
          if(clickedAnswer === currentQuestion.correctAnswer){
            questionsAnswered++
            scoreKeeper(bonus)
            
            clickedOption.parentElement.classList.add("correct")
            console.log('correct')
            setTimeout(() =>{
              clickedOption.parentElement.classList.remove("correct")
              handleTurn()
            }, 2000)
            correctSound.play()
            
            
          } else if(clickedAnswer !== currentQuestion.correctAnswer){ 
            clickedOption.parentElement.classList.add("wrong")
            
            setTimeout(() =>{
              clickedOption.parentElement.classList.remove("wrong")
              handleTurn()
            }, 2000)
            wrongSound.play()
          
            console.log ('wrong')
      
          } 

}



function scoreKeeper(num){
  score +=num
  scoretext.innerText = score
}

function hideResetBtn(){
  resetButton.style.display = "none"
}

let time = startTime * 60
setInterval(coundown, 1000)

function coundown(){
  const minutes = Math.floor(time / 60)
  let seconds = time % 60
  time--
  timer.innerHTML = `${minutes}: ${seconds}`
}
hideResetBtn()