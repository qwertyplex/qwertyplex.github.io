////////////////////////////////////
//trader

function ViewTrader() {
	TraderMusic();
	resetButtonPosition();
	player.location = "trader"
	ChangeBG();
	document.getElementById('NPC').innerText = `
  *******  
  *  ^  *  
  *  $  *  
  * --- *  
************* 
 /        \\ 
 |  O O    | 
  \\  ~~~~   /  
  \\_______/   
`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	if (player.news_quest === false) {
		document.getElementById('NPC-Text').innerText = `trader: batteries for sale! get your batteries here! trading batteries!`;
		const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		
		const button_pigeons = document.createElement("button");
		button_pigeons.textContent = "buy pigeon";
		button_pigeons.id = "button-trader";
		button_pigeons.addEventListener("click", BuyPigeons);
		NPCbuttonContainer.append(button_pigeons);
		
		const button_batteries = document.createElement("button");
		button_batteries.textContent = "buy a battery";
		button_batteries.id = "button-trader";
		button_batteries.addEventListener("click", BuyBatteries);
		NPCbuttonContainer.append(button_batteries);
		
		const button_shinybox = document.createElement("button");
		button_shinybox.textContent = "buy the shinybox! (1,000,000,000 shiny things)";
		button_shinybox.id = "button-BuyShinybox";
		button_shinybox.addEventListener("click", BuyShinybox);
		NPCbuttonContainer.append(button_shinybox);
		
		if (player.sell_gold_flag === true) {
			const button_pocketwatch = document.createElement("button");
			button_pocketwatch.textContent = "pocket watch (100,000 shiny things)";
			button_pocketwatch.id = "button-PocketWatch";
			button_pocketwatch.addEventListener("click", BuyPocketWatch);
			NPCbuttonContainer.append(button_pocketwatch);
		}
		
		if (player.inserted_usb === true) {
			const button_buycd = document.createElement("button");
			button_buycd.textContent = "blank CD";
			button_buycd.id = "button-BuyCD";
			button_buycd.addEventListener("click", BuyCD);
			NPCbuttonContainer.append(button_buycd);
		}
	}
	else {
		const button_interview_trader = document.createElement("button");
		button_interview_trader.textContent = "interview the trader";
		button_interview_trader.id = "button-news";
		button_interview_trader.addEventListener("click", InterviewTrader);
		NPCbuttonContainer.append(button_interview_trader);
	}

}

function BuyPigeons() {
	TraderSFX();
	if (player.shinythings >= 100 && player.pigeons <= 9) {
		player.pigeons += 1;
		player.shinythings -= 100;
		document.getElementById('NPC-Text').innerText = `trader: be careful with that bird now, ya hear?`;
		if (player.pigeons_flag === false) {
			player.pigeons_flag = true;
		}
	}
	else if (player.shinythings < 100 && player.pigeons <= 9) {
		document.getElementById('NPC-Text').innerText = `trader: that's not enough shinies for this bird, go git more shinies!`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `trader: i'm not sellin' ya anymore damn birds, what are you even doing with them?`;
	}
}

function BuyBatteries() {
	TraderSFX();
	if (player.lemons >= 3) {
		player.batteries += 1;
		player.lemons -= 3;
		document.getElementById('NPC-Text').innerText = `trader: be careful with all that power now, ya hear?`;
		if (player.batteries_flag === false) {
			player.batteries_flag = true;
		}
	}
	else {
		document.getElementById('NPC-Text').innerText = `trader: that's not enough lemons, go git more lemons!`;
	}
}

function BuyShinybox() {
	TraderSFX();
	if (player.shinythings >= 1000000000 && player.shinybox_flag === false) {
		document.getElementById('NPC-Text').innerText = `trader: be careful with all them shinies now, ya hear?`;
		player.shinybox_flag = true;
		player.shinythings -= 1000000000;
		ShinyWINSound();
		alert("you bought the shinybox! thanks for playing!");
		saveScoreToStorage(player.score);  // Or however you're tracking the player's score
	}
	else if (player.shinythings >= 1000000000 && player.shinybox_flag === true) {
		document.getElementById('NPC-Text').innerText = `trader: i done sold ya my last one sonny`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `trader: not enough shinies, go git more shinies!`;
	}
}


function BuyPocketWatch() {
	TraderSFX();
	if (player.shinythings >= 100000 && player.pocketwatch_flag === false) {
		document.getElementById('NPC-Text').innerText = `trader: be careful with all that time now, ya hear?`;
		player.pocketwatch_flag = true;
		player.shinythings -= 100000;
	}
	else if (player.shinythings >= 100000 && player.pocketwatch_flag === true) {
		document.getElementById('NPC-Text').innerText = `trader: you done already bought one last time`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `trader: not enough shinies, go git more shinies!`;
	}
}




function BuyCD() {
	TraderSFX();
	if (player.shinythings >= 50 && player.cd === false) {
		document.getElementById('NPC-Text').innerText = `trader: be careful with all that storage now, ya hear?`;
		player.cd = true;
		player.shinythings -= 50;
	}
	else if (player.shinythings >= 50 && player.cd === true) {
		document.getElementById('NPC-Text').innerText = `trader: you done already bought one last time`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `trader: not enough shinies, go git more shinies!`;
	}
}