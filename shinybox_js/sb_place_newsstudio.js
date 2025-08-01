////////////////////////////////////
//fox50 news studio

function ViewNewsStudio() {
	NewsStudioMusic();
	PawnbrokerSFX();
	resetButtonPosition();
	player.location = "news_studio"
	ChangeBG();
	document.getElementById('NPC').innerText = `
█____________█
█------------█
█--fox 50  --█
█------------█
█____________█
█$█$█$█$█$█$██
██████████████
█-█   █   █--█
█-█  .█.  █--█
█_█___█___█__█
`;
	document.getElementById('NPC-Text').innerText = `it's the local news studio`;
	const NPCbuttonContainer = document.getElementById('NPC-Button-Container');
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	
	const button_firstspeakjournalist = document.createElement("button");
	button_firstspeakjournalist.textContent = "speak to the journalist";
	button_firstspeakjournalist.id = "button-news";
	button_firstspeakjournalist.addEventListener("click", FirstspeakJournalist);
	NPCbuttonContainer.append(button_firstspeakjournalist);
	
	const button_watchnews = document.createElement("button");
	button_watchnews.textContent = "watch the news";
	button_watchnews.id = "button-news";
	button_watchnews.addEventListener("click", WatchNews);
	NPCbuttonContainer.append(button_watchnews);
}


function FirstspeakJournalist() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	PawnbrokerSFX();
	document.getElementById('NPC').innerText = `
    ______    
  /      \\
__/ fox 50 \\__
 -------------
 | __    __ |  ~
 |  O    O  | ~
 |     >    | ~
\\     <=====o
\\________/
`;
	if (player.news_quest === false) {
		document.getElementById('NPC-Text').innerText = `journalist: yeah? who sent you?`;
		
		const button_secondspeakjournalist = document.createElement("button");
		button_secondspeakjournalist.textContent = "the owner of the teahouse...";
		button_secondspeakjournalist.id = "button-news";
		button_secondspeakjournalist.addEventListener("click", SecondspeakJournalist);
		NPCbuttonContainer.append(button_secondspeakjournalist);
	}
	else if (player.news_quest === true && !player.interview_trader && !player.interview_crow && !player.interview_farmer && !player.interview_vendingmachine && !player.interview_dwarf && !player.interview_pawnbroker && !player.interview_librarian && !player.interview_nerd && !player.interview_manager && !player.interview_monk && !player.interview_teahouse) {
		document.getElementById('NPC-Text').innerText = `journalist: still waitin' on those interviews`;
	}
	else if (player.news_quest === true && player.interview_trader && player.interview_crow && player.interview_farmer && player.interview_vendingmachine && player.interview_dwarf && player.interview_pawnbroker && player.interview_librarian && player.interview_nerd && player.interview_manager && player.interview_monk && player.interview_teahouse) {
		document.getElementById('NPC-Text').innerText = `journalist: well alright, how did it go? what did they have to say?`;
		
		const button_telltrader = document.createElement("button");
		button_telltrader.textContent = "the trader said ";
		button_telltrader.id = "button-news";
		button_telltrader.addEventListener("click", TellTrader);
		NPCbuttonContainer.append(button_telltrader);
	}
}

function TellTrader() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the crow?`;
		
	const button_tellcrow = document.createElement("button");
	button_tellcrow.textContent = "the crow said ";
	button_tellcrow.id = "button-news";
	button_tellcrow.addEventListener("click", TellCrow);
	NPCbuttonContainer.append(button_tellcrow);
}


function TellCrow() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the farmer?`;
		
	const button_tellfarmer = document.createElement("button");
	button_tellfarmer.textContent = "the farmer said ";
	button_tellfarmer.id = "button-news";
	button_tellfarmer.addEventListener("click", TellFarmer);
	NPCbuttonContainer.append(button_tellfarmer);
}

function TellFarmer() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the vm?`;
		
	const button_tellvm = document.createElement("button");
	button_tellvm.textContent = "the vm said ";
	button_tellvm.id = "button-news";
	button_tellvm.addEventListener("click", TellVM);
	NPCbuttonContainer.append(button_tellvm);
}

function TellVM() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the dwarf?`;
		
	const button_telldwarf = document.createElement("button");
	button_telldwarf.textContent = "the dwarf said ";
	button_telldwarf.id = "button-news";
	button_telldwarf.addEventListener("click", TellDwarf);
	NPCbuttonContainer.append(button_telldwarf);
}

