////////////////////////////////////
//mines

player.enteredCodeArray = [];

function ViewMines() {
	MinesMusic();
	resetButtonPosition();
	player.location = "mines"
	ChangeBG();
	document.getElementById('NPC').innerText = `
y   ██████   Y
o ██████████ o
|████████████|
██████████████
█████MINES████
██████XXX█████
█████X...X████
████X.....X███
████X.....X███
███XX.....XX██
`;
	document.getElementById('NPC-Text').innerText = `it's an entrance to the mines`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_chargeheadlamp = document.createElement("button");
	button_chargeheadlamp.textContent = "charge the headlamp";
	button_chargeheadlamp.id = "button-TakeHeadlamp";
	button_chargeheadlamp.addEventListener("click", ChargeHeadlamp);
	NPCbuttonContainer.append(button_chargeheadlamp);
	
	if (player.headlamp_charge > 0) {
		const button_entermines = document.createElement("button");
		button_entermines.textContent = "go inside";
		button_entermines.id = "button-Mines";
		button_entermines.addEventListener("click", EnterMines);
		NPCbuttonContainer.append(button_entermines);
	}
	else {
		const button_entermines = document.createElement("button");
		button_entermines.textContent = "go inside";
		button_entermines.id = "button-Mines";
		button_entermines.addEventListener("click", CantEnterMines);
		NPCbuttonContainer.append(button_entermines);
	}
}






function CantEnterMines() {
	document.getElementById('NPC-Text').innerText = `it's too dark without a light!`;
}






function ViewDefaultMine() {
	resetButtonPosition();
	player.location = "mines"
	ChangeBG();
	document.getElementById('NPC').innerText = `
    ██████   
* ██████████ *
|████mines███|
██████████████
██████████████
██████XXX█████
█████X...X████
████X.....X███
████X.....X███
███XX.....XX██
`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_chargeheadlamp = document.createElement("button");
	button_chargeheadlamp.textContent = "charge the headlamp";
	button_chargeheadlamp.id = "button-TakeHeadlamp";
	button_chargeheadlamp.addEventListener("click", ChargeHeadlamp);
	NPCbuttonContainer.append(button_chargeheadlamp);
	
	const button_entermines = document.createElement("button");
	button_entermines.textContent = "go inside";
	button_entermines.id = "button-Mines";
	button_entermines.addEventListener("click", EnterMines);
	NPCbuttonContainer.append(button_entermines);
}


function RandomizeMinesBG() {
	let randomInt = getRandomInt(1, 4);
	if (randomInt === 1) {
		player.location = "mines1";
	}
	else if (randomInt === 2) {
		player.location = "mines2";
	}
	else if (randomInt === 3) {
		player.location = "mines3";
	}
	else if (randomInt === 4) {
		player.location = "mines4";
	}
	ChangeBG();
}


function EnterMines() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	if (player.headlamp_charge > 0) {
		player.location = "mines"
		document.getElementById('NPC').innerText = `
		██████    
	  ██████████  
	 ████████████ 
	██████████████
	██████████████
	██████XX██████
	█████X**X█████
	████X****X████
	████X****X████
	████X****X████
	`;
		document.getElementById('NPC-Text').innerText = `you go deeper into the mines`;
		const button_left1 = document.createElement("button");
		button_left1.textContent = "go left";
		button_left1.id = "button-Mines";
		button_left1.addEventListener("click", MinesLeft1);
		NPCbuttonContainer.append(button_left1);
		
		const button_right1 = document.createElement("button");
		button_right1.textContent = "go right";
		button_right1.id = "button-Mines";
		button_right1.addEventListener("click", MinesRight1);
		NPCbuttonContainer.append(button_right1);
	}
	else {
		document.getElementById('NPC-Text').innerText = `it's too dark without a light!`;
		ViewMines();
	}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HEADLAMP

