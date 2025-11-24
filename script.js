document.getElementById('investment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const dailyReturn = amount * 0.10; // 10% daily return
    document.getElementById('result').innerText = `You will earn $${dailyReturn.toFixed(2)} daily!`;
});

document.getElementById('withdraw').addEventListener('click', function() {
    alert('Withdraw function not implemented yet.');
});
