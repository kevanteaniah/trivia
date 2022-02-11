const questions = [
  {
    question: '10 + 10 =', 
    answers: [
      { answer: '24', valid: false},
      { answer: '20', valid: true},
      { answer: '24', valid: false},
      { answer: '24', valid: false},
    ],

    question2: '10 + 14 =', 
    answers: [
      { answer: '24', valid: true},
      { answer: '20', valid: false},
      { answer: '24', valid: false},
      { answer: '24', valid: false},
    ]
      }
      
    ]


function getQuestions() {
  return questions[Math.floor(Math.random() * questions.length)]
}



export {
  getQuestions
}