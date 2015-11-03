/* RunGame.js
 * JavaScript file for running the RUF-a-GIS game
 * Made on 24-09-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * runGame()
 */

///////////////
// runGame() //
///////////////

// Function to run the game

function runGame(startingVariables) {
	// Set the variables
	var gameWon = false;
	var currentQuestion;

	while (gameWon == false) {
		// Get the current player
		// This still needs to be written
	
		// Get the current question
		startingVariables.player1.question0 = getQuestion(startingVariables.player1.currentQuestionID);
		currentQuestion = startingVariables.player1.question0;
	
		// Prompt the current question
		// startingVariables.player1.question0.answer = prompt("Player 1 - " + startingVariables.player1.Name + "\n" + startingVariables.player1.question0.question, "Something.");
		document.getElementById("player").innerHTML = "<p>" + startingVariables.player1.Name + "</p>";
		document.getElementById("player").style.display = "block";
		document.getElementById("question").innerHTML = startingVariables.player1.question0.question;
		document.getElementById("question").style.display = "block";

		// Show the drawing buttons (and adjust them for the current question)
		if (currentQuestion.featureClass == "") {
			document.getElementById("draw").style.display = "block";
			document.getElementById("toggleDrawButton").style.display = "none";
			document.getElementById("drawPoint").style.display = "none";
			document.getElementById("drawLine").style.display = "none";
			document.getElementById("drawPolygon").style.display = "none";
			document.getElementById("saveDrawing").style.display = "none";
		} else {
			document.getElementById("draw").style.display = "block";
			document.getElementById("toggleDrawButton").style.display = "block";
			if (currentQuestion.featureClass == "Point") {
				document.getElementById("drawPoint").style.display = "block";
				document.getElementById("drawLine").style.display = "none";
				document.getElementById("drawPolygon").style.display = "none";
			} else if (currentQuestion.featureClass == "Line") {
				document.getElementById("drawPoint").style.display = "none";
				document.getElementById("drawLine").style.display = "block";
				document.getElementById("drawPolygon").style.display = "none";
			} else if (currentQuestion.featureClass == "Polygon") {
				document.getElementById("drawPoint").style.display = "none";
				document.getElementById("drawLine").style.display = "none";
				document.getElementById("drawPolygon").style.display = "block";
			}
			document.getElementById("saveDrawing").style.display = "block";
		}

		// Enter a possibility to end the game
		gameWon = true;
		// Add some text to let the player know they have finished the game
		document.getElementById("gameWon").innerHTML = "Congratulations <br/> you have finished RUF-a-GIS!";
		document.getElementById("gameWon").style.display = "block";

		// Add some text for the chat box
		document.getElementById("chatText").innerHTML = "<br/> The RUF is interesting. ";
	}

/* This works, but needs to be adjusted to divs
	while (gameWon == false) {
		// Get the current player
		// This still needs to be written
	
		// Get the current question
		startingVariables.player1.question0 = getQuestion(startingVariables.player1.currentQuestionID);
	
		// Prompt the current question
		startingVariables.player1.question0.answer = prompt("Player 1 - " + startingVariables.player1.Name + "\n" + startingVariables.player1.question0.question);
	
		// Let the player confirm his answer
		confirm(startingVariables.player1.question0.answer);

		// Enter a possibility to end the game
		gameWon = true;
		// Add some text to let the player know they have finished the game
		window.alert("Congratulations, you have finished RUF-a-GIS! ");
	}
*/
}