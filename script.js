// ----- state -----
const questions = [
  {
    text: "When a new challenge appears, what’s your first instinct?",
    options: [
      "Avoid it and hope it goes away",
      "Over-plan and never start",
      "Start, but second-guess yourself",
      "Push through without asking for help"
    ],
  },
  {
    text: "When you feel stuck, what usually keeps you there?",
    options: [
      "Fear of failing",
      "Perfectionism",
      "Self-doubt",
      "Not wanting to burden others"
    ],
  },
  // Add more questions if you want (total shown at the top)
];

let currentIndex = 0;

// ----- elements -----
const startBtn = document.getElementById("start-quiz");
const nextBtn = document.getElementById("next-question");
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressEl = document.getElementById("progress");
const currentQEl = document.getElementById("current-question");
const totalQEl = document.getElementById("total-questions");

// ----- helpers -----
function show(el) { el.classList.add("active"); }
function hide(el) { el.classList.remove("active"); }

function setProgress(idx, total) {
  const pct = Math.round(((idx + 1) / total) * 100);
  progressEl.style.width = pct + "%";
  currentQEl.textContent = (idx + 1).toString();
  totalQEl.textContent = total.toString();
}

function renderQuestion() {
  const q = questions[currentIndex];
  questionText.textContent = q.text;
  optionsContainer.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "btn option";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      // mark selected
      [...optionsContainer.children].forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      nextBtn.disabled = false;
    });
    optionsContainer.appendChild(btn);
  });
  nextBtn.disabled = true;
  setProgress(currentIndex, questions.length);
}

function showResults() {
  hide(quizScreen);
  show(resultsScreen);
  // TODO: compute and populate results based on answers (optional)
}

// ----- events -----
if (startBtn) {
  startBtn.addEventListener("click", () => {
    hide(welcomeScreen);
    show(quizScreen);
    totalQEl.textContent = questions.length.toString();
    currentIndex = 0;
    renderQuestion();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      showResults();
    }
  });
}
