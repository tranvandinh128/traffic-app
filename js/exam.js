let license = localStorage.getItem("license");
let config = examConfig[license];

let pool = shuffle(getByLicense(license));
let questions = pool.slice(0, config.total);

let current = 0;
let answers = [];
let time = config.time * 60;

function load(){
  let q = questions[current];

  document.getElementById("index").innerText = `Câu ${current+1}`;
  document.getElementById("question").innerText = q.question;

  let html = "";
  q.answers.forEach((a,i)=>{
    html += `<button onclick="choose(${i})">${a}</button>`;
  });

  document.getElementById("answers").innerHTML = html;
}

function choose(i){
  answers[current] = i;
}

function next(){
  if(current < questions.length-1){
    current++;
    load();
  }
}

function submitExam(){
  localStorage.setItem("answers", JSON.stringify(answers));
  localStorage.setItem("questions", JSON.stringify(questions));
  localStorage.setItem("license", license);
  location.href = "result.html";
}

// timer
setInterval(()=>{
  time--;
  let m = Math.floor(time/60);
  let s = time%60;
  document.getElementById("time").innerText = `${m}:${s<10?"0"+s:s}`;

  if(time<=0) submitExam();
},1000);

load();
