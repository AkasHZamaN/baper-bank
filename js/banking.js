// deposte and balance event listener

document.getElementById('deposite-btn').addEventListener('click', function(){
    const amountField = document.getElementById('deposite-amount');
    // new deposite amount
    const newDepositeAmount = amountField.value;

    // previous deposite amount
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositAmount = depositeTotal.innerText;

    //total amount of deposite
    const totalDepositAmount = parseFloat(previousDepositAmount) + parseFloat(newDepositeAmount);

    // total amount show in website
    depositeTotal.innerText = totalDepositAmount;

    // previous balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;

    // total balance
    const totalBalanceAmount = parseFloat(previousBalanceAmount) + parseFloat(newDepositeAmount);

    // total amount show in website
    balanceTotal.innerText = totalBalanceAmount;
    // clear diposite filed after input
    amountField.value = '';
})

// withdraw and balance event listener

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawField.value;
    withdrawField.value = '';

    // withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdraw);

    const allWithdraw = parseFloat(withdrawAmount) + previousWithdrawTotal;
    withdrawTotal.innerText = allWithdraw;

    // get total balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;

    // total amount after withdraw
    const totalAmount = parseFloat(previousBalance) - parseFloat(withdrawAmount);
    // total balance show in website
    balanceTotal.innerText = totalAmount;
})