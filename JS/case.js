
function updateCaseNumber(isIncrease) {
    const caseNumberFiled = document.getElementById('case-number-field');
    const caseNumberString = caseNumberFiled.value;
    const caseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = caseNumber + 1;
    }
    else {
        newCaseNumber = caseNumber - 1;
    }
    caseNumberFiled.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalNumber(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59 ;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalNumber(newCaseNumber);
    calculateSubTotal();



})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
   updateCaseTotalNumber(newCaseNumber);
   calculateSubTotal();

})
