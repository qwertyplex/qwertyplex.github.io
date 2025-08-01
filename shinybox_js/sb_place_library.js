////////////////////////////////////
//library

function ViewLibrary() {
	LibraryMusic();
	resetButtonPosition();
	player.location = "library"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█____________█
██████████████
█---LIBRARY--█
██████████████
█____________█
█-█x█-█x█-█x██
██████████████
█----█===█=███
██████  .█████
█____█___█___█
`;
	document.getElementById('NPC-Text').innerHTML = `you're outside the library`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_enterlibrary = document.createElement("button");
	button_enterlibrary.textContent = "go inside";
	button_enterlibrary.id = "button-library";
	button_enterlibrary.addEventListener("click", EnterLibrary);
	NPCbuttonContainer.append(button_enterlibrary);
	
	if (player.teahouse_quest_flag === false) {
		const button_firstspeaknerd = document.createElement("button");
		button_firstspeaknerd.textContent = "speak to the nerd";
		button_firstspeaknerd.id = "button-library";
		button_firstspeaknerd.addEventListener("click", FirstspeakNerd);
		NPCbuttonContainer.append(button_firstspeaknerd);
	}
	else {
		if (player.nerd_quest2_flag === false) {
			const button_teahousenerd = document.createElement("button");
			button_teahousenerd.textContent = "ask the nerd for help";
			button_teahousenerd.id = "button-library";
			button_teahousenerd.addEventListener("click", TeahouseNerd);
			NPCbuttonContainer.append(button_teahousenerd);
		}
		else {
			const button_firstspeaknerd = document.createElement("button");
			button_firstspeaknerd.textContent = "speak to the nerd";
			button_firstspeaknerd.id = "button-library";
			button_firstspeaknerd.addEventListener("click", FirstspeakNerd);
			NPCbuttonContainer.append(button_firstspeaknerd);
		}
	}
}




function EnterLibrary() {
	LibrarianSFX();
	player.location = "innerlibrary";
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	ChangeBG();
	document.getElementById('NPC').innerText = `
       WWWW   
       W   W  
    WWWWWWW W 
   WWWWWWWWW W
  WWWWWWWWWWW 
  ~__Q-|-Q__~ 
  .....|....  
   ..,.U....  
    .\___/.   
     .....   
`;
	if (player.news_quest === false) {
		if (player.library_card_flag === false) {
			document.getElementById('NPC-Text').innerHTML = `librarian: yes hello welcome to the library`;
			const button_enterwithoutcard = document.createElement("button");
			button_enterwithoutcard.textContent = "enter the library";
			button_enterwithoutcard.id = "button-library";
			button_enterwithoutcard.addEventListener("click", EnterWithoutCard);
			NPCbuttonContainer.append(button_enterwithoutcard);
		}

		else if (player.library_card_flag === true && player.library_fee_flag === false){
			document.getElementById('NPC-Text').innerHTML = `librarian: hey, you! i don't remember you, but it says here you owe 5,000 shinies for the late fees! my computer says you checked out a LOT of books and never returned them!`;
			const button_payfee = document.createElement("button");
			button_payfee.textContent = "pay the fee (5,000 shinies)";
			button_payfee.id = "button-library";
			button_payfee.addEventListener("click", PayLibraryFee);
			NPCbuttonContainer.append(button_payfee);
			
			const button_bribelibrarian = document.createElement("button");
			button_bribelibrarian.textContent = "try to tell her it's not your card";
			button_bribelibrarian.id = "button-library";
			button_bribelibrarian.addEventListener("click", BribeLibrarian);
			NPCbuttonContainer.append(button_bribelibrarian);
		}
		
		else if (player.library_card_flag === true && player.library_fee_flag === true){
			document.getElementById('NPC-Text').innerHTML = `librarian: yes hello welcome to the library`;
			const button_checkoutbook = document.createElement("button");
			button_checkoutbook.textContent = "check out a book";
			button_checkoutbook.id = "button-library";
			button_checkoutbook.addEventListener("click", CheckoutBook);
			NPCbuttonContainer.append(button_checkoutbook);
			
			const button_returnbook = document.createElement("button");
			button_returnbook.textContent = "return a book";
			button_returnbook.id = "button-library";
			button_returnbook.addEventListener("click", ReturnBook);
			NPCbuttonContainer.append(button_returnbook);
		}
	}
	else {
		const button_interview_librarian = document.createElement("button");
		button_interview_librarian.textContent = "interview the librarian";
		button_interview_librarian.id = "button-news";
		button_interview_librarian.addEventListener("click", InterviewLibrarian);
		NPCbuttonContainer.append(button_interview_librarian);
	}
}


