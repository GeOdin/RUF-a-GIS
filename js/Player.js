/* Player.js
 * JavaScript file for handling the players
 * Made on 25-09-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * createPlayer(playerName)
 */

//////////////////////////////
// createPlayer(playerName) //
//////////////////////////////

// Function to create a player object

function createPlayer(playerName) {
	// Set the variables
	var player = new Object();
	player.currentQuestionID = 0;
	player.Name = playerName;

	for (i=0; i<29; i++) {
		var questionCall = "question" + i;
		player[questionCall] = getQuestion(i);
	}
	
	// Return the player object
	return player;
}
