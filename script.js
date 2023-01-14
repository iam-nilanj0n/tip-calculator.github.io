// inputs are here
const billInput = document.querySelector('.billInput');
const noOfPeopleInput = document.querySelector('.peopleNumber');
const customInput = document.querySelector('.custom');
// buttons are here
const per5 = document.querySelector('.tip5');
const per10 = document.querySelector('.tip10');
const per15 = document.querySelector('.tip15');
const per25 = document.querySelector('.tip25');
const per50 = document.querySelector('.tip50');
const resetButton = document.querySelector('.RESET')
// output para is here
const tipOutput = document.querySelector('.tipOutput');
const totalOutput = document.querySelector('.totalOutput');
// important variable for this code
let arr = [];
let tipValue = 0;

// addEventListeners are here
billInput.addEventListener('change', (event) => {
    billInput.value = event.target.value;
})

noOfPeopleInput.addEventListener('change', (event) => {
    noOfPeopleInput.value = event.target.value;
})
customInput.addEventListener('change', (event) => {
    customInput.value = event.target.value;
})
per5.addEventListener('click', (event)=>{
    tipValue = 5;
    customInput.value = null;
})
per10.addEventListener('click', (event)=>{
    tipValue = 10;
    customInput.value = null;
})
per15.addEventListener('click', (event)=>{
    tipValue = 15;
    customInput.value = null;
})
per25.addEventListener('click', (event)=>{
    tipValue = 25;
    customInput.value = null;
})
per50.addEventListener('click', (event)=>{
    tipValue = 50;
    customInput.value = null;
})

resetButton.addEventListener('click', (event)=>{
    billInput.value = null;
    noOfPeopleInput.value = null;
    tipValue = 0;
    customInput.value = null;
    tipOutput.textContent = '$0.00';
    totalOutput.textContent = '$0.00';
})
// setInterval is here
const inputPaddingLeftDecrease = setInterval(() => {
    if (String(billInput.value).length === 0) {
        billInput.style.paddingLeft = '23vw';
    }
    if (String(billInput.value).length > 0) {
        arr = [...String(billInput.value)]
        let padd1 = 23 - (0.5 * arr.length);
        billInput.style.paddingLeft = `${padd1}vw`;
    }
    if (String(noOfPeopleInput.value).length === 0) {
        noOfPeopleInput.style.paddingLeft = '23vw';
    }
    if (String(noOfPeopleInput.value).length > 0) {
        arr = [...String(noOfPeopleInput.value)]
        let padd2 = 23 - (0.5 * arr.length);
        noOfPeopleInput.style.paddingLeft = `${padd2}vw`;
    }
    
    if(customInput.value>0){
        tipValue = customInput.value;
    }

    if(Number(billInput.value)>0 && Number(noOfPeopleInput.value)>0 && tipValue>0){
        let bill = Number(billInput.value);
        let tipAmount = (bill*(tipValue/100))/Number(noOfPeopleInput.value);
        let totalAmount = (bill + (bill*(tipValue/100))/Number(noOfPeopleInput.value))/Number(noOfPeopleInput.value) ;

        tipOutput.textContent =`$${tipAmount.toFixed(2)}`;
        totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
    }

}, 50)






