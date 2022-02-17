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
      question: "What does DNA stand for?",
      answer1: "Deoxyribonucleic acid",
      answer2: "Zelda",
      answer3: "Lion King",
      answer4: "Tetris",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "What do animals and plants need to breathe?",
      answer1: "air",
      answer2: "water",
      answer3: "sunlight",
      answer4: "Rum",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "Plants need which light to grow?",
      answer1: "moon",
      answer2: "neon",
      answer3: "flash",
      answer4: "sun",
      correctAnswer: "4",
      asked: false,
    },

    {
      question: "What grows from tree branches?",
      answer1: "wood",
      answer2: "leaves",
      answer3: "buggy",
      answer4: "money",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Which is not a bird?",
      answer1: "chicken",
      answer2: "lion",
      answer3: "eagle",
      answer4: "hawk",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "A male is called?",
      answer1: "sheep",
      answer2: "money",
      answer3: "ox",
      answer4: "dog",
      correctAnswer: "3",
      asked: false,
    },

    {
      question: "All animals need food, air, and ____ to survive.",
      answer1: "love",
      answer2: "water",
      answer3: "fruit",
      answer4: "music",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Which animal has fur?",
      answer1: "cat",
      answer2: "hen",
      answer3: "snake",
      answer4: "turtle",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "What is Mario's last name?",
      answer1: "Mario",
      answer2: "Luigi",
      answer3: "Obama",
      answer4: "Washington",
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