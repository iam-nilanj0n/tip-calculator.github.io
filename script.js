// inputs are here
const Tip_amount = document.querySelector('.Tip_amount');
const Total = document.querySelector('.TOTAL');
const billInput = document.querySelector('.billInput');
const noOfPeople = document.querySelector('.peopleNumber');
// buttons are here
const per5 = document.querySelector('.per5');
const per10 = document.querySelector('.per10');
const per15 = document.querySelector('.per15');
const per25 = document.querySelector('.per25');
const per50 = document.querySelector('.per50');
const custom = document.querySelector('.custom');

// usefull variable are here
let bill, people, tip, total, tipAmmount;

// Left section calculator is here
// button addEventListeners are here
per5.addEventListener('click', function(e){
    tip = Number(e.target.value);
    console.log('tip', tip);
    Calculate() 
})
per10.addEventListener('click', function(e){
    tip = Number(e.target.value);
    console.log('tip', tip);
    Calculate() 
})
per15.addEventListener('click', function(e){
    tip = Number(e.target.value);
    console.log('tip', tip);
    Calculate() 
})
per25.addEventListener('click', function(e){
    tip = Number(e.target.value);
    console.log('tip', tip);
    Calculate() 
})
per50.addEventListener('click', function(e){
    tip = Number(e.target.value);
    console.log('tip', tip);
    Calculate() 
})
custom.addEventListener('change', function(e){
    tip = Number(e.target.value);
    console.log('tip', tip);
    Calculate() 
})

// Inputs addEventListeners are here
billInput.addEventListener('change', function(e){
    bill = Number(e.target.value);
    console.log('hi', bill); 
    Calculate() 
})

noOfPeople.addEventListener('change', function(e){
    people = Number(e.target.value);
    console.log('hi', people);
    Calculate() 
});


// Right section is here

function Calculate(){
    if(bill>0 && tip>0){
        total = bill*(tip/100);
        Total.innerHTML = total;
    }

}




