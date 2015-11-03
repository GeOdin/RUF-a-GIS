
///////////////////
// Old runGame() //
//////////////////

// Function to run the game

function runGame(startingVariables) {
	// Set variables
	var gameWon = false;
	var activePlayerNumber = 1;
	var activePlayer;
	var activeQuestion;
	var activeQuestionNumber;
	var activeQuestionCall;
	var activeQuestionAnswer;
	var d6;

	// Let player's have their turn
	while (gameWon == false) {

		// Get active player
		for (i=0; i<startingVariables.playerAmount; i++) {
			if ((i+1) == activePlayerNumber) {
				var playerCall = "player" + (i+1);
				activePlayer = startingVariables[playerCall];
				activeQuestionNumber = activePlayer.currentQuestionNumber;
				document.getElementById("map").innerHTML = "Hello";
			}
		}

		// Show acivePlayer.Name?

		// get active question
		if (activePlayer.currentQuestionNumber == 0) {
			activeQuestionCall = "question" + activeQuestionNumber;
			activeQuestion = getQuestion(activeQuestionNumber);
			activeQuestionAnswer = prompt(activeQuestion.question);
			// Sava answer of activeQuestion to the player object
		} else if (activePlayer.currentQuestionNumber <= 29) {
			d6 = rollDice();
			
			// add d6 to current question (max = 29)
			// let player answer question
			// add answer to a database
		} else {
			// player is done playing
		}
		activePlayerNumber++;

		// Set activePlayerNumber to 1 if all player's have had a turn and if there's still a player not finished
		if (activePlayerNumber > startingVariables.playerAmount) {
			activePlayerNumber = 1;
		}

		// game is won if all players have answered the last question
	}

/*		// Get active Player
		for (i=0; i<startingVariables.playerAmount; i++) {
			var activePlayerCall = "player" + (i+1);
			startingVariables.activePlayer = startingVariables[activePlayerCall];
		}

		/*
		 * Player's turn:
		 *
		 * Roll dice
		 * Show question (popup/ div?)
		 * Answer question
		 *
		 *
		 *
		 */

	}*/
}
*/