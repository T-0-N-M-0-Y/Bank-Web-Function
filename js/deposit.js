//Id Gula Diye Function Gulake Call korte hobe
document.getElementById('btn-deposit').addEventListener('click', function () {

    // User Input Call Ditesi
    const depositInput = getInputById('user-deposit');

    // Ager Deposit Value Koto Cilo Oita Call Ditesi
    const previousDepositTotalAmount = getTextAmountById('deposit-amount');

    // Ager Amount er Sate new deposit Joog Kortesi
    const newDepositAmount = previousDepositTotalAmount + depositInput;

    //joog Korar Por Jei Value Atese Oita Deposit total e Add kortesi display korar Jonne
    setNewValueById('deposit-amount', newDepositAmount);

    //Main balance e koto $ ase seta call kortesi
    const mainBalanceAmount = getTextAmountById('account-amount');

    //Ager Main Balance er sate Deposit er new amount jog kortesi
    const newMainBalance = mainBalanceAmount + depositInput;

    //Joog korar por ta main balance e show kortesi
    setNewValueById('account-amount', newMainBalance)

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