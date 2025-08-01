////////////////////////////////////
//factory

function ViewFactory() {
	FactoryMusic();
	PawnbrokerSFX();
	resetButtonPosition();
	player.location = "factory"
	ChangeBG();
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	document.getElementById('NPC').innerText = `
 ~     ~    
█-█    ~~    ~
█-█    ~~~  ██
█-█    █-█  ██
█ █    █ █  ██
█-█_SHINY_█_██
█-- FACTORY--█
█-█________█-█
█-█________█-█
█_█________█_█
`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `it's a shiny factory`;
	
	const button_enterfactory = document.createElement("button");
	button_enterfactory.textContent = "enter the factory";
	button_enterfactory.id = "button-Factory";
	button_enterfactory.addEventListener("click", EnterFactory);
	NPCbuttonContainer.append(button_enterfactory);
}




function EnterFactory() {
	player.location = "innerfactory"
	ChangeBG();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
 ~     ~    
█-█    ~~    ~
█-█    ~~~  ██
█-█    █-█  ██
█ █    █ █  ██
█-█_SHINY_█_██
█-- FACTORY--█
█-█________█-█
█-█________█-█
█_█________█_█
`;
	const button_elevator = document.createElement("button");
	button_elevator.textContent = "take the elevator";
	button_elevator.id = "button-Factory";
	button_elevator.addEventListener("click", EnterElevator);
	NPCbuttonContainer.append(button_elevator);
}


let elevator_floor = 1;
let current_floor = 1;
let elevator_timer = 10; // Declare elevator_timer here

function EnterElevator() {
    document.getElementById('NPC-Text').innerText = `it's an elevator`;
    NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	ElevatorDingSFX();    
    // Set elevator visual
    document.getElementById('NPC').innerText = `
    █============█
    █      |     █
    █      |     █
    █      |     █
    █      |     █
    █      |    o█
    █      |    o█
    █      |     █
    █      |     █
    █______|_____█
    `;
    
    // Generate a random elevator floor between 1 and 3
    elevator_floor = getRandomInt(1, 3);

    // If the elevator is already on the current floor
    if (elevator_floor === current_floor) {
        document.getElementById('NPC-Text').innerText = `lucky, it was on my floor!`;
    } else {
        elevator_timer = Math.abs(elevator_floor - current_floor) * 10; // Set timer based on floor difference
    }

	if (player.factory_quest_flag === false) {
		const button_office = document.createElement("button");
		button_office.textContent = `floor 3 - office`; // Initial button text
		button_office.id = "button-Factory";

		// Add click event listener for the button
		button_office.addEventListener("click", function() {
			button_office.textContent = `calling elevator...`; // Update the text to "calling elevator"
			button_office.disabled = true; // Disable the button to prevent multiple clicks

			// Set the initial countdown text right away
			button_office.textContent = `elevating... ${elevator_timer}s`; // Start with the initial timer value

			// Start the countdown timer and update the button text every second
			const countdownInterval = setInterval(function() {
				elevator_timer -= 1; // Decrease the timer each second
				button_office.textContent = `elevating... ${elevator_timer}s`;

				if (elevator_timer % 10 === 0 && elevator_timer > 0) {
					document.getElementById('NPC-Text').innerText = `getting there...`;
					ElevatorDingSFX();
				}

				// When the timer hits zero, stop the countdown and reset
				if (elevator_timer <= 0) {
					clearInterval(countdownInterval); // Stop the countdown
					ViewOffice(); // Call the function to view the office
					button_office.disabled = false; // Re-enable the button
					button_office.textContent = "floor 3 - office"; // Reset the button text
					elevator_timer = 10; // Reset the timer for future use
					ElevatorDoneSFX();
				}
			}, 1000); // Update every second (1000ms)
		});
		NPCbuttonContainer.append(button_office); // Append button to the container
	} 
	else if (player.factory_quest_flag === true) {
		// Button for Floor 3 - Office
		const button_office = document.createElement("button");
		button_office.textContent = "floor 3 - office";
		button_office.id = "button-Factory";
		button_office.addEventListener("click", function() {
			button_office.textContent = `calling elevator...`; // Update the text
			button_office.disabled = true; // Disable the button to prevent multiple clicks
			button_office.textContent = `elevating... ${elevator_timer}s`; // Initial countdown text

			// Start the countdown timer
			const countdownInterval = setInterval(function() {
				elevator_timer -= 1; // Decrease the timer each second
				button_office.textContent = `elevating... ${elevator_timer}s`;

				if (elevator_timer % 10 === 0 && elevator_timer > 0) {
					document.getElementById('NPC-Text').innerText = `getting there...`;
					ElevatorDingSFX();
				}

				if (elevator_timer <= 0) {
					clearInterval(countdownInterval);
					ViewOffice(); // Call the function to view the office
					button_office.disabled = false;
					button_office.textContent = "floor 3 - office";
					elevator_timer = 10; // Reset for future use
					ElevatorDoneSFX();
				}
			}, 1000);
		});
		NPCbuttonContainer.append(button_office);

		// Button for Floor 2 - Assembly
		const button_assembly = document.createElement("button");
		button_assembly.textContent = "floor 2 - assembly";
		button_assembly.id = "button-Factory";
		button_assembly.addEventListener("click", function() {
			button_assembly.textContent = `calling elevator...`;
			button_assembly.disabled = true;
			button_assembly.textContent = `elevating... ${elevator_timer}s`;

			const countdownInterval = setInterval(function() {
				elevator_timer -= 1;
				button_assembly.textContent = `elevating... ${elevator_timer}s`;

				if (elevator_timer % 10 === 0 && elevator_timer > 0) {
					document.getElementById('NPC-Text').innerText = `getting there...`;
					ElevatorDingSFX();
				}

				if (elevator_timer <= 0) {
					clearInterval(countdownInterval);
					ViewAssembly(); // Call the function for assembly floor
					button_assembly.disabled = false;
					button_assembly.textContent = "floor 2 - assembly";
					elevator_timer = 10;
					ElevatorDoneSFX();
				}
			}, 1000);
		});
		NPCbuttonContainer.append(button_assembly);

		// Button for Floor 1 - Manufacturing
		const button_manufacturing = document.createElement("button");
		button_manufacturing.textContent = "floor 1 - manufacturing";
		button_manufacturing.id = "button-Factory";
		button_manufacturing.addEventListener("click", function() {
			button_manufacturing.textContent = `calling elevator...`;
			button_manufacturing.disabled = true;
			button_manufacturing.textContent = `elevating... ${elevator_timer}s`;

			const countdownInterval = setInterval(function() {
				elevator_timer -= 1;
				button_manufacturing.textContent = `elevating... ${elevator_timer}s`;

				if (elevator_timer % 10 === 0 && elevator_timer > 0) {
					document.getElementById('NPC-Text').innerText = `getting there...`;
					ElevatorDingSFX();
				}

				if (elevator_timer <= 0) {
					clearInterval(countdownInterval);
					ViewManufacture(); // Call the function for manufacturing floor
					button_manufacturing.disabled = false;
					button_manufacturing.textContent = "floor 1 - manufacturing";
					elevator_timer = 10;
					ElevatorDoneSFX();
				}
			}, 1000);
		});
		NPCbuttonContainer.append(button_manufacturing);
	}
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function FirstspeakManager() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
     
   ^^^*^^^  
  *  $$$  *  
 *         *
************* 
~/  _    _\\~ 
~|  $  | $ |~
~\\      >  /~ 
~~\\ (___)_/~
`;
	document.getElementById('NPC-Text').innerText = `manager: then how about you work the lines since you got so much time, i need to sell 40 pieces of jewelry`;
	
	const button_acceptmanagerquest = document.createElement("button");
	button_acceptmanagerquest.textContent = "nothing better to do";
	button_acceptmanagerquest.id = "button-Factory";
	button_acceptmanagerquest.addEventListener("click", AcceptManagerQuest);
	NPCbuttonContainer.append(button_acceptmanagerquest);
}


function AcceptManagerQuest() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `manager: get to it then`;
	player.factory_quest_flag = true;
}

function FinishQuest() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `manager: alright, that's what i needed, come back to work anytime. here's your pay [gained 40,000 shines!]`;
	player.shinythings += 125000;
	player.factory_quest_flag = false;
	player.factory_quest_complete_flag = true;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ViewOffice() {
	document.getElementById('NPC').innerText = `
     
   ^^^*^^^  
  *  $$$  *  
 *         *
************* 
~/  _    _\\~ 
~|  $  | $ |~
~\\      >  /~ 
~~\\ (___)_/~
`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content

	if (player.news_quest === false) {
		if (player.factory_quest_flag === false) {
			document.getElementById('NPC-Text').innerText = `manager: who let you in here? what do you want? i ain't got time for this...`;
			const button_firstspeakmanager = document.createElement("button");
			button_firstspeakmanager.textContent = "well time is exactly what i got, buddy";
			button_firstspeakmanager.id = "button-Factory";
			button_firstspeakmanager.addEventListener("click", FirstspeakManager);
			NPCbuttonContainer.append(button_firstspeakmanager);
		}
		else if (player.factory_quest_flag === true && player.jewelry_quest_count < 40) {
			document.getElementById('NPC-Text').innerText = `manager: i'm still waiting on that jewelry`;
			
			const button_selljewelry = document.createElement("button");
			button_selljewelry.textContent = "sell jewelry";
			button_selljewelry.id = "button-Factory";
			button_selljewelry.addEventListener("click", SellJewelry);
			NPCbuttonContainer.append(button_selljewelry);

			const button_back = document.createElement("button");
			button_back.textContent = "go back";
			button_back.id = "button-Factory";
			button_back.addEventListener("click", EnterFactory);
			NPCbuttonContainer.append(button_back);
		}
		else if (player.factory_quest_flag === true && player.jewelry_quest_count >= 40) {
			document.getElementById('NPC-Text').innerText = `manager: well that's all 40, thanks for the work sonny`;
			
			const button_finishquest = document.createElement("button");
			button_finishquest.textContent = "give me my money";
			button_finishquest.id = "button-Factory";
			button_finishquest.addEventListener("click", FinishQuest);
			NPCbuttonContainer.append(button_finishquest);

			const button_back = document.createElement("button");
			button_back.textContent = "go back";
			button_back.id = "button-Factory";
			button_back.addEventListener("click", EnterFactory);
			NPCbuttonContainer.append(button_back);
		}
		else {
			document.getElementById('NPC-Text').innerText = `manager: you're back? why don't you make yourself useful and work the lines, sonny?`;
			
			const button_selljewelry = document.createElement("button");
			button_selljewelry.textContent = "sell jewelry";
			button_selljewelry.id = "button-Factory";
			button_selljewelry.addEventListener("click", SellJewelry);
			NPCbuttonContainer.append(button_selljewelry);
			
			const button_generalspeakmanager = document.createElement("button");
			button_generalspeakmanager.textContent = "speak to the manager";
			button_generalspeakmanager.id = "button-Factory";
			button_generalspeakmanager.addEventListener("click", GeneralspeakManager);
			NPCbuttonContainer.append(button_generalspeakmanager);
			
			const button_back = document.createElement("button");
			button_back.textContent = "go back";
			button_back.id = "button-Factory";
			button_back.addEventListener("click", EnterFactory);
			NPCbuttonContainer.append(button_back);
		}
	}
	else {
		const button_interview_manager = document.createElement("button");
		button_interview_manager.textContent = "interview the manager";
		button_interview_manager.id = "button-news";
		button_interview_manager.addEventListener("click", InterviewManager);
		NPCbuttonContainer.append(button_interview_manager);
	}
}

function GeneralspeakManager() {
	document.getElementById('NPC-Text').innerText = `manager: yeah yeah, get back to work`;
}

function SellJewelry() {
	if (player.jewelry >= 1) {
		player.jewelry -= 1;
		if (player.factory_quest_flag === true && player.jewelry_quest_count < 40) {
			player.jewelry_quest_count += 1;
			document.getElementById('NPC-Text').innerText = `shinymall shipping container: ${player.jewelry_quest_count} / 40 pieces of jewelry!`;
		}
		else if (player.factory_quest_flag === true && player.jewelry_quest_count === 40) {
			document.getElementById('NPC-Text').innerText = `... that's all 40! time to get paid!`;
		}
		else {
			document.getElementById('NPC-Text').innerText = `... and packed some jewelry into the shinymall storage container!`;
			NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
			player.shinythings += 1250;
		}
	}
	
	else {
		document.getElementById('NPC-Text').innerText = `you have no product to sell`;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ViewAssembly() {
	document.getElementById('NPC').innerText = `
_____________
█  ASSEMBLY  █
█            █
█    o       █
█== === === =█
█        o   █
█== === === =█
█o           █
█== === === =█
`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `it's the assembly line`;
	
	const button_input = document.createElement("button");
	button_input.textContent = "input";
	button_input.id = "button-Factory";
	button_input.addEventListener("click", Input);
	NPCbuttonContainer.append(button_input);
	
	const button_assemble = document.createElement("button");
	button_assemble.textContent = "assemble";
	button_assemble.id = "button-Factory";
	button_assemble.addEventListener("click", MakeShinyrock);
	NPCbuttonContainer.append(button_assemble);
	
	const button_back = document.createElement("button");
	button_back.textContent = "go back";
	button_back.id = "button-Factory";
	button_back.addEventListener("click", EnterFactory);
	NPCbuttonContainer.append(button_back);
}

let input_stage = 1;
function Input() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_input = document.createElement("button");
	button_input.textContent = "input";
	button_input.id = "button-Factory";
	button_input.addEventListener("click", Input);
	NPCbuttonContainer.append(button_input);
			
	if (input_stage < 5) {
		moveButtonDown();
		input_stage += 1;
		if (input_stage === 5) {
			button_input.style.backgroundColor = 'green';
		}
	}
	else {
		const button_backassembly = document.createElement("button");
		button_backassembly.textContent = "go back";
		button_backassembly.id = "button-Factory";
		button_backassembly.addEventListener("click", ViewAssembly);
		NPCbuttonContainer.append(button_backassembly);
	
		input_stage = 1;
		if (player.shinythings >= 400 && player.rockcandy >= 1 && player.input_flag === false) {
			NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
			document.getElementById('NPC-Text').innerText = `you smushed together shiny things with rockcandy...`;
			player.shinythings -= 400;
			player.rockcandy -= 1;
			player.makeshinyrock_flag = true;
			player.input_flag = true;
			input_stage = 1;
		}
		else if (player.input_flag === true) {
			document.getElementById('NPC-Text').innerText = `there is already some materials in the assembly line`;
		}
		else if (player.shinythings < 400) {
			document.getElementById('NPC-Text').innerText = `you don't have enough shiny things`;
		}
		else if (player.rockcandy < 1) {
			document.getElementById('NPC-Text').innerText = `you don't have enough rockcandy`;
		}
	}
}

function MakeShinyrock() {
	if (player.makeshinyrock_flag === true) {
		player.input_flag = false;
		player.shinyrocks += 1;
		document.getElementById('NPC-Text').innerText = `... and made a shinyrock!`;
		if (!player.shinyrocks_flag) {
			player.shinyrocks_flag = true;
		}
		player.makeshinyrock_flag = false;
	}
	else {
		document.getElementById('NPC-Text').innerText = `there is nothing in the assembly to make`;
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ViewManufacture() {
	document.getElementById('NPC').innerText = `
_____________
█MANUFACTURE █
█[s][s] [s][s█
█        o   █
█[]=[_]=[x]=[█
█          l █
█[]=[_]=[x]=[█
█  l o       █
█[]=[_]=[x]=[█
`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `this is manufacturing`;
	
	const button_manufacture = document.createElement("button");
	button_manufacture.textContent = "manufacture";
	button_manufacture.id = "button-Factory";
	button_manufacture.addEventListener("click", Manufacture);
	NPCbuttonContainer.append(button_manufacture);
	
	const button_package = document.createElement("button");
	button_package.textContent = "package";
	button_package.id = "button-Factory2";
	button_package.addEventListener("click", Package);
	NPCbuttonContainer.append(button_package);
	
	const button_back = document.createElement("button");
	button_back.textContent = "go back";
	button_back.id = "button-Factory";
	button_back.addEventListener("click", EnterFactory);
	NPCbuttonContainer.append(button_back);
}

function Manufacture() {
    if (!player.active_button_flag) {
		document.getElementById('NPC-Text').innerText = `... you begin manufacturing the shinyrocks into jewelry...`;
        player.active_button_flag = true;
        const button = document.getElementById("button-Factory");
		let timer = 5;
        button.textContent = `manufacturing... (${timer}s)`;
        const interval = setInterval(function () {
            timer--;
            button.textContent = `manufacturing... (${timer}s)`;
            if (timer <= 0) {
				if (player.shinyrocks >= 1 && player.makejewelry_flag === false) {
					document.getElementById('NPC-Text').innerText = `... and made some jewelry!`;
					player.shinyrocks -= 1;		
					player.makejewelry_flag = true;
				}
				else if (player.makejewelry_flag === true) {
					document.getElementById('NPC-Text').innerText = `you already have some jewelry in the manufacturing line`;
				}
				else if (player.shinyrocks < 1) {
					document.getElementById('NPC-Text').innerText = `you don't have enough shinyrocks`;
				}
                clearInterval(interval);
                button.textContent = "manufacture";
                player.active_button_flag = false;
            }
        }, 400);
    }
}

function Package() {
    if (!player.active_button_flag) {
        player.active_button_flag = true;
        const button = document.getElementById("button-Factory2");
		let timer = 2;
        button.textContent = `packaging... (${timer}s)`;
        const interval = setInterval(function () {
            timer--;
            button.textContent = `packaging... (${timer}s)`;
            if (timer <= 0) {
				if (player.makejewelry_flag === true) {
					document.getElementById('NPC-Text').innerText = `you packaged the jewelry into fancy packages...`;
					player.jewelry += 1;
					if (player.jewelry_flag === false) {
						player.jewelry_flag = true;
					}
					player.makejewelry_flag = false;
				}
				else if (player.makejewelry_flag === false) {
					document.getElementById('NPC-Text').innerText = `you don't have any jewelry to package`;
				}
                clearInterval(interval);
                button.textContent = "package";
                player.active_button_flag = false;
            }
        }, 400);
    }
}

//////////////////////////////////////////////////////////////////////