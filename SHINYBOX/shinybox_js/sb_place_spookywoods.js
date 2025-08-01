////////////////////////////////////
//spooky woods

function ViewSpookyWoods() {
	SpookyWoodsMusic();
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	resetButtonPosition();
	player.location = "spookywoods_entrance"
	ChangeBG();
	document.getElementById('NPC').innerText = `
...^.....^....
..^^^...^^^...
.^^^^^.^^^^^..
^^^^^^^^^^^^^^
..||spooky||..
...^woods^....
..^^^...^^^...
.^^^^^.^^^^^..
^^^^^^^^^^^^^^
..||.....||...
`;
	document.getElementById('NPC-Text').innerText = `you're at the spooky woods`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_enterspookywoods = document.createElement("button");
	button_enterspookywoods.textContent = "go inside";
	button_enterspookywoods.id = "button-EnterSpookyWoods";
	button_enterspookywoods.addEventListener("click", EnterSpookyWoods);
	NPCbuttonContainer.append(button_enterspookywoods);
	
	if (player.sticks_flag === false) {
		player.sticks_flag = true;
	}
}



////////////////////////////////////////////////////
//RANDOMIZE BG

function RandomizeSpookyBackground() {
	let randomInt = getRandomInt(1, 4);
		if (randomInt === 1) {
			player.location = "spookywoods1";
		}
		else if (randomInt === 2) {
			player.location = "spookywoods2";
		}
		else if (randomInt === 3) {
			player.location = "spookywoods3";
		}
		else if (randomInt === 4) {
			player.location = "spookywoods4";
		}
		else {
			player.location = "spookywoods_entrance";
		}
	ChangeBG();
}




////////////////////////////////////////////////////
//SPOOKY PORTRAITS

function DefaultSpookyPortrait() {
		document.getElementById('NPC').innerText = `
...^.....^....
.v^^^...^^^...
.^^^^^.^^^v^..
^^^v^^^^^^^^^^
..||......||..
...^.....^..v.
..^^^...^^^...
.^v^^^.^^^^^..
^^^^^^^^^^^^^^
..||.....||...
`;
}

function RandomizeSpookyPortrait() {
	let randomInt = getRandomInt(1, 8);
		if (randomInt === 1) {
			document.getElementById('NPC').innerText = `
...^.....^....
..^^^...^^^...
.^^^^^.^^^^^..
^^^^^^^^^^^^^^
..||......||..
...^.....^....
..^^^...^^^...
.^^^^^.^^^^^..
^^^^^^^^^^^^^^
..||.....||....
`;
		}
		else if (randomInt === 2) {
			document.getElementById('NPC').innerText = `
...^.....^....
.v^^^...^^^...
.^^^^^.^^^v^..
^^^v^^^^^^^^^^
..||......||..
...^.....^..v.
..^^^...^^^...
.^v^^^.^^^^^..
^^^^^^^^^^^^^^
..||.....||...
`;
		}
		else if (randomInt === 3) {
			document.getElementById('NPC').innerText = `
...^..v..^....
..^^^...^^^...
.^^^^^.^^^^^..
^^^^^^^^^v^^^^
..||......||..
...^.....^....
..^^^...^^^...
.^v^^^.^^^^^..
^^^^^^^^^^^v^^
..||.....||...
`;
		}
		else if (randomInt === 4) {
			document.getElementById('NPC').innerText = `
...^.....^....
..v^^...^^^...
.^^^^^.^^^^v..
^^^^^^^^^^^^^^
..||v.....||..
...^.....^....
v.^^^...^^^...
.^^^^^.^^v^^..
^^^^^^^^^^^^^^
..||.....||...
`;
		}
		else if (randomInt === 5) {
			document.getElementById('NPC').innerText = `
...^.....^....
..^^^...^^^v..
.^^^^^.^^^^^..
^^^^^v^^^^^^^^
..||......||..
...^.....^....
..^^^...^^^...
.^^^^^.^^^^v..
^^v^^^^^^^^^^^
..||.....||...
`;
		}
		else if (randomInt === 6) {
			document.getElementById('NPC').innerText = `
...^.....^....
..^^^...^^v...
.^^^^v.^^^^^..
^^^^^^^^^^^^^^
..||......||..
...^.....^....
..^^^...^^^...
.^^^^^.^^^^^..
v^^^^^^^^^^^^^
..||.....||...
`;
		}
		else if (randomInt === 7) {
			document.getElementById('NPC').innerText = `
...^.....^....
..v^^...^^^...
.^^^^^.^^^^v..
^^^^^^^^^^^^^^
..||v.....||..
...^.....^....
v.^^^...^^^...
.^^^^^.^^v^^..
^^^^^^^^^^^^^^
..||.....||...
`;
		}
		else if (randomInt === 8) {
			document.getElementById('NPC').innerText = `
...^.....^....
..^^^...v^^...
.^^^v^.^^^^^..
^^^^^^^^^^^^^^
..||......||..
...^.....^....
..^^^...^^^...
.^v^^^.^^^^^..
^^^^^^^^^^^^^^
..||.....||...
`;
		}
}



