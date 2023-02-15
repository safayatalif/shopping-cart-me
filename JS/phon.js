function updatePhonNumber(isIncrease) {
    const phonNumberFiled = document.getElementById('phon-number-field');
    const phonNumberString = phonNumberFiled.value;
    const phonNumber = parseInt(phonNumberString);
    let newPhonNumber;
    if (isIncrease) {
        newPhonNumber = phonNumber + 1;
    }
    else {
        newPhonNumber = phonNumber - 1;
    }
    phonNumberFiled.value = newPhonNumber;
    return newPhonNumber;
}

function updatePhonTotalNumber(newPhonNumber) {
    const phonTotalPrice = newPhonNumber * 1219;
    const phonTotalElement = document.getElementById('phon-total');
    phonTotalElement.innerText = phonTotalPrice;
}


document.getElementById('btn-phon-plus').addEventListener('click', function () {
    const newPhonNumber = updatePhonNumber(true);
    updatePhonTotalNumber(newPhonNumber);

    calculateSubTotal();
    




})
document.getElementById('btn-phon-minus').addEventListener('click', function () {
    const newPhonNumber = updatePhonNumber(false);
    updatePhonTotalNumber(newPhonNumber);
    calculateSubTotal();
})