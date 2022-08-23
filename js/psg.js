

function displayPlayerNames (playerList){
    // const playerListSerial = document.getElementById('player-list');

}


const playerNamesArray = [];

function addToList(element) {
    element.disabled = true;

    const playerName = element.parentNode.parentNode.children[0].innerText;

    playerNamesArray.push(playerName);

    document.getElementById("selected-name").innerText = playerNamesArray.length;

    displayPlayerNames(playerNamesArray);
}