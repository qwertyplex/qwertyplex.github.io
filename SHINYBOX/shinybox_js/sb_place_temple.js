////////////////////////////////////
//temple

function ViewTemple() {
	TempleMusic();
	PawnbrokerSFX();
	resetButtonPosition();
	player.location = "temple"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█   shiny    █
█    temple  █
█     XX     █
█     __     █
█____/  \____█
██ ██    ██ ██
██_██ .. ██_██
█___█____█___█
`;
	document.getElementById('NPC-Text').innerText = `monk: welcome to the temple`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_entertemple = document.createElement("button");
	button_entertemple.textContent = "enter the temple";
	button_entertemple.id = "button-Temple";
	button_entertemple.addEventListener("click", EnterTemple);
	NPCbuttonContainer.append(button_entertemple);
	
	const button_makeawish = document.createElement("button");
	button_makeawish.textContent = "make a wish in the well";
	button_makeawish.id = "button-Temple";
	button_makeawish.addEventListener("click", MakeAWish);
	NPCbuttonContainer.append(button_makeawish);
}


function EnterTemple() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.location = "innertemple"
	ChangeBG();
	document.getElementById('NPC').innerText = `
 /---------\\ 
/___________\\
|____________|
|     █      |
\\    w     /
 \\  ___   /
 \\_______/
  
`;
	if (player.news_quest === false) {
		if (player.temple_quest_flag === false) {
			FirstspeakMonk();
		}
		else if (player.temple_quest_flag === true && player.has_monk_clothes === false) {
			ActiveQuestMonk();
		}
		else if (player.temple_quest_flag === true && player.has_monk_clothes === true) {
			FinishQuestMonk();
		}
	}
	else {
		const button_interview_monk = document.createElement("button");
		button_interview_monk.textContent = "interview the monk";
		button_interview_monk.id = "button-news";
		button_interview_monk.addEventListener("click", InterviewMonk);
		NPCbuttonContainer.append(button_interview_monk);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// WISHING WELL

function MakeAWish() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `it's a wishing well`;
	
	if (player.wishing_stones >= 1) {
		const button_secondspeakmonk = document.createElement("button");
		button_secondspeakmonk.textContent = "throw in a wishing stone";
		button_secondspeakmonk.id = "button-Temple";
		button_secondspeakmonk.addEventListener("click", WishWishingStone);
		NPCbuttonContainer.append(button_secondspeakmonk);
	}
	
	const button_wishingwellshinies = document.createElement("button");
	button_wishingwellshinies.textContent = "wish on some shinies";
	button_wishingwellshinies.id = "button-Temple";
	button_wishingwellshinies.addEventListener("click", WishShinies);
	NPCbuttonContainer.append(button_wishingwellshinies);
}

function WishWishingStone() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	if (player.wishing_stones === 2) {
		document.getElementById('NPC-Text').innerText = `you threw in a wishing stone! what do you wish for?`;
		
		const button_wish1 = document.createElement("button");
		button_wish1.textContent = "wish for shiny things";
		button_wish1.id = "button-Temple";
		button_wish1.addEventListener("click", Wish1);
		NPCbuttonContainer.append(button_wish1);
	}
	else if (player.wishing_stones === 1) {
		const button_wish2 = document.createElement("button");
		button_wish2.textContent = "wish for health";
		button_wish2.id = "button-Temple";
		button_wish2.addEventListener("click", Wish2);
		NPCbuttonContainer.append(button_wish2);
		
		const button_wish3 = document.createElement("button");
		button_wish3.textContent = "wish for the shinygods favor";
		button_wish3.id = "button-Temple";
		button_wish3.addEventListener("click", Wish3);
		NPCbuttonContainer.append(button_wish3);
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have a wishing stone`;
	}
}


function Wish1() {
	if (player.wishing_stones >= 1) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.wishing_stones -= 1;
		player.shinythings += 1000000;
		MakeAWish();
		document.getElementById('NPC-Text').innerText = `the well gave you 1,000,000 shiny things! you have 1 wishing stone left`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have a wishing stone`;
	}
}

function Wish2() {
	if (player.wishing_stones >= 1) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.wishing_stones -= 1;
		player.hp += 100;
		MakeAWish();
		document.getElementById('NPC-Text').innerText = `the well made you healthier!`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have a wishing stone`;
	}
}

function Wish3() {
	if (player.wishing_stones >= 1) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.wishing_stones -= 1;
		player.shinygod_favor = true;
		MakeAWish();
		document.getElementById('NPC-Text').innerText = `the shinygod smiles on you... what could it mean?`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have a wishing stone`;
	}
}

