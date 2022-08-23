function getInputValue(inputFieldId) {
    const playerCostId = document.getElementById(inputFieldId);
    let playerCostValue = playerCostId.value;
    let converPlayerCostValue = parseFloat(playerCostValue);
    playerCostId.value = '';
    return converPlayerCostValue;
}