// common function

function getValueFromInputField(inputId) {
    const perPlayerCostId = document.getElementById(inputId);
    const costValue = perPlayerCostId.value;
    const convertToFloat = parseFloat(costValue);
    perPlayerCostId.value = '';
    return convertToFloat;
}