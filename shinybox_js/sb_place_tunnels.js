////////////////////////////////////
//tunnels

function ViewTunnels() {
	TunnelsMusic();
	resetButtonPosition();
	player.location = "tunnels1"
	player.tunnels_stage = 1;
	ChangeBG();
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	document.getElementById('NPC').innerText = `
      

   tunnels    
█████|█████████
█████|█████████
████ * ████████
███     ███████
██       ██████
█         █████
    /o/    ████
`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `it's an entrance to some tunnels`;
	
	const button_entertunnels = document.createElement("button");
	button_entertunnels.textContent = "enter the tunnels";
	button_entertunnels.id = "button-tunnels";
	button_entertunnels.addEventListener("click", Entertunnels);
	NPCbuttonContainer.append(button_entertunnels);
}

function Entertunnels() {
	player.location = "tunnels2"
	player.tunnels_stage = 2;
	ChangeBG();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
      

tunnel entrance    
██████████|████
██████████|████
██████████|████
█████████ * ███
████████     ██
███████       █
██████   /o/  █

`;
	document.getElementById('NPC-Text').innerText = `entering the tunnels...`;
	const starttunnels = document.createElement("button");
	starttunnels.textContent = "in we go...";
	starttunnels.id = "button-tunnels";
	starttunnels.addEventListener("click", Starttunnels);
	NPCbuttonContainer.append(starttunnels);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function RandomizeTunnelPortrait() {
	let randomInt = getRandomInt(1, 4);
		if (randomInt === 1) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
████ | ████████
████ | ████████
████ * ████████
███     ███████
██       ██████
█         █████
    /o/    ████
`;
		}
		
		else if (randomInt === 2) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
███  |  ███ ███
█    |  ███ ███
████ * ████  ██
███     ████ ██
██       ███  █
█         ███ █
    /o/    ██ █
`;
		}
		
		else if (randomInt === 3) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
████ | ████████
████ | ████████
████ * ████████
████   ████████
████   ████████
████   ████████
████/o/████████
`;
		}
		
		else if (randomInt === 4) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
██████████ |  █
█████████  * ██
███████     ███
██████     ████
████      █████
██       ██████
██  /o/  ██████
`;
		}
		
		else if (randomInt === 5) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
█████ |  ██████
██    |      ██
      *        
               
██           ██
██           ██
███████ /o/ ███
`;
		}
		
		else if (randomInt === 6) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
███  |  ███ ███
█    |  ███ ███
████ * ████  ██
███     ████ ██
██     █████  █
████          █
████████ /o/█ █
`;
		}
		
		else if (randomInt === 7) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
████ | | ██████
████ | | ██████
████ * * ██████
████     ██████
████     ██████
████     ██████
████  /o/██████
`;
		}
		
		else if (randomInt === 8) {
			document.getElementById('NPC').innerText = `
      

 inner tunnels    
█  |██████ |  █
██ * ███   *███
██    █     ███
███        ████
████      █████
██         ████
████  /o/ █████
`;
		}
}


function Starttunnels() {
	ChangeBG();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	player.location = "tunnels3"
	player.tunnels_stage = 3;
	document.getElementById('NPC').innerText = `
      

 inner tunnels    
█████|█████████
█████|█████████
████ * ████████
███     ███████
██       ██████
█         █████
    /o/    ████
`;
	document.getElementById('NPC-Text').innerText = `one tunnel leads to another...`;
	const deeper = document.createElement("button");
	deeper.textContent = "try to go through";
	deeper.id = "button-tunnels2";
	deeper.addEventListener("click", Deepertunnels);
	NPCbuttonContainer.append(deeper);
}

function RecreateButton() {
    // Create a new unique button for tunneling
    const buttonId = `button-tunnels-${Date.now()}`; // Generate a unique ID
    const deeper = document.createElement("button");
    deeper.textContent = "go tunneling";
    deeper.id = "button-tunnels";
    deeper.addEventListener("click", Deepertunnels);
    NPCbuttonContainer.append(deeper);
}