function ChargeHeadlamp() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_chargeheadlamp = document.createElement("button"); //recreate buttons to avoid leaving and returning to mines
	button_chargeheadlamp.textContent = "charge the headlamp";
	button_chargeheadlamp.id = "button-TakeHeadlamp";
	button_chargeheadlamp.addEventListener("click", ChargeHeadlamp);
	NPCbuttonContainer.append(button_chargeheadlamp);

	if (player.headlamp_charge > 0) {
		const button_entermines = document.createElement("button");
		button_entermines.textContent = "go inside";
		button_entermines.id = "button-Mines";
		button_entermines.addEventListener("click", EnterMines);
		NPCbuttonContainer.append(button_entermines);
	}
	else {
		const button_cantentermines = document.createElement("button");
		button_cantentermines.textContent = "go inside";
		button_cantentermines.id = "button-Mines";
		button_cantentermines.addEventListener("click", CantEnterMines);
		NPCbuttonContainer.append(button_cantentermines);
	}
	
	if (player.batteries >= 1 && player.headlamp_charge <= 7) {
		player.headlamp_charge += 1;
		player.batteries -= 1;
		document.getElementById('NPC-Text').innerText = `added a charge to the headlamp`;
		player.headlamp_charged_flag = true;
	}
	else if (player.headlamp_charge >= 8) {
		document.getElementById('NPC-Text').innerText = `the headlamp is fully charged!`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have any batteries`;
	}
}
		
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LEFT

function MinesLeft1() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `you took a left`;
		const button_left2 = document.createElement("button");
		button_left2.textContent = "go left";
		button_left2.id = "button-Mines";
		button_left2.addEventListener("click", MinesLeft2);
		NPCbuttonContainer.append(button_left2);
		
		const button_left3 = document.createElement("button");
		button_left3.textContent = "go right";
		button_left3.id = "button-Mines";
		button_left3.addEventListener("click", MinesLeft4);
		NPCbuttonContainer.append(button_left3);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


//chain 1
function MinesLeft2() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		player.headlamp_charge -= 1;
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `you took a left`;
		const button_left2 = document.createElement("button");
		button_left2.textContent = "go right";
		button_left2.id = "button-Mines";
		button_left2.addEventListener("click", MinesLeft3);
		NPCbuttonContainer.append(button_left2);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


function MinesLeft3() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `there's a number here... 4: 9`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


//chain 2
function MinesLeft4() { //canary
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		if (player.birdcage_flag === true) {
			document.getElementById('NPC-Text').innerText = `woah! the canary fainted! good thing i found out about the gas in this room!`;
			const button_left5 = document.createElement("button");
			button_left5.textContent = "go left";
			button_left5.id = "button-Mines";
			button_left5.addEventListener("click", MinesLeft5Door);
			NPCbuttonContainer.append(button_left5);
			
			const button_left6 = document.createElement("button");
			button_left6.textContent = "go right";
			button_left6.id = "button-Mines";
			button_left6.addEventListener("click", MinesLeft6);
			NPCbuttonContainer.append(button_left6);
		}
		else {
			ViewDefaultMine();
			document.getElementById('NPC-Text').innerText = `something smells funny about that room... i better get out of here`;
		}
	}
}

function MinesLeft5Door() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		player.location = "mines2";
		document.getElementById('NPC-Text').innerText = `huh, it's a locked door...`;
		document.getElementById('NPC').innerText = `
	|------------|
	|  G.LD SM!-H|
	|  INC.      |
	|  AUTHORIZED|
	|  PERSONELL |
	|            |
	|   [1][2][3]|
	|   [4][5][6]|
	|   [7][8][9]|
	L____________|
	`;
		const button_typecode = document.createElement("button");
		button_typecode.textContent = "type in a code";
		button_typecode.id = "button-Mines";
		button_typecode.addEventListener("click", TypeCode);
		NPCbuttonContainer.append(button_typecode);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function TypeCode() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	const button_typecode1 = document.createElement("button");
	button_typecode1.textContent = "1";
	button_typecode1.id = "button-Typecode";
	button_typecode1.addEventListener("click", TypeCode1);
	NPCbuttonContainer.append(button_typecode1);
	
	const button_typecode2 = document.createElement("button");
	button_typecode2.textContent = "2";
	button_typecode2.id = "button-Typecode";
	button_typecode2.addEventListener("click", TypeCode2);
	NPCbuttonContainer.append(button_typecode2);
	
	const button_typecode3 = document.createElement("button");
	button_typecode3.textContent = "3";
	button_typecode3.id = "button-Typecode";
	button_typecode3.addEventListener("click", TypeCode3);
	NPCbuttonContainer.append(button_typecode3);
	
	const button_typecode4 = document.createElement("button");
	button_typecode4.textContent = "4";
	button_typecode4.id = "button-Typecode";
	button_typecode4.addEventListener("click", TypeCode4);
	NPCbuttonContainer.append(button_typecode4);
	
	const button_typecode5 = document.createElement("button");
	button_typecode5.textContent = "5";
	button_typecode5.id = "button-Typecode";
	button_typecode5.addEventListener("click", TypeCode5);
	NPCbuttonContainer.append(button_typecode5);
	
	const button_typecode6 = document.createElement("button");
	button_typecode6.textContent = "6";
	button_typecode6.id = "button-Typecode";
	button_typecode6.addEventListener("click", TypeCode6);
	NPCbuttonContainer.append(button_typecode6);
	
	const button_typecode7 = document.createElement("button");
	button_typecode7.textContent = "7";
	button_typecode7.id = "button-Typecode";
	button_typecode7.addEventListener("click", TypeCode7);
	NPCbuttonContainer.append(button_typecode7);
	
	const button_typecode8 = document.createElement("button");
	button_typecode8.textContent = "8";
	button_typecode8.id = "button-Typecode";
	button_typecode8.addEventListener("click", TypeCode8);
	NPCbuttonContainer.append(button_typecode8);
	
	const button_typecode9 = document.createElement("button");
	button_typecode9.textContent = "9";
	button_typecode9.id = "button-Typecode";
	button_typecode9.addEventListener("click", TypeCode9);
	NPCbuttonContainer.append(button_typecode9);
}

