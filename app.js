//javascript
var userScore_span = document.getElementById("userScore");
var compScore_span = document.getElementById("compScore");
var message = document.getElementById("message");
var compScore = 0;
var userScore = 0;
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
var scoreboard = document.getElementById("scoreboard");

function getComputerChoice() {
	var choices = ["r", "p", "s"];
	var randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
}

function convert(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function wins(userChoice, comp) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;

	var userChoice_div = document.getElementById(userChoice);
	var smallUser = "user".fontsize(3).sub();
	var smallComp = "comp".fontsize(3).sub();

	message.innerHTML =
		convert(userChoice) + smallUser + " beats " + convert(comp) + smallComp + ". YOU WIN..🔥 ";

	document.getElementById(userChoice).classList.add("green");

	setTimeout(function() {
		userChoice_div.classList.remove("green");
	}, 400);
}
function loses(userChoice, comp) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;

	var userChoice_div = document.getElementById(userChoice);
	var smallUser = "user".fontsize(3).sub();
	var smallComp = "comp".fontsize(3).sub();

	message.innerHTML =
		convert(comp) + smallComp + " beats " + convert(userChoice) + smallUser + ". YOU LOSE..💩 ";

	document.getElementById(userChoice).classList.add("red");

	setTimeout(function() {
		userChoice_div.classList.remove("red");
	}, 400);
}

function draws(userChoice, comp) {
	var smallUser = "user".fontsize(3).sub();
	var smallComp = "comp".fontsize(3).sub();
	var userChoice_div = document.getElementById(userChoice);

	message.innerHTML =
		convert(userChoice) + smallUser + " equals " + convert(comp) + smallComp + ". DRAW..🍎 ";

	document.getElementById(userChoice).classList.add("gray");

	setTimeout(function() {
		userChoice_div.classList.remove("gray");
	}, 400);
}

function game(userChoice) {
	var computerChoice = getComputerChoice();

	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			wins(userChoice, computerChoice);
			break;

		case "rp":
		case "ps":
		case "sr":
			loses(userChoice, computerChoice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draws(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener("click", function() {
		game("r");
	});

	paper_div.addEventListener("click", function() {
		game("p");
	});

	scissors_div.addEventListener("click", function() {
		game("s");
	});
}

main();
