let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = q.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((ans, index) => {
    let btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].correct) {
    score++;
  }
}

function nextQuestion() {
  current++;

  if (current >= questions.length) {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  } else {
    loadQuestion();
  }
}

loadQuestion();
