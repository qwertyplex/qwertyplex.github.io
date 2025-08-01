////////////////////////////////////
//vending machine

function ViewVendingMachine() {
	VendingMachineMusic();
	resetButtonPosition();
	player.location = "vendingmachine"
	ChangeBG();
	document.getElementById('NPC').innerText = `
______________
█____________█
█__VENDING~__█
█__~MACHINE__█
█-T-█--O-█-U-█
█___█____█___█
█-C-█--H-█-!-█
█___█____█___█
█  █INSERT█  █
█__█SHINY*█__█
`;

	if (player.news_quest === false) {
		if (player.vendingmachine_on_flag === false) {
			NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
			VendingMachineSFX();
			document.getElementById('NPC-Text').innerText = `dirty vending machine: hey! you! yeah you! ...turn me on... come on...`;
			const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
			
			const button_poweron = document.createElement("button");
			button_poweron.textContent = "power on vending machine";
			button_poweron.id = "button-PowerOn";
			button_poweron.addEventListener("click", PowerOn);
			NPCbuttonContainer.append(button_poweron);
		}
		else {
			VendingMachineSFX();
			document.getElementById('NPC-Text').innerText = `dirty vending machine: mmunyeah... put something shiny in me...`;
			const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
			NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
			
			const button_insertshinies = document.createElement("button");
			button_insertshinies.textContent = "insert 25 shinies";
			button_insertshinies.id = "button-InsertShinies";
			button_insertshinies.addEventListener("click", InsertShinies);
			NPCbuttonContainer.append(button_insertshinies);
		}
	}
	else {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		
		const button_interview_vendingmachine = document.createElement("button");
		button_interview_vendingmachine.textContent = "interview the vending machine";
		button_interview_vendingmachine.id = "button-news";
		button_interview_vendingmachine.addEventListener("click", InterviewVendingMachine);
		NPCbuttonContainer.append(button_interview_vendingmachine);
	}
}

function PowerOn() {
	if (player.batteries >= 5 && player.vendingmachine_on_flag === false) {
		player.vendingmachine_on_flag = true;
		player.batteries -= 5;
		document.getElementById('NPC-Text').innerText = `dirty vending machine: mmm yeah... that's the good good... now just walk around the corner and come back, yeh? i need to, uh... lubricate the old gears...`;
		PowerOnSFX();
	}
	else if (player.batteries <= 5 && player.vendingmachine_on_flag === false) {
		VendingMachineSFX();
		document.getElementById('NPC-Text').innerText = `dirty vending machine: that ain't enough power, iuh NEED more than that babydollop...`;
	}
	else if (player.vendingmachine_on_flag === true) {
		VendingMachineSFX();
		document.getElementById('NPC-Text').innerText = `dirty vending machine: damn baby you tryin to treat me on the good good...just hang on baby and come on back, i'll do you on the good good...`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough batteries!`;
	}
}

function InsertShinies() {
	VendingMachineSFX();
	moveButtonToRandomPosition();
	if (player.shinythings >= 25) {
		player.shinythings -= 25;

		let randomInt = getRandomInt(1, 15);
		if (randomInt === 1) {
			player.shinies += 50;
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: mm yeah baby!<br><span style="color: #00cc00;">[gained 25 shinies!]</span>`;
		}
		
		else if (randomInt === 2) {
			player.shinies += 25;
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: that's for you baaaby!<br><span style="color: #0eead0;">[gained and lost nothing!]</span>`;
		}
		
		else if (randomInt === 3) {
			player.shinies += 50;
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: yeah baby i'm gettin there...<br><span style="color: #00cc00;">[gained 25 shinies!]</span>`
		}
		
		else if (randomInt === 4) {
			player.shinies += 25;
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: unh yeah keep it commin'...<br><span style="color: #0eead0;">[gained and lost nothing!]</span>`;
		}
		
		else if (randomInt === 5) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: mm yeah baby put some more in me and i promise i'll give you something...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 6) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: aw yeah... make me a *bending* machine, babycakes... one more time...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 7) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: take it out on me baby, oh yeah...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 8) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: mm yeah baby put some more in me and i promise i'll give you something...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 9) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: i'm a *baaddd* vending machine...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 10) { //rock candy
			player.rockcandy += 1;
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: AWH YEAHHHH BABY THAT'S THE BUTTON!<br><span style="color: #ff00a1;">[gained 1 rock candy, finally!]</span>`;
			if (player.rockcandy_flag === false) {
				player.rockcandy_flag = true;
			}
		}
		
		else if (randomInt === 11) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: mm yeah baby...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 12) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: oh that's the good stuff...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 13) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: yeah touch me baby yeah...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
		
		else if (randomInt === 14) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: NOT LIKE THAT!...<br><span style="color: #ff0000;">[lost 20 shinies!]</span>`;
			player.shinythings -= 10
		}
		
		else if (randomInt === 15) {
			document.getElementById('NPC-Text').innerHTML = `dirty vending machine: yeah i'll give you whatever you want...<br><span style="color: #ff0000;">[lost 25 shinies!]</span>`;
		}
	}
	else if (player.shinythings < 25) {
		document.getElementById('NPC-Text').innerHTML = `dirty vending machine: damn baby! if you broke, so am i!`;
	}
}