function TypeCode1() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `1`;
	player.enteredCodeArray.push(1);
	CodeCheck();
}

function TypeCode2() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `2`;
	player.enteredCodeArray.push(2);
	CodeCheck();
}

function TypeCode3() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `3`;
	player.enteredCodeArray.push(3);
	CodeCheck();
}

function TypeCode4() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `4`;
	player.enteredCodeArray.push(4);
	CodeCheck();
}

function TypeCode5() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `5`;
	player.enteredCodeArray.push(5);
	CodeCheck();
}

function TypeCode6() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `6`;
	player.enteredCodeArray.push(6);
	CodeCheck();
}

function TypeCode7() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `7`;
	player.enteredCodeArray.push(7);
	CodeCheck();
}

function TypeCode8() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `8`;
	player.enteredCodeArray.push(8);
	CodeCheck();
}

function TypeCode9() {
	MinesBeepSound();
	document.getElementById('NPC-Text').innerText = `9`;
	player.enteredCodeArray.push(9);
	CodeCheck();
}

function CodeCheck() {
	const correctCode = [4, 1, 3, 9];
	if (player.enteredCodeArray.length === correctCode.length) {
		const isCorrect = player.enteredCodeArray.every((num, i) => num === correctCode[i]);
		if (isCorrect) {
			document.getElementById('NPC').innerText = `
|----------|█|
|G.LD SM!-H|█|
|INC.      |█|
|AUTHORIZED|█|
|PERSONELL |█|
|          |█|
| [1][2][3]|█|
| [4][5][6]|█|
| [7][8][9]|█|
L__________|█|
`;
			document.getElementById('NPC-Text').innerText = `CORRECT`;
			const button_entersafe = document.createElement("button");
			button_entersafe.textContent = "go inside...";
			button_entersafe.id = "button-Mines";
			button_entersafe.addEventListener("click", EnterSafe);
			NPCbuttonContainer.append(button_entersafe);
			MinesDoorOpenSound();
			
			player.enteredCodeArray = []; // ✅ Reset on correct code too (minimal addition)
		} 
		else {
			document.getElementById('NPC-Text').innerText = `ERROR: INCORRECT`;
			player.enteredCodeArray = []; // Already existed
			NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		}
	}
}

	
	
function EnterSafe() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		player.location = "mines3";
		document.getElementById('NPC').innerText = `
		██████    
	  ██████████  
	 ████████████ 
	██████████████
	██████████████
	█████GOLD█████
	█████X**X█████
	████X****X████
	████X****X████
	████X****X████
	`;
		document.getElementById('NPC-Text').innerText = `gold! gold everywhere!`;
		const button_minegold = document.createElement("button");
		button_minegold.textContent = "mine some gold!";
		button_minegold.id = "button-MinesGold";
		button_minegold.addEventListener("click", MineGold);
		NPCbuttonContainer.append(button_minegold);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function MineGold() {
	if (player.mine_gold_count > 0) {
		MinesSFX();
		player.sell_gold_flag = true;
		document.getElementById('NPC-Text').innerText = `mined some gold!`;
		player.gold += 1;
		player.mine_gold_count -= 1;
		if (player.gold_flag === false) {
			player.gold_flag = true;
		}
	}
	else {
		document.getElementById('NPC-Text').innerText = `there's no more gold...`;
	}
}


