let answers = JSON.parse(localStorage.getItem("answers"));
let questions = JSON.parse(localStorage.getItem("questions"));
let license = localStorage.getItem("license");

let config = examConfig[license];

let score = 0;
let failedCritical = false;

questions.forEach((q,i)=>{
  if(answers[i] == q.correct){
    score++;
  } else if(q.is_critical){
    failedCritical = true;
  }
});

let text = `Hạng ${license}\n`;
text += `Điểm: ${score}/${config.total}\n`;

if(failedCritical){
  text += "❌ Sai câu liệt → TRƯỢT";
}
else if(score >= config.pass){
  text += "✅ ĐẠT";
}else{
  text += "❌ KHÔNG ĐẠT";
}

document.getElementById("result").innerText = text;