function EnterWithoutCard() {
	document.getElementById('NPC-Text').innerHTML = `librarian: where do you think you're going? you're not getting in here without a library card!!`;
	NoLibCardSound();
}




function PayLibraryFee() {
	LibrarianSFX();
	if (player.shinythings >= 5000 && player.library_fee_flag === false) {
		player.shinythings -= 5000;
		document.getElementById('NPC-Text').innerHTML = `librarian: it's about time someone paid up on a late fee, now HUSH UP and GET TO READING!! SHHHHH!!!!!!`;
		player.library_fee_flag = true;
	}
	else if (player.shinythings < 5000 && player.library_fee_flag === false) {
		document.getElementById('NPC-Text').innerHTML = `librarian: ENGH! that's the POOR PEOPLE ALERT! that's not enough shinies to cover this tab! NOW SHHH! PEOPLE ARE TRYING TO READ!!`;
		NoLibCardSound();
	}
	else if (player.library_fee_flag === true) {
		document.getElementById('NPC-Text').innerHTML = `librarian: you're paid up you blabbermouth, i'm trying to read laura ingles wilder!! SHHHHHH!`;
	}
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
}

function BribeLibrarian() {
	LibrarianSFX();
	NoLibCardSound();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `librarian: that's not what the machine says, either pay up or get out, we don't let poor people read here. you'll probably just steal our books for firewood; is that what you did with all those books on quantum information science? ever heard of a STICK? TRY BURNING THOSE.`;
}



function CreateBackButton() {
	ResetNPCButtonsDefault();
	const button_go_back = document.createElement("button");
	button_go_back.textContent = "return";
	button_go_back.id = "button-GoBack";
	button_go_back.addEventListener("click", EnterLibrary);
	NPCbuttonContainer.append(button_go_back);
}


