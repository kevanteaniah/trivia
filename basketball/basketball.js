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
      question: "who played the most games?",
      answer1: "Robert Parish",
      answer2: "Kareem Abdul-Jabbar",
      answer3: "Vince Carter",
      answer4: "Dirk Nowitzki",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "Who leads the league in all-time points?",
      answer1: "LeBron James",
      answer2: "Karl Malone",
      answer3: "Kareem Abdul-Jabbar",
      answer4: "Kobe Bryant",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "Who leads the league in all-time assits?",
      answer1: "Steve Nash",
      answer2: "Chris Paul",
      answer3: "Jason Kidd",
      answer4: "John Stockton",
      correctAnswer: "4",
      asked: false,
    },

    {
      question: "Who leads the league in all-time steals?",
      answer1: "Jason Kidd",
      answer2: "John Stockton",
      answer3: "Gary Payton",
      answer4: "Chris Paul",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Who leads the league in all-time offensive rebounds?",
      answer1: "Robert Parish",
      answer2: "Moses Malone",
      answer3: "Buck Williams",
      answer4: "Dennis Rodman",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Who leads the league in all-time defensive rebounds?",
      answer1: "Tim Duncan",
      answer2: "Karl Malone",
      answer3: "Kevin Garnett",
      answer4: "Dwight Howard",
      correctAnswer: "3",
      asked: false,
    },

    {
      question: "Who leads the league in all-time Rebounds?",
      answer1: "Bill Russell",
      answer2: "Wilt Chamberlain",
      answer3: "Kareem Abdul-Jabbar",
      answer4: "Elvin Hayes",
      correctAnswer: "2",
      asked: false,
    },

    {
      question: "Who leads the league in all-time blocks?",
      answer1: "Hakeem Olajuwon",
      answer2: "Dikembe Mutombo",
      answer3: "Kareem Abdul-Jabbar",
      answer4: "Mark Eaton",
      correctAnswer: "1",
      asked: false,
    },

    {
      question: "Who leads the league in all-time field goals made?",
      answer1: "Kareem Abdul-Jabbar",
      answer2: "Karl Malone",
      answer3: "LeBron James",
      answer4: "Wilt Chamberlain",
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

function startTimer(){

  let timer = setInterval(() => {
    countdown.textContent = timeLeft
    timeLeft--
    
    if(timeLeft <= 0){
      console.log("times up")
      clearInterval(timer)
      questionDisplay.innerText = "You ran out of time, try again!"
      answerBoxes.forEach(answerBox => answerBox.remove() )
    }

  }, 1000)
}
hideResetBtn()