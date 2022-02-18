/*-------------------------- Constants --------------------------*/

/*-------------------------- Variables --------------------------*/

let availableQuestions

let score = 0

let bonus = 100

let countQuestions = 0

let currentQuestion

let questionsAnswered = 0

const MAX_QUESTIONS = 9
let timer
let timeLeft = 100;
let gameOver

const correctSound = new Audio("sounds/Mario Coin Sound - Sound Effect (HD).mp3")
const wrongSound = new Audio("sounds/gta 5 death (sound effect).mp3")

const geography = [
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

const basketball = [
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

const science = [
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

const easy = [
  {
    question: "Which game did Mario first appear in?",
    answer1: "Donkey Kong",
    answer2: "Zelda",
    answer3: "Lion King",
    answer4: "Tetris",
    correctAnswer: "1",
    asked: false,
  },

  {
    question: "Who was Mario named after?",
    answer1: "Real Estate Developer",
    answer2: "The President",
    answer3: "A guy from Italy",
    answer4: "Mario Robinson",
    correctAnswer: "1",
    asked: false,
  },

  {
    question: "How many jobs does Mario have?",
    answer1: "10",
    answer2: "13",
    answer3: "14",
    answer4: "12",
    correctAnswer: "4",
    asked: false,
  },

  {
    question: "Where did Mario appear as a villian?",
    answer1: "Donkey Kong",
    answer2: "Donkey Kong Junior",
    answer3: "Lion King",
    answer4: "Mario World",
    correctAnswer: "2",
    asked: false,
  },

  {
    question: "Who is Mario's brother?",
    answer1: "Kim K",
    answer2: "Luigi",
    answer3: "Shazam",
    answer4: "Yoshi",
    correctAnswer: "2",
    asked: false,
  },

  {
    question: "Who is Mario's nemesis?",
    answer1: "Princess",
    answer2: "Hunter",
    answer3: "Bowser",
    answer4: "Luigi",
    correctAnswer: "3",
    asked: false,
  },

  {
    question: "What makes Mario grow?",
    answer1: "love",
    answer2: "mushrooms",
    answer3: "a ladder",
    answer4: "gold",
    correctAnswer: "2",
    asked: false,
  },

  {
    question: "Who is Mario trying to save?",
    answer1: "Princess",
    answer2: "money",
    answer3: "the world",
    answer4: "a ton on life insurance",
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

const questions = [
  easy,
  science,
  geography,
  basketball,
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

const countdown = document.getElementById('timer')


/*----------------------- Event Listeners -----------------------*/

answers.forEach(answer => {

  answer.addEventListener("click", handleClick)
})



/*-------------------------- Functions --------------------------*/

function init() {

  availableQuestions = [...questions[0]]
  gameOver = false
  questionsAnswered = 0
  startTimer()
  handleTurn()
}


init()
function handleTurn() {
  allChoices.forEach((choice) => {
    choice.classList.remove("correct")
    choice.classList.remove("wrong")
  })
  if (questionsAnswered === 9) {
    render()
  } else {
    currentQuestion = getRandomQuestion()
    render()
  }

}

function getRandomQuestion() {
  return availableQuestions[questionsAnswered]
}

function render() {
  questionCounter.innerHTML = `${questionsAnswered}/${MAX_QUESTIONS}`
  if (questionsAnswered !== 9) {
    questionDisplay.innerText = currentQuestion.question
    answers.forEach(answer => {
      const number = answer.dataset['number'];
      answer.innerText = currentQuestion['answer' + number]
    })
  } else {
    countdown.textContent = ""
    clearInterval(timer)
    gameOver = true
    questionDisplay.innerText = "You have completed this game, test your knowledge in another category!"
    answers.forEach(answer => answer.remove())
    answerBoxes.forEach(answerBox => answerBox.remove())
    answerBoxes.style.borderColor = "white"
  }
}

function handleClick(evt) {
  questionsAnswered++
  const clickedOption = evt.target
  const clickedAnswer = clickedOption.dataset["number"]
  if (clickedAnswer === currentQuestion.correctAnswer) {
    scoreKeeper(bonus)

    clickedOption.parentElement.classList.add("correct")
    setTimeout(() =>{
      clickedOption.parentElement.classList.remove("correct")
      correctSound.volume = .10
      correctSound.play()
      handleTurn()
    }, 2000)
    
  } else if (clickedAnswer !== currentQuestion.correctAnswer) {
    clickedOption.parentElement.classList.add("wrong")
    setTimeout(() =>{
      clickedOption.parentElement.classList.remove("wrong")
      wrongSound.play()
      handleTurn()
    }, 2000)
  }
}

function scoreKeeper(num) {
  score += num
  scoretext.innerText = score
}

function hideResetBtn() {
  resetButton.style.display = "none"
}

function startTimer() {
  clearInterval(timer)
    timer = setInterval(() => {
    countdown.textContent = timeLeft
    
    if(gameOver === false){
      timeLeft--
    }

    if (timeLeft <= 0) {
    
      clearInterval(timer)
      questionDisplay.innerText = "You did not complete the game in time, try again or choose another category!"
      answerBoxes.forEach(answerBox => answerBox.remove())
    }

  }, 1000)
}
hideResetBtn()