//////////////////////////////////////////////////
//ENTRANCE
function EnterSpookyWoods() {
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	RandomizeSpookyBackground();
	RandomizeSpookyPortrait();
	ChangeBG();
	document.getElementById('NPC').innerText = `
...^.....^....
..^^^...^^^...
.^^^^^.^^^^^..
^^^^^^^^^^^^^^
..||......||..
...^.....^....
..^^^...^^^...
.^^^^^.^^^^^..
^^^^^^^^^^^^^^
..||.....||...
`;
	document.getElementById('NPC-Text').innerText = `you entered the spooky woods...`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_goleft = document.createElement("button");
	button_goleft.textContent = "go left";
	button_goleft.id = "button-SpookyWoodsMove";
	button_goleft.addEventListener("click", RollSpookyWoods);
	NPCbuttonContainer.append(button_goleft);
	
	const button_goright = document.createElement("button");
	button_goright.textContent = "go right";
	button_goright.id = "button-SpookyWoodsMove";
	button_goright.addEventListener("click", RollSpookyWoods);
	NPCbuttonContainer.append(button_goright);	
}



function CreateSpookyWoodsButtons() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_goleft = document.createElement("button");
	button_goleft.textContent = "go left";
	button_goleft.id = "button-SpookyWoodsMove";
	button_goleft.addEventListener("click", RollSpookyWoods);
	NPCbuttonContainer.append(button_goleft);
	
	const button_goright = document.createElement("button");
	button_goright.textContent = "go right";
	button_goright.id = "button-SpookyWoodsMove";
	button_goright.addEventListener("click", RollSpookyWoods);
	NPCbuttonContainer.append(button_goright);
}



////////////////////////////////////////////////////
// CANARY

function RollCanary() {
	if (player.can_catch_canary === true) {
		resetButtonPosition();
		if (player.canary_flag === false) {
			document.getElementById('NPC').innerText = `
	....\\........
	....(o>.......
	\\_//)........
	.\_/_)........
	. _|_.........
	`;
			let randomInt = getRandomInt(1, 2);
			if (player.birdcage_flag === true) {
				if (randomInt === 1) {
					resetButtonPosition();
					document.getElementById('NPC-Text').innerText = `you found a canary!`;
					NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
					const button_catchcanary = document.createElement("button");
					button_catchcanary.textContent = "catch the canary!";
					button_catchcanary.id = "button-EnterSpookyWoods";
					button_catchcanary.addEventListener("click", CatchCanary);
					NPCbuttonContainer.append(button_catchcanary);
				}
			else {
				document.getElementById('NPC-Text').innerText = `you found a canary?`;
				}
			}
		}
	}
	else {
		RollSpookyWoods();
	}
}

function CatchCanary() {
	let randomInt = getRandomInt(1, 5);
	if (randomInt === 1) {
		player.canary_flag = true;
		player.can_catch_canary = false;
		document.getElementById('NPC-Text').innerText = `you caught the canary!`;
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	}
	else {
		document.getElementById('NPC-Text').innerText = `dang! it flew away...`;
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	}
}


////////////////////////////////////////////////////
// ROLL SPOOKY WOODS

function RollSpookyWoods() {
	SpookyWoodsSFX();
	moveButtonToRandomPosition();
	player.spooky_state = 1;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	RandomizeSpookyBackground();
	RandomizeSpookyPortrait();
	ChangeBG();
	let randomInt = getRandomInt(1, 14);
		if (randomInt === 1) { //further
			document.getElementById('NPC-Text').innerText = `you go deeper into the spooky woods...`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 2) { //further
			document.getElementById('NPC-Text').innerText = `you went further into the spooky woods...`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 3) { //further
			document.getElementById('NPC-Text').innerText = `you proceed into the spooky woods...`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 4) { //further
			document.getElementById('NPC-Text').innerText = `you advance through the spooky woods...`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 5) { //broken stick
			document.getElementById('NPC-Text').innerText = `you stepped on a stick! it snapped!`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 6) { //stick
			document.getElementById('NPC-Text').innerText = `you found a stick!`;
			CreateSpookyWoodsButtons();
			player.sticks += 1;
			if (player.sticks_flag === false) {
				player.sticks_flag = true;
			}
		}
		else if (randomInt === 7) { //dead end
		document.getElementById('NPC').innerText = `
              
      ....    
    ...S...   
 Y...........Y
  XXXXXXXXXXX 
  ...0...0... 
 .....|_|.... 
 .....\_/.... 
  ..W<><><>W. 
    V,,,,,V.  
`;
			document.getElementById('NPC-Text').innerText = `it's an ogre, he won't let you pass`;
		}
		else if (randomInt === 8) { //dead end
		document.getElementById('NPC').innerText = `
...o.....^.o..
..^^^...v^^...
o^^^v^o^^^^^oo
^^^^^^^^^^^^^^
oo||oo...o||oo
...^.....^....
..^^o...^^^...
.^v^^^.^^^^o..
o^^^^^^^^^^^^^
..||.....||...
`;
			document.getElementById('NPC-Text').innerText = `what are these things?`;
		}
		else if (randomInt === 9) { //further
			document.getElementById('NPC-Text').innerText = `where am i?`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 10) { //further
			document.getElementById('NPC-Text').innerText = `am i lost?`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 11) { //further
			document.getElementById('NPC-Text').innerText = `a bird calls in the distance`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 12) { //broken stick
			document.getElementById('NPC-Text').innerText = `you tripped on a stick! it broke!`;
			CreateSpookyWoodsButtons();
		}
		else if (randomInt === 13) { //2 sticks
			document.getElementById('NPC-Text').innerText = `you found 2 sticks!`;
			CreateSpookyWoodsButtons();
			player.sticks += 2;
			if (player.sticks_flag === false) {
				player.sticks_flag = true;
			}
		}
		else if (randomInt === 14) { //canary
			if (player.birdcage_flag === true) {
			document.getElementById('NPC-Text').innerText = `it's a canary!`;
			RollCanary();
			}
			else {
				document.getElementById('NPC-Text').innerText = `it's a canary...`;
			}
		}
}


