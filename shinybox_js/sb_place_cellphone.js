////////////////////////////////////
//cellphone

function ViewCellphone() {
	OpeningMusic();
	Cellphone2Sound();
	resetButtonPosition();
	player.location = "cellphone"
	ChangeBG();
	document.getElementById('NPC').innerText = `
██████████████
██████[]██████
█ shinephone █
█            █
█            █
█            █
█ [1][2][3]  █
█ [4][5][6]  █
█ [7][8][9]  █
██████████████
`;
	
	document.getElementById('NPC-Text').innerText = `it's your cellphone`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_grind = document.createElement("button");
	button_grind.textContent = "grind for the shinybox";
	button_grind.id = "button-cellphone";
	button_grind.addEventListener("click", Grind);
	NPCbuttonContainer.append(button_grind);
	
	const button_shinecoinmenu = document.createElement("button");
	button_shinecoinmenu.textContent = "buy/sell shinecoin";
	button_shinecoinmenu.id = "button-cellphone";
	button_shinecoinmenu.addEventListener("click", ShinecoinMenu);
	NPCbuttonContainer.append(button_shinecoinmenu);
	
	const button_contacts = document.createElement("button");
	button_contacts.textContent = "text someone";
	button_contacts.id = "button-cellphone";
	button_contacts.addEventListener("click", Text);
	NPCbuttonContainer.append(button_contacts);
}



function Grind() {
    if (!player.active_button_flag) {
		Cellphone1Sound();
        player.active_button_flag = true;
        const button = document.getElementById("button-cellphone");
		let timer = 1;
        button.textContent = `grinding (${timer}s)`;
        const interval = setInterval(function () {
            timer--;
            button.textContent = `grinding (${timer}s)`;

            if (timer <= 0) {
				let randomInt = getRandomInt(1, 100);
				if (randomInt === 1) {
					player.shinythings += 100;
				}
				else {
					player.shinythings += player.grind_level;
				}
				player.grind_xp += 1;
				if (player.grind_xp >= player.grind_xp_req) {
					player.grind_xp = 0;
					if (player.grind_level < 100) {
						CellphoneLevelSound();
						document.getElementById('NPC-Text').innerText = `leveled up the grinding skill!`;
						player.grind_level += 1;
						player.grind_xp_req = player.grind_xp_req * 1.2;
					}
				}
                clearInterval(interval);
                button.textContent = "grind for the shinybox";
                player.active_button_flag = false;
				document.getElementById('NPC-Text').innerText = `grinding xp: ${player.grind_xp} / ${Math.ceil(player.grind_xp_req)} | level: ${player.grind_level}`;
            }
        }, 1000);
    }
}



let button_buyshinecoin;  // Declare button in a wider scope for access
let button_sellshinecoin;
let shinecoin_price = 1000;
// Function to update the price of shinecoin
function ShinecoinFluctuate() {
	if (player.teahouse_quest_complete === false) {
		shinecoin_price = getRandomInt(970, 1030);  // Generate random price between 900 and 1100
	}
	else {
		shinecoin_price = getRandomInt(999000, 101000);
	}

	if (button_buyshinecoin) {
		button_buyshinecoin.textContent = `buy $hinecoin: $${shinecoin_price}`;
	}
	if (button_sellshinecoin) {
		button_sellshinecoin.textContent = `sell $hinecoin: $${shinecoin_price}`;
	}
		
}

// Call ShinecoinFluctuate every second
setInterval(ShinecoinFluctuate, 5000);


function ShinecoinMenu() {
	document.getElementById('NPC-Text').innerText = `$hinecoins, the digital shinything`;
    NPCbuttonContainer.innerHTML = '';  // Clear any existing buttons or content
    document.getElementById('NPC').innerText = `
        _____
       /      \\
      /        \\
      | $hine  |
      \\       /
       \\_____/
       
       shinecoin
    ██████████████
    `;

    // Create the Buy button without the price initially
    button_buyshinecoin = document.createElement("button");
    button_buyshinecoin.textContent = `buy $hinecoin: $${shinecoin_price}`;  // No price here yet
    button_buyshinecoin.id = "button-cellphone";
    button_buyshinecoin.addEventListener("click", BuyShinecoin);
    NPCbuttonContainer.append(button_buyshinecoin);
    
    // Create the Sell button without the price initially
    button_sellshinecoin = document.createElement("button");
    button_sellshinecoin.textContent = `sell $hinecoin: $${shinecoin_price}`;  // No price here yet
    button_sellshinecoin.id = "button-cellphone";
    button_sellshinecoin.addEventListener("click", SellShinecoin);
    NPCbuttonContainer.append(button_sellshinecoin);
    
    // Create the Go Back button
    const button_cellphone_back = document.createElement("button");
    button_cellphone_back.textContent = "Go Back";
    button_cellphone_back.id = "button-cellphone";
    button_cellphone_back.addEventListener("click", ViewCellphone);
    NPCbuttonContainer.append(button_cellphone_back);
}

