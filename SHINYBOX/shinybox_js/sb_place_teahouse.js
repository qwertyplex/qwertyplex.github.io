////////////////////////////////////
//teahouse

function ViewTeahouse() {
	if (player.teahouse_quest_complete === false) {
		TeahouseMusic();
	}
	else {
		TeahouseMixtapeMusic();
	}
	resetButtonPosition();
	player.location = "teahouse"
	ChangeBG();
	document.getElementById('NPC').innerText = `
~
 ~teahouse     
   ~~    ~     
    ~~~    ~   
███████████████
  ███████████
    ███████ 
`;
	document.getElementById('NPC-Text').innerText = `it's an entrance to the teahouse`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_enterteahouse = document.createElement("button");
	button_enterteahouse.textContent = "enter the teahouse";
	button_enterteahouse.id = "button-teahouse";
	button_enterteahouse.addEventListener("click", EnterTeahouse);
	NPCbuttonContainer.append(button_enterteahouse);
}

function EnterTeahouse() {
	player.am_using_computer = false;
	player.location = "teahouse"
	ChangeBG();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	if (player.news_quest === false) {
		if (player.teahouse_quest_flag === false && player.teahouse_quest_complete === false) {
			const button_firstspeakowner = document.createElement("button");
			button_firstspeakowner.textContent = "speak to the owner";
			button_firstspeakowner.id = "button-teahouse";
			button_firstspeakowner.addEventListener("click", FirstspeakOwner);
			NPCbuttonContainer.append(button_firstspeakowner);
		}
		else if (player.teahouse_quest_flag === true && player.teahouse_quest_complete === false) {
			const button_firstspeakowner = document.createElement("button");
			button_firstspeakowner.textContent = "speak to the owner";
			button_firstspeakowner.id = "button-teahouse";
			button_firstspeakowner.addEventListener("click", FirstspeakOwner);
			NPCbuttonContainer.append(button_firstspeakowner);
		}
		else {
			const button_buytea = document.createElement("button");
			button_buytea.textContent = "buy tea";
			button_buytea.id = "button-teahouse";
			button_buytea.addEventListener("click", BuyTea);
			NPCbuttonContainer.append(button_buytea);
		}
	}
	else {
		const button_interview_teahouse = document.createElement("button");
		button_interview_teahouse.textContent = "interview the owner";
		button_interview_teahouse.id = "button-news";
		button_interview_teahouse.addEventListener("click", InterviewTeahouse);
		NPCbuttonContainer.append(button_interview_teahouse);
	}
	
	const button_fortuneteller = document.createElement("button");
	button_fortuneteller.textContent = "use the fortune teller machine";
	button_fortuneteller.id = "button-teahouse";
	button_fortuneteller.addEventListener("click", FortuneTeller);
	NPCbuttonContainer.append(button_fortuneteller);
}


function FirstspeakOwner() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
    ~~~~~~~    
   ~~~~~~~~~
  /         ~
  |--0----0-|
  |     >   |
  |    ___  |
   \_______/
`;
	if (player.teahouse_quest_flag === false) {
		document.getElementById('NPC-Text').innerText = `teahouse owner: it's too quiet around here...`;
		
		const button_secondspeakowner = document.createElement("button");
		button_secondspeakowner.textContent = "yeah well that's your problem, now sell me some tea";
		button_secondspeakowner.id = "button-teahouse";
		button_secondspeakowner.addEventListener("click", SecondspeakOwner);
		NPCbuttonContainer.append(button_secondspeakowner);
	}
	else if (player.teahouse_quest_flag === true && player.has_burned_cd) {
		document.getElementById('NPC-Text').innerText = `teahouse owner: ah, you have returned, with delightful sounds i hope...`;
		
		const button_giveownercd = document.createElement("button");
		button_giveownercd.textContent = "yeah yeah yeah i got your music, hold your teabags";
		button_giveownercd.id = "button-teahouse";
		button_giveownercd.addEventListener("click", GiveOwnerCD);
		NPCbuttonContainer.append(button_giveownercd);
	}
	
	else if (player.teahouse_quest_flag === true && !player.has_burned_cd) {
		document.getElementById('NPC-Text').innerText = `teahouse owner: i am still waiting on the honeyed sounds...`;
	}
}

function SecondspeakOwner() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `teahouse owner: i shant even move without alluring rhythm to stirrith me, but alas, i only have a CD player...`;
	
	const button_secondspeakowner = document.createElement("button");
	button_secondspeakowner.textContent = "ugh... i'll be back";
	button_secondspeakowner.id = "button-teahouse";
	button_secondspeakowner.addEventListener("click", AcceptTeahouseQuest);
	NPCbuttonContainer.append(button_secondspeakowner);
}

