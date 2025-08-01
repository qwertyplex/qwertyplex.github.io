////////////////////////////////////
//castle

function ViewCastle() {
	CastleMusic();
	resetButtonPosition();
	player.location = "castle"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█ █ █ █ █ █ █ █
████CASTLE█████
███████████████
███████████████
███████████████
███████████████
███████████████ 
`;
	document.getElementById('NPC-Text').innerText = `it's an entrance to the castle`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_entercastle = document.createElement("button");
	button_entercastle.textContent = "enter the castle";
	button_entercastle.id = "button-castle";
	button_entercastle.addEventListener("click", EnterCastle);
	NPCbuttonContainer.append(button_entercastle);
}

function EnterCastle() {
	player.location = "innercastle"
	ChangeBG();
	document.getElementById('NPC').innerText = `
███████████████
█             █
█   /-----\   █
█  /   |   \  █
█  |   |   |  █
█  |  -|-  |  █
█  |   |   |  █
`;
	document.getElementById('NPC-Text').innerText = `you're in the castle`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_firstspeakking = document.createElement("button");
	button_firstspeakking.textContent = "approach the king";
	button_firstspeakking.id = "button-castle";
	button_firstspeakking.addEventListener("click", FirstspeakKing);
	NPCbuttonContainer.append(button_firstspeakking);
}


function FirstspeakKing() {
	player.location = "innercastle"
	ChangeBG();
	document.getElementById('NPC').innerText = `
	  *=*
	*=*=*=*
   *===*===*
  *|===*===|*
   | 0   0 | 
   |   >   |
    \__=__/
`;
	if (player.smith_grant === false) {
		document.getElementById('NPC-Text').innerText = `king: alas! help has finally arrived to my court`;
		const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		
		const button_inquireking = document.createElement("button");
		button_inquireking.textContent = "what do you want?";
		button_inquireking.id = "button-castle";
		button_inquireking.addEventListener("click", InquireKing);
		NPCbuttonContainer.append(button_inquireking);
	}
	
}

function InquireKing() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `king: in order for me to shine more than all of the people of the shining states, i must slay my own shadow. go, my knight, and slay my shadow. i give you this grant to obtain a blade. return to me, my servant, when the deed is done.`;
	player.smith_grant = true;
	player.hp_flag = true;
	player.castle_quest_flag = true;
}
