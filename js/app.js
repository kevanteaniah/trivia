console.log("sanity check")

/*-------------------------------- Constants --------------------------------*/
import { getQuestions } from "../data/easyQuestions.js"

const easyQuestions = [
  {
    question: '10 + 10 =', 
    answer1: '2',
    answer2: '3',
    answer3: '4',
    answer4: '20',
    answer: 4,

  },

  {
    question: '12 + 10 =', 
    answer1: '2',
    answer2: '3',
    answer3: '4',
    answer4: '22',
    answer: 4,

  },

  {
    question: '1 + 10 =', 
    answer1: '2',
    answer2: '3',
    answer3: '4',
    answer4: '11',
    answer: 4,

  },

  {
    question: '17 + 10 =', 
    answer1: '2',
    answer2: '3',
    answer3: '4',
    answer4: '27',
    answer: 4,

  },

    ]
  

/*-------------------------------- Variables --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentQuestion = {}
let answers = true

/*------------------------ Cached Element References ------------------------*/
const main= document.querySelector("#main")
const question = document.querySelector(".question")
// const answers = array.from(document.querySelector('answer-btn'))





/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  
  
  // questionLeft = {...easyQuestions}
  getEasyQuestions()
  render()
}

function render(){
  
  // question.innerHTML = ""


  
  // startBtn.setAttribute("hidden", true)
  
  

}


function getEasyQuestions() {
  return easyQuestions[Math.floor(Math.random() * easyQuestions.length)]
}








