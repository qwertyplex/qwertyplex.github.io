function ComputerGameStart() {
	const CGContainer = document.getElementById('Computer-Game-Container');
    CGContainer.style.visibility = 'visible';
}

function ComputerGameStop() {
	const CGContainer = document.getElementById('Computer-Game-Container');
    CGContainer.style.visibility = 'hidden';
}

function CGShiny() {
	player.tinythings += 1;
}

function CGCash() {
	player.tinyxp += player.tinythings;
	player.tinythings -= player.tinythings;
	player.tinythings = 0;
}