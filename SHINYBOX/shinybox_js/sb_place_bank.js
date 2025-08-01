////////////////////////////////////
//bank

function ViewBank() {
	BankMusic();
	resetButtonPosition();
	player.location = "bank"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█____________█
█------------█
█--  BANK  --█
█------------█
█____________█
█$█$█$█$█$█$██
██████████████
█-█   █   █--█
█-█  .█.  █--█
█_█___█___█__█
`;
	document.getElementById('NPC-Text').innerText = `it's a bank`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_enterbank = document.createElement("button");
	button_enterbank.textContent = "go inside";
	button_enterbank.id = "button-bank";
	button_enterbank.addEventListener("click", EnterBank);
	NPCbuttonContainer.append(button_enterbank);
}


// Function that is triggered when you enter the bank
function EnterBank() {
    document.getElementById('NPC').innerText = `
_______________
|_______TELLER|
             ||
             ||
o   o   o   o||
|   |   |   |||
^   ^   ^   ^||
`;
    document.getElementById('NPC-Text').innerText = `there's a line for the teller's window...`;

    const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
    NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content

    const button_standinline = document.createElement("button");
    button_standinline.textContent = "stand in line";
    button_standinline.id = "button-bank2";
    button_standinline.addEventListener("click", StandInLine);
    NPCbuttonContainer.append(button_standinline);
}

// Function that handles standing in line
function StandInLine() {
    const button = document.getElementById("button-bank2");
    let totalRemainingWaitTime = 20; // Reset the wait time every time you stand in line

    button.disabled = true;
    button.textContent = `waiting... ${totalRemainingWaitTime}s`;

    let countdownInterval = setInterval(function() {
        totalRemainingWaitTime--;
        button.textContent = `waiting... ${totalRemainingWaitTime}s`;
        if (totalRemainingWaitTime <= 0) {
            clearInterval(countdownInterval);
            SpeakToTeller(); // Assuming this function handles the next interaction
        }
    }, 1000);
}


function SpeakToTeller() {
	PawnbrokerSFX();
	document.getElementById('NPC').innerText = `
   ~~~~~~~    
 ~~~~~~~~~~~
~~~~_   _~~~~
~~| o   o |~~
 ~|   7   |~
  |  ___  |
   \_____/

`;
	document.getElementById('NPC-Text').innerText = `teller: y'hello *grumbles* what do you want?`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content

	const button_depositshinythings = document.createElement("button");
	button_depositshinythings.textContent = "deposit shinythings";
	button_depositshinythings.id = "button-news";
	button_depositshinythings.addEventListener("click", DepositShinythings);
	NPCbuttonContainer.append(button_depositshinythings);
	
	const button_checkbalance = document.createElement("button");
	button_checkbalance.textContent = "check your balance";
	button_checkbalance.id = "button-news";
	button_checkbalance.addEventListener("click", CheckBalance);
	NPCbuttonContainer.append(button_checkbalance);
	
	const button_withdrawshinythings = document.createElement("button");
	button_withdrawshinythings.textContent = "withdraw shinythings";
	button_withdrawshinythings.id = "button-news";
	button_withdrawshinythings.addEventListener("click", WithdrawShinythings);
	NPCbuttonContainer.append(button_withdrawshinythings);
}

function DepositShinythings() {
	if (player.shinythings >= 1) {
		player.deposited_shinythings = player.shinythings;
		document.getElementById('NPC-Text').innerText = `you deposited ${player.shinythings} shinythings`;
		player.shinythings -= player.shinythings;
		
		if (player.deposited_shinythings >= 1000000) {
			NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
			document.getElementById('NPC-Text').innerText = `teller: you must be doing well for yourself, fancy a dinner with some of our other clients?`;
			
			const button_finishbankquest = document.createElement("button");
			button_finishbankquest.textContent = "networking? that's what i do best";
			button_finishbankquest.id = "button-news";
			button_finishbankquest.addEventListener("click", FinishBankQuest);
			NPCbuttonContainer.append(button_finishbankquest);
		}
	}
}

function FinishBankQuest() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `teller: it's a secret party, here is the location...`;
	player.bank_quest_complete = true;
}

function CheckBalance() {
	document.getElementById('NPC-Text').innerText = `you have ${player.deposited_shinythings} shinythings in the bank`;
}
	

function WithdrawShinythings() {
	if (player.deposited_shinythings >= 1) {
		player.shinythings += player.deposited_shinythings;
		document.getElementById('NPC-Text').innerText = `you withdrew ${player.deposited_shinythings} shinythings`;
		player.deposited_shinythings = 0;
	}
}