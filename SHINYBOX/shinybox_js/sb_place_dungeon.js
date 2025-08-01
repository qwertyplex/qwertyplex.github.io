////////////////////////////////////
//dungeon

function ViewDungeon() {
	DungeonMusic();
	resetButtonPosition();
	player.location = "dungeon"
	ChangeBG();
	document.getElementById('NPC').innerText = `
██████████████
██████████████
|--DUNGEON--|█
██████████████
██████████████
██████████████
██████████████
██████████████
██████████████
██████████████
`;
	this.hp_flag = true;
	
	document.getElementById('NPC-Text').innerText = `it's a dark and scary dungeon...`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_enterdungeon = document.createElement("button");
	button_enterdungeon.textContent = "enter dungeon";
	button_enterdungeon.id = "button-dungeon";
	button_enterdungeon.addEventListener("click", EnterDungeon);
	NPCbuttonContainer.append(button_enterdungeon);
}

function EnterDungeon() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
██████████████
██████████████
███████1██████
██████████████
██████████████
██████████████
██████████████
██████████████
██████████████
██████████████
`;
	if (player.sword_flag === true) {
		const button_combat = document.createElement("button");
		button_combat.textContent = "combat";
		button_combat.id = "button-dungeon";
		button_combat.addEventListener("click", Combat);
		NPCbuttonContainer.append(button_combat);
	}
	else {
		document.getElementById('NPC-Text').innerText = `it's not wise to go in without a weapon`;
	}
}


function Combat() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
██████████████
██████████████
████GNOME ████
████      ████
██████████████
██████████████
██████████████
██████████████
██████████████
█████/o/██████
`;
	
	const button_attack = document.createElement("button");
	button_attack.textContent = "attack";
	button_attack.id = "button-dungeon";
	button_attack.addEventListener("click", Attack);
	NPCbuttonContainer.append(button_attack);
	
	const button_heal = document.createElement("button");
	button_heal.textContent = "heal";
	button_heal.id = "button-dungeon";
	button_heal.addEventListener("click", Heal);
	NPCbuttonContainer.append(button_heal);
	
	const button_flee = document.createElement("button");
	button_flee.textContent = "flee";
	button_flee.id = "button-dungeon";
	button_flee.addEventListener("click", Flee);
	NPCbuttonContainer.append(button_flee);
}

function Attack() {
	if (player.sword_durability > 0) {
		gnome.hp -= player.attack;
		document.getElementById('NPC-Text').innerHTML = `your hp: ${player.hp} | gnome hp: ${gnome.hp}`;
		player.sword_durability -= 1;
		if (gnome.hp <= 0) {
			gnome.hp = 100;
			document.getElementById('NPC-Text').innerHTML = `gnome slain`;
			return;
		}
		GnomeAttack();
	}
	else {
		document.getElementById('NPC-Text').innerHTML = `your sword is broken!`;
	}
}

function GnomeAttack() {
	let randomInt = getRandomInt(1, 3);
	if (randomInt < 3) {
		player.hp -= gnome.attack;
		if (player.hp <= 0) {
			player.hp = 100;
			document.getElementById('NPC-Text').innerHTML = `you were knocked out!<br>your hp: ${player.hp} | gnome hp: ${gnome.hp}`;
			EnterDungeon();
			return;
		}
	}
	else {
		document.getElementById('NPC-Text').innerHTML = `gnome healed for 10 hp!<br>your hp: ${player.hp} | gnome hp: ${gnome.hp}`;
		gnome.hp += 10;
	}
}

function Heal() {
	if (player.potions >= 1) {
		document.getElementById('NPC-Text').innerHTML = `healed 10 hp!<br>your hp: ${player.hp} | gnome hp: ${gnome.hp}`;
		player.potions -= 1;
		player.hp += 10;
	}
	else {
		document.getElementById('NPC-Text').innerHTML = `you have no potions!`;
	}
	GnomeAttack();
}

function Flee() {
	GnomeAttack();
	document.getElementById('NPC-Text').innerHTML = `got away safely`;
	EnterDungeon();
}