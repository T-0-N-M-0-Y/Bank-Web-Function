// Function diya sob Input, Innertext gula nite hobe
function getInputDepositById(inputDepositId) {
    const depositInput = document.getElementById(inputDepositId);
    const newDeposit = depositInput.value;
    const newDepositAmount = parseFloat(newDeposit);
    depositInput.value = '';
    return newDepositAmount;
}

function getTextAmountById(amountId) {
    const depositTotalElement = document.getElementById(amountId);
    const oldDepositTotal = depositTotalElement.innerText;
    const oldDepositAmount = parseFloat(oldDepositTotal);
    return oldDepositAmount;
}

//Tarpor Id Gula Diye Function Gulake Call korte hobe
document.getElementById('btn-deposit').addEventListener('click', function () {

    // User Input Call Ditesi
    const depositInput = getInputDepositById('user-deposit');

    // Ager Deposit Value Koto Cilo Oita Call Ditesi
    const depositTotalAmount = getTextAmountById('deposit-amount');

    // Ager Amount er Sate new deposit Joog Kortesi
    const newDepositAmount = depositTotalAmount + depositInput;
    console.log(newDepositAmount);

// document.getElementById('btn-deposit').addEventListener('click', function () {

//     const depositInput = document.getElementById('user-deposit');
//     const newDeposit = depositInput.value;
//     const newDepositAmount = parseFloat(newDeposit);

//     const depositTotalElement = document.getElementById('deposit-amount');
//     const oldDepositTotal = depositTotalElement.innerText;
//     const oldDepositAmount = parseFloat(oldDepositTotal);

//     const currentDepositeTotal = oldDepositAmount + newDepositAmount;
//     depositTotalElement.innerText = currentDepositeTotal;

//     const mainBalance = document.getElementById('account-amount');
//     const totalMainAmount = mainBalance.innerText;
//     const totalBalance = parseFloat(totalMainAmount)

//     const newMainBalance = totalBalance + newDepositAmount;

//     mainBalance.innerText = newMainBalance;
//     depositInput.value ='';
})