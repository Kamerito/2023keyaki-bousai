// クイズデータ
const quizData = [
  {
    question: "Question 1: 1+1=？",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "テキストテキストテキストテキストテキストテキストテキスト"
  },
  {
    question: "Question 2: 防災委員会の顧問の先生は？",
    options: ["Mr.Reid", "東郷先生", "小島先生", "宮内先生"],
    correctAnswer: 2,
    explanation: "テキストテキストテキストテキストテキストテキストテキスト"
  },
  // ...他の問題...
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const explanationContainer = document.getElementById("explanation");
let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const question = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <div class="question">${question.question}</div>
    <div class="options">
      ${question.options
      .map(
        (option, index) =>
          `<button onclick="checkAnswer(${index})">${option}</button>`
      )
      .join("")}
    </div>
  `;
}

function checkAnswer(selectedIndex) {
  const question = quizData[currentQuestion];
  if (selectedIndex === question.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {

  resultContainer.textContent = `スコア: ${score} / ${quizData.length}`;
  explanationContainer.innerHTML = `
    ${quizData
      .map(
        (question, index) =>
          `<div>
            <h3>Question ${index + 1}:</h3>
            <p>${question.question}</p>
            <p>解説: ${question.explanation}</p>
          </div>`
      )
      .join("")}
  `;
}

displayQuestion();