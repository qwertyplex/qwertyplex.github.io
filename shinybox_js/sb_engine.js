function UpdateLabels(){
	if (player.am_using_computer === false) {
		
		document.getElementById('shinythings').innerHTML = `<span style="color: #eeeeee;">shiny things</span>: ${player.shinythings.toLocaleString()}`;
		
		if (player.shinecoins_flag === true) {
			document.getElementById('pigeons').innerHTML = `<span style="color: #dddbce;">$hinecoins</span>: ${player.shinecoins}`;
		}
		if (player.pigeons_flag === true) {
			document.getElementById('pigeons').innerHTML = `<span style="color: #dddbce;">pigeons</span>: ${player.pigeons}`;
		}
		if (player.batteries_flag === true) {
			document.getElementById('batteries').innerHTML = `<span style="color: #0542fc;">batteries</span>: ${player.batteries}`;
		}
		if (player.lemons_flag === true) {
			document.getElementById('lemons').innerHTML = `<span style="color: #fcf005;">lemons</span>: ${player.lemons}`;
		}
		if (player.rockcandy_flag === true) {
			document.getElementById('rockcandy').innerHTML = `<span style="color: #fc05eb;">rockcandy</span>: ${player.rockcandy}`;
		}
		if (player.sticks_flag === true) {
			document.getElementById('sticks').innerHTML = `<span style="color: #8e5b39;">sticks</span>: ${player.sticks}`;
		}
		if (player.ram_sticks_flag === true) {
			document.getElementById('ram_sticks').innerHTML = `<span style="color: #f78b07;">sticks of RAM</span>: ${player.ram_sticks}`;
			console.log("called ram");
		}
		if (player.gold_flag === true) {
			document.getElementById('gold').innerHTML = `<span style="color: #f9f44d;">gold</span>: ${player.gold}`;
		}
		if (player.shinyrocks_flag === true) {
			document.getElementById('shinyrocks').innerHTML = `<span style="color: #4df9ee;">shinyrocks</span>: ${player.shinyrocks}`;
		}
		if (player.jewelry_flag === true) {
			document.getElementById('jewelry').innerHTML = `<span style="color: #d44df9;">jewelry</span>: ${player.jewelry}`;
		}
		if (player.quarters_flag === true) {
			document.getElementById('quarters').innerHTML = `<span style="color: #cee0db;">quarters</span>: ${player.quarters}`;
		}
		if (player.wishing_stone_flag === true) {
			document.getElementById('wishing_stones').innerHTML = `<span style="color: #cee0db;">wishing stones</span>: ${player.wishing_stones}`;
		}
		if (player.potions_flag === true) {
			document.getElementById('potions').innerHTML = `<span style="color: #e07694;">potions</span>: ${player.potions}`;
		}
		if (player.hp_flag === true) {
			document.getElementById('hp').innerHTML = `<span style="color: #ee0000;">hp</span>: ${player.hp}`;
		}
		if (player.sword_durability_flag === true) {
			document.getElementById('hp').innerHTML = `<span style="color: #aaaaaa;">hp</span>: ${player.sword_durability}`;
		}
	}
	
	else if (player.am_using_computer === true) {
		if (player.input_computer_flag === true) {
			let inputElement = document.getElementById("userInput");
			let buttonElement = document.getElementById("submit-button");

			// Create input if it doesn't exist
			if (!inputElement) {
				inputElement = document.createElement("input");
				inputElement.type = "text";
				inputElement.id = "userInput";
				inputElement.placeholder = "hmm...";
			}

			// Create button if it doesn't exist
			if (!buttonElement) {
				buttonElement = document.createElement("button");
				buttonElement.id = "submit-button";
				buttonElement.innerText = "submit";
				buttonElement.onclick = function() {
					TypeCommand();
				};
			}

			let container = document.getElementById("NPC-Button-Container");

			// Append only if not already present
			if (!document.getElementById("userInput")) {
				container.appendChild(inputElement);
			}
			if (!document.getElementById("submit-button")) {
				container.appendChild(buttonElement);
			}
		}
	}
	else if (player.input_computer_flag === false) {
		let inputElement = document.getElementById("userInput");
		let buttonElement = document.getElementById("submit-button");
		if (inputElement) inputElement.remove();
		if (buttonElement) buttonElement.remove();
	}


	
	//special items
	
	if (player.headlamp_flag === true) {
		document.getElementById('headlamp').innerText = `headlamp: yes`;
	}
	
	if (player.birdcage_flag === true) {
		document.getElementById('birdcage').innerText = `birdcage: yes`;
	}
	
	if (player.canary_flag === true) {
		document.getElementById('canary').innerText = `canary: yes`;
	}
	
	if (player.library_card_flag === true) {
		document.getElementById('librarycard').innerText = `library card: yes`;
	}
	
	if (player.codex_flag === true) {
		document.getElementById('codex').innerText = `codex: yes`;
	}
	
	if (player.pocketwatch_flag === true) {
		document.getElementById('pocketwatch').innerText = `pocket watch: yes`;
	}
	
	if (player.wishingstone_flag === true) {
		document.getElementById('wishingstone').innerText = `wishing stone: yes`;
	}
}




