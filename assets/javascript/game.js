let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let towns =["MANALAPAN","FREEHOLD", "ASBURY", "HOWELL","GLASSBORO","HOBOKEN","TRENTON","NEWARK","CAMDEN","JACKSON"];
let townToGuess;
let alreadyGuessedLetters = [];
let guessesLeftCounter;
let guessesCorrectCounter;
let currentGuessed =[];

const currentWordText = document.getElementById("currentWordStat");
const alreadyGuessedLettersText = document.getElementById("lettersGuess");
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

function printLetter(ltr){
	console.log(ltr)
	for(let i = 0; i< townToGuess.length; i++){
	        if(ltr == townToGuess[i]){
	        	currentGuessed[i] = ltr;
	        	guessesCorrectCounter++;
	        	console.log(guessesCorrectCounter + " letters correct out of "+ townToGuess.length)
	        	messageAlert("Correct");
	        	endGame()
	        }else if(currentGuessed[i] !== "_"){
	        	console.log("null for a reason");
	        }else{
	        	currentGuessed[i] = "_"
	        }
	    }
	currentWordText.textContent = currentGuessed;
}


function start(){
	townToGuess = towns[Math.floor(Math.random() * towns.length)];
	townToGuess = townToGuess.split("");
	alreadyGuessedLetters = [];
	guessesLeftCounter = 8;
	guessesCorrectCounter = 0;
	printScreen();
	updateStats();
	console.log(townToGuess);

}

document.onload = start();
messageAlert("Start by selecting a letter.")


document.onkeydown = function(event){
	let userGuess = event.key
	userGuess = userGuess.toUpperCase();
	if(letters.indexOf(userGuess) == -1){
		messageAlert("Please choose a letter.")
	}else if(alreadyGuessed(userGuess) == true){
		messageAlert("Whats the matter? You already tried that!");
		updateStats();
	}else if(testCorrect(userGuess) == false){
		alreadyGuessedLetters.push(userGuess);
		guessesLeftCounter--;
		updateStats();
		messageAlert("Try Again.");
		endGame();
	}else if(testCorrect(userGuess)==true){
		printLetter(userGuess);
		console.log(userGuess + " was correct")
	}else{
		console.log("uhhh something went wrong")
	}
}

function updateStats(){
	guessesLeftText.textContent = guessesLeftCounter;
	alreadyGuessedLettersText.textContent = alreadyGuessedLetters;
}

function messageAlert(str){
	messageText.textContent = str;
}

function testCorrect(gCurrent){
	return townToGuess.includes(gCurrent);
}

function alreadyGuessed(gCurrent){
	return alreadyGuessedLetters.includes(gCurrent);
}


function endGame(){
	if(guessesLeftCounter == 0){
		messageAlert("Get lost!");
		start();
	}else if(guessesCorrectCounter == townToGuess.length){
		messageAlert("Bruce would be proud.");
		start();
	}else{
		console.log("no winner yet")
	}

}


