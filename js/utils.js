function shuffle(arr){
  return arr.sort(()=>0.5 - Math.random());
}

function getByLicense(license){
  return allQuestions.filter(q => q.license.includes(license));
}
