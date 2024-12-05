// Tab Toggle

// Donate
document.getElementById('donationBtn').addEventListener('click', function (event) {
    document.getElementById('historyTab').classList.add('hidden');
    document.getElementById('donationTab').classList.remove('hidden');
    document.getElementById('historyBtn').classList.remove('bg-themePrimary')
    document.getElementById('donationBtn').classList.add('bg-themePrimary')

})

// History
document.getElementById('historyBtn').addEventListener('click', function (event) {
    document.getElementById('donationBtn').classList.remove('bg-themePrimary')
    document.getElementById('donationTab').classList.add('hidden');
    document.getElementById('historyTab').classList.remove('hidden');
    event.target.classList.add('bg-themePrimary');

})


// Card - 1
function donate1() {
    const donateAmount = getInputValue('donate1');
    if (donateAmount < 0) {
        return alert('Please insert Positive Amount')
    } else {
        const currentBalance = parseFloat(document.getElementById('balance').innerText);
        if (currentBalance !== 0) {
            mainBalance(donateAmount);
            donatedAmount('donatedOneBalance', donateAmount);
            document.getElementById('my_modal_5').showModal();
            createHistory('title1', donateAmount, 'historyTab');

        } else {
            return alert('insufficient balance')
        }
    }
}

// Card - 2
function donate2() {
    const donateAmount = getInputValue('donate2');
    if (donateAmount < 0) {
        return alert('Please insert Positive Amount')
    } else {
        const currentBalance = parseFloat(document.getElementById('balance').innerText);
        if (currentBalance !== 0) {
            mainBalance(donateAmount)
            donatedAmount('donatedTwoBalance', donateAmount);
            document.getElementById('my_modal_6').showModal();
            createHistory('title2', donateAmount, 'historyTab');
        } else {
            return alert('insufficient balance')
        }
    }
}

// Card - 2
function donate3() {
    const donateAmount = getInputValue('donate3');
    if (donateAmount < 0) {
        return alert('Please insert Positive Amount')
    } else {
        const currentBalance = parseFloat(document.getElementById('balance').innerText);
        if (currentBalance !== 0) {
            mainBalance(donateAmount)
            donatedAmount('donatedThreeBalance', donateAmount);
            document.getElementById('my_modal_7').showModal();
            createHistory('title3', donateAmount, 'historyTab');
        } else {
            return alert('insufficient balance')
        }
    }
}