function AcceptTeahouseQuest() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `teahouse owner: yes, bring me sweet CD sounds!`;
	player.teahouse_quest_flag = true;
}


function GiveOwnerCD() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `teahouse owner: ah! delightful music! you are magnificent in your ability! please, you must speak to my friend at the station, and take these stones for your work... some say they are magical`;
	player.teahouse_quest_complete = true;
	player.teahouse_quest_flag = false;
	player.wishing_stones = 2;
	player.wishing_stone_flag = true;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TEA
function BuyTea() {
	const button_luckytea = document.createElement("button");
	button_luckytea.textContent = "lucky tea";
	button_luckytea.id = "button-luckytea";
	button_luckytea.addEventListener("click", LuckyTea);
	NPCbuttonContainer.append(button_luckytea);
	
	const button_spirittea = document.createElement("button");
	button_spirittea.textContent = "spirit tea";
	button_spirittea.id = "button-teahouse";
	button_spirittea.addEventListener("click", SpiritTea);
	NPCbuttonContainer.append(button_spirittea);
	
	const button_honeytea = document.createElement("button");
	button_honeytea.textContent = "honey tea";
	button_honeytea.id = "button-teahouse";
	button_honeytea.addEventListener("click", HoneyTea);
	NPCbuttonContainer.append(button_honeytea);
	
	const button_shinytea = document.createElement("button");
	button_shinytea.textContent = "shiny tea";
	button_shinytea.id = "button-teahouse";
	button_shinytea.addEventListener("click", ShinyTea);
	NPCbuttonContainer.append(button_shinytea);
	
	const button_honesttea = document.createElement("button");
	button_honesttea.textContent = "honest tea";
	button_honesttea.id = "button-teahouse";
	button_honesttea.addEventListener("click", HonestTea);
	NPCbuttonContainer.append(button_honesttea);
	
	const button_yallowtea = document.createElement("button");
	button_yallowtea.textContent = "yallow tea";
	button_yallowtea.id = "button-teahouse";
	button_yallowtea.addEventListener("click", YallowTea);
	NPCbuttonContainer.append(button_yallowtea);
}

function LuckyTea() {
	if (player.shinythings >= 1000) {
		document.getElementById('NPC-Text').innerText = `you feel lucky, probably from the lucky tea`;
		CancelTeas();
		player.lucky_tea = true;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to order tea`;
	}
}
function SpiritTea() {
	if (player.shinythings >= 1000) {
		document.getElementById('NPC-Text').innerText = `you feel lucky, probably from the lucky tea`;
		CancelTeas();
		player.spirit_tea = true;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to order tea`;
	}
}
function HoneyTea() {
	if (player.shinythings >= 1000) {
		document.getElementById('NPC-Text').innerText = `you feel lucky, probably from the lucky tea`;
		CancelTeas();
		player.honey_tea = true;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to order tea`;
	}
}
function ShinyTea() {
	if (player.shinythings >= 1000) {
		document.getElementById('NPC-Text').innerText = `you feel lucky, probably from the lucky tea`;
		CancelTeas();
		player.shiny_tea = true;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to order tea`;
	}
}
function HonestTea() {
	if (player.shinythings >= 1000) {
		document.getElementById('NPC-Text').innerText = `you feel lucky, probably from the lucky tea`;
		CancelTeas();
		player.honest_tea = true;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to order tea`;
	}
}
function YallowTea() {
	if (player.shinythings >= 1000) {
		document.getElementById('NPC-Text').innerText = `you feel lucky, probably from the lucky tea`;
		CancelTeas();
		player.yallow_tea = true;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to order tea`;
	}
}

function CancelTeas() {
	player.lucky_tea = false;
	player.spirit_tea = false;
	player.honey_tea = false;
	player.shiny_tea = false;
	player.honest_tea = false;
	player.yallow_tea = false;
}
	




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FORTUNE teller
function FortuneTeller() {
	if (player.shinythings >= 50) {
		let randomInt = getRandomInt(1, 5);
		if (randomInt === 1) {
			document.getElementById('NPC-Text').innerText = `fortune teller: your fortune is favorful`;
		}
		else if (randomInt === 2) {
			document.getElementById('NPC-Text').innerText = `fortune teller: your fortune is haunted by spirits`;
		}
		else if (randomInt === 3) {
			document.getElementById('NPC-Text').innerText = `fortune teller: your fortune is obliterated`;
		}
		else if (randomInt === 4) {
			document.getElementById('NPC-Text').innerText = `fortune teller: your fortune is at its apex`;
		}
		else if (randomInt === 5) {
			document.getElementById('NPC-Text').innerText = `fortune teller: your fortune is decimating`;
		}
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies to get a fortune`;
	}
}