function CheckoutBook() {
	if (player.computer_unlocked === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		const button_book1 = document.createElement("button");
		button_book1.textContent = "haiku";
		button_book1.id = "button-Book";
		button_book1.addEventListener("click", Book1);
		NPCbuttonContainer.append(button_book1);
		
		const button_book2 = document.createElement("button");
		button_book2.textContent = "diary";
		button_book2.id = "button-Book";
		button_book2.addEventListener("click", Book2);
		NPCbuttonContainer.append(button_book2);
		
		const button_book3 = document.createElement("button");
		button_book3.textContent = "philosophy";
		button_book3.id = "button-Book";
		button_book3.addEventListener("click", Book3);
		NPCbuttonContainer.append(button_book3);
		
		const button_book4 = document.createElement("button");
		button_book4.textContent = "novel";
		button_book4.id = "button-Book";
		button_book4.addEventListener("click", Book4);
		NPCbuttonContainer.append(button_book4);
		
		const button_book5 = document.createElement("button");
		button_book5.textContent = "novel";
		button_book5.id = "button-Book";
		button_book5.addEventListener("click", Book5);
		NPCbuttonContainer.append(button_book5);
		
		const button_book6 = document.createElement("button");
		button_book6.textContent = "programming";
		button_book6.id = "button-Book";
		button_book6.addEventListener("click", Book6);
		NPCbuttonContainer.append(button_book6);
		
		const button_book7 = document.createElement("button");
		button_book7.textContent = "geoscience";
		button_book7.id = "button-Book";
		button_book7.addEventListener("click", Book7);
		NPCbuttonContainer.append(button_book7);
		
		const button_book8 = document.createElement("button");
		button_book8.textContent = "mythology";
		button_book8.id = "button-Book";
		button_book8.addEventListener("click", Book8);
		NPCbuttonContainer.append(button_book8);
		
		const button_book9 = document.createElement("button");
		button_book9.textContent = "chemistry";
		button_book9.id = "button-Book";
		button_book9.addEventListener("click", Book9);
		NPCbuttonContainer.append(button_book9);
		
		const button_book10 = document.createElement("button");
		button_book10.textContent = "animals";
		button_book10.id = "button-Book";
		button_book10.addEventListener("click", Book10);
		NPCbuttonContainer.append(button_book10);
		
		const button_book11 = document.createElement("button");
		button_book11.textContent = "entertainment";
		button_book11.id = "button-Book";
		button_book11.addEventListener("click", Book11);
		NPCbuttonContainer.append(button_book11);
		
		const button_book12 = document.createElement("button");
		button_book12.textContent = "dusty shelf";
		button_book12.id = "button-Book";
		button_book12.addEventListener("click", Book12);
		NPCbuttonContainer.append(button_book12);
		
		if (player.all_books_read_flag === true) {
			const button_book_codex = document.createElement("button");
			button_book_codex.textContent = "codex";
			button_book_codex.id = "button-BookCodex";
			button_book_codex.addEventListener("click", GetCodex);
			NPCbuttonContainer.append(button_book_codex);
		}
	}
		
	else {
		const button_book13 = document.createElement("button");
		button_book13.textContent = "programming computers";
		button_book13.id = "button-Book";
		button_book13.addEventListener("click", Book13);
		NPCbuttonContainer.append(button_book13);
	}
}


function Book1() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book1_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	██   HAIKU   █
	██    by     █
	██Rodanbobtha█
	██niel       █
	██Oldenbarkey█
	██talyhoo    █
	██Smithwicktu█
	██rnupshire  █
	██___________█ 
	`;
		document.getElementById('NPC-Text').innerHTML = `glistening sunlight gleams,<br>sparkling treasures in its hold,<br>shiny dreams unfold<br><br>moonlit sparkles dance,<br>night's jewels on silent waves,<br>shiny dreams aglow`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}	
	