function MinesLeft6() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `it's a dead end...`; //////////////////////////// rephrase
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RIGHT

function MinesRight1() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		document.getElementById('NPC-Text').innerText = `you took a right`;
		const button_right2 = document.createElement("button"); //chain 3 & 4
		button_right2.textContent = "go left";
		button_right2.id = "button-Mines";
		button_right2.addEventListener("click", MinesRight2);
		NPCbuttonContainer.append(button_right2);
		
		const button_right9 = document.createElement("button"); //chain 5, 6, 7
		button_right9.textContent = "go right";
		button_right9.id = "button-Mines";
		button_right9.addEventListener("click", MinesRight9);
		NPCbuttonContainer.append(button_right9);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

//chain 3

function MinesRight2() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `deeper into the mines...`;
		const button_right4 = document.createElement("button");
		button_right4.textContent = "go left";
		button_right4.id = "button-Mines";
		button_right4.addEventListener("click", MinesRight4);
		NPCbuttonContainer.append(button_right4);
		
		document.getElementById('NPC-Text').innerText = `mining deeper...`;
		const button_right6 = document.createElement("button");
		button_right6.textContent = "go right";
		button_right6.id = "button-Mines";
		button_right6.addEventListener("click", MinesRight6);
		NPCbuttonContainer.append(button_right6);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


function MinesRight4() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		
		document.getElementById('NPC-Text').innerText = `go right`;
		const button_right5 = document.createElement("button");
		button_right5.textContent = "go right";
		button_right5.id = "button-Mines";
		button_right5.addEventListener("click", MinesRight5);
		NPCbuttonContainer.append(button_right5);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function MinesRight5() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `it's a dead end...`; //////////////////////////////////////////////////////////
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


// chain 4

function MinesRight6() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `darker tunnels...`;
		const button_right7 = document.createElement("button");
		button_right7.textContent = "go left";
		button_right7.id = "button-Mines";
		button_right7.addEventListener("click", MinesRight7);
		NPCbuttonContainer.append(button_right7);
		
		const button_right8 = document.createElement("button");
		button_right8.textContent = "go right";
		button_right8.id = "button-Mines";
		button_right8.addEventListener("click", MinesRight8);
		NPCbuttonContainer.append(button_right8);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function MinesRight7() { //code
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `there's a number here... 2: 1`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function MinesRight8() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `it's a dead end...`; //////////////////////////////////////////////////////////
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


//chain 5

function MinesRight9() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `haunting passages...`;
		const button_right10 = document.createElement("button");
		button_right10.textContent = "go left";
		button_right10.id = "button-Mines";
		button_right10.addEventListener("click", MinesRight10);
		NPCbuttonContainer.append(button_right10);

		const button_right11 = document.createElement("button");
		button_right11.textContent = "go right";
		button_right11.id = "button-Mines";
		button_right11.addEventListener("click", MinesRight11);
		NPCbuttonContainer.append(button_right11);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function MinesRight10() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `depths of the mines...`; //////////////////////////////////////////////////
		const button_right12 = document.createElement("button");
		button_right12.textContent = "go left";
		button_right12.id = "button-Mines";
		button_right12.addEventListener("click", MinesRight12);
		NPCbuttonContainer.append(button_right12);
		
		const button_right13 = document.createElement("button");
		button_right13.textContent = "go right";
		button_right13.id = "button-Mines";
		button_right13.addEventListener("click", MinesRight13);
		NPCbuttonContainer.append(button_right13);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function MinesRight12() { //code
NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `it's a dead end...`; //////////////////////////////////////////////////////////
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}


function MinesRight13() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `there's a number here... 3: 3`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

//chain 6
function MinesRight11() { //code
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `deeper`;
		const button_right14 = document.createElement("button");
		button_right14.textContent = "go left";
		button_right14.id = "button-Mines";
		button_right14.addEventListener("click", MinesRight14);
		NPCbuttonContainer.append(button_right14);
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}

function MinesRight14() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.headlamp_charge -= 1;
	if (player.headlamp_charge >= 1) {
		MinesSFX();
		RandomizeMinesBG();
		document.getElementById('NPC-Text').innerText = `there's a number here... 1: 4`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `the headlamp died!`;
		ViewDefaultMine();
	}
}