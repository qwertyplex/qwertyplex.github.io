function DiscardShinythings() {
    if (typeof player.shinythings !== 'number' || isNaN(player.shinythings) || player.shinythings <= 0) {
        console.error("Invalid number of shiny things:", player.shinythings);
        return; // Exit if there's an issue with the number of shiny things
    }
    player.shinythings_wasted += player.shinythings;
    DiscardShinythingsSound();
    document.getElementById('NPC-Text').innerText = `You threw ${player.shinythings} shiny things on the ground!`;
    console.log("Shiny things wasted:", player.shinythings_wasted);
    player.shinythings = 0;
}
