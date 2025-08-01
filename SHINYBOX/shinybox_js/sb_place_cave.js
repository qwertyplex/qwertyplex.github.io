////////////////////////////////////
//cave


const NPCbuttonContainer = document.getElementById('NPC-Button-Container');

function ViewCave() {
	CavesMusic();
	resetButtonPosition();
	player.location = "cave"
	ChangeBG();
	document.getElementById('NPC').innerText = `
    ██████    
  ██████████  
 ████████████ 
██████████████
█████CAVE█████
██████████████
██████████████
██████████████
██████████████
██████████████
`;
	document.getElementById('NPC-Text').innerText = `its a dark cave...`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_entercave = document.createElement("button");
	button_entercave.textContent = "go inside";
	button_entercave.id = "button-cave";
	button_entercave.addEventListener("click", EnterCave2); //had to rename to avoid conflict with pigeons??
	NPCbuttonContainer.append(button_entercave);
}

function EnterCave2() {
	DwarfSFX();
	player.location = "innercave"
	ChangeBG();
	document.getElementById('NPC').innerText = `
    _______  
   /       \\
  /         \\ 
  |___(Q)____|
  xxWWWxWWWxx 
 xxx(o)x(o)xxx
xxxxxx\\ /xxxxx
xxxxxx\\v/xxxxx
 xxxxxxxxxxxx 
   xxxxxxxxx  
`;
const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	if (player.news_quest === false) {
		if (player.codex_speak_dwarf_flag === false && player.codex_flag === true) {
			document.getElementById('NPC-Text').innerText = `Dwarf: That is the codex! Please! I must have it!`;
			const button_demandshinies = document.createElement("button");
			button_demandshinies.textContent = "demand 1,000,000 shinies";
			button_demandshinies.id = "button-TakeHeadlamp";
			button_demandshinies.addEventListener("click", DemandShinies);
			NPCbuttonContainer.append(button_demandshinies);
		}
		else if (player.first_speak_dwarf_flag === false && player.dwarf_rockcandy_flag === false) {
			document.getElementById('NPC-Text').innerText = `Dwarf: Oh, hello. What are you doing here?`;
			const button_firstspeakdwarf = document.createElement("button");
			button_firstspeakdwarf.textContent = "speak to the dwarf";
			button_firstspeakdwarf.id = "button-cave";
			button_firstspeakdwarf.addEventListener("click", FirstSpeakDwarf); //had to rename to avoid conflict with pigeons??
			NPCbuttonContainer.append(button_firstspeakdwarf);
		}
		else if (player.first_speak_dwarf_flag === true && player.dwarf_rockcandy_flag === false) {
			document.getElementById('NPC-Text').innerText = `Dwarf: Hello again, have you any rock candy? I have been searching since we last spaketh and I have not found the codex... I sure am hungry...`;
			const button_givedwarfrockcandy = document.createElement("button");
			button_givedwarfrockcandy.textContent = "give him some rockcandy";
			button_givedwarfrockcandy.id = "button-cave";
			button_givedwarfrockcandy.addEventListener("click", GiveDwarfRockcandy);
			NPCbuttonContainer.append(button_givedwarfrockcandy);
		}
		else if (player.first_speak_dwarf_flag === true && player.dwarf_rockcandy_flag === true) {
			document.getElementById('NPC-Text').innerText = `Dwarf: Hello, thanks for your assistance. I did not find the sacred codex down there. You can have my HEADLAMP. I will continue my research...`;
			const button_takeheadlamp = document.createElement("button");
			button_takeheadlamp.textContent = "take the HEADLAMP";
			button_takeheadlamp.id = "button-TakeHeadlamp";
			button_takeheadlamp.addEventListener("click", TakeHeadlamp);
			NPCbuttonContainer.append(button_takeheadlamp);
			player.first_speak_dwarf_flag = false;
		}
		else {
			document.getElementById('NPC-Text').innerText = `Dwarf: Oh, hello again.`;
		}
	}
	else {
		const button_interview_dwarf = document.createElement("button");
		button_interview_dwarf.textContent = "interview the dwarf";
		button_interview_dwarf.id = "button-news";
		button_interview_dwarf.addEventListener("click", InterviewDwarf);
		NPCbuttonContainer.append(button_interview_dwarf);
	}
}



