// Sample topic scores

const cloudConcepts = 90;
const azureServices = 80;
const security = 75;
const governance = 70;

// Display topic scores

document.getElementById("cloud").textContent =
cloudConcepts;

document.getElementById("services").textContent =
azureServices;

document.getElementById("security").textContent =
security;

document.getElementById("governance").textContent =
governance;

// Calculate overall readiness

const overall =
(
cloudConcepts +
azureServices +
security +
governance
) / 4;

document.getElementById("overall").textContent =
overall.toFixed(0);

// Readiness message

let message = "";

if (overall >= 85) {

message =
"🎉 Excellent! You are likely exam ready.";

}
else if (overall >= 70) {

message =
"👍 Good progress. Focus on your weaker topics.";

}
else {

message =
"📚 Keep studying. More practice is recommended.";

}

document.getElementById("message").textContent =
message;