let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let towns =["MANALAPAN","FREEHOLD", "ASBURY", "HOWELL","GLASSBORO","HOBOKEN"];
let townToGuess;
let guessedLetters = [];
let guessesLeftCounter;
let guessesCorrectCounter;
let currentGuessed =[];


const currentWordText = document.getElementById("currentWordStat");
const guessedLettersText = document.getElementById("lettersGuess");
const guessesLeftText = document.getElementById("guessesLeft");
const messageText = document.getElementById("message");

function printScreen(){
	currentGuessed =[];
	for(i=0; i<townToGuess.length;i++){
		currentGuessed.push("_");
		}
	currentWordText.textContent = currentGuessed;
	console.log("currentGuessed")
}

function messageAlert(str){
	messageText.textContent = str
}

function printLetter(ltr){
	console.log(ltr)
	for(i = 0; i< townToGuess.length; i++){
	        if(ltr == townToGuess[i]){
	        	currentGuessed[i] = ltr;
	        	guessesCorrectCounter++;
	        	console.log(guessesCorrectCounter + "Correct")
	        	messageAlert("Correct");
	        	endGame()
	        }else if(currentGuessed[i] !== "_"){
	        	console.log(null);
	        }else{
	        	currentGuessed[i] = "_"
	        }
	    }
	currentWordText.textContent = currentGuessed;
}


function start(){
	townToGuess = towns[Math.floor(Math.random() * towns.length)];
	townToGuess = townToGuess.split("");
	guessedLetters = [];
	guessesLeftCounter = 8;
	guessesCorrectCounter = 0;
	printScreen();
	guessedLettersText.textContent = guessedLetters;
	guessesLeftText.textContent = guessesLeftCounter;
	console.log(townToGuess);

}

document.onload = start();




document.onkeydown = function(event){
	let userGuess = event.key
	userGuess = userGuess.toUpperCase();
	if(letters.indexOf(userGuess) == -1){
		messageAlert("Please choose a letter")
	}else if(townToGuess.indexOf(userGuess) == -1){
		guessedLetters.push(userGuess);
		guessesLeftCounter--;
		guessesLeftText.textContent = guessesLeftCounter;
		guessedLettersText.textContent = guessedLetters;
		endGame();
		messageAlert("Try Again.");
	}else if(currentGuessed.indexOf(userGuess) !== -1){
		messageAlert("Whats the matter? You already tried that!")
		guessedLettersText.textContent = guessedLetters
	}else{
		printLetter(userGuess);
	    }
	}


function endGame(){
	if(guessesLeftCounter == 0){
		messageAlert("Get out of here!");
		start();
	}else if(guessesCorrectCounter == townToGuess.length){
		messageAlert("You can sit with us...for now.");
		start();
	}else{
		console.log("no winner yet")
	}

}
