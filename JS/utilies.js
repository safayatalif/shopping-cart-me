function getElementValueById(elementId) {
    const phonTotalElement = document.getElementById(elementId);
    const currentPhonTotalString = phonTotalElement.innerText;
    const currentPhonTotal = parseInt(currentPhonTotalString);
    return currentPhonTotal;
}
function setTextElementById(elementId, value) {
    const taxTotalElement = document.getElementById(elementId);
    taxTotalElement.innerText = value;
}
function calculateSubTotal() {
    const currentPhonTotal = getElementValueById('phon-total');
    const currentCaseTotal = getElementValueById('case-total')
    const currentSubTotal = currentPhonTotal + currentCaseTotal;

    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    setTextElementById('sub-total', currentSubTotal);

    const taxAmountString = (currentPhonTotal * 0.1).toFixed(2);
    const taxAmount =parseFloat(taxAmountString);
    setTextElementById('tax-total', taxAmount);

    const finalTotal = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalTotal);





}