function BuyShinecoin() {
	Cellphone1Sound();
	if (player.shinythings >= shinecoin_price) {
		player.shinythings -= shinecoin_price;
		player.shinecoins += 1;
		document.getElementById('NPC-Text').innerText = `you bought a $hinecoin for ${shinecoin_price} shinythings!`;
		if (player.shinecoins_flag === false) {
			player.shinecoins_flag = true;
		}
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have enough to shinythings to buy a $hinecoin`;
	}
}

function SellShinecoin() {
	Cellphone1Sound();
	if (player.shinecoins >= 1) {
		player.shinecoins -= 1;
		player.shinythings += shinecoin_price;
		document.getElementById('NPC-Text').innerText = `you sold a $hinecoin for ${shinecoin_price} shinythings!`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have any $hinecoins to sell`;
	}
}






function Text() {
	Cellphone1Sound();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
██████████████
██████[]██████
█    text    █
█            █
█-mom        █
█-gf         █
█-<empty>    █
█-<empty>    █
█-<empty>    █
██████████████
`;

	const button_textmom = document.createElement("button");
	button_textmom.textContent = "text mom";
	button_textmom.id = "button-cellphone";
	button_textmom.addEventListener("click", TextMom);
	NPCbuttonContainer.append(button_textmom);
	
	const button_textgf = document.createElement("button");
	button_textgf.textContent = "text gf";
	button_textgf.id = "button-cellphone";
	button_textgf.addEventListener("click", TextGF);
	NPCbuttonContainer.append(button_textgf);
	
	const button_cellphone_back = document.createElement("button");
	button_cellphone_back.textContent = "go back";
	button_cellphone_back.id = "button-cellphone";
	button_cellphone_back.addEventListener("click", ViewCellphone);
	NPCbuttonContainer.append(button_cellphone_back);
}


function TextMom() {
	Cellphone1Sound();
	let randomInt = getRandomInt(1, 6);
	if (randomInt === 1) {
		document.getElementById('NPC-Text').innerText = `mom: keep up the good work!`;
	}
	else if (randomInt === 2) {
		document.getElementById('NPC-Text').innerText = `mom: you're doing great, honey!`;
	}
	else if (randomInt === 3) {
		document.getElementById('NPC-Text').innerText = `mom: why haven't you paid me back yet?`;
	}
	else if (randomInt === 4) {
		document.getElementById('NPC-Text').innerText = `mom: don't give up!`;
	}
	else if (randomInt === 5) {
		document.getElementById('NPC-Text').innerText = `mom: are you coming for thankshiving this year?`;
	}
	else if (randomInt === 6) {
		document.getElementById('NPC-Text').innerText = `she didn't respond`;
	}
}


function TextGF() {
	Cellphone1Sound();
	let randomInt = getRandomInt(1, 6);
	if (randomInt === 1) {
		document.getElementById('NPC-Text').innerText = `gf: when are you coming home?`;
	}
	else if (randomInt === 2) {
		document.getElementById('NPC-Text').innerText = `gf: i miss you`;
	}
	else if (randomInt === 3) {
		document.getElementById('NPC-Text').innerText = `gf: you haven't texted me in forever!!`;
	}
	else if (randomInt === 4) {
		document.getElementById('NPC-Text').innerText = `gf: heyyyy i'm neeeeedy`;
	}
	else if (randomInt === 5) {
		document.getElementById('NPC-Text').innerText = `gf: luv u <3`;
	}
	else if (randomInt === 6) {
		document.getElementById('NPC-Text').innerText = `no response`;
	}
}
	