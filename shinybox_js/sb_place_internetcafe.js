////////////////////////////////////
//internet cafe

function ViewInternetCafe() {
	ComputerMusic();
	PawnbrokerSFX();
	resetButtonPosition();
	player.location = "internet_cafe"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█____________█
█------------█
█--CAFE    --█
█------------█
█____________█
█$█$█$█$█$█$██
██████████████
█-█   █   █--█
█-█  .█.  █--█
█_█___█___█__█
`;
	document.getElementById('NPC-Text').innerText = `nerd clerk: y'ello`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_usecomputer = document.createElement("button");
	button_usecomputer.textContent = "use a computer";
	button_usecomputer.id = "button-internetcafe";
	button_usecomputer.addEventListener("click", UseComputer);
	NPCbuttonContainer.append(button_usecomputer);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//COMPUTER

function UseComputer() {
	if (player.computer_quarters_flag === true && player.computer_ram_flag == true) {
		ComputerOnSFX();
		player.computer_unlocked = true;//keep this unlocked for library
		player.input_computer_flag = true;
		player.am_using_computer = true;
		document.getElementById('NPC-Text').innerHTML = `shine.OS : ~the brilliant operating system~<br>type 'help' for a list of commands`;
		player.location = "computer"
		ChangeBG();
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		document.getElementById('NPC').innerText = `
	█████████████
	█ shine.OS  █
	█           █
	█           █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
	
	if (player.usb_stick === true && player.inserted_usb === false) {
		const button_insertusb = document.createElement("button");
		button_insertusb.textContent = "insert the usb";
		button_insertusb.id = "button-internetcafe";
		button_insertusb.addEventListener("click", InsertUSB);
		NPCbuttonContainer.append(button_insertusb);
		}
	if (player.cd === true && player.inserted_cd === false) {
		const button_insertcd = document.createElement("button");
		button_insertcd.textContent = "insert the cd";
		button_insertcd.id = "button-internetcafe";
		button_insertcd.addEventListener("click", InsertCD);
		NPCbuttonContainer.append(button_insertcd);
		}
	}
	else if (player.computer_quarters_flag === false && player.computer_ram_flag == true) {
		document.getElementById('NPC-Text').innerText = `the computer needs quarters`;
		player.location = "computer"
		ChangeBG();
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		document.getElementById('NPC').innerText = `
	█████████████
	█           █
	█           █
	█           █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
		const button_inputquarter_computer = document.createElement("button");
		button_inputquarter_computer.textContent = "insert a quarter";
		button_inputquarter_computer.id = "button-computer";
		button_inputquarter_computer.addEventListener("click", InputQuarterComputer);
		NPCbuttonContainer.append(button_inputquarter_computer);
	}
	else if (player.computer_ram_flag == false) {
		document.getElementById('NPC-Text').innerText = `needs RAM...`;
		player.location = "computer"
		ChangeBG();
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		document.getElementById('NPC').innerText = `
	█████████████
	█           █
	█           █
	█           █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
		const button_inputram_computer = document.createElement("button");
		button_inputram_computer.textContent = "insert some RAM";
		button_inputram_computer.id = "button-computer";
		button_inputram_computer.addEventListener("click", InputRAMComputer);
		NPCbuttonContainer.append(button_inputram_computer);
	}
}

function InputRAMComputer() {
	if (player.ram_sticks >= 1 && player.computer_ram_flag === false) {
		document.getElementById('NPC-Text').innerText = `you put a stick of RAM into the computer...`;
		player.ram_sticks -= 1;
		player.computer_ram_count += 1;
		if (player.computer_ram_count >= 4) {
			document.getElementById('NPC-Text').innerText = `the computer can't take anymore RAM`;
			player.computer_ram_flag = true;
		}
	}
	else if (player.computer_ram_flag === true) {
		document.getElementById('NPC-Text').innerText = `the computer already has RAM inside`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough RAM!`;
	}
}

function InputQuarterComputer() {
	if (player.quarters >= 1 && player.computer_time < 5) {
		QuartersSFX();
		player.quarters -= 1;
		player.computer_time += 1;
		document.getElementById('NPC-Text').innerText = `put a quarter into the computer`;
		player.computer_quarters_flag = true;
	}
	else if (player.computer_time >= 5) {
		document.getElementById('NPC-Text').innerText = `the machine won't take more quarters`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough quarters!`;
	}
}