function Book2() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book2_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	██           █
	██  Diary    █
	██   of      █
	██    a      █
	██           █
	██  PRO-     █
	██crastinator█
	██           █
	██___________█
	`;
		document.getElementById('NPC-Text').innerHTML = `huh... it's empty...`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book3() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book3_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	██           █
	██ DIOGENES  █
	██           █
	██           █
	██~~~~~~~~~~~█
	██           █
	██    by     █
	██ Diogenes  █
	██___________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Diogenes: by Diogenes<br>Diogenes is the greatest philosopher of all time, and every philosopher who is OBJECTIVELY a good philosopher would agree with this OBJECTIVELY TRUE statement.<br>Diogenes is the MOST HONEST MAN in ALL OF GREECE. That is a FACT.<br>You are not even REMOTELY close to being as honest as m̶e̶ Diogenes.<br>All of Greece recommends DIOGENES as the greatest thinker ever, except that fool Plato.<br>He doesn't know anything. DON'T LISTEN TO PLATO.`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book4() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book4_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	██           █
	██ CALL of   █
	██ the CHILD █
	██           █
	██___________█
	██   by      █
	██  Quack    █
	██   London  █
	██___________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Call of the Child, by Quack London:<br>It was an early morning when Huffer woke up his mother to take him to the donut shop.<br>Huffer was a big boy, the biggest of them all. He was born at a whopping 35 pounds.<br>At 7 years old, he stood 8'3 and weighed 380 pounds. In his heart, however, he was of course still a child.<br>'come on MOM!!!!! lets go get some DONUTS!!!!' Huffer called.`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book5() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book5_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	█   FEAR &   █
	█  LOATHING  █
	█     in     █
	█  Las SHINY █
	█------------█
	█    by      █
	█   Hunter   █
	█ O Shinies █
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Fear & Loathing in Las Shiny by Hunter O Shinies:<br>We were somewhere around shinybox, on the edge of the desert, when the lemons began to take hold...`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book6() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book6_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	█            █
	█ Programming█
	█ P Y T H O N█
	█            █
	█            █
	█   by       █
	█ Guido von  █
	█   Shinum   █
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Programming Python: by Guido Von Shiny<br>1. do not assign values to variables, leaving variables variable means you can do what you want!<br>2. create while loops without break conditions for infinite computer stuff!! its like the MATRIX!!<br>3. don't learn any keyboard shortcuts, they just slow you down`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book7() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book7_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	█            █
	█ SPELUNKING █
	█     █ █    █
	█     █ █    █
	█_____\V/____█
	█            █
	█    by      █
	█   Notch    █
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Spelunking by Notch: they say 'you see that mountain? you can climb it', but i say 'you see that hole?',<br>well, guess what, you can DIG it. that's right, no matter where you are in the world, you can always go DOWN.<br>can't say the same for up, can we? ha, that's what you get when you go taking on gravity like that.<br>now when you descend, do NOT take on gravity like that`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book8() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book8_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	█            █
	█   DWARVES  █
	█    xxxx    █
	█            █
	█____________█
	█            █
	█    by      █
	█   Dwarves  █
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `DWARVES: Dwarves are as long-haired and big-bearded as they are frothy.<br>Despite the Dwarven kind living underground, Dwarves are not pale.<br>This is because each Dwarf takes a pilgrimage once a lifetime to see the sun;<br>within one second, they become a burnt crisp and require a year to recover from the sunburn.<br>And they NEVER LIE. That's a PROMISE.`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book9() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book9_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	█            █
	█~~~~BOOK~~~~█
	█~~~~~of~~~~~█
	█~~~METALS~~~█
	█~~~~~~~~~~~~█
	█     by     █
	█ Gold Smith █
	█     Fox    █
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Book of Metals:<br>1) Glorium 2) Brillium 3) Incandescium 4) Shinium 5) Reflectium 6) Lightium<br>7) Brightium 8) Notnightium 9) Metalium 10) Gleamium 11) Glowium 12) Woahium<br>note from the author:<br>'this is a comprehensive list of every single metallic element ever known,<br>i know because i found it on the internet, so it has to be true' - gold smith fox`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book10() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book10_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	█            █
	█ ORNITHOLOGY█
	█          o █
	█          v █
	█____________█
	█     by     █
	█    the     █
	█ Unbirdened █
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Ornithology: by the Unbirdened<br>There are many kinds of birds. That's why we decided it was a stupid idea to try to classify them.<br>I mean, they all fly right? So what's the point?<br>Squawk chirp tweet, that's all you need to know.<br>Plain and simple: inconvenience with wings.`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book11() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book11_flag = true;
		document.getElementById('NPC').innerText = `
	 ____________ 
	█            █
	█    How To  █
	█  Not Suck  █
	█   At VIDEO █
	█    GAMES   █
	█            █
	█     by     █
	█the internet█
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `HOW TO NOT SUCK AT VIDEO GAMES: THE TOP 10 ULTIMATE GO-TO SUPER ULTRA GUIDE<br>BY ULTIMATE MAXIMUM MLGPRO GAMERS<br>1) try clicking harder<br>2) try thinking faster<br>3) try being better<br>4) try more RGB lights<br>5) try a ping of -1<br>6) try removing profanity filters<br>7) try subscribing to my channel<br>8) try playing games 24 hours a day<br>9) try physical exercise to strengthen your wrist for ultragaming<br>10) try reading this list again<br><br>OKAY NOW CHECK US OUT ON TWITCH! DONATE NOW!`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}

function Book12() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		player.book12_flag = true;
		document.getElementById('NPC').innerText = `
	 _______~    
	█         ~  
	█    Shi-~ 
	█       Magi~
	█       Secre!
	█____________█
	█        Infi█
	█         O~ !
	█        ~    
	█_______~     
	`;
		document.getElementById('NPC-Text').innerHTML = `Shinies: The H.dden Bcok Of Ma.ic~l Secr*7s / ~~au..or unknc,n~~ /<br>D.ep bel,w t~e gr..nd li-,d a m-.,ical u,~nown be.,ded ra,e. They dis.-er-d a chasm deep below .h, wcr1d, fi1led with bri.,iant and<br>gle-,ing met4ls accomp.,~ed by a shadowed race of unknown origin. .,~><.,., sh~d..ed race took advantage of the<br>mystical race fo. their physical essence ., ul,.-.tely m!ne and ca~t the 'shining things' i?,to obj..,s of desire.. ..,.~er time, labor deve1~.ed ,.to slavery,<br>.nd the m,tals m~~e their way to the surface .,...,iscovered by us, the top-dwellers. And so cur s~,iety was bo,.,<br>and with it came trade and c~~merc. ,.. )>nly few know, in the gu.,ed circles,<br>=.~+e shiny things are cursed with occult deviations, .~~.,,.abor will drive those who !s r.led bw it to destruction;<br>a.,~,ey keep not the treasures they fastened for themselves.`;
		player.book_checkedout = true;
		CheckCodex();
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}


function CheckCodex() {
	if (player.book1_flag === true && player.book2_flag === true && player.book3_flag === true && player.book4_flag === true && player.book5_flag === true && player.book6_flag === true && player.book7_flag === true && player.book8_flag === true && player.book9_flag === true && player.book10_flag === true && player.book11_flag === true && player.book12_flag === true) {
		player.all_books_read_flag = true;
	}
}

function GetCodex() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC').innerText = `
 ____________ 
