let questions = [];
let currentQuestion = 0;

fetch("data/questions.json")
.then(response => response.json())
.then(data => {
questions = data;
showQuestion();
});

function showQuestion(){

document.getElementById("feedback").innerHTML="";

let question = questions[currentQuestion];

document.getElementById("question").innerText =
question.question;

const optionsDiv =
document.getElementById("options");

optionsDiv.innerHTML="";

question.options.forEach((option,index)=>{

let button =
document.createElement("button");

button.classList.add("option");

button.innerText = option;

button.onclick = () =>
checkAnswer(index);

optionsDiv.appendChild(button);

});
}

function checkAnswer(index){

let question = questions[currentQuestion];

let feedback =
document.getElementById("feedback");

if(index===question.correct){

feedback.innerHTML =
"✅ Correct! " + question.explanation;

}
else{

feedback.innerHTML =
"❌ Incorrect. " + question.explanation;

}
}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}
else{

document.querySelector(".question-box").innerHTML=
`
<h2>Congratulations 🎉</h2>
<p>You completed the quiz!</p>
`;

}

}