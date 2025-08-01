////////////////////////////////////
//laundromat

function ViewLaundromat() {
	LaundromatMusic();
	resetButtonPosition();
	player.location = "laundromat"
	ChangeBG();
	document.getElementById('NPC').innerText = `
███████████████
█*  ~      *  █
█~    *      ~█
█SHINY    ~ * █
█ CLOTHES  *  █
█~  LAUNDROMAT█
█    ~ ~  * ~ █
█ ~   *       █
███████████████ 
`;
	document.getElementById('NPC-Text').innerText = `it's an abandoned laundromat`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_getquarters = document.createElement("button");
	button_getquarters.textContent = "get quarters";
	button_getquarters.id = "button-laundromat";
	button_getquarters.addEventListener("click", QuarterMachine);
	NPCbuttonContainer.append(button_getquarters);
	
	const button_wash = document.createElement("button");
	button_wash.textContent = "wash";
	button_wash.id = "button-laundromat";
	button_wash.addEventListener("click", Wash);
	NPCbuttonContainer.append(button_wash);
	
	const button_dry = document.createElement("button");
	button_dry.textContent = "dry";
	button_dry.id = "button-laundromat";
	button_dry.addEventListener("click", Dry);
	NPCbuttonContainer.append(button_dry);
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUARTERS

function QuarterMachine() {
	document.getElementById('NPC').innerText = `
███████████████
███QUARTERS████
███████████████
████$████Q█████
████|█==█|█████
████|████|█████
███████████████
██████████()███
███████████████ 
`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	if (player.laundromat_quarters_on === true) {
		const button_getquarters = document.createElement("button");
		button_getquarters.textContent = "get quarters";
		button_getquarters.id = "button-laundromat";
		button_getquarters.addEventListener("click", GetQuarters);
		NPCbuttonContainer.append(button_getquarters);
	}
	else {
		document.getElementById('NPC-Text').innerText = `quarter machine needs power`;
		const button_poweronquarters = document.createElement("button");
		button_poweronquarters.textContent = "power on the machine";
		button_poweronquarters.id = "button-laundromat";
		button_poweronquarters.addEventListener("click", PowerQuarters);
		NPCbuttonContainer.append(button_poweronquarters);
	}
}

function GetQuarters() {
	if (player.shinythings >= 100) {
		if (player.laundromat_quarters_on === true) {
			QuartersSFX();
			document.getElementById('NPC-Text').innerText = `bought a quarter`;
			player.shinythings -= 100
			player.quarters += 1;
			if (player.quarters_flag === false) {
				player.quarters_flag = true;
			}
			let randomInt = getRandomInt(1, 4);
			if (randomInt === 1) {
				player.laundromat_quarters_on = false;
				document.getElementById('NPC-Text').innerText = `the machine died!`;
			}
		}
	}
	else {
		document.getElementById('NPC-Text').innerText = `not enough shinies!`;
	}
}

function PowerQuarters() {
	if (player.batteries >=1 && player.laundromat_quarters_on === false) {
		PowerOnSFX();
		document.getElementById('NPC-Text').innerText = `you put a battery in the quarter machine`;
		player.batteries -= 1
		player.laundromat_quarters_on = true;
	}
	else if (player.laundromat_quarters_on === true) {
		document.getElementById('NPC-Text').innerText = `the quarter machine is already on`;
	}
	else {
		document.getElementById('NPC-Text').innerText = `you don't have any batteries`;
	}
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//WASH

function QuartersWash() {
    if (player.quarters >= 1) {
        QuartersSFX();
        document.getElementById('NPC-Text').innerText = `you put a quarter in the washing machine`;
        player.quarters -= 1;
        player.wash_time += 20;
        totalRemainingTime += 20;  // Add 20 seconds to the remaining time each time a quarter is inserted
        player.laundromat_wash_on = true;

        // Clear buttons first
        NPCbuttonContainer.innerHTML = '';

        // Add new buttons
        const buttonResume = document.createElement("button");
        buttonResume.textContent = "wash";
        buttonResume.id = "button-laundromat";
        buttonResume.addEventListener("click", function () {
            startWashCooldown(totalRemainingTime);  // Start the cooldown with the updated remaining time
        });
        NPCbuttonContainer.append(buttonResume);

        const buttonCheckWasher = document.createElement("button");
        buttonCheckWasher.textContent = "check on the laundry";
        buttonCheckWasher.id = "button-laundromat";
        buttonCheckWasher.addEventListener("click", CheckWash);
        NPCbuttonContainer.append(buttonCheckWasher);

        const buttonQuarter = document.createElement("button");
        buttonQuarter.textContent = "put a quarter in";
        buttonQuarter.id = "button-laundromat";
        buttonQuarter.addEventListener("click", QuartersWash);
        NPCbuttonContainer.append(buttonQuarter);
    } else {
        document.getElementById('NPC-Text').innerText = `you don't have any quarters`;
    }
}

function Wash() {
	document.getElementById('NPC').innerText = `
███████████████
████WASHER█████
███████████████
███-(-----)-███
███(       )███
███|   //  |███
███(-------)███
██████████()███
███████████████ 
`;
	document.getElementById('NPC-Text').innerText = `it's a washing machine`;

	NPCbuttonContainer.innerHTML = ''; // Clear buttons

	if (player.laundromat_wash_on === true) {
		const buttonWash = document.createElement("button");
		buttonWash.textContent = "wash laundry";
		buttonWash.id = "button-laundromat";
		buttonWash.addEventListener("click", WashLaundry);
		NPCbuttonContainer.append(buttonWash);
		
		const buttonCheckWasher = document.createElement("button");
		buttonCheckWasher.textContent = "check on the laundry";
		buttonCheckWasher.id = "button-laundromat";
		buttonCheckWasher.addEventListener("click", CheckWash);
		NPCbuttonContainer.append(buttonCheckWasher);
	} 
	else {
		document.getElementById('NPC-Text').innerText = `washing machine needs quarters`;
		const buttonQuarter = document.createElement("button");
		buttonQuarter.textContent = "put a quarter in";
		buttonQuarter.id = "button-laundromat";
		buttonQuarter.addEventListener("click", QuartersWash);
		NPCbuttonContainer.append(buttonQuarter);
	}
}

let isCooldown = false;
function WashLaundry() {
    if (isCooldown) return;
    if (player.laundromat_wash_on === true) {
        document.getElementById('NPC-Text').innerText = "you start washing the laundry";
        startWashCooldown(player.wash_time);
    } else {
        document.getElementById('NPC-Text').innerText = "the washing machine is not on";
    }
}

let totalRemainingTime = 0;
function startWashCooldown(seconds) {
    player.am_using_computer = true;  //used for button control
    const button = document.getElementById("button-laundromat") || document.getElementById("button-resume-wash");
    isCooldown = true;
    totalRemainingTime = seconds;  // Initialize the total remaining time (in seconds)
    
    if (player.laundromat_wash_on === true && totalRemainingTime > 0) {
        button.disabled = true;
        button.textContent = `washing... ${totalRemainingTime}s`;
        
        const interval = setInterval(() => {
            totalRemainingTime--; // Decrease the global remaining time
            player.wash_time -= 1;
            player.total_wash_time += 1;

            // Check if we reach the 300 second mark for special condition
            if (player.total_wash_time === 300) {
                document.getElementById('NPC-Text').innerText = `you washed the monk's clothes`;
                player.has_washed_monk_clothes = true;
                player.washer_done_flag = true;
                player.laundromat_wash_on = false;
                clearInterval(interval); // Stop the interval when washing is done
                return;
            }

            if (totalRemainingTime > 0) {
                button.textContent = `washing... ${totalRemainingTime}s`; // Update the button text with remaining time
            } else {
                clearInterval(interval); // When remaining time hits zero, stop the countdown
                player.am_using_computer = false;
                isCooldown = false;
                button.disabled = false;
                button.textContent = "wash"; // Reset the button to its initial state
            }
        }, 1000);
    } else {
        document.getElementById('NPC-Text').innerText = `the machine needs more quarters`;
    }
}


function CheckWash() {
    if (player.laundromat_wash_on === true) {
        if (player.has_washed_monk_clothes === true) {
            document.getElementById('NPC-Text').innerText = `The monk's laundry is done!`;
        } else {
            // Calculate the percentage of the washing process
            let percentage = Math.floor((player.total_wash_time / 300) * 100);

            // Display the progress message
            if (percentage === 100) {
                document.getElementById('NPC-Text').innerText = `Laundry is complete!`;
            } else {
                document.getElementById('NPC-Text').innerText = `${percentage}% done...`;
            }
        }
    }
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DRY

function QuartersDry() {
    if (player.quarters >= 1) {
        QuartersSFX();
        document.getElementById('NPC-Text').innerText = `you put a quarter in the drying machine`;
        player.quarters -= 1;
        player.dry_time += 20;
        totalRemainingTime += 20;  // Add 20 seconds to the remaining time each time a quarter is inserted
        player.laundromat_dry_on = true;

        // Clear buttons first
        NPCbuttonContainer.innerHTML = '';

        // Add new buttons
        const buttonResume = document.createElement("button");
        buttonResume.textContent = "dry";
        buttonResume.id = "button-laundromat";
        buttonResume.addEventListener("click", function () {
            startDryCooldown(totalRemainingTime);  // Start the cooldown with the updated remaining time
        });
        NPCbuttonContainer.append(buttonResume);

        const buttonCheckDryer = document.createElement("button");
        buttonCheckDryer.textContent = "check on the laundry";
        buttonCheckDryer.id = "button-laundromat";
        buttonCheckDryer.addEventListener("click", CheckDry);
        NPCbuttonContainer.append(buttonCheckDryer);

        const buttonQuarter = document.createElement("button");
        buttonQuarter.textContent = "put a quarter in";
        buttonQuarter.id = "button-laundromat";
        buttonQuarter.addEventListener("click", QuartersDry);
        NPCbuttonContainer.append(buttonQuarter);
    } else {
        document.getElementById('NPC-Text').innerText = `you don't have any quarters`;
    }
}
function Dry() {
	document.getElementById('NPC').innerText = `
███████████████
█████DRYER█████
███████████████
███---------███
███| /     |███
███|     / |███
███---------███
██████████()███
███████████████ 
`;
	document.getElementById('NPC-Text').innerText = `it's a drying machine`;

	NPCbuttonContainer.innerHTML = ''; // Clear buttons

	if (player.laundromat_dry_on === true) {
		const buttonDry = document.createElement("button");
		buttonDry.textContent = "dry laundry";
		buttonDry.id = "button-laundromat";
		buttonDry.addEventListener("click", DryLaundry);
		NPCbuttonContainer.append(buttonDry);
		
		const buttonCheckDryer = document.createElement("button");
		buttonCheckDryer.textContent = "check on the laundry";
		buttonCheckDryer.id = "button-laundromat";
		buttonCheckDryer.addEventListener("click", CheckDry);
		NPCbuttonContainer.append(buttonCheckDryer);
	} 
	else {
		document.getElementById('NPC-Text').innerText = `drying machine needs quarters`;
		const buttonQuarter = document.createElement("button");
		buttonQuarter.textContent = "put a quarter in";
		buttonQuarter.id = "button-laundromat";
		buttonQuarter.addEventListener("click", QuartersDry);
		NPCbuttonContainer.append(buttonQuarter);
	}
}

let isCooldown2 = false;
function DryLaundry() {
    if (isCooldown2) return;
    if (player.laundromat_dry_on === true) {
        document.getElementById('NPC-Text').innerText = "you start drying the laundry";
        startDryCooldown(player.dry_time);
    } else {
        document.getElementById('NPC-Text').innerText = "the drying machine is not on";
    }
}

function startDryCooldown(seconds) {
    player.am_using_computer = true;  //used for button control
    const button = document.getElementById("button-laundromat") || document.getElementById("button-resume-dry");
    isCooldown = true;
    totalRemainingTime = seconds;  // Initialize the total remaining time (in seconds)
    
    if (player.laundromat_dry_on === true && totalRemainingTime > 0) {
        button.disabled = true;
        button.textContent = `drying... ${totalRemainingTime}s`;
        
        const interval = setInterval(() => {
            totalRemainingTime--; // Decrease the global remaining time
            player.dry_time -= 1;
            player.total_dry_time += 1;

            // Check if we reach the 300 second mark for special condition
            if (player.total_dry_time === 300) {
                document.getElementById('NPC-Text').innerText = `you dryed the monk's clothes`;
                player.has_dryed_monk_clothes = true;
                player.dryer_done_flag = true;
                player.laundromat_dry_on = false;
                clearInterval(interval); // Stop the interval when drying is done
                return;
            }

            if (totalRemainingTime > 0) {
                button.textContent = `drying... ${totalRemainingTime}s`; // Update the button text with remaining time
            } else {
                clearInterval(interval); // When remaining time hits zero, stop the countdown
                player.am_using_computer = false;
                isCooldown = false;
                button.disabled = false;
                button.textContent = "dry"; // Reset the button to its initial state
            }
        }, 1000);
    } else {
        document.getElementById('NPC-Text').innerText = `the machine needs more quarters`;
    }
}


function CheckDry() {
    if (player.laundromat_dry_on === true) {
        if (player.has_dryed_monk_clothes === true) {
            document.getElementById('NPC-Text').innerText = `The monk's laundry is done!`;
        } else {
            // Calculate the percentage of the drying process
            let percentage = Math.floor((player.total_dry_time / 300) * 100);

            // Display the progress message
            if (percentage === 100) {
                document.getElementById('NPC-Text').innerText = `Laundry is complete!`;
            } else {
                document.getElementById('NPC-Text').innerText = `${percentage}% done...`;
            }
        }
    }
}

