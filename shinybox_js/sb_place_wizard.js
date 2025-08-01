////////////////////////////////////
//wizard

function ViewWizard() {
	WizardMusic();
	resetButtonPosition();
	player.location = "wizard"
	ChangeBG();
	document.getElementById('NPC').innerText = `
      /\\     
	 /  \\
	/ ** \\
___/      \\___
~~~~~~~~~~~~~~
 ~| o    o |~
 ~|        |~
 ~~~~~ > ~~~~
 ~ ~~~__~~~ ~
 ~  ~~~~~~  ~
	 ~~~~
	  ~~
`;
	
	document.getElementById('NPC-Text').innerText = `it's a dark and scary wizard...`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_mixpotion = document.createElement("button");
	button_mixpotion.textContent = "mix potion";
	button_mixpotion.id = "button-wizard";
	button_mixpotion.addEventListener("click", MixPotion);
	NPCbuttonContainer.append(button_mixpotion);
}



function MixPotion() {
	if (player.pigeons >= 1 && player.lemons >= 3) {
		player.potions_flag = true;
		player.pigeons -= 1;
		player.lemons -= 3;
		player.potions += 1;
		if (player.potions >= 10) {
			player.potions = 10;
			document.getElementById('NPC-Text').innerText = `can't hold anymore potions!`;
		}
		document.getElementById('NPC-Text').innerText = `mixed a potion out of pigeon lemons!`;
		if (player.potions_flag === false) {
			player.potions_flag = true;
		}
	}
	else if (player.pigeons <= 1 && player.lemons >= 3) {
		document.getElementById('NPC-Text').innerText = `not enough pigeons`;
	}
	else if (player.pigeons >= 3 && player.lemons <= 3) {
		document.getElementById('NPC-Text').innerText = `not enough lemons`;
	}
}
	