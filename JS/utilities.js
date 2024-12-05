// Get Input Value
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

//Get And Set Main Balance
function mainBalance(i) {
    const currentBalance = parseFloat(document.getElementById('balance').innerText); //Main Balance
    document.getElementById('balance').innerText = currentBalance - i
}

// Get and set donated amount
function donatedAmount(id, value) {
    const currentAmount = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = currentAmount + value;
}

// Add to History 
function createHistory(title, amount, mainDiv) {
    const topic = document.getElementById(title).innerText;
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-2xl', 'p-8', 'space-y-2')
    div.innerHTML = `
        <p class="font-bold text-xl text-mainText">${amount} Taka is ${topic}</p>
        <p class="font-light text-base text-subText">Time : ${new Date().toLocaleTimeString()}  Date : ${new Date().toLocaleDateString()}</p>
    `
    document.getElementById(mainDiv).appendChild(div)
}

// Clear Input
function clearInputField(id) {
    document.getElementById(id).value = '';
}