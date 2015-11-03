/* StartGame.js
 * JavaScript file to arrange the start of the RUF-a-GIS game
 * Made on 24-09-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * startGame()
 * drawMap()
 */

/////////////////
// startGame() //
/////////////////

// Function to start the RUF-a-GIS game and get the needed variables

function startGame() {
	// Set the variables
	var locationName = "";
	var playerAmount = 0;
	var startingVariables = new Object();

	// Create new ID for the game

	// Get the location name
	while (locationName.length < 1) {
		locationName = prompt("Which city? ", "Wageningen").toUpperCase();
/*
		var locationNames = ["WAGENINGEN", "LEIDEN"];
		var locationTemp = "";
		for (i=0; i<locationNames.length; i++) {
			if (locationName == locationNames[i]) {
				locationTemp = locationNames[i];
			}
		}
		if (locationTemp = "") {
			locationName = "";
		}
*/
	}

	// Create the startingVariables object
	startingVariables.locationName = locationName;
	setLatLon(startingVariables);

	// Get the amount of players
	while (playerAmount < 1) {
		playerAmount = prompt ("How many players? ", "2");	
	}
	startingVariables.playerAmount = playerAmount;

	for (i=0; i<startingVariables.playerAmount; i++) {
		// Get the player's name
		var playerName = "";
		while (playerName.length < 1) {
			playerName = prompt("Player " + (i+1) + ", what is your name? ", "Player 1");
		}
		
		// Create the player object
		var playerCall = "player" + (i+1);
		startingVariables[playerCall] = createPlayer(playerName);
	}

	// Set the first player as active player
	startingVariables.activePlayer = startingVariables.player1;

	// Show the turn box
	document.getElementById("turn").style.display = "block";

	// Show the city name
	document.getElementById("locationName").innerHTML = "<p>" + startingVariables.locationName + "</p>";
	document.getElementById("locationName").style.display = "block";

	// Show the chat box
	document.getElementById("chat").style.display = "block";
	
	// Draw the map
	drawMap(startingVariables);
	// Show the map
	document.getElementById("map").style.display = "block";

	// Draw the board game on the map
	document.getElementById("boardGameUp").style.display = "block";
	document.getElementById("boardGameLeft").style.display = "block";
	document.getElementById("boardGameRight").style.display = "block";
	document.getElementById("boardGameDown").style.display = "block";

	// Return the starting variables
	return startingVariables;
}


//////////////////////////////////
// setLatLon(startingVariables) //
//////////////////////////////////

// Function to get the coordinates of a city

function setLatLon(startingVariables) {
	// Variable with city properties
	var cityProperties = [
		["City Name", "Latitude", "Longitude", "Zoom Level"],
		["LEIDEN", 52.1583300, 4.4930600, 13],
		["WAGENINGEN", 51.974151, 5.664084, 14]
	];

	
	for (i=0; i<cityProperties.length; i++) {
		if (cityProperties[i][0] == startingVariables.locationName) {
			startingVariables.lat = cityProperties[i][1];
			startingVariables.lon = cityProperties[i][2];
			startingVariables.zoomLevel = cityProperties[i][3];
		}
	}
}


////////////////////////////////
// drawMap(startingVariables) //
////////////////////////////////

// Function to draw the map for the RUF-a-GIS game

function drawMap(startingVariables) {

	// Draw the map
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: startingVariables.zoomLevel,
		center: new google.maps.LatLng(startingVariables.lat, startingVariables.lon),
		mapTypeId: google.maps.MapTypeId.HYBRID
	});
}