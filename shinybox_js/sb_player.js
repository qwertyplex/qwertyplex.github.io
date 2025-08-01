class Player {
    constructor() {
		//attributes
		this.name = "shiny hunter";
		this.hp = 100;
		this.hp_flag = false;
		this.attack = 10;
		this.time = 0;
		this.shinythings_wasted = 0;
		this.game_paused = true;
		this.location = "null"
		this.spooky_state = 0;
		this.nerd_stick_count = 0;
		this.book_checkedout = false;
		this.sell_gold_flag = false;
		this.mine_gold_count = 40;
		this.headlamp_charge = 0;
		this.otherside_flag = false;
		this.other_otherside_flag = false;
		this.shinygod_favor = false;
		this.computer_time = 0;
		this.grind_level = 1;
		this.grind_xp = 0;
		this.grind_xp_req = 10;
		this.sword_durability = 0;
		
		//items
        this.shinythings = 0;
		this.shinecoins = 0;
		this.pigeons = 0;
		this.lemons = 0;
		this.batteries = 0;
		this.rockcandy = 0;
		this.dwarf_rockcandy = 0;
		this.sticks = 0;
		this.ram_sticks = 0;		
		this.gold = 0;
		this.shinyrocks = 0;
		this.jewelry = 0;
		this.quarters = 0;
		this.potions = 0;
		
		//special items
		this.headlamp_flag = false;
		this.birdcage_flag = false;
		this.canary_flag = false;
		this.library_card_flag = false;
		this.pickaxe_flag = false;
		this.codex_flag = false;
		this.pocketwatch_flag = false;
		this.wishing_stones = 0;
		this.burned_cd_flag = false;
		this.sword_flag = false;
		this.sword_durability = 30;
		
		this.shinybox_flag = false;
		
		//flags
		this.music_muted_flag = false;
		this.music_is_playing = false;
		this.active_button_flag = false;
		
		//item flags
		this.shinecoins_flag = false;
		this.pigeons_flag = false;
		this.lemons_flag = false;
		this.batteries_flag = false;
		this.rockcandy_flag = false;
		this.dwarf_rockcandy_flag = false;
		this.sticks_flag = false;
		this.ram_sticks_flag = false;		
		this.gold_flag = false;
		this.shinyrocks_flag = false;
		this.jewelry_flag = false;
		this.quarters_flag = false;
		this.wishing_stone_flag = false;
		this.potions_flag = false;
		this.sword_durability_flag = false;
		
		//tea flags
		this.lucky_tea = false;
		this.spirit_tea = false;
		this.honey_tea = false;
		this.shiny_tea = false;
		this.honest_tea = false;
		this.yallow_tea = false;

		//place flags
		this.hide_place_buttons_flag = false;
		
		this.discard_shinythings_flag = false;
		
		this.cellphone_flag = false;
		
		this.trader_flag = false;
		
		this.lemontree_flag = false;
		this.farmer_quest_flag = false;
		this.crow_flag = false;
		this.crow_paid_flag = false;
		
		this.vendingmachine_flag = false;
		this.vendingmachine_on_flag = false;
		
		this.cave_flag = false;
		this.first_speak_dwarf_flag = false;
		this.dwarf_rockcandy_flag = false;
		this.codex_speak_dwarf_flag = false;
		
		this.pawnshop_flag = false;
		
		this.library_flag = false;
		this.library_fee_flag = false;
		this.nerd_quest_flag = false;
		this.nerd_quest2_flag = false;
		this.book1_flag = false;
		this.book2_flag = false;
		this.book3_flag = false;
		this.book4_flag = false;
		this.book5_flag = false;
		this.book6_flag = false;
		this.book7_flag = false;
		this.book8_flag = false;
		this.book9_flag = false;
		this.book10_flag = false;
		this.book11_flag = false;
		this.book12_flag = false;
		this.all_books_read_flag = false;
		
		this.spookywoods_flag = false;
		this.can_catch_canary = true;
		
		this.mines_flag = false;
		this.code1_flag = false;
		this.code2_flag = false;
		this.code3_flag = false;
		this.code4_flag = false;
		this.code5_flag = false;
		this.code6_flag = false;
		this.code7_flag = false;
		this.code8_flag = false;
		this.code9_flag = false;	

		this.factory_flag = false;
		this.factory_quest_flag = false;
		this.input_flag = false;
		this.makeshinyrock_flag = false;
		this.makejewelry_flag = false;
		this.jewelry_quest_count = 0;
		this.factory_quest_complete_flag = false;
		
		this.tunnels_flag = false;
		this.tunnels2_flag = false; //return
		this.tunnels_stage = 0;
		this.headlamp_charged_flag = false;
		
		this.temple_flag = false;
		this.temple_quest_flag = false;
		this.temple_quest_complete_flag = false;
		this.has_monk_clothes = false;
		
		this.laundromat_flag = false;
		this.laundromat_quarters_on = false;
		this.laundromat_wash_on = false;
		this.laundromat_dry_on = false;
		this.wash_time = 0;
		this.total_wash_time = 0;
		this.clothes_wash_time = 300;
		this.has_washed_monk_clothes = false
		this.kick_flag = false;
		this.dry_time = 0;
		this.total_dry_time = 0;
		this.clothes_dry_time = 300;
		
		this.teahouse_flag = false;
		this.teahouse_quest_flag = false;
		this.teahouse_quest_complete = false;
		
		this.internetcafe_flag = false;
		this.computer_ram_flag = false;
		this.computer_ram_count = 0;
		this.computer_quarters_flag = false;
		this.computer_unlocked = false;
		this.am_using_computer = false;
		this.input_computer_flag = false;
		this.computer_quest = false;
		this.computer_quest_complete_flag = false;
		this.usb_stick = false;
		this.inserted_usb = false;
		this.cd = false;
		this.inserted_cd = false;
		this.usb_copied = false;
		this.burned_cd = false;
		this.has_burned_cd = false;
		
		this.newsstudio_flag = false;
		this.news_quest = false;
		this.news_quest_complete = false;
		this.interview_trader = false;
		this.interview_crow = false;
		this.interview_farmer = false;
		this.interview_vendingmachine = false;
		this.interview_dwarf = false;
		this.interview_pawnbroker = false;
		this.interview_librarian = false;
		this.interview_nerd = false;
		this.interview_manager = false;
		this.interview_monk = false;
		this.interview_teahouse = false;
		
		
		this.bank_flag = false;
		this.deposited_shinythings = 0;
		this.bank_quest_complete = false;
		
		this.banquet_flag = false;
		this.butler_paid_flag = false;
		this.banquet_quest_flag = false;
		this.banquet_quest_complete_flag = false;
		this.inquire_butler_stage = 1;
		this.jacko_tree1_stage = 1;
		this.jacko_tree2_stage = 1;
		this.jacko_tree3_stage = 1;
		this.ninya_stage = 1;
		this.yallow_stage = 1;
		this.horace_stage = 1;
		this.wenda_stage = 1;
		this.shindy_stage = 1;
		
		this.castle_flag = false;
		this.castle_quest_flag = false;
		this.smith_grant = false;
		
		this.wizard_flag = false;
		
		this.smith_flag = false;
		
		this.dungeon_flag = false;
		
		this.devroom_flag = false;
		
		//command flags
		this.command_shinybox = false;
		this.command_lemons = false;
    }
}

let player = new Player();
