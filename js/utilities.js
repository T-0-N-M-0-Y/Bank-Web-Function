// Function diya sob Input, Innertext gula nite hobe
function getInputById(inputId) {
    const inputValue = document.getElementById(inputId);
    const newInput = inputValue.value;
    const newAmount = parseFloat(newInput);
    inputValue.value = '';
    return newAmount;
}

function getTextAmountById(amountId) {
    const totalElement = document.getElementById(amountId);
    const oldTotal = totalElement.innerText;
    const oldAmount = parseFloat(oldTotal);
    return oldAmount;
}

//New Deposit Total, New Main balance Add korar jonne Function set kortesi.
function setNewValueById(elementId, NewValue) {
    const totalElementValue = document.getElementById(elementId);
    totalElementValue.innerText = NewValue;
}

