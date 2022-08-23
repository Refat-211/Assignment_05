const playerNamesArray = [];

function addToList(element) {

    element.disabled = true;
    
    const playerName = element.parentNode.parentNode.children[0].innerText;

    playerNamesArray.push(playerName);

    if (playerNamesArray.length <= 5) {

        document.getElementById("selected-name").innerText = playerNamesArray.length;

        const listContainer = document.getElementById("player-list");
        listContainer.innerHTML = "";

        for (let i = 0; i < playerNamesArray.length; i++) {

            const playerNameList = playerNamesArray[i];
            const tr = document.createElement("tr");
            tr.innerHTML = `<th>${i + 1}</th>
            <td>${playerNameList}</td>`;
            listContainer.appendChild(tr);
        }
    }

    else {
        alert('You can be able to select maximum five players.');
        element.disabled = false;
    }
    
}

// calculate section

document.getElementById('btn-calculate').addEventListener('click', function () {
    const everyPlayerCost  = document.getElementById('per-player-cost');


    const perPlayerCostValue = everyPlayerCost.value;

    if (perPlayerCostValue < 1 || perPlayerCostValue === '') {
        alert('Please enter positive value');
    }

    else {
        const playerList = document.getElementById('player-list');
        const playerListItems = playerList.childElementCount;
        const perPlayerCost = getValueFromInputField('per-player-cost');
        const totalCostOfPlayers = playerListItems * perPlayerCost;
        const totalCost = document.getElementById('player-total-cost');
        totalCost.innerText = totalCostOfPlayers;

    }
});