█            █
█   ANCIENT  █
█   DWARVEN  █
█    CODEX   █
█     by     █
█   ANCIENT  █
█    CODEX   █
█   DWARVES  █
█____________█
`;
	document.getElementById('NPC-Text').innerHTML = `what? i don't remember seeing this one... good thing i have my library card, i'll take this with me`;
	player.codex_flag = true
}




function Book13() {
	if (player.book_checkedout === false) {
		NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
		document.getElementById('NPC').innerText = `
	 ____________ 
	█            █
	█  How To    █
	█  Program   █
	█  Computers █
	█            █
	█            █
	█     by     █
	█  Computers █
	█____________█
	`;
		document.getElementById('NPC-Text').innerHTML = `Only nerds can memorize sick 1337 hacker commands, but n00bs type 'help' for a list of commands... nerds can 'help'...`;
		player.book_checkedout = true;
		CreateBackButton();
	}
	else {
		BookCheckedoutDialog();
	}
}


























function BookCheckedoutDialog() {
	LibrarianSFX();
		document.getElementById('NPC').innerText = `
       WWWW   
       W   W  
    WWWWWWW W 
   WWWWWWWWW W
  WWWWWWWWWWW 
  ~__Q-|-Q__~ 
  .....|....  
   ..,.U....  
    .\___/.   
     ..... 
`;
	document.getElementById('NPC-Text').innerHTML = `librarian: you've already got a book! i'm not letting you rack up late fees again! return the book before you get another!`;
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
}


function ReturnBook() {
	LibrarianSFX();
	document.getElementById('NPC').innerText = `
       WWWW   
       W   W  
    WWWWWWW W 
   WWWWWWWWW W
  WWWWWWWWWWW 
  ~__Q-|-Q__~ 
  .....|....  
   ..,.U....  
    .\___/.   
     ..... 
