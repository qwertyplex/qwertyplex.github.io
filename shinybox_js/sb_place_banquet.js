////////////////////////////////////
//banquet

function ViewBanquet() {
	BanquetMusic();
	PawnbrokerSFX();
	resetButtonPosition();
	player.location = "banquet"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█    █ X █   █
█  lO█o o█Ol █
█    █ X █   █
█  lO█o=o█Ol █
█    █ X █   █
█  lO█o o█Ol █
█    █_o_█   █
█____________█
`;
	document.getElementById('NPC-Text').innerText = `butler: mmyes hello and a good evening to you, have you come to partake in our delightful feast?`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	if (player.butler_paid_flag === false && player.banquet_quest_flag === false) {
		const button_firstspeakbutler = document.createElement("button");
		button_firstspeakbutler.textContent = "speak to the butler";
		button_firstspeakbutler.id = "button-Banquet";
		button_firstspeakbutler.addEventListener("click", FirstspeakButler);
		NPCbuttonContainer.append(button_firstspeakbutler);
	}
	
	else if (player.butler_paid_flag === true && player.banquet_quest_flag === true) {
		const button_firstspeakjacko = document.createElement("button");
		button_firstspeakjacko.textContent = "speak to jacko";
		button_firstspeakjacko.id = "button-Banquet";
		button_firstspeakjacko.addEventListener("click", FirstspeakJacko);
		NPCbuttonContainer.append(button_firstspeakjacko);
		
		const button_firstspeakninya = document.createElement("button");
		button_firstspeakninya.textContent = "speak to ninya";
		button_firstspeakninya.id = "button-Banquet";
		button_firstspeakninya.addEventListener("click", FirstspeakNinya);
		NPCbuttonContainer.append(button_firstspeakninya);
		
		const button_firstspeakyallow = document.createElement("button");
		button_firstspeakyallow.textContent = "speak to yallow";
		button_firstspeakyallow.id = "button-Banquet";
		button_firstspeakyallow.addEventListener("click", FirstspeakYallow);
		NPCbuttonContainer.append(button_firstspeakyallow);
		
		const button_firstspeakhorace = document.createElement("button");
		button_firstspeakhorace.textContent = "speak to horace";
		button_firstspeakhorace.id = "button-Banquet";
		button_firstspeakhorace.addEventListener("click", FirstspeakHorace);
		NPCbuttonContainer.append(button_firstspeakhorace);
		
		const button_firstspeakwenda = document.createElement("button");
		button_firstspeakwenda.textContent = "speak to wenda";
		button_firstspeakwenda.id = "button-Banquet";
		button_firstspeakwenda.addEventListener("click", FirstspeakWenda);
		NPCbuttonContainer.append(button_firstspeakwenda);
		
		const button_firstspeakshindy = document.createElement("button");
		button_firstspeakshindy.textContent = "speak to shindy";
		button_firstspeakshindy.id = "button-Banquet";
		button_firstspeakshindy.addEventListener("click", FirstspeakShindy);
		NPCbuttonContainer.append(button_firstspeakshindy);
	}
}


function FirstspeakButler() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
              
    _____     
   /     \\   
  /       \\  
  | o    o |  
  |        |  
  | ~~__~~ /  
  \\______/   
`;
	document.getElementById('NPC-Text').innerText = `butler: mmyes you must pay for reservation, im afraid`;
	const button_paybutler = document.createElement("button");
	button_paybutler.textContent = "pay for a seat at the table (1,000,000 shiny things)";
	button_paybutler.id = "button-Banquet";
	button_paybutler.addEventListener("click", PayButler);
	NPCbuttonContainer.append(button_paybutler);
}

function PayButler() {
	if (player.shinythings >= 1000000 && player.butler_paid_flag === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.shinythings -= 1000000;
		player.butler_paid_flag = true;
		document.getElementById('NPC-Text').innerText = `butler: mmyes why i thank you, sit wherever you would like`;
		
		const button_inquirebutler = document.createElement("button");
		button_inquirebutler.textContent = "who is here?";
		button_inquirebutler.id = "button-Banquet";
		button_inquirebutler.addEventListener("click", InquireButler);
		NPCbuttonContainer.append(button_inquirebutler);
	}
	else if (player.shinythings <= 1000000 && player.butler_paid_flag === false) {
		document.getElementById('NPC-Text').innerText = `butler: mmno that is not enough to afford a reservation im afraid`;
	}
	else if (player.butler_paid_flag === true) {
		document.getElementById('NPC-Text').innerText = `butler: mmyes you have already paid for a seat`;
	}
}


