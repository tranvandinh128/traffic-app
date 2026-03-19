let license = localStorage.getItem("license");
let questions = getByLicense(license);

let current = 0;

function load(){
  let q = questions[current];

  document.getElementById("question").innerText = q.question;

  let html = "";
  q.answers.forEach((a,i)=>{
    let color = i === q.correct ? "green" : "black";
    html += `<button style="color:${color}">${a}</button>`;
  });

  document.getElementById("answers").innerHTML = html;
}

function next(){
  current = (current + 1) % questions.length;
  load();
}

load();