`;
	if (player.book_checkedout === true) {
		document.getElementById('NPC-Text').innerHTML = `librarian: did you even read it?`;
		player.book_checkedout = false;
	}
	else {
		document.getElementById('NPC-Text').innerHTML = `librarian: you don't have any books, you dogooder!`;
	}
		
}







function FirstspeakNerd() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	ChangeBG();
	document.getElementById('NPC').innerText = `
              
              
    ~~~~~~~   
   ~~~~~~~~~  
  ~~^^^~~^^^~ 
  ~--O----O-~ 
  .,...\\/..,. 
  ...,....... 
  ....(==).,. 
    ,.......  
`;
	if (player.news_quest === false) {
		if (player.library_card_flag === false && player.nerd_quest_flag === false) {
			document.getElementById('NPC-Text').innerHTML = `nerd: ph'y'ello, echhow do you do`;
			const button_secondspeaknerd = document.createElement("button");
			button_secondspeaknerd.textContent = "ask about what he's doing";
			button_secondspeaknerd.id = "button-library";
			button_secondspeaknerd.addEventListener("click", SecondspeakNerd);
			NPCbuttonContainer.append(button_secondspeaknerd);
		}
		else if (player.library_card_flag === false && player.nerd_quest_flag === true) {
			document.getElementById('NPC-Text').innerHTML = `nerd: did you bring any sticks of ram?`;
			const button_givesticks = document.createElement("button");
			button_givesticks.textContent = "give him a stick";
			button_givesticks.id = "button-library";
			button_givesticks.addEventListener("click", GiveSticksNerd);
			NPCbuttonContainer.append(button_givesticks);
		}
		else if (player.nerd_quest2_flag === true) {
			document.getElementById('NPC-Text').innerHTML = `nerd: did you bring any sticks of ram?`;
			const button_givesticks = document.createElement("button");
			button_givesticks.textContent = "give him a stick";
			button_givesticks.id = "button-library";
			button_givesticks.addEventListener("click", GiveSticksNerd);
			NPCbuttonContainer.append(button_givesticks);
		}
		else {
			document.getElementById('NPC-Text').innerHTML = `nerd: salutations? i'm busy`;
		}
	}
	else {
		const button_interview_nerd = document.createElement("button");
		button_interview_nerd.textContent = "interview the nerd";
		button_interview_nerd.id = "button-news";
		button_interview_nerd.addEventListener("click", InterviewNerd);
		NPCbuttonContainer.append(button_interview_nerd);
	}
}

function SecondspeakNerd() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `nerd: oh, well, first you have to understand in the ineffably intricate tapestry of<br>empirical inquiry and theoretical synthesis that constitutes contemporary scientific endeavors, a myriad <br>o̸f̴ ̸e̶r̴u̴d̶i̷t̶e̴ ̸d̶i̶s̷c̸i̸p̶l̵i̷n̶e̷s̷ ̸c̷o̵a̴l̴e̷s̷c̴e̸,̶ ̵e̵n̴d̸e̶a̷v̴o̸r̴i̵n̶g̸ ̴t̶o̵ ̸e̴x̸p̸l̵i̸c̶a̶t̸e̶ ̴t̸h̶e̸<br> ̶a̶b̸s̶t̶r̴u̷s̴e̴ ̸p̶r̵o̷f̶u̸n̶d̷i̸t̶i̸e̸s̶ ̸i̵n̵h̷e̸r̷e̶n̶t̶<br> ̸i̵n̵<br>̴t̴h̴e̶ ̶f̶a̶b̴r̸i̸c̴ ̶o̵f̶ ̵r̸e̸a̷l̶i̴t̴y̶.̴̵̥̹̎f̵̜͆̈́ ̸̗͚͆s̸͔̑u̷̟̯̾͌b̸̬̣̒ą̵̉́t̴̮̀ȍ̶̢̄m̵̘̐î̷̢̿c̸̥̞̆̎ ̶̭̥̈́̀r̷̯̀e̸̠̊͊a̶̖̠͒l̴̲̲̇m̴̭̕s̸̙͛...`;
	const button_thirdspeaknerd = document.createElement("button");
	button_thirdspeaknerd.textContent = "okay...";
	button_thirdspeaknerd.id = "button-library";
	button_thirdspeaknerd.addEventListener("click", ThirdspeakNerd);
	NPCbuttonContainer.append(button_thirdspeaknerd);
	
	MoveNPCButtonsDown();
}

