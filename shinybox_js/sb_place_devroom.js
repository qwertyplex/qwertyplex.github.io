////////////////////////////////////
//devroom

function ViewDevRoom() {
	DevroomMusic();
	resetButtonPosition();
	player.location = "devroom"
	ChangeBG();
	document.getElementById('NPC').innerText = `


{{{████████}}}
{{█___██___█}}
E██ 0 ██ 0 ██3
██████████████
███████w██████
 ████████████ 
  ███++++███  
    ██████    
`;
	document.getElementById('NPC-Text').innerText = `developer: welcome to the developer room!`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_devQuestion1 = document.createElement("button");
	button_devQuestion1.textContent = "why did you do this to me";
	button_devQuestion1.id = "button-devroom";
	button_devQuestion1.addEventListener("click", DevQuestion1);
	NPCbuttonContainer.append(button_devQuestion1);
	
	const button_devQuestion2 = document.createElement("button");
	button_devQuestion2.textContent = "i hate you";
	button_devQuestion2.id = "button-devroom";
	button_devQuestion2.addEventListener("click", DevQuestion2);
	NPCbuttonContainer.append(button_devQuestion2);
	
	const button_devQuestion3 = document.createElement("button");
	button_devQuestion3.textContent = "give me something for my efforts";
	button_devQuestion3.id = "button-devroom";
	button_devQuestion3.addEventListener("click", DevQuestion3);
	NPCbuttonContainer.append(button_devQuestion3);
}

function DevQuestion1() {
	document.getElementById('NPC-Text').innerText = `developer: because it was fun!`;
}

function DevQuestion2() {
	document.getElementById('NPC-Text').innerText = `developer: mm, yes!`;
}

function DevQuestion3() {
	document.getElementById('NPC-Text').innerText = `developer: well, you did come pretty far... here, take this`;
	player.shinythings += 10000000;
}