function InvalidCommand() {
	let randomInt = getRandomInt(1, 4);
	if (randomInt === 1) {
		document.getElementById('NPC-Text').innerText = `didn't work...`;
	}
	else if (randomInt === 2) {
		document.getElementById('NPC-Text').innerText = `didn't quite get that...`;
	}
	else if (randomInt === 3) {
		document.getElementById('NPC-Text').innerText = `nope...`;
	}
	else if (randomInt === 4) {
		document.getElementById('NPC-Text').innerText = `flabbergast...`;
	}
}



function ListCommands() {
	document.getElementById('NPC-Text').innerText = `COMMANDS:
'help'       |  'ls'
'run <file>' |  'exit'
'copy'       |  'beep'
'drive'      |  'burn <drive>'
eject <drive>
`;
}

function TypeCommand() {
	ComputerSFX();
	player.computer_time -= 1;
	QuarterPortrait();
	const inputText = document.getElementById('userInput').value;
	if (player.computer_time > 0) {
		if (player.am_using_computer === true) {
			if (inputText === "shinybox" && player.command_shinybox === false) {
				document.getElementById('NPC-Text').innerText = `you [obviously] gained 1,000 shiny things!`;
				player.shinythings += 1000;
				player.command_shinybox = true;
			}
			
			else if (inputText === "lemons" && player.command_lemons === false) {
				document.getElementById('NPC-Text').innerText = `you gained 3 lemons!`;
				player.lemons += 3;
				player.command_lemons = true;
			}
			
			else if (inputText === "foxbox") {
				document.getElementById('NPC-Text').innerText = `hey, that's me!`;
			}
			
			
			///////////
			else if (inputText === "help") {
				ListCommands();
			}
			
			
			else if (inputText === "ls") {
				document.getElementById('NPC-Text').innerText = `FILES:
				readme.txt
				game.exe`
			}
			
			
			else if (inputText === "copy nerdstick") {
				document.getElementById('NPC-Text').innerText = `files copied from 'nerdstick'`
				player.usb_copied = true;
			}
			
			else if (inputText === "beep") {
				RandomBeeps();
			}
			
			
			else if (inputText === "run readme.txt") {
				document.getElementById('NPC-Text').innerText = `README.txt
				hello and welcome to the computer
				here are some important notes:
				libraries are a great place to learn
				`;
			}
			
			else if (inputText === "run game.exe") {
				ComputerGameStart();
			}
			
			
			
			else if (inputText === "exit") {
				ComputerOffSFX();
				document.getElementById('NPC').innerText = `
	█████████████
	█ GOODBYE!  █
	█           █
	█           █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
				document.getElementById('NPC-Text').innerText = `you logged off of the computer`;
				player.am_using_computer = false;
				player.input_computer_flag = false;
				ViewInternetCafe();
			}
			
			
			
			
			else if (inputText === "drive" && player.inserted_usb === false && player.inserted_cd === false) {
				document.getElementById('NPC-Text').innerText = `ATTACHED DRIVES:
				USB: <nothing>
				CD: <nothing>`;
			}
			else if (inputText === "drive" && player.inserted_usb === true && player.inserted_cd === false) {
				document.getElementById('NPC-Text').innerText = `ATTACHED DRIVES:
				USB: nerdstick
				CD: <nothing>`;
			}
			else if (inputText === "drive" && player.inserted_usb === false && player.inserted_cd === true && player.burned_cd_flag === false) {
				document.getElementById('NPC-Text').innerText = `ATTACHED DRIVES:
				USB: <nothing>
				CD: blankCD`;
			}
			else if (inputText === "drive" && player.inserted_usb === true && player.inserted_cd === true && player.burned_cd_flag === false) {
				document.getElementById('NPC-Text').innerText = `ATTACHED DRIVES:
				USB: nerdstick
				CD: blankCD`;
			}
			else if (inputText === "drive" && player.inserted_usb === true && player.inserted_cd === true && player.burned_cd_flag === true) {
				document.getElementById('NPC-Text').innerText = `ATTACHED DRIVES:
				USB: nerdstick
				CD: mixtape`;
			}
			
			
			
			else if (inputText === "burn nerdstick") {
				document.getElementById('NPC-Text').innerText = `ERROR: 'nerdstick' already burned`;
			}
			
			else if (inputText === "burn blankCD" && player.inserted_cd === true) {
				if (player.usb_copied === true) {
					document.getElementById('NPC-Text').innerText = `BURNED: 'mixtape' created with files from 'nerdstick'`;
					player.burned_cd_flag = true;
				}
				else {
					document.getElementById('NPC-Text').innerText = `ERROR: no files copied`
				}
			}
			
			
			else if (inputText === "eject nerdstick") {
				document.getElementById('NPC-Text').innerText = `'EJECTED: nerdstick'`;
				player.inserted_usb = false;
				player.usb_stick = true;
			}
			
			else if (inputText === "eject blankCD") {
				document.getElementById('NPC-Text').innerText = `'EJECTED: blankCD'`;
				player.inserted_cd = false;
				player.cd = true;
			}
			
			else if (inputText === "eject mixtape") {
				document.getElementById('NPC-Text').innerText = `EJECTED: 'mixtape'`;
				player.inserted_cd = false;
				player.has_burned_cd = true;
			}
			
			//invalid
			else {
				InvalidCommand();
			}
		}
	}
	else {
		ComputerOffSFX();
		player.computer_quarters_flag = false;
		document.getElementById('NPC').innerText = `
	█████████████
	█ GOODBYE!  █
	█           █
	█           █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
	player.am_using_computer = false;
	player.input_computer_flag = false;
	ViewInternetCafe();
	}
}


function QuarterPortrait() {
	if (player.computer_time === 1) {
		document.getElementById('NPC').innerText = `
	█████████████
	█ Quarters  █
	█ Remaining:█
	█     1     █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
	}
	else if (player.computer_time === 2) {
		document.getElementById('NPC').innerText = `
	█████████████
	█ Quarters  █
	█ Remaining:█
	█     2     █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
	}
	else if (player.computer_time === 3) {
		document.getElementById('NPC').innerText = `
	█████████████
	█ Quarters  █
	█ Remaining:█
	█     3     █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
	}
	else if (player.computer_time === 4) {
		document.getElementById('NPC').innerText = `
	█████████████
	█ Quarters  █
	█ Remaining:█
	█     4     █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
	}
	else if (player.computer_time === 5) {
		document.getElementById('NPC').innerText = `
	█████████████
	█ Quarters  █
	█ Remaining:█
	█     5     █
	█           █
	█===========█
	█qwertyuiop █
	█ asdfghjkl █
	█__zxcvbnm__█
	`;
	}
}
		



function InsertUSB() {
	document.getElementById('NPC-Text').innerText = `you connected the usb stick to the computer`;
	player.usb_stick = false;
	player.inserted_usb = true;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
}

function InsertCD() {
	document.getElementById('NPC-Text').innerText = `you inserted the CD into the computer`;
	player.cd = false;
	player.inserted_cd = true;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
}






function RandomBeeps() {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            let randomInt = getRandomInt(1, 6);
            if (randomInt === 1) {
                ComputerBeepSFX();
            } else if (randomInt === 2) {
                ComputerBeep2SFX();
            } else if (randomInt === 3) {
                ComputerBeep3SFX();
            } else if (randomInt === 4) {
                ComputerBeep4SFX();
            } else if (randomInt === 5) {
                ComputerBeep5SFX();
            } else if (randomInt === 6) {
                ComputerBeep6SFX();
            }
        }, i * 150);  // Delay for each call (i * 500ms)
    }
}
