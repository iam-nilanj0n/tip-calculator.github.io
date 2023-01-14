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
    tipValue = 5
})
per10.addEventListener('click', (event)=>{
    tipValue = 10
})
per15.addEventListener('click', (event)=>{
    tipValue = 15
})
per25.addEventListener('click', (event)=>{
    tipValue = 25
})
per50.addEventListener('click', (event)=>{
    tipValue = 50
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
        console.log(tipValue);
    }
}, 50)






