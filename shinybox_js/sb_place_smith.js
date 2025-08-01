////////////////////////////////////
//smith

function ViewSmith() {
	SmithMusic();
	resetButtonPosition();
	player.location = "smith"
	ChangeBG();
	document.getElementById('NPC').innerText = `
     smith
             



            ~~
  0       ~~
 -|- __  _____
  ^  ||  =====
██████████████
`;
	
	document.getElementById('NPC-Text').innerText = `shinesmith: yeah? what you want?`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	if (player.sword_flag === false) {
		const button_asksword = document.createElement("button");
		button_asksword.textContent = "ask about the sword";
		button_asksword.id = "button-smith";
		button_asksword.addEventListener("click", AskSword);
		NPCbuttonContainer.append(button_asksword);
	}
	else {
		const button_repairsword = document.createElement("button");
		button_repairsword.textContent = "repair the sword";
		button_repairsword.id = "button-smith";
		button_repairsword.addEventListener("click", RepairSword);
		NPCbuttonContainer.append(button_repairsword);
	}
}

function AskSword() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `shinesmith: these swords are illuminated by power, we call them shining swords. they're great for vanquishing darkness...`;
	
	const button_getsword = document.createElement("button");
	button_getsword.textContent = "lemme get it";
	button_getsword.id = "button-smith";
	button_getsword.addEventListener("click", GetSword);
	NPCbuttonContainer.append(button_getsword);
}
	

function GetSword() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.sword_flag = true;
	player.sword_durability_flag = true;
	player.smith_grant = false;
	document.getElementById('NPC-Text').innerText = `shinesmith: here's your shining sword, but you only get one. the king doesn't usually give out grants and he won't give two`;
	
	const button_takesword = document.createElement("button");
	button_takesword.textContent = "take the sword";
	button_takesword.id = "button-smith";
	button_takesword.addEventListener("click", TakeSword);
	NPCbuttonContainer.append(button_takesword);
}

function TakeSword() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.sword_flag = true;
	player.smith_grant = false;
	document.getElementById('NPC-Text').innerText = `you got a shining sword!`;
}



function RepairSword() {
	if (player.batteries >= 3 && player.sword_durability < 30) {
		document.getElementById('NPC-Text').innerText = `the smith made some repairs to the shining sword!`;
		player.batteries -= 3;
		player.sword_durability += 10;
		if (player.sword_durability > 30) {
			player.sword_durability = 30;
			document.getElementById('NPC-Text').innerText = `the sword is fully repaired`;
		}
	}
	else {
		document.getElementById('NPC-Text').innerText = `shinesmith: that's not enough batteries to charge the sword`;
	}
}
	