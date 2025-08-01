function DevButton() {
    const DevMenu = document.getElementById("Dev-Menu");
    DevMenu.classList.toggle("show");
}


function StopAllMusic() {
	StopMusic();
}

function PrintAllStats() {
	//attrs
	console.log("Location:", player.location);
	
	//flags
	console.log("FLAGS");
	console.log("Discard:", player.discard_shinythings_flag);
	console.log("Trader:", player.trader_flag);
	console.log("Lemontree:", player.lemontree_flag);
	console.log("Vending Machine:", player.vendingmachine_flag);
	console.log("Caves:", player.caves_flag);
	console.log("Pawnshop:", player.pawnshop_flag);
	console.log("Library:", player.library_flag);
	console.log("Spooky Woods:", player.spookywoods_flag);
	console.log("Mines:", player.mines_flag);
	
	//MISC
	console.log("MISC")
	console.log("farm quest flag", player.farmer_quest_flag)
	console.log("crow flag", player.crow_flag)
	console.log("crow paid flag", player.crow_paid_flag)
}

function GiveAll() {
	player.location = "null"
		
	player.shinythings = 10000000;
	player.pigeons = 10;
	player.lemons = 10000;
	player.batteries = 10000;
	player.rockcandy = 10000;
	player.sticks = 10000;
	player.ram_sticks = 10000;
	player.gold = 10000;
	
	player.headlamp_flag = true;
	player.birdcage_flag = true;
}

function GiveShinies() {
	player.shinythings = 1000000000;
}

function GiveMinorShinies() {
	player.shinythings += 100;
}

function GiveBatteries() {
	player.batteries = 1000;
}

function GiveRockcandy() {
	player.rockcandy = 1000;
}

function GiveSticks() {
	player.sticks = 1000;
	player.ram_sticks = 10000;
}

function AdvanceNerd() {
	player.nerd_stick_count = 9;
}

function GiveHeadlamp() {
	player.headlamp_flag = true;
}

function ChargeHeadlampDEV() {
	player.headlamp_charge = 20;
}

function GiveLibraryCard() {
	player.library_card_flag = true;
	player.nerd_quest_flag = false;
}


function AdvanceBooks() {
	player.book1_flag = true;
	player.book2_flag = true;
	player.book3_flag = true;
	player.book4_flag = true;
	player.book5_flag = true;
	player.book6_flag = true;
	player.book7_flag = true;
	player.book8_flag = true;
	player.book9_flag = true;
	player.book10_flag = true;
	player.book11_flag = true;
	player.book12_flag = true;
}

function GiveCodex() {
	player.codex_flag = true;
}

function GivePickaxe() {
	player.pickaxe_flag = true;
}


function GiveCanary() {
	player.birdcage_flag = true;
	player.canary_flag = true;
}


function ShinyMultiplier() {
  const checkbox = document.getElementById('myCheckbox');
  
  if (checkbox.checked) {
    player.shiny_multiplier = 10;
  } else {
    player.shiny_multiplier = 0;
  }
}

function UnlockLemons() {
	player.shinythings += 60;
}

function GiveGold() {
	player.gold = 40;
	player.sell_gold_flag = true;
}


function GivePocketwatch() {
	player.pocketwatch_flag = true;
}

function DoneFactoryQuest() {
	player.factory_quest_complete_flag = true;
}

function TunnelArt() {
	ExitTunnels();
}

function TunnelArt2() {
	Exittunnels2();
}

function GivePotions() {
	player.potions += 100;
}

function GiveShinyrocks() {
	player.shinyrocks += 100;
}

function GiveQuarters() {
	player.quarters += 1000
}

function GiveMonkClothes() {
	player.has_monk_clothes = true;
}

function PostCrier() {
	FinalMonkDialog();
}


function GiveUSB() {
	player.usb_stick = true;
}

function GiveCD() {
	player.cd = true;
}

function DevCompGame() {
	ComputerGameStart();
}

function DevTeahouse() {
	player.teahouse_quest_complete = true;
	player.wishing_stones = 2;
	player.wishing_stone_flag = true;
}

function PrintInterview() {
    console.log(`trader:${player.interview_trader}`);
    console.log(`crow:${player.interview_crow}`);
    console.log(`farmer:${player.interview_farmer}`);
    console.log(`vm:${player.interview_vendingmachine}`);
    console.log(`dwarf:${player.interview_dwarf}`);
    console.log(`pawn:${player.interview_pawnbroker}`);
    console.log(`lib:${player.interview_librarian}`);
    console.log(`nerd:${player.interview_nerd}`);
    console.log(`manager:${player.interview_manager}`);
    console.log(`monk:${player.interview_monk}`);
    console.log(`tea:${player.interview_teahouse}`);
}

function CompleteInterviews() {
    player.interview_trader = true;
    player.interview_crow = true;
    player.interview_farmer = true;
    player.interview_vendingmachine = true;
    player.interview_dwarf = true;
    player.interview_pawnbroker = true;
    player.interview_librarian = true;
    player.interview_nerd = true;
    player.interview_manager = true;
    player.interview_monk = true;
    player.interview_teahouse = true;
}

function UnlockBank() {
	player.news_quest_complete = true;
}

function UnlockBanquet() {
	player.bank_quest_complete = true;
}

function UnlockCastle() {
	player.banquet_quest_complete_flag = true;
}