function FirstSpeakDwarf() {
	DwarfSFX();
	document.getElementById('NPC-Text').innerText = `Dwarf: Ah, I am also on a quest. I am seeking a long lost codex that was once important to my kind. Perhaps you have seen it? No matter, I will continue my search once I find batteries for my headlamp...`;
	const button_givedwarfbattery = document.createElement("button");
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	button_givedwarfbattery.textContent = "give him some batteries";
	button_givedwarfbattery.id = "button-cave";
	button_givedwarfbattery.addEventListener("click", GiveDwarfBattery);
	NPCbuttonContainer.append(button_givedwarfbattery);
}
	
function GiveDwarfBattery() {
	DwarfSFX();
	if (player.batteries >= 3 && player.first_speak_dwarf_flag === false) {
		player.batteries -= 3;
		document.getElementById('NPC-Text').innerText = `Dwarf: Thank you, I must retreat below and resume my search... come back later...`;
		player.first_speak_dwarf_flag = true;
	}
	else if (player.batteries < 3 && player.batteries > 0) {
		document.getElementById('NPC-Text').innerText = `Dwarf: That is not enough batteries to proceed. I need more.`;
	}
	else if (player.batteries === 0 && player.first_speak_dwarf_flag === false) {
		document.getElementById('NPC-Text').innerText = `Dwarf: You do not appear to have any batteries.`;
	}
	else if (player.first_speak_dwarf_flag === true) {
		document.getElementById('NPC-Text').innerText = `Dwarf: Thank you, this is fine for now, and I must resume my search. Come back later.`;
	}
}


function GiveDwarfRockcandy() {
	DwarfSFX();
	if (player.rockcandy >= 1 && player.dwarf_rockcandy_flag === false) {
		player.rockcandy -= 1;
		player.dwarf_rockcandy += 1;
		if (player.dwarf_rockcandy === 1) {
			document.getElementById('NPC-Text').innerText = `Dwarf: Oh, you mean it? That quest you mentioned must really be important to you.`;
		}
		else if (player.dwarf_rockcandy === 2) {
			document.getElementById('NPC-Text').innerText = `Dwarf: Thank you, do you have any more?`;
		}
		else if (player.dwarf_rockcandy === 3) {
			document.getElementById('NPC-Text').innerText = `Dwarf: I know it seems like a lot, but we are different than your kind... can you get some more?`;
		}
		else if (player.dwarf_rockcandy === 4) {
			document.getElementById('NPC-Text').innerText = `Dwarf: Thank you, just one more will do...`;
		}
		else if (player.dwarf_rockcandy === 5) {
			document.getElementById('NPC-Text').innerText = `Dwarf: My gratitude; I will proceed deeper into the cave once more. I will return later.`;
			player.dwarf_rockcandy_flag = true;
		}
	}

	else if (player.rockcandy === 0 && player.dwarf_rockcandy_flag === false) {
		document.getElementById('NPC-Text').innerText = `Dwarf: You do not appear to have any rock candy.`;
	}
	
	else {
		document.getElementById('NPC-Text').innerText = `Dwarf: Appreciation, but I am stuffed.`;
	}
}


function TakeHeadlamp() {
	player.headlamp_flag = true;
	player.farmer_quest_flag = true;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
}






//codex
function DemandShinies() {
	DwarfSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `Dwarf: Excuseth me? How rich do you think I am exactly? All I have is my pickaxe, I am willing to trade it for the codex...`;
		const button_acceptoffer = document.createElement("button");
		button_acceptoffer.textContent = "accept offer";
		button_acceptoffer.id = "button-TakeHeadlamp";
		button_acceptoffer.addEventListener("click", AcceptOffer);
		NPCbuttonContainer.append(button_acceptoffer);
		
		const button_denyoffer = document.createElement("button");
		button_denyoffer.textContent = "deny offer";
		button_denyoffer.id = "button-TakeHeadlamp";
		button_denyoffer.addEventListener("click", DenyOffer);
		NPCbuttonContainer.append(button_denyoffer);
}

function AcceptOffer() {
	DwarfSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `Dwarf: Alas, my quest is complete. Here, I do not need this anymore. These are sacred to dwarves, treat it with respect. Perhaps we value the labor itself.`;
	player.pickaxe_flag = true;
	player.codex_flag = false;
	player.codex_speak_dwarf_flag = true;
}


function DenyOffer() {
	DwarfSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `Dwarf: [?lie?] Please, I must have it. you must give it to me. There is probably nothing else you can do with it...`;
}