function WishShinies() {
	if (player.shinythings >= 100) {
		let randomInt = getRandomInt(1, 15);
		player.shinythings -= 100;
		if (randomInt === 1) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and found some more!`;
			player.shinythings += 2000;
		}
		
		else if (randomInt === 2) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a pigeon!`;
			player.pigeons += 1;
		}
		
		else if (randomInt === 3) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a lemon!`;
			player.lemons += 1;
		}
		
		else if (randomInt === 4) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a battery!`;
			player.batteries += 1;
		}
		
		else if (randomInt === 5) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a rockcandy!`;
			player.rockcandy += 1;
		}
		else if (randomInt === 6) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a sticks!`;
			player.sticks += 1;
		}
		else if (randomInt === 7) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a ram_sticks!`;
			player.ram_sticks += 1;
		}
		else if (randomInt === 8) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a gold!`;
			player.gold += 1;
		}
		else if (randomInt === 9) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a shinyrock!`;
			player.shinyrocks += 1;
		}
		else if (randomInt === 10) {
			document.getElementById('NPC-Text').innerText = `you wished upon a shiny and gained a jewelry!`;
			player.jewelry += 1;
		}
		else {
			document.getElementById('NPC-Text').innerText = `nothing happened...`;
		}
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to make a wish!`;
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// MONK

function FirstspeakMonk() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `monk: shining greetings to you, what brings you to the temple?`;
	
	const button_secondspeakmonk = document.createElement("button");
	button_secondspeakmonk.textContent = "i am on a quest";
	button_secondspeakmonk.id = "button-Temple";
	button_secondspeakmonk.addEventListener("click", SecondspeakMonk);
	NPCbuttonContainer.append(button_secondspeakmonk);
}

function SecondspeakMonk() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `monk: ah, well perhaps i could help if you can help me with a small favor...`;
	
	const button_acceptmonkquest = document.createElement("button");
	button_acceptmonkquest.textContent = "okay...";
	button_acceptmonkquest.id = "button-Temple";
	button_acceptmonkquest.addEventListener("click", ThirdspeakMonk);
	NPCbuttonContainer.append(button_acceptmonkquest);
}

function ThirdspeakMonk() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `monk: i need my laundry cleaned, i've been wearing these dirty robes for weeks. do my laundry and i will guide you, my child`;
	
	const button_acceptmonkquest = document.createElement("button");
	button_acceptmonkquest.textContent = "why can't you do it?";
	button_acceptmonkquest.id = "button-Temple";
	button_acceptmonkquest.addEventListener("click", FourthspeakMonk);
	NPCbuttonContainer.append(button_acceptmonkquest);
}

function FourthspeakMonk() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `monk: [lie] i do not know how to perform the ritual of cleaning, only that there is a temple of purity where clothes become shiny...`;
	
	const button_acceptmonkquest = document.createElement("button");
	button_acceptmonkquest.textContent = "fine";
	button_acceptmonkquest.id = "button-Temple";
	button_acceptmonkquest.addEventListener("click", AcceptMonkQuest);
	NPCbuttonContainer.append(button_acceptmonkquest);
}

function AcceptMonkQuest() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `monk: please return with brilliance!`;
	player.laundromat_flag = false;
	player.temple_quest_flag = true;
}



function ActiveQuestMonk() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	if (player.has_monk_clothes === false) {
		document.getElementById('NPC-Text').innerText = `monk: please do not interrupt shining prayer until you have returned with the laundry`;
	}
	else {
		return
	}
}



function FinishQuestMonk() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `monk: ah, you have the laundry, brilliant!`;
	
	const button_acceptmonkquest = document.createElement("button");
	button_acceptmonkquest.textContent = "[give him the laundered robes]";
	button_acceptmonkquest.id = "button-Temple";
	button_acceptmonkquest.addEventListener("click", Finish2);
	NPCbuttonContainer.append(button_acceptmonkquest);
}

function Finish2() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `thank you, my child. you are of great service to the shining god. now, i will show you how to get to the town, here you are...`;
	
	const button_acceptdirections = document.createElement("button");
	button_acceptdirections.textContent = "[write down the directions, angrily]";
	button_acceptdirections.id = "button-Temple";
	button_acceptdirections.addEventListener("click", FinalMonkDialog);
	NPCbuttonContainer.append(button_acceptdirections);
}

function FinalMonkDialog() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `monk: return to the temple anytime you wish to donate shinies to our place of worship`;
	player.temple_quest_flag = false;
	player.temple_quest_complete_flag = true;
	player.town_flag = true;
}