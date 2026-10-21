function generatePlan(){

const examDate =
new Date(document.getElementById("examDate").value);

const today = new Date();

const days =
Math.ceil((examDate - today) /
(1000*60*60*24));

const hours =
document.getElementById("hours").value;

document.getElementById("result").innerHTML=
`
You have ${days} days until your exam.<br>
Study ${hours} hours daily.<br><br>

Week 1: Cloud Concepts<br>
Week 2: Azure Services<br>
Week 3: Security & Governance<br>
Final Week: Practice Tests
`;

}