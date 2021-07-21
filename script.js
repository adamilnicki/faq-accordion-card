//pobrac przycisk
//sprawdzic do ktorego diva pasuje JAK?????????????
//przypisac liczbe (klase) do kolejnych
//dzialan document.getElementById(`...${...--liczba})
//W ZALEZNOSCI OD PRZYCISKU == odpowiednie Q odpalic

function display() {
  if (event.srcElement.classList.contains("1")) {
    var questionNumber = 1;
  } else if (event.srcElement.classList.contains("2")) {
    var questionNumber = 2;
  } else if (event.srcElement.classList.contains("3")) {
    var questionNumber = 3;
  } else if (event.srcElement.classList.contains("4")) {
    var questionNumber = 4;
  } else if (event.srcElement.classList.contains("5")) {
    var questionNumber = 5;
  }
  let currentValue = document.getElementById(
    `switchBtn--${questionNumber}`
  ).textContent;
  let question = document.getElementById(`question--${questionNumber}`);
  let answer = document.getElementById(`answer--${questionNumber}`);
  let arrow = document.getElementById(`arrow--${questionNumber}`);
  if (currentValue == "off") {
    question.classList.add("question-change");
    answer.classList.add("answer-change");
    arrow.classList.add("arrow-change");
    document.getElementById(`switchBtn--${questionNumber}`).innerHTML = "on";
  } else if (currentValue == "on") {
    question.classList.remove("question-change");
    answer.classList.remove("answer-change");
    arrow.classList.remove("arrow-change");
    document.getElementById(`switchBtn--${questionNumber}`).innerHTML = "off";
  }
}

function moveBox() {
  if (query.matches) {
    if (event.srcElement.classList.contains("1")) {
      let question = document.getElementById(`question--1`);
      question.style.color = "hsl(14, 88%, 65%)";
    } else if (event.srcElement.classList.contains("2")) {
      let question = document.getElementById(`question--2`);
      question.style.color = "hsl(14, 88%, 65%)";
    } else if (event.srcElement.classList.contains("3")) {
      let question = document.getElementById(`question--3`);
      question.style.color = "hsl(14, 88%, 65%)";
    } else if (event.srcElement.classList.contains("4")) {
      let question = document.getElementById(`question--4`);
      question.style.color = "hsl(14, 88%, 65%)";
    } else if (event.srcElement.classList.contains("5")) {
      let question = document.getElementById(`question--5`);
      question.style.color = "hsl(14, 88%, 65%)";
    }
    let box = document.getElementById("illustration-box");
    box.style.left = "-13%";
  }
}

function revertBox() {
  if (query.matches) {
    if (event.srcElement.classList.contains("1")) {
      let question = document.getElementById(`question--1`);
      question.style.color = "";
    } else if (event.srcElement.classList.contains("2")) {
      let question = document.getElementById(`question--2`);
      question.style.color = "";
    } else if (event.srcElement.classList.contains("3")) {
      let question = document.getElementById(`question--3`);
      question.style.color = "";
    } else if (event.srcElement.classList.contains("4")) {
      let question = document.getElementById(`question--4`);
      question.style.color = "";
    } else if (event.srcElement.classList.contains("5")) {
      let question = document.getElementById(`question--5`);
      question.style.color = "";
    }
    let box = document.getElementById("illustration-box");
    box.style.left = "";
  }
}

var query = window.matchMedia("(min-width:1440px)");