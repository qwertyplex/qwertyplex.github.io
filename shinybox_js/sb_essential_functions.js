////////////////////////////////////
//*START MENU

document.addEventListener("DOMContentLoaded", function () {
	const startButton = document.getElementById("start-button");
	const startMenu = document.getElementById("start-menu");
	const gameContainer = document.getElementById("game-container");

	startButton.addEventListener("click", function () {
    startMenu.style.display = "none";
	
	ShinyboxVoiceSound();
	player.game_paused = false;
  });
});




//////////////////////////////////////
//SCORES
function saveScoreToStorage(score) {
    // Prompt the user for their name
    const playerName = prompt("enter your name:");

    if (!playerName) {
        alert("you must enter a name!");
        return; // If no name is entered, don't save the score
    }
    // Retrieve existing scores from localStorage or initialize an empty array if none exist
    let scores = JSON.parse(localStorage.getItem('gameScores')) || [];

    // Create the player data object
    const playerData = {
		name: playerName,              // Use the name entered by the player
		time: player.time || 0,        // Player's time
		shinythings_wasted: player.shinythings_wasted || 0  // Number of shiny things wasted
	};

    // Add the new score to the scores array
    scores.push(playerData);

    // Save the updated scores to localStorage
    localStorage.setItem('gameScores', JSON.stringify(scores));
}








////////////////////////////////////
//*RNG
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


////////////////////////////////////
//*SLEEP
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


////////////////////////////////////
//*RANDOMIZE BUTTON LOCATION

function moveButtonToRandomPosition() {
	const container = document.getElementById('NPC-Button-Container');
	const positions = [
		{ top: '55%', right: '30%' }, //default
		{ top: '49%', right: '29%' },
		{ top: '50%', right: '22%' },
		{ top: '58%', right: '33%' },
		{ top: '42%', right: '38%' },
		{ top: '65%', right: '42%' },
		{ top: '67%', right: '27%' },
		{ top: '60%', right: '14%' },
	];
	const randomPos = positions[Math.floor(Math.random() * positions.length)];
	container.style.top = randomPos.top;
	container.style.right = randomPos.right;
}


let currentPositionIndex = 0; // Track the current position

function moveButtonDown() {
    const container = document.getElementById('NPC-Button-Container');
    
    // Define positions array
    const positions = [
        { top: '55%', right: '30%' }, // default
        { top: '58%', right: '30%' },
        { top: '61%', right: '30%' },
        { top: '64%', right: '30%' },
        { top: '55%', right: '30%' },
    ];

    // Get the current position
    const currentPos = positions[currentPositionIndex];
    
    // Apply the selected position to the container
    container.style.top = currentPos.top;
    container.style.right = currentPos.right;
    
    // Move to the next position (loop back to the first one if at the end)
    currentPositionIndex = (currentPositionIndex + 1) % positions.length;
}

////////////////////////////////////
//*RESET BUTTON LOCATION TO DEFAULT

function resetButtonPosition() {
	const container = document.getElementById('NPC-Button-Container');
	container.style.top = '55%';
	container.style.right = '30%';
}


////////////////////////////////////
//MOVE NPC BUTTONS DOWN

function MoveNPCButtonsDown() {
	const container = document.getElementById('NPC-Button-Container');
	container.style.top = '62%';
}

function ResetNPCButtonsDefault() {
	const container = document.getElementById('NPC-Button-Container');
	container.style.top = '55%';
}






////////////////////////////////////
//ABOUT
function AboutShinybox() {
  document.getElementById("about-popup").style.display = "block";
}

function closeAbout() {
  document.getElementById("about-popup").style.display = "none";
}



////////////////////////////////////
//INIT
function Initialize() {
	OpeningMusic();
}