function ThirdspeakNerd() {
	NerdSFX();
	ResetNPCButtonsDefault();
	
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `nerd: ... the intricacies of the encephalic citadel, seeking to unravel the nebulous conundrums underpinning... ...and that is why i need 10 sticks of ram.`;
	const button_acceptnerdquest = document.createElement("button");
	button_acceptnerdquest.textContent = "quite.";
	button_acceptnerdquest.id = "button-library";
	button_acceptnerdquest.addEventListener("click", AcceptNerdQuest);
	NPCbuttonContainer.append(button_acceptnerdquest);
}

function AcceptNerdQuest() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `nerd: excellent! bring them post-haste!`;
	player.nerd_quest_flag = true;
}

function GiveSticksNerd() {
	NerdSFX();
	if (player.nerd_quest2_flag === false) {
		if (player.ram_sticks >= 1 && player.nerd_quest_flag === true) {
			player.ram_sticks -= 1;
			player.nerd_stick_count += 1;
			if (player.nerd_stick_count === 1) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 9 more!`;
			}
			else if (player.nerd_stick_count === 2) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 8 more!`;
			}
			else if (player.nerd_stick_count === 3) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 7 more!`;
			}
			else if (player.nerd_stick_count === 4) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 6 more!`;
			}
			else if (player.nerd_stick_count === 5) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 5 more!`;
			}
			else if (player.nerd_stick_count === 6) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 4 more!`;
			}
			else if (player.nerd_stick_count === 7) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 3 more!`;
			}
			else if (player.nerd_stick_count === 8) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 2 more!`;
			}
			else if (player.nerd_stick_count === 9) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my gratitude! 1 more!`;
			}
			else if (player.nerd_stick_count === 10) {
				document.getElementById('NPC-Text').innerHTML = `nerd: satisfactory. please take my library card for all your 'work' in foresting sticks of RAM; i simply did not have enough time for peasantry. i must resume my calculations now...`;
				player.nerd_quest_flag = false;
				player.library_card_flag = true;
			}
		}
		else if (player.ram_sticks < 1 && player.nerd_quest_flag === true) {
			document.getElementById('NPC-Text').innerHTML = `nerd: you do not appear to have any RAM; stop wasting my time and simply bring me the components, ignoramous`;
		}
		else if (player.nerd_quest_flag === false) {
			document.getElementById('NPC-Text').innerHTML = `nerd: what do you want? i am busy`;
		}
	}
	
	else if (player.nerd_quest2_flag === true) {
		if (player.ram_sticks >= 1 && player.nerd_quest2_flag === true) {
			player.ram_sticks -= 1;
			player.nerd_stick_count += 1;
			if (player.nerd_stick_count === 1) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 9 more!`;
			}
			else if (player.nerd_stick_count === 2) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 8 more!`;
			}
			else if (player.nerd_stick_count === 3) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 7 more!`;
			}
			else if (player.nerd_stick_count === 4) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 6 more!`;
			}
			else if (player.nerd_stick_count === 5) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 5 more!`;
			}
			else if (player.nerd_stick_count === 6) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 4 more!`;
			}
			else if (player.nerd_stick_count === 7) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 3 more!`;
			}
			else if (player.nerd_stick_count === 8) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 2 more!`;
			}
			else if (player.nerd_stick_count === 9) {
				document.getElementById('NPC-Text').innerHTML = `nerd: my appreciation! 1 more!`;
			}
			else if (player.nerd_stick_count === 10) {
				NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
				document.getElementById('NPC-Text').innerHTML = `nerd: acceptable. please take my usb stick for all your 'work' in foresting sticks of RAM; now leave me alone.`;
				
				const button_takeusb = document.createElement("button");
				button_takeusb.textContent = "take the usb stick";
				button_takeusb.id = "button-library";
				button_takeusb.addEventListener("click", TakeUSB);
				NPCbuttonContainer.append(button_takeusb);
			}
		}
		else if (player.ram_sticks < 1 && player.nerd_quest2_flag === true) {
			document.getElementById('NPC-Text').innerHTML = `nerd: you do not appear to have any RAM; stop wasting my time and simply bring me the components, foolish underling`;
		}
		else if (player.nerd_quest_flag === false) {
			document.getElementById('NPC-Text').innerHTML = `nerd: what now? i am still busy`;
		}
	}
}





function TeahouseNerd() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	ChangeBG();
	document.getElementById('NPC').innerText = `
              
              
    ~~~~~~~   
   ~~~~~~~~~  
  ~~^^^~~^^^~ 
  ~--O----O-~ 
  .,...\\/..,. 
  ...,....... 
  ....(==).,. 
    ,.......  