function InquireButler() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_inquirebutler = document.createElement("button");
	button_inquirebutler.textContent = "mhmm...";
	button_inquirebutler.id = "button-Banquet";
	button_inquirebutler.addEventListener("click", InquireButler);
	NPCbuttonContainer.append(button_inquirebutler);
	
	if (player.inquire_butler_stage === 1) {
		document.getElementById('NPC').innerText = `
	█    █ X █   █
	█ >>O█o o█Ol █
	█    █ X █   █
	█  lO█o=o█Ol █
	█    █ X █   █
	█  lO█o o█Ol █
	█    █_o_█   █
	█____________█
	`;
	document.getElementById('NPC-Text').innerText = `butler: that's jacko`;
	player.inquire_butler_stage += 1;
	button_inquirebutler.textContent = "yes...";
	}
	
	else if (player.inquire_butler_stage === 2) {
		document.getElementById('NPC').innerText = `
	█    █ X █   █
	█  lO█o o█Ol █
	█    █ X █   █
	█ >>O█o=o█Ol █
	█    █ X █   █
	█  lO█o o█Ol █
	█    █_o_█   █
	█____________█
	`;
	document.getElementById('NPC-Text').innerText = `butler: that's ninya`;
	player.inquire_butler_stage += 1;
	button_inquirebutler.textContent = "okay...";
	}
	
	else if (player.inquire_butler_stage === 3) {
		document.getElementById('NPC').innerText = `
	█    █ X █   █
	█  lO█o o█Ol █
	█    █ X █   █
	█  lO█o=o█Ol █
	█    █ X █   █
	█ >>O█o o█Ol █
	█    █_o_█   █
	█____________█
	`;
	document.getElementById('NPC-Text').innerText = `butler: that's yallow`;
	player.inquire_butler_stage += 1;
	button_inquirebutler.textContent = "alright...";
	}
	
	
	else if (player.inquire_butler_stage === 4) {
		document.getElementById('NPC').innerText = `
	█    █ X █   █
	█  lO█o o█Ol █
	█    █ X █   █
	█  lO█o=o█Ol █
	█    █ X █   █
	█  lO█o o█O<<█
	█    █_o_█   █
	█____________█
	`;
	document.getElementById('NPC-Text').innerText = `butler: that's horace`;
	player.inquire_butler_stage += 1;
	button_inquirebutler.textContent = "right...";
	}
	
	else if (player.inquire_butler_stage === 5) {
		document.getElementById('NPC').innerText = `
	█    █ X █   █
	█  lO█o o█Ol █
	█    █ X █   █
	█  lO█o=o█O<<█
	█    █ X █   █
	█  lO█o o█Ol █
	█    █_o_█   █
	█____________█
	`;
	document.getElementById('NPC-Text').innerText = `butler: that's wenda`;
	player.inquire_butler_stage += 1;
	button_inquirebutler.textContent = "yep...";
	}
	
	else if (player.inquire_butler_stage === 6) {
		document.getElementById('NPC').innerText = `
	█    █ X █   █
	█  lO█o o█O<<█
	█    █ X █   █
	█  lO█o=o█Ol █
	█    █ X █   █
	█  lO█o o█Ol █
	█    █_o_█   █
	█____________█
	`;
	document.getElementById('NPC-Text').innerText = `butler: ... and that's shindy`;
	player.inquire_butler_stage += 1;
	button_inquirebutler.textContent = "it's a full house";
	}
	
	else if (player.inquire_butler_stage === 7) {
		document.getElementById('NPC').innerText = `
              
    _____     
   /     \\   
  /       \\  
  | o    o |  
  |        |  
  | ~~__~~ /  
  \\______/   
`;
	document.getElementById('NPC-Text').innerText = `butler: they are all quite wealthy, and i do so love their tips... perhaps you may make their acquaintance ?`;
	player.banquet_quest_flag = true;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	const button_finishbutler = document.createElement("button");
	button_finishbutler.textContent = "yes i will do that";
	button_finishbutler.id = "button-Banquet";
	button_finishbutler.addEventListener("click", ViewBanquet);
	NPCbuttonContainer.append(button_finishbutler);
	}
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JACKO

function FirstspeakJacko() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
              
    _____     
   /     \\   
  /       \\  
  | o    o |  
  |        |  
  | ~~__~~ /  
  \\______/   
`;
	document.getElementById('NPC-Text').innerText = `jacko: mmyes`;
	
	const button_jackotree = document.createElement("button");
	button_jackotree.textContent = "why yes hello how do you do";
	button_jackotree.id = "button-Banquet";
	button_jackotree.addEventListener("click", JackoTree);
	NPCbuttonContainer.append(button_jackotree);
	
	const button_goback = document.createElement("button");
	button_goback.textContent = "go back";
	button_goback.id = "button-Banquet";
	button_goback.addEventListener("click", ViewBanquet);
	NPCbuttonContainer.append(button_goback);
}

function JackoTree() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `jacko: dialog1`;
	
	const button_gotojackotree1 = document.createElement("button");
	button_gotojackotree1.textContent = "howdid you";
	button_gotojackotree1.id = "button-Banquet";
	button_gotojackotree1.addEventListener("click", JackoTree1);
	NPCbuttonContainer.append(button_gotojackotree1);
	
	document.getElementById('NPC-Text').innerText = `jacko: dialog1`;
	const button_gotojackotree2 = document.createElement("button");
	button_gotojackotree2.textContent = "option2";
	button_gotojackotree2.id = "button-Banquet";
	button_gotojackotree2.addEventListener("click", JackoTree2);
	NPCbuttonContainer.append(button_gotojackotree2);
	
	document.getElementById('NPC-Text').innerText = `jacko: dialog1`;
	const button_gotojackotree3 = document.createElement("button");
	button_gotojackotree3.textContent = "option3";
	button_gotojackotree3.id = "button-Banquet";
	button_gotojackotree3.addEventListener("click", JackoTree3);
	NPCbuttonContainer.append(button_gotojackotree3);
	
	const button_goback = document.createElement("button");
	button_goback.textContent = "go back";
	button_goback.id = "button-Banquet";
	button_goback.addEventListener("click", ViewBanquet);
	NPCbuttonContainer.append(button_goback);
}

function JackoTree1() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_jackotree1 = document.createElement("button");
	button_jackotree1.textContent = "continue";
	button_jackotree1.id = "button-Banquet";
	button_jackotree1.addEventListener("click", JackoTree1);
	NPCbuttonContainer.append(button_jackotree1);
	
	if (player.jacko_tree1_stage === 1) {
		document.getElementById('NPC-Text').innerText = `jacko: tree1.1`;
		player.jacko_tree1_stage += 1;
	}
	else if (player.jacko_tree1_stage === 2) {
		document.getElementById('NPC-Text').innerText = `jacko: tree1.2`;
		player.jacko_tree1_stage += 1;
	}
	else if (player.jacko_tree1_stage === 3) {
		document.getElementById('NPC-Text').innerText = `jacko: tree1.3`;
		player.jacko_tree1_stage = 0;
		
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		const button_gobackJacko = document.createElement("button");
		button_gobackJacko.textContent = "go back";
		button_gobackJacko.id = "button-Banquet";
		button_gobackJacko.addEventListener("click", FirstspeakJacko);
		NPCbuttonContainer.append(button_gobackJacko);
	}
}

function JackoTree2() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_jackotree2 = document.createElement("button");
	button_jackotree2.textContent = "continue";
	button_jackotree2.id = "button-Banquet";
	button_jackotree2.addEventListener("click", JackoTree2);
	NPCbuttonContainer.append(button_jackotree2);
	
	if (player.jacko_tree2_stage === 1) {
		document.getElementById('NPC-Text').innerText = `jacko: tree2.1`;
		player.jacko_tree2_stage += 1;
	}
	else if (player.jacko_tree2_stage === 2) {
		document.getElementById('NPC-Text').innerText = `jacko: tree2.2`;
		player.jacko_tree2_stage += 1;
	}
	else if (player.jacko_tree2_stage === 3) {
		document.getElementById('NPC-Text').innerText = `jacko: tree2.3`;
		player.jacko_tree2_stage = 0;
		
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		const button_gobackJacko = document.createElement("button");
		button_gobackJacko.textContent = "go back";
		button_gobackJacko.id = "button-Banquet";
		button_gobackJacko.addEventListener("click", FirstspeakJacko);
		NPCbuttonContainer.append(button_gobackJacko);
	}
}

function JackoTree3() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_jackotree3 = document.createElement("button");
	button_jackotree3.textContent = "continue";
	button_jackotree3.id = "button-Banquet";
	button_jackotree3.addEventListener("click", JackoTree3);
	NPCbuttonContainer.append(button_jackotree3);
	
	if (player.jacko_tree3_stage === 1) {
		document.getElementById('NPC-Text').innerText = `jacko: tree3.1`;
		player.jacko_tree3_stage += 1;
	}
	else if (player.jacko_tree3_stage === 2) {
		document.getElementById('NPC-Text').innerText = `jacko: tree3.2`;
		player.jacko_tree3_stage += 1;
	}
	else if (player.jacko_tree3_stage === 3) {
		document.getElementById('NPC-Text').innerText = `jacko: tree3.3`;
		player.jacko_tree3_stage = 0;
		
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		const button_gobackJacko = document.createElement("button");
		button_gobackJacko.textContent = "go back";
		button_gobackJacko.id = "button-Banquet";
		button_gobackJacko.addEventListener("click", FirstspeakJacko);
		NPCbuttonContainer.append(button_gobackJacko);
	}
}
	
	
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NINYA


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// YALLOW



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HORACE



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WENDA



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SHINDY