////////////////////////////////////
//*GAME LOOP
let lastUpdate = performance.now();
let timeAccumulator = 0;

function gameLoop(timestamp) {
	if (!player.game_paused) {
		let deltaTime = timestamp - lastUpdate;
		lastUpdate = timestamp;
		timeAccumulator += deltaTime;

		if (timeAccumulator >= 1250) {
			timeAccumulator -= 1250;
			player.time += 1;

			// Shinythings accumulation
			if (player.pigeons === 0 && player.multiplier > 0) {
				player.shinythings += 1;
			}
			else if (player.pigeons === 0) {
				player.shinythings += 1;
			}
			else if (player.pigeons === 1) {
				player.shinythings += player.pigeons + 1;
			} 
			else {
				player.shinythings += 1 * player.pigeons + 1;
			}
		}
	} else {
		// Don't accumulate time while paused
		lastUpdate = timestamp; // Prevent big delta when unpausing
	}
	createButton(); // Runs regardless
	UpdateLabels();
	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);






//create buttons
const buttonContainer = document.getElementById('Button-Container');
function createButton() {
	if (player.am_using_computer === false) {
		if (player.otherside_flag === false) {
			player.tunnels2_flag = false;
			player.temple_flag = false;
			player.teahouse_flag =false;
			player.internetcafe_flag = false;
			player.laundromat_flag = false;
			player.newsstudio_flag = false;
			player.bank_flag = false;
			player.banquet_flag = false;
			player.castle_flag = false;
			player.wizard_flag = false;
			player.dungeon_flag = false;		
			player.devroom_flag = false;
			
			const button_discard_shinythings = document.createElement("button");
			if (player.shinythings >= 5 && player.discard_shinythings_flag === false) {
				UnlockSound();
				button_discard_shinythings.textContent = "throw shinythings";
				button_discard_shinythings.id = "button-discard";
				button_discard_shinythings.addEventListener("click", DiscardShinythings);
				buttonContainer.append(button_discard_shinythings);
				player.discard_shinythings_flag = true;
			}
			
			const button_cellphone = document.createElement("button");
			if (player.shinythings >= 15 && player.cellphone_flag === false) {
				UnlockSound();
				button_cellphone.textContent = "cellphone";
				button_cellphone.id = "button-cellphone";
				button_cellphone.addEventListener("click", ViewCellphone);
				buttonContainer.append(button_cellphone);
				player.cellphone_flag = true;
			}
			
			const button_trader = document.createElement("button");
			if (player.shinythings >= 30 && player.trader_flag === false) {
				UnlockSound();
				button_trader.textContent = "trader";
				button_trader.id = "button-trader";
				button_trader.addEventListener("click", ViewTrader);
				buttonContainer.append(button_trader);
				player.trader_flag = true;
			}
			
			const button_lemontree = document.createElement("button");
			if (player.shinythings >= 60 && player.lemontree_flag === false) {
				UnlockSound();
				button_lemontree.textContent = "lemontree";
				button_lemontree.id = "button-lemontree";
				button_lemontree.addEventListener("click", ViewLemontree);
				buttonContainer.append(button_lemontree);
				player.lemontree_flag = true;
			}
			
			const button_vendingmachine = document.createElement("button");
			if (player.batteries >= 1 && player.vendingmachine_flag === false) {
				UnlockSound();
				button_vendingmachine.textContent = "dirty vending machine";
				button_vendingmachine.id = "button-vendingmachine";
				button_vendingmachine.addEventListener("click", ViewVendingMachine);
				buttonContainer.append(button_vendingmachine);
				player.vendingmachine_flag = true;
			}
			
			const button_cave = document.createElement("button");
			if (player.batteries >= 1 && player.cave_flag === false) {
				UnlockSound();
				button_cave.textContent = "cave";
				button_cave.id = "button-cave";
				button_cave.addEventListener("click", ViewCave);
				buttonContainer.append(button_cave);
				player.cave_flag = true;
			}
			
			const button_pawnshop = document.createElement("button");
			if (player.headlamp_flag === true && player.pawnshop_flag === false) {
				UnlockSound();
				button_pawnshop.textContent = "pawnshop";
				button_pawnshop.id = "button-pawnshop";
				button_pawnshop.addEventListener("click", ViewPawnshop);
				buttonContainer.append(button_pawnshop);
				player.pawnshop_flag = true;
			}
			
			const button_library = document.createElement("button");
			if (player.headlamp_flag === true && player.library_flag === false) {
				UnlockSound();
				button_library.textContent = "library";
				button_library.id = "button-library";
				button_library.addEventListener("click", ViewLibrary);
				buttonContainer.append(button_library);
				player.library_flag = true;
			}
			
			const button_spookywoods = document.createElement("button");
			if (player.headlamp_flag === true  && player.spookywoods_flag === false) {
				UnlockSound();
				button_spookywoods.textContent = "spooky woods";
				button_spookywoods.id = "button-spookywoods";
				button_spookywoods.addEventListener("click", ViewSpookyWoods);
				buttonContainer.append(button_spookywoods);
				player.spookywoods_flag = true;
			}
			
			const button_mines = document.createElement("button");
			if (player.pickaxe_flag === true && player.mines_flag === false) {
				UnlockSound();
				button_mines.textContent = "mines";
				button_mines.id = "button-Mines";
				button_mines.addEventListener("click", ViewMines);
				buttonContainer.append(button_mines);
				player.mines_flag = true;
			}
			
			const button_factory = document.createElement("button");
			if (player.pocketwatch_flag === true && player.factory_flag === false) {
				UnlockSound();
				button_factory.textContent = "factory";
				button_factory.id = "button-Factory";
				button_factory.addEventListener("click", ViewFactory);
				buttonContainer.append(button_factory);
				player.factory_flag = true;
			}
			
			const button_tunnels = document.createElement("button");
			if (player.factory_quest_complete_flag === true && player.tunnels_flag === false) {
				UnlockSound();
				button_tunnels.textContent = "tunnels";
				button_tunnels.id = "button-tunnels";
				button_tunnels.addEventListener("click", ViewTunnels);
				buttonContainer.append(button_tunnels);
				player.tunnels_flag = true;
			}
		}
			
		else if (player.otherside_flag === true) {
			player.discard_shinythings_flag = false;
			player.cellphone_flag = false;
			player.trader_flag = false;
			player.lemontree_flag = false;
			player.vendingmachine_flag = false;
			player.cave_flag = false;
			player.pawnshop_flag = false;
			player.library_flag = false;
			player.spookywoods_flag = false;
			player.mines_flag = false;
			player.factory_flag = false;
			player.tunnels_flag = false;
			
			
			const button_tunnels = document.createElement("button");
			if (player.pocketwatch_flag === true && player.tunnels2_flag === false) {
				UnlockSound();
				button_tunnels.textContent = "tunnels";
				button_tunnels.id = "button-tunnels";
				button_tunnels.addEventListener("click", ViewTunnels);
				buttonContainer.append(button_tunnels);
				player.tunnels2_flag = true;
			}
			
			const button_temple = document.createElement("button");
			if (player.temple_flag === false) {
				UnlockSound();
				button_temple.textContent = "temple";
				button_temple.id = "button-Temple";
				button_temple.addEventListener("click", ViewTemple);
				buttonContainer.append(button_temple);
				player.temple_flag = true;
			}	
			
			const button_laundromat = document.createElement("button");
			if (player.laundromat_flag === false && player.temple_quest_flag === true) {
				UnlockSound();
				button_laundromat.textContent = "laundromat";
				button_laundromat.id = "button-laundromat";
				button_laundromat.addEventListener("click", ViewLaundromat);
				buttonContainer.append(button_laundromat);
				player.laundromat_flag = true;
			}	
			
	
			const button_teahouse = document.createElement("button");
			if (player.temple_quest_complete_flag === true && player.teahouse_flag === false) {
				UnlockSound();
				button_teahouse.textContent = "tea house";
				button_teahouse.id = "button-teahouse";
				button_teahouse.addEventListener("click", ViewTeahouse);
				buttonContainer.append(button_teahouse);
				player.teahouse_flag = true;
			}
			
			const button_internetcafe = document.createElement("button");
			if (player.temple_quest_complete_flag === true && player.internetcafe_flag === false) {
				UnlockSound();
				button_internetcafe.textContent = "internet cafe";
				button_internetcafe.id = "button-internetcafe";
				button_internetcafe.addEventListener("click", ViewInternetCafe);
				buttonContainer.append(button_internetcafe);
				player.internetcafe_flag = true;
			}
			
			const button_newsstudio = document.createElement("button");
			if (player.teahouse_quest_complete === true && player.newsstudio_flag === false) {
				UnlockSound();
				button_newsstudio.textContent = "fox50 news studio";
				button_newsstudio.id = "button-news";
				button_newsstudio.addEventListener("click", ViewNewsStudio);
				buttonContainer.append(button_newsstudio);
				player.newsstudio_flag = true;
			}
			
			const button_bank = document.createElement("button");
			if (player.shinythings >= 1000000 && player.bank_flag === false) {
				UnlockSound();
				button_bank.textContent = "bank";
				button_bank.id = "button-bank";
				button_bank.addEventListener("click", ViewBank);
				buttonContainer.append(button_bank);
				player.bank_flag = true;
			}
			
			const button_banquet = document.createElement("button");
			if (player.bank_quest_complete === true && player.banquet_flag === false) {
				UnlockSound();
				button_banquet.textContent = "banquet";
				button_banquet.id = "button-Banquet";
				button_banquet.addEventListener("click", ViewBanquet);
				buttonContainer.append(button_banquet);
				player.banquet_flag = true;
			}

			const button_castle = document.createElement("button");
			if (player.banquet_quest_complete_flag === true && player.castle_flag === false) {
				UnlockSound();
				button_castle.textContent = "castle";
				button_castle.id = "button-castle";
				button_castle.addEventListener("click", ViewCastle);
				buttonContainer.append(button_castle);
				player.castle_flag = true;
			}
			
			const button_wizard = document.createElement("button");
			if (player.wizard_flag === false && player.castle_quest_flag === true) {
				UnlockSound();
				button_wizard.textContent = "wizard";
				button_wizard.id = "button-wizard";
				button_wizard.addEventListener("click", ViewWizard);
				buttonContainer.append(button_wizard);
				player.wizard_flag = true;
			}
			
			const button_smith = document.createElement("button");
			if (player.smith_flag === false && player.castle_quest_flag === true) {
				UnlockSound();
				button_smith.textContent = "smith";
				button_smith.id = "button-smith";
				button_smith.addEventListener("click", ViewSmith);
				buttonContainer.append(button_smith);
				player.smith_flag = true;
			}
			
			const button_dungeon = document.createElement("button");
			if (player.dungeon_flag === false && player.castle_quest_flag === true) {
				UnlockSound();
				button_dungeon.textContent = "dungeon";
				button_dungeon.id = "button-dungeon";
				button_dungeon.addEventListener("click", ViewDungeon);
				buttonContainer.append(button_dungeon);
				player.dungeon_flag = true;
			}
			
			const button_devroom = document.createElement("button");
			if (player.devroom_flag === false && player.devgod_favor === true) {
				UnlockSound();
				button_devroom.textContent = "developer";
				button_devroom.id = "button-devroom";
				button_devroom.addEventListener("click", ViewDevRoom);
				buttonContainer.append(button_devroom);
				player.devroom_flag = true;
			}
		}
	}
	else {
		document.getElementById('Button-Container').innerText = ``;
		
		player.discard_shinythings_flag = false;
		player.cellphone_flag = false;
		player.trader_flag = false;
		player.lemontree_flag = false;
		player.vendingmachine_flag = false;
		player.cave_flag = false;
		player.pawnshop_flag = false;
		player.library_flag = false;
		player.spookywoods_flag = false;
		player.mines_flag = false;
		player.factory_flag = false;
		player.tunnels_flag = false;
		
		player.tunnels2_flag = false;
		player.temple_flag = false;
		player.teahouse_flag =false;
		player.internetcafe_flag = false;
		player.laundromat_flag = false;
		player.newsstudio_flag = false;
		player.bank_flag = false;
		player.banquet_flag = false;
		player.castle_flag = false;
		player.wizard_flag = false;
		player.dungeon_flag = false;		
		player.devroom_flag = false;
	}
}