`;
	document.getElementById('NPC-Text').innerHTML = `nerd: yes hello again, what do you want?`;
	
	const button_asknerdhelp = document.createElement("button");
	button_asknerdhelp.textContent = "i need to burn a CD";
	button_asknerdhelp.id = "button-library";
	button_asknerdhelp.addEventListener("click", AskNerdHelp1);
	NPCbuttonContainer.append(button_asknerdhelp);
}

function AskNerdHelp1() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	document.getElementById('NPC-Text').innerHTML = `nerd: your task is pedantic. you must simply transfer media from one medium to another...`;
	
	const button_asknerdhelp2 = document.createElement("button");
	button_asknerdhelp2.textContent = "medium what? medium hot? medium large?";
	button_asknerdhelp2.id = "button-library";
	button_asknerdhelp2.addEventListener("click", AskNerdHelp2);
	NPCbuttonContainer.append(button_asknerdhelp2);
}


function AskNerdHelp2() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `nerd: you are shallow in your extent of learned knowledge. i have a usb stick filled with NERDJAMS, the best music for elite intellectuals, but i won't give it to you. you will likely just break it.`;
	
	const button_asknerdhelp3 = document.createElement("button");
	button_asknerdhelp3.textContent = "try to convince him to give you the stick";
	button_asknerdhelp3.id = "button-library";
	button_asknerdhelp3.addEventListener("click", AskNerdHelp3);
	NPCbuttonContainer.append(button_asknerdhelp3);
}

function AskNerdHelp3() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `nerd: hmm, perhaps you may assist me again? i will require more RAM. give me 10 more sticks of RAM and i will give you my usb stick.`;
	
	const button_acceptnerdquest2 = document.createElement("button");
	button_acceptnerdquest2.textContent = "FINE";
	button_acceptnerdquest2.id = "button-library";
	button_acceptnerdquest2.addEventListener("click", AcceptNerdQuest2);
	NPCbuttonContainer.append(button_acceptnerdquest2);
}

function AcceptNerdQuest2() {
	NerdSFX();
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `nerd: excellent! bring them post-haste! again!`;
	player.nerd_quest2_flag = true;
}


function TakeUSB() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerHTML = `you got a usb stick!`;
	player.nerd_quest2_flag = false;
	player.usb_stick = true;
}