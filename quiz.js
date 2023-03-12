const myFunction=()=>{
  document.getElementById('container2').style.visibility='visible';
}

const quizDB = [
  {
    question: "Q1 : What is the full form of HTML ?",
    a: "HyperText  Makeup Language",
    b: "HyperText Markup Language",
    c: "HighText Markup Language",
    d: "High Text Margin Language",
    ans: "ans2",
  },

  {
    question: "Q2 : What is CSS ?",
    a: "Cartoon Style Sheet",
    b: "Cascading style sheet",
    c: "Cascading super sheets",
    d: "Caligraphic style sheet",
    ans: "ans2",
  },
  {
    question: "Q3 : What is tag for adding image ?",
    a: "image source=",
    b: "img source=",
    c: "img src=",
    d: "pic",
    ans: "ans3",
  },
  {
    question: "Q4 : What is tag used to create a hyperlink ?",
    a: "a",
    b: "img",
    c: "dl",
    d: "link",
    ans: "ans1",
  },
  {
    question: "Q5 : WHich HTML attribute specifies an inline style sheet ?",
    a: "class",
    b: "in-style",
    c: "font",
    d: "style",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showscore = document.querySelector("#showscore");

let questionCount = 0;
let score = 0;

const loadquestion = () => {
  
  const questionlist = quizDB[questionCount];
  question.innerText = questionlist.question;
  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
  document.getElementById('span').innerText=questionCount+1;
  
};
loadquestion();

const getcheckedanswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};
next.addEventListener("click", () => {

  const checkedanswer = getcheckedanswer();
  if (checkedanswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  if (questionCount < quizDB.length) {
    loadquestion();
  }
})
previous.addEventListener("click", ()=>{
  questionCount--;
  if (questionCount < quizDB.length) {
    loadquestion();
  }

})

submit.addEventListener("click", () => {

  /*const checkedanswer = getcheckedanswer();
  if (checkedanswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  if (questionCount < quizDB.length) {
    loadquestion();
  } */
  
    var x = document.getElementById("text1").value;
    showscore.innerHTML = `
    <p id="well">Well done ${x} !</p>
    <p id="circle"></p>
    <img id="img" src="trophy.png">
    <p id="score">Right Answers :  ${score}</p>
    <p id="score1"> Wrong Answers :  ${5-score}</p>`;
    //document.getElementById('container1').style.visibility='hidden';
    //document.getElementById('container2').style.visibility='hidden';
    
    showscore.classList.remove("scorearea");
   
  
  
});

 





  