//console.log("rock paper scissors");

// cashing the DOM:
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('compScore');

const scoreBroad_div = document.querySelector('.scoreBorad');
const result_div = document.querySelector('.finalResult')
const userF = document.getElementById('f1')
const compF = document.getElementById('f2')
var rock_div = document.getElementById('ro');
var paper_div = document.getElementById('pa');
var scissor_div = document.getElementById('sc');

// end cashing the DOM

function getComputerChoice(){
	const choices = ['ro','pa','sc'];
	const randomNumber = Math.floor(Math.random() * 3)
	return choices[randomNumber];
}

function win(user,comp){
	userScore++;
	userScore_span.innerHTML = userScore; 

	if (user+comp == "rosc"){
		message = "Rock breaks scissors. You win!";
		userF.src="/images/rock.png";
		compF.src="/images/scissors.png";
		}
	if (user+comp == "paro"){
		message = "Paper cover rock. You win!";
		userF.src="/images/paper.png";
		compF.src="/images/rock.png";
		}
	if (user+comp == "scpa"){
			message = "Scissors cuts paper. You win!";
			userF.src="/images/scissors.png";
			compF.src="/images/paper.png";
		}
	console.log(message);
	result_div.innerHTML = message;
}

function lose(user,comp){
	computerScore++;
	computerScore_span.innerHTML = computerScore;

	if (user+comp == "ropa"){
			message = "Paper covers rock! You lose!";
			userF.src="/images/rock.png";
			compF.src="/images/paper.png";
			}
	if (user+comp == "pasc"){
			message = "Scissors cuts paper. You lose!";
			userF.src="/images/paper.png";
			compF.src="/images/scissors.png";
			}
	if (user+comp == "scro"){
			message = "Rock breaks scissors. You lose!";
			userF.src="/images/scissors.png";
			compF.src="/images/rock.png";
			}
	
	result_div.innerHTML = message;
}

function draw(user,comp){
	if (user+comp == "roro"){
			message = "Rock vs Rock. Draw.";
			userF.src="/images/rock.png";
			compF.src="/images/rock.png";
		}
	if (user+comp == "papa"){
			message = "Paper vs Paper. Draw.";
			userF.src="/images/paper.png";
			compF.src="/images/paper.png";
		}
	if (user+comp == "scsc"){
			message = "Scissors vs Scissors. Draw.";
			userF.src="/images/scissors.png";
			compF.src="/images/scissors.png";
		}
	result_div.innerHTML = message;
}


var message = "Paper cover rock. You win!";

function game(userChoice){
	const computerChoice = getComputerChoice();

	switch (userChoice + computerChoice){
//	console.log(userChoice, computerChoice)
	// user wins	
		case "rosc":
		case "paro":
		case "scpa":
			win(userChoice, computerChoice)
			break;
		case "ropa":
		case "pasc":
		case "scro":
			lose(userChoice, computerChoice)
			break;
		case "roro":
		case "papa":
		case "scsc":
			draw(userChoice, computerChoice)
			break;
	}
}

function main(){
	rock_div.addEventListener('click',function(){
		game('ro');
	})

	paper_div.addEventListener('click',function(){
		game('pa');
	})


	scissor_div.addEventListener('click', function(){
		game("sc");
	})

} // end of function main


main();