function TellDwarf() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the pawnbroker?`;
		
	const button_tellpawnbroker = document.createElement("button");
	button_tellpawnbroker.textContent = "the pawnbroker said ";
	button_tellpawnbroker.id = "button-news";
	button_tellpawnbroker.addEventListener("click", TellPawnbroker);
	NPCbuttonContainer.append(button_tellpawnbroker);
}

function TellPawnbroker() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the librarian?`;
		
	const button_telllibrarian = document.createElement("button");
	button_telllibrarian.textContent = "the librarian said ";
	button_telllibrarian.id = "button-news";
	button_telllibrarian.addEventListener("click", TellLibrarian);
	NPCbuttonContainer.append(button_telllibrarian);
}

function TellLibrarian() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the nerd?`;
		
	const button_tellnerd = document.createElement("button");
	button_tellnerd.textContent = "the nerd said ";
	button_tellnerd.id = "button-news";
	button_tellnerd.addEventListener("click", TellNerd);
	NPCbuttonContainer.append(button_tellnerd);
}

function TellNerd() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the manager?`;
		
	const button_tellmanager = document.createElement("button");
	button_tellmanager.textContent = "the manager said ";
	button_tellmanager.id = "button-news";
	button_tellmanager.addEventListener("click", TellManager);
	NPCbuttonContainer.append(button_tellmanager);
}

function TellManager() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and the monk?`;
		
	const button_tellmonk = document.createElement("button");
	button_tellmonk.textContent = "the monk said ";
	button_tellmonk.id = "button-news";
	button_tellmonk.addEventListener("click", TellMonk);
	NPCbuttonContainer.append(button_tellmonk);
}

function TellMonk() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: hmm interesting, and my friend at the teahouse?`;
		
	const button_tellteahouse = document.createElement("button");
	button_tellteahouse.textContent = "the owner said ";
	button_tellteahouse.id = "button-news";
	button_tellteahouse.addEventListener("click", TellTeahouse);
	NPCbuttonContainer.append(button_tellteahouse);
}

function TellTeahouse() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: thanks for gathering all that`;
		
	const button_finishjournalistquest = document.createElement("button");
	button_finishjournalistquest.textContent = "now about my reward...";
	button_finishjournalistquest.id = "button-news";
	button_finishjournalistquest.addEventListener("click", FinishJournalistQuest);
	NPCbuttonContainer.append(button_finishjournalistquest);
}

function SecondspeakJournalist () {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: oh, well i trust him with a source, he does sell tea to everyone after all...`;
	
	const button_thirdspeakjournalist = document.createElement("button");
	button_thirdspeakjournalist.textContent = "yeah yeah, what do you want?";
	button_thirdspeakjournalist.id = "button-news";
	button_thirdspeakjournalist.addEventListener("click", ThirdspeakJournalist);
	NPCbuttonContainer.append(button_thirdspeakjournalist);
}

function ThirdspeakJournalist () {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: i need information. i would like you to interview the locals. talk to everyone you can and come back`;
	
	const button_acceptjournalistquest = document.createElement("button");
	button_acceptjournalistquest.textContent = "well this should be easy...";
	button_acceptjournalistquest.id = "button-news";
	button_acceptjournalistquest.addEventListener("click", AcceptJournalistQuest);
	NPCbuttonContainer.append(button_acceptjournalistquest);
}

function AcceptJournalistQuest () {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: return here with the opinions at once`;
	player.news_quest = true;
}

function FinishJournalistQuest() {
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	document.getElementById('NPC-Text').innerText = `journalist: thanks [quest complete]`;
	player.news_quest = false;
	player.news_quest_complete = true;
}




function WatchNews() {
	document.getElementById('myVideo').style.display = 'block';
	NPCbuttonContainer.innerHTML = ''; // Clear any existing buttons or content
	const buttonContainer = document.getElementById('Button-Container');
    buttonContainer.style.visibility = 'hidden';
	
	document.getElementById('NPC-Text').innerText = `fox50 news`;
	
	const button_stopvideo = document.createElement("button");
	button_stopvideo.textContent = "go back";
	button_stopvideo.id = "button-news";
	button_stopvideo.addEventListener("click", StopVideo);
	NPCbuttonContainer.append(button_stopvideo);
	
	StartVideo();
}

const video = document.getElementById("myVideo");

function StartVideo() {
	StopMusic();
    video.play();
    document.getElementById('NPC').innerText = ``;
}

function StopVideo() {
	video.pause();
	document.getElementById('myVideo').style.display = 'none';
	const buttonContainer = document.getElementById('Button-Container');
    buttonContainer.style.visibility = 'visible'; // Show buttons again
	ViewNewsStudio();
}