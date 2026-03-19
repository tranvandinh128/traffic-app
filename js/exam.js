<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Thi</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
  <div class="timer">⏱ <span id="time"></span></div>

  <h3 id="index"></h3>
  <h2 id="question"></h2>

  <div id="answers"></div>

  <button onclick="next()">Tiếp</button>
  <button onclick="submitExam()">Nộp bài</button>
</div>

<script src="js/questions.js"></script>
<script src="js/config.js"></script>
<script src="js/utils.js"></script>
<script src="js/exam.js"></script>

</body>
</html>
