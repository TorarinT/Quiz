var questions = [
  "Hvilket parti er best for miljøet?",
  "Hvilken av disse tre ideologiene er best for menneskeheten?",
  "Hvilket land er mest imperialistisk i dagens samfunn?",
  "Hvilket alternativ er mest beskrivende for dagens Kina?",
  "Hvilket alternativ burde utslettes først?",
];

let buttonOne = document.getElementById("btn-1");
let buttonTwo = document.getElementById("btn-2");
let buttonThree = document.getElementById("btn-3");
let questionPromt = document.getElementById("question");
let questionCount = document.getElementById("question-number");
let questionNumber = 0;
let points = 0;
let endingText = document.getElementById("endText");

function firstQuestion() {
  questionNumber = questionNumber + 1;
  if (questionNumber == 0) {
    questionPromt.innerHTML = `<p>${questions[0]}</p>`;
  } else if (questionNumber == 1) {
    buttonOne.innerHTML = `Fascisme`;
    buttonTwo.innerHTML = `Kommunisme`;
    buttonThree.innerHTML = `Kapitalisme`;
    questionCount.innerHTML = `<p>Spørsmål  ${questionNumber + 1}:</p>`;
    questionPromt.innerHTML = `<p>${questions[1]}</p>`;
  } else if (questionNumber == 2) {
    buttonOne.innerHTML = `USA`;
    buttonTwo.innerHTML = `Russland`;
    buttonThree.innerHTML = `Storbritania`;
    questionCount.innerHTML = `<p>Spørsmål  ${questionNumber + 1}:</p>`;
    questionPromt.innerHTML = `<p>${questions[2]}</p>`;
  } else if (questionNumber == 3) {
    buttonOne.innerHTML = `Fascistisk`;
    buttonTwo.innerHTML = `Sosial-Imperialistisk`;
    buttonThree.innerHTML = `Kommunistisk`;
    questionCount.innerHTML = `<p>Spørsmål  ${questionNumber + 1}:</p>`;
    questionPromt.innerHTML = `<p>${questions[3]}</p>`;
  } else if (questionNumber == 4) {
    buttonOne.innerHTML = `Autoritærinisme`;
    buttonTwo.innerHTML = `Nasjonalisme`;
    buttonThree.innerHTML = `Anarkisme`;
    questionCount.innerHTML = `<p>Spørsmål  ${questionNumber + 1}:</p>`;
    questionPromt.innerHTML = `<p>${questions[4]}</p>`;
  } else if (questionNumber == 5) {
    questionCount.innerHTML = ``;
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonThree.style.display = "none";
  }
}
function start() {
  questionPromt.innerHTML = `<p>${questions[0]}</p>`;
}

start();

function triggerFunctionsBtnOne() {
  firstQuestion();
  if (questionNumber == 1) {
    points = points + 1;
    console.log(points);
  } else if (questionNumber == 3) {
    points = points + 1;
    console.log(points);
  } else if (questionNumber == 5) {
    questionPromt.innerHTML = `<p>Du fikk ${points}/5 poeng</p>`;
    endingText.style.display = "block";
    endingText.innerHTML = `<p>Basert på resultatet er du ikke basert</p>`;
  }
}
function triggerFunctionsBtnTwo() {
  firstQuestion();
  if (questionNumber == 2) {
    points = points + 1;
    console.log(points);
  } else if (questionNumber == 4) {
    points = points + 1;
    console.log(points);
  } else if (questionNumber == 5) {
    points = points + 1;
    console.log(points);
    questionPromt.innerHTML = `<p>Du fikk ${points}/5 poeng</p>`;
    endingText.style.display = "block";
    if (points >= 5) {
      endingText.innerHTML = `<p>Basert på resultatet er du basert</p>`;
    } else {
      endingText.innerHTML = `<p>Basert på resultatet er du ikke basert</p>`;
    }
  }
}

function triggerFunctionsBtnThree() {
  firstQuestion();
  if (questionNumber == 5) {
    endingText.style.display = "block";
    endingText.innerHTML = `<p>Basert på resultatet er du ikke basert</p>`;
    questionPromt.innerHTML = `<p>Du fikk ${points}/5 poeng</p>`;
  }
}

function checkQuestionNumber() {}

buttonOne.onclick = triggerFunctionsBtnOne;
buttonTwo.onclick = triggerFunctionsBtnTwo;
buttonThree.onclick = triggerFunctionsBtnThree;
