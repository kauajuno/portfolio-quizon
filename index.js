const questions = [
  {
    question: "What is the largest country in the world by land area?",
    answers: [
      {
        text: "Russia",
        correct: true,
      },
      {
        text: "Canada",
        correct: false,
      },
      {
        text: "China",
        correct: false,
      },
      {
        text: "United States",
        correct: false,
      },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      {
        text: "Mars",
        correct: true,
      },
      {
        text: "Jupiter",
        correct: false,
      },
      {
        text: "Saturn",
        correct: false,
      },
      {
        text: "Venus",
        correct: false,
      },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      {
        text: "Vincent van Gogh",
        correct: false,
      },
      {
        text: "Pablo Picasso",
        correct: false,
      },
      {
        text: "Leonardo da Vinci",
        correct: true,
      },
      {
        text: "Michelangelo",
        correct: false,
      },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      {
        text: "Au",
        correct: true,
      },
      {
        text: "Ag",
        correct: false,
      },
      {
        text: "Fe",
        correct: false,
      },
      {
        text: "Cu",
        correct: false,
      },
    ],
  },
  {
    question: "Which country is home to the Taj Mahal?",
    answers: [
      {
        text: "India",
        correct: true,
      },
      {
        text: "Egypt",
        correct: false,
      },
      {
        text: "China",
        correct: false,
      },
      {
        text: "Iran",
        correct: false,
      },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      {
        text: "Heart",
        correct: false,
      },
      {
        text: "Liver",
        correct: false,
      },
      {
        text: "Brain",
        correct: false,
      },
      {
        text: "Skin",
        correct: true,
      },
    ],
  },
  {
    question: "Who wrote the play Hamlet?",
    answers: [
      {
        text: "William Shakespeare",
        correct: true,
      },
      {
        text: "Charles Dickens",
        correct: false,
      },
      {
        text: "Jane Austen",
        correct: false,
      },
      {
        text: "Mark Twain",
        correct: false,
      },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      {
        text: "Mount Everest",
        correct: true,
      },
      {
        text: "Mount Kilimanjaro",
        correct: false,
      },
      {
        text: "Mount Fuji",
        correct: false,
      },
      {
        text: "Mount Aconcagua",
        correct: false,
      },
    ],
  },
  {
    question: "Which element is represented by the chemical symbol H?",
    answers: [
      {
        text: "Hydrogen",
        correct: true,
      },
      {
        text: "Helium",
        correct: false,
      },
      {
        text: "Lithium",
        correct: false,
      },
      {
        text: "Oxygen",
        correct: false,
      },
    ],
  },
  {
    question: "Who is the author of the Harry Potter series?",
    answers: [
      {
        text: "J.K. Rowling",
        correct: true,
      },
      {
        text: "Stephen King",
        correct: false,
      },
      {
        text: "George R.R. Martin",
        correct: false,
      },
      {
        text: "Dan Brown",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener("click", () => {
  currentQuestionIndex += 1;
  nextButton.style.display = "none";
  if (currentQuestionIndex == questions.length) {
    showScore();
  } else {
    showQuestion();
  }
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function checkAnswer(button, buttonSet) {
  if (button.dataset.correctValue == "true") {
    score += 1;
  } else {
    button.classList.add("wrong");
  }
  [...buttonSet.children].forEach((button) => {
    if (button.dataset.correctValue == "true") {
      button.classList.add("right");
    }
  });
  nextButton.style.display = "block";
}

function showScore() {
  answerButtons.innerHTML = "";
  questionElement.innerHTML =
    "You ended up with a score of " +
    score +
    " out of " +
    questions.length +
    ". Thank you for playing!";
}

function showQuestion() {
  answerButtons.innerHTML = "";
  let currentQuestion = questions[currentQuestionIndex];
  let questionExhibitNumber = currentQuestionIndex + 1;
  questionElement.innerHTML =
    questionExhibitNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.dataset.correctValue = answer.correct;
    button.addEventListener("click", () => {
      checkAnswer(button, answerButtons);
    });
    answerButtons.appendChild(button);
  });
}

startQuiz();
