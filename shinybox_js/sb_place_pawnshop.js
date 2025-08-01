////////////////////////////////////
//pawnshop

function ViewPawnshop() {
	PawnshopMusic();
	PawnbrokerSFX();
	resetButtonPosition();
	player.location = "pawnshop"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█____________█
█------------█
█--PAWNSHOP--█
█------------█
█____________█
█$█$█$█$█$█$██
██████████████
█-█   █   █--█
█-█  .█.  █--█
█_█___█___█__█
`;
	document.getElementById('NPC-Text').innerText = `pawnbroker: y'hello *grumbles* what do you want?`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	if (player.news_quest === false) {
		const button_exchangesticks = document.createElement("button");
		button_exchangesticks.textContent = "flip sticks";
		button_exchangesticks.id = "button-ExchangeSticks";
		button_exchangesticks.addEventListener("click", ExchangeSticks);
		NPCbuttonContainer.append(button_exchangesticks);
		
		if (player.sell_gold_flag === true) {
			const button_sellgold = document.createElement("button");
			button_sellgold.textContent = "sell gold";
			button_sellgold.id = "button-SellGold";
			button_sellgold.addEventListener("click", SellGold);
			NPCbuttonContainer.append(button_sellgold);
		}
	}
	else {
		const button_interview_pawnbroker = document.createElement("button");
		button_interview_pawnbroker.textContent = "interview the pawnbroker";
		button_interview_pawnbroker.id = "button-news";
		button_interview_pawnbroker.addEventListener("click", InterviewPawnbroker);
		NPCbuttonContainer.append(button_interview_pawnbroker);
	}
}

function ExchangeSticks() {
	PawnbrokerSFX();
	if (player.sticks >= 2) {
		player.ram_sticks += 1;
		player.sticks -= 2;
		document.getElementById('NPC-Text').innerText = `pawnbroker: sticks for sticks is what you get kid. don't scratch the counter. now i need to see your ID...`;
		if (player.ram_sticks_flag === false) {
			player.ram_sticks_flag = true;
			console.log("now true");
		}
	}
	else if (player.sticks < 2) {
		document.getElementById('NPC-Text').innerText = `pawnbroker: not enough sticks! get out of here if you ain't got valuables!`;
	}
}


function SellGold() {
	PawnbrokerSFX();
	if (player.gold >= 1) {
		player.gold -= 1;
		player.shinythings += 2500
		document.getElementById('NPC-Text').innerText = `pawnbroker: lay out ya gold on the scale...`;
	}
	else if (player.sticks < 1) {
		document.getElementById('NPC-Text').innerText = `pawnbroker: go get some gold kid, quit wasting my time`;
	}
}