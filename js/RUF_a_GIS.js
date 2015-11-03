/* RUF-a-GIS.js
 * JavaScript file for the RUF-a-GIS browser game
 * Made on 28-09-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * RUF_a_GIS()
 */

///////////
// To do //
///////////

//////////////////////////
////// RUF_a_GIS.js //////
//////////////////////////

/*
 * give each game a new id, depending on the id of the former game + 1
 * add credits to index.html?
 * * see board game for similar layout?
 * * * adjust current #boardGameUp..Left..Right..Down to decent formatting with numbers
 */

//////////////////////////
////// StartGame.js //////
//////////////////////////

/*
 * function startGame()
 * create a new ID for each game
 * let player's confirm their name
 * * check whether location exists (in premade array; col 0 -> Name; col 1 -> lat; col 2 -> lon)
 * * let computer calculate the coordinates of the city location and set the map up accordingly
 * * draw boundary around the city/ buffer to make the allocation of the RUF more clear
 * * * http://zedfox.us/index.php/2014/06/make-a-20-km-radiusbuffer-around-a-point-using-google-maps-api-v3/
 * * * import extra layer as RUF per city? make the reference to this part of the cityProperties variable
 * create divs as square around center of map to look like the board game?
 * add button for manual and axplanation of difficult terms
 * add place for chat?
 * * add transparency
 * * * www.w3schools.com/css/css_image_transparency.asp
 * * * opacity: 1.0; // this is normal
 * * * opacity: 0:4; // this is more transparent/see through
 * implement a keyboard for Touch Table?
 * * http://www.codeproject.com/Articles/13748/JavaScript-Virtual-Keyboard
 * Spatial analysis
 * * Turf.js (spatial analysis JavaScript)
 * * https://www.mapbox.com/guides/intro-to-turf/
 * redo GeoJSON tutorials (GRS-51806 Geoscripting)
 * check GeoScripties github for getting coordinates of cities?
 * set input of city to capital letters!
 * GeoJSON for adding layers to change?
 * delete overlayed divs when drawing?
 * Change zoom of city depending on choosen city
 * * http://stackoverflow.com/questions/2265055/how-to-get-google-maps-api-to-set-the-correct-zoom-level-for-a-country
 */

///////////////////////
////// RunGame() //////
///////////////////////

/*
 * Let player's confirm their move
 * Insert questions (var questions, array)
 * Make it unable to escape questions (and add confirms)
 * customize prompt boxes (or even better: make it divs and part of the layout)
 * * http://www.tek-tips.com/viewthread.cfm?qid=1268783
 * make the question clickable instead of having a popup?
 * possibility to click away boxes (temporarily) to be able to draw underneath it?
 * make what to draw (point/ line/ polygon) part of questionProperties array (Turn.js)
 */

/////////////////
// RUF_a_GIS() //
/////////////////

// Function for the RUF-a-GIS game

function RUF_a_GIS() {
/*	// Set the variables
	var startingVariables = new Object();*/

	// Get the starting variables
	startingVariables = startGame();

	// Run the game
	runGame(startingVariables);
}