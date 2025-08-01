////////////////////////////////////
//lemontree

function ViewLemontree() {
	LemontreeMusic();
	resetButtonPosition();
	player.location = "lemontree"
	ChangeBG();
	document.getElementById('NPC').innerText = `
  vvvvvvvvvvv 
 vvvvvvvvvvvvv
vvvvvvvvvvvvvv
vvvvvvvvvvvvvv
 vvvvvvvvvvvvv
  vvvvvvvvvvv 
      ███   | 
      ███  (L)
      ███     
  z   ███     
 /O\\  ███     
  w   ███       
`;
	document.getElementById('NPC-Text').innerText = `crow: shiny things for lemons caw caw! no shinies no lemon caw caw!`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	if (player.news_quest === false) {
		if (player.crow_flag === false) {
			const button_lemons = document.createElement("button");
			button_lemons.textContent = "buy a lemon";
			button_lemons.id = "button-BuyLemon";
			button_lemons.addEventListener("click", BuyLemon);
			NPCbuttonContainer.append(button_lemons);
		}
		else {
			const button_firstspeakcrow = document.createElement("button");
			button_firstspeakcrow.textContent = "speak to the crow";
			button_firstspeakcrow.id = "button-BuyLemon";
			button_firstspeakcrow.addEventListener("click", FirstspeakCrow);
			NPCbuttonContainer.append(button_firstspeakcrow);
		}
		
		
		if (player.farmer_quest_flag === false && player.crow_paid_flag === false && player.headlamp_flag === true) {
			const button_speaktofarmer = document.createElement("button");
			button_speaktofarmer.textContent = "speak to the farmer";
			button_speaktofarmer.id = "button-BuyLemon";
			button_speaktofarmer.addEventListener("click", FirstspeakFarmer);
			NPCbuttonContainer.append(button_speaktofarmer);
		}
		
		else if (player.farmer_quest_flag === true && player.crow_paid_flag === false) {		
			const button_speaktofarmer = document.createElement("button");
			button_speaktofarmer.textContent = "speak to the farmer";
			button_speaktofarmer.id = "button-BuyLemon";
			button_speaktofarmer.addEventListener("click", FirstspeakFarmer);
			NPCbuttonContainer.append(button_speaktofarmer);
		}
		else if (player.farmer_quest_flag === true && player.crow_paid_flag === true) {
			const button_speaktofarmer2 = document.createElement("button");
			button_speaktofarmer2.textContent = "speak to the farmer";
			button_speaktofarmer2.id = "button-BuyLemon";
			button_speaktofarmer2.addEventListener("click", SecondspeakFarmer);
			NPCbuttonContainer.append(button_speaktofarmer2);
		}
	}
	else {
		const button_interview_crow = document.createElement("button");
		button_interview_crow.textContent = "interview the crow";
		button_interview_crow.id = "button-news";
		button_interview_crow.addEventListener("click", InterviewCrow);
		NPCbuttonContainer.append(button_interview_crow);
		
		const button_interview_farmer = document.createElement("button");
		button_interview_farmer.textContent = "interview the farmer";
		button_interview_farmer.id = "button-news";
		button_interview_farmer.addEventListener("click", InterviewFarmer);
		NPCbuttonContainer.append(button_interview_farmer);
	}
}

function BuyLemon() {
	CrowSFX();
	if (player.shinythings >= 60) {
		player.lemons += 1;
		player.shinythings -= 60;
		document.getElementById('NPC-Text').innerText = `crow: lemon lemon for you you caw caw!`;
		if (player.lemons_flag === false) {
			player.lemons_flag = true;
		}
	}
	else if (player.shinythings < 60) {
		document.getElementById('NPC-Text').innerText = `crow: you shine shine caw! me lemon caw caw caw! bring more shinies!`;
	}
}


function FirstspeakFarmer() {
	FarmerSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.location = "farmershouse";
	ChangeBG();
	document.getElementById('NPC').innerText = `
      __    
     /  \\   
  _/\\_/    \\_   
(____________)
  WWWWWWWWWWW 
  ...O...O... 
 ......\\/....
 ...wwwwwwwW. 
  ..WW....WW. 
    W......W  
`;
	document.getElementById('NPC-Text').innerText = `farmer: someone needs to get rid of that damn bird. i haven't been able to pick any lemons in weeks... help a poor old rawhide out`;
	
	if (player.birdcage_flag === false) {
		const button_acceptquest = document.createElement("button");
		button_acceptquest.textContent = "[lie] i will help you";
		button_acceptquest.id = "button-BuyLemon";
		button_acceptquest.addEventListener("click", AcceptFarmerQuest);
		NPCbuttonContainer.append(button_acceptquest);
	}
}


function AcceptFarmerQuest() {
	FarmerSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `farmer: good deal sonny, take this birdcage and bring him back to me, i want to eat him for dinner tonight... over lemons`;
	const button_acceptbirdcage = document.createElement("button");
	button_acceptbirdcage.textContent = "take the birdcage";
	button_acceptbirdcage.id = "button-BuyLemon";
	button_acceptbirdcage.addEventListener("click", AcceptBirdcage);
	NPCbuttonContainer.append(button_acceptbirdcage);
}

function AcceptBirdcage() {
	document.getElementById('NPC-Text').innerText = `you got a birdcage!`;
	player.birdcage_flag = true;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.crow_flag = true;
	player.farmer_quest_flag = true;
}








function FirstspeakCrow() {
	CrowSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `crow: crow want shiny!! pay shiny and crow leave!!`;
	const button_paycrow = document.createElement("button");
	button_paycrow.textContent = "pay the crow to leave";
	button_paycrow.id = "button-BuyLemon";
	button_paycrow.addEventListener("click", PayCrow);
	NPCbuttonContainer.append(button_paycrow);
}

function PayCrow() {
	CrowSFX();
	if (player.shinythings >= 2500 && player.crow_paid_flag === false) {
		player.crow_flag = false;
		player.shinythings -= 2500;
		document.getElementById('NPC-Text').innerText = `crow: crow always get shinies! easy lemons! ckRAW-ckRAW-ckRAW-ckRAW- *cackles*`;
		player.crow_paid_flag = true;
	}
	else if (player.crow_paid_flag === true) {
		document.getElementById('NPC-Text').innerText = `crow: [lie] crow leave crow leave! you leave! crow pack!`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `crow: crow make lemon out of face!! get more shinies!!`;
	}
}





function SecondspeakFarmer() {
	FarmerSFX();
	player.location = "farmershouse";
	ChangeBG();
	document.getElementById('NPC').innerText = `
      __    
     /  \\   
  _/\\_/    \\_   
(____________)
  WWWWWWWWWWW 
  ...O...O... 
 ......\\/....
 ...wwwwwwwW. 
  ..WW....WW. 
    W......W  
`;
	document.getElementById('NPC-Text').innerText = `farmer: what? he's gone? you couldn't wrangle a longhorned goose in a concrete basement could you'll whippersnapper? keep the cage, you come across that damn bird you bring him here`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.farmer_quest_flag = false;
}