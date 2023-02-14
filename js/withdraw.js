document.getElementById('btn-withdraw').addEventListener('click', function () {

    // User Input Call Ditesi
    const withdrawInput = getInputById('user-withdraw');

    // Ager Deposit Value Koto Cilo Oita Call Ditesi
    const previousWithdrawTotalAmount = getTextAmountById('withdraw-amount');

    //User Input er sate Ager Withdraw Joog kotesi
    const newWithdrawAmountTotal = previousWithdrawTotalAmount + withdrawInput;

    //Joog korar por Value Show kortesi
    setNewValueById('withdraw-amount', newWithdrawAmountTotal)

    //Main Balance take Call kortesi
    const mainBalanceAmount = getTextAmountById('account-amount');

    //Withdraw Amount take Main Balance theke Biyog kortesi
    const newMainBalance = mainBalanceAmount - withdrawInput;

    //Biyog korar por ta main balance e show kortesi
    setNewValueById('account-amount', newMainBalance)

})

// // How Withdraw Button Works
// document.getElementById('btn-withdraw').addEventListener('click', function () {
//     const withdrawInput = document.getElementById('user-withdraw');
//     const withdraw = withdrawInput.value;
//     const newWithdraw = parseFloat(withdraw);

//     withdrawInput.value = '';

//     if (isNaN(newWithdraw)) {
//         alert('Please provide a valid number');
//         return;
//     }

//     //How Withdraw Window Works
//     const withdrawAmount = document.getElementById('withdraw-amount');
//     const withdrawAmountTotal = withdrawAmount.innerText;
//     const withdrawAmountSaved = parseFloat(withdrawAmountTotal);

//     //How Main Balance Works
//     const mainBalance = document.getElementById('account-amount');
//     const totalMainAmount = mainBalance.innerText;
//     const totalBalance = parseFloat(totalMainAmount)

//     if (newWithdraw > totalBalance) {
//         alert('Baap er bank e eto taka nai');
//         return;
//     }

//     //Calculate Withdraw
//     const totalAmountWithdraw = withdrawAmountSaved + newWithdraw;
//     withdrawAmount.innerText = totalAmountWithdraw;

//     //Calculate Balance
//     const newMainBalance = totalBalance - newWithdraw;
//     mainBalance.innerText = newMainBalance;
// })