function Deepertunnels() {
	am_tunneling_flag = true;
    if (!player.active_button_flag) {
        player.active_button_flag = true; // Allow for another action after completion
        RandomizeTunnelPortrait();
        ChangeBG();
        player.tunnels_fail_flag = false;
        NPCbuttonContainer.innerHTML = ''; // Clear existing buttons or content
        
        const button = document.createElement("button");
        let timer = 1; // Use a more reasonable timer length
        button.textContent = `tunneling... (${timer}s)`;
		button.id = "button-tunnels";
        NPCbuttonContainer.append(button);

        const interval = setInterval(function () {
			NPCbuttonContainer.innerHTML = ''; // Clear existing buttons or content
            timer--;
            button.textContent = `tunneling... (${timer}s)`;
            if (timer <= 0) {
                clearInterval(interval); // Stop the interval when the timer hits zero
                button.textContent = "keep tunneling..."; // Button text after completion
                let randomInt = getRandomInt(1, 14);

                if (randomInt === 1) {
                    console.log("roll fail");
                    player.tunnels_fail_flag = true;
                    document.getElementById('NPC-Text').innerText = `you got lost in the corridors and ended up in a tunnel from before!`;
                }

                if (!player.tunnels_fail_flag) {
                    // Stage progression logic
                    switch (player.tunnels_stage) {
                        case 3:
                            player.location = "tunnels4";
                            player.tunnels_stage = 4;
                            document.getElementById('NPC-Text').innerText = `deeper into the tunnels...`;
                            break;
                        case 4:
                            player.location = "tunnels5";
                            player.tunnels_stage = 5;
                            document.getElementById('NPC-Text').innerText = `getting there...`;
                            break;
                        case 5:
                            player.location = "tunnels6";
                            player.tunnels_stage = 6;
                            document.getElementById('NPC-Text').innerText = `moving forward...`;
                            break;
                        case 6:
                            player.location = "tunnels7";
                            player.tunnels_stage = 7;
                            document.getElementById('NPC-Text').innerText = `taking some turns...`;
                            break;
                        case 7:
                            player.location = "tunnels8";
                            player.tunnels_stage = 8;
                            document.getElementById('NPC-Text').innerText = `trying some doors...`;
                            break;
                        case 8:
                            player.location = "tunnels7";
                            player.tunnels_stage = 9;
                            document.getElementById('NPC-Text').innerText = `trying not to get lost...`;
                            break;
                        case 9:
                            player.location = "tunnels6";
                            player.tunnels_stage = 10;
                            document.getElementById('NPC-Text').innerText = `peeks of light creep in...`;
                            break;
                        case 10:
                            player.location = "tunnels5";
                            player.tunnels_stage = 11;
                            document.getElementById('NPC-Text').innerText = `hopefully soon...`;
                            break;
                        case 11:
                            player.location = "tunnels4";
                            player.tunnels_stage = 12;
                            document.getElementById('NPC-Text').innerText = `this has to be right...`;
                            break;
                        case 12:
                            player.location = "tunnels3";
                            player.tunnels_stage = 13;
                            document.getElementById('NPC-Text').innerText = `only a little further...`;
                            break;
                        case 13:
                            player.location = "tunnels2";
                            player.tunnels_stage = 14;
                            document.getElementById('NPC-Text').innerText = `a light at the end of the tunnel...`;
                            break;
                        case 14:
                            NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
                            player.location = "tunnels1";
                            player.tunnels_stage = 0;
                            document.getElementById('NPC-Text').innerText = `and it glows like shinythings!`;

                            // Inside the Deepertunnels function, check if the exit button is properly created
							const exitButton = document.createElement("button");
							exitButton.textContent = "exit the tunnels";
							exitButton.id = `exit-tunnels-${Date.now()}`; // Ensure unique ID

							ExitTunnels();
                            break;
                        default:
                            break;
                    }
					if (player.tunnels_stage > 0) {
						RecreateButton(); // Recreate button only after the action completes
					}
                } else {
                    // Failure logic: Go back to a lower tunnel level
                    let minStage = Math.max(0, player.tunnels_stage - 4);
                    player.tunnels_stage = getRandomInt(minStage, player.tunnels_stage - 1);
                    console.log(`Roll fail; going to stage ${player.tunnels_stage}`);
                    document.getElementById('NPC-Text').innerText = `you stumble back to a lower tunnel level...`;

                    RecreateButton(); // Recreate button after failure
                }
                player.active_button_flag = false; // Reset flag after action
            }
        }, 400); // Timer interval for tunneling process
    }
}



function ExitTunnels() {
    // Clear the button containers for the exit action
    NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
    buttonContainer.innerHTML = ''; // Clear other buttons if necessary
    // Reset player stage and location
    player.tunnels_stage = 0;
    // Determine where the player exits based on the flag
    if (player.otherside_flag === false) {
        // If the player has not exited before, show the Shiny City
        document.getElementById('NPC').innerText = `
        'THE SHINING  
             CITY'     
        $     /\\     $
        █    /  \\    █
        █   /    \\   █
        █  /      \\  █
        █ /        \\ █
        █/    /o/   \\█
        `;
        document.getElementById('NPC-Text').innerText = `you made it through! welcome back to the city outskirts!`;

        // Set the flag indicating the player is on the "other side"
        player.otherside_flag = true;
    } else {
        // If the player is on the other side already, return to shinyville
        document.getElementById('NPC').innerText = `
        shinyville  
        /\\      
       /  \\     
      /    \\    
    *  /      \\  *
    | /        \\ |
    |/    /o/   \\|
        `;
        document.getElementById('NPC-Text').innerText = `you made it through! welcome back to shinyville!`;

        // Reset the flag, since the player has exited
        player.otherside_flag = false;
	}
}