// Set prices
const beerCost = 6.25;
const burgerCost = 4.75;
const popCost = 3.00;

// Define and output account balance
let accountBalance = 15.75;
const outputBalance = document.querySelector('.balance');
outputBalance.textContent = accountBalance.toFixed(2);

const popbtn = document.querySelector('.drink-pop');
const burgerbtn = document.querySelector('.eat-burger');
const beerbtn = document.querySelector('.drink-beer');


// Eat burger
const burger = function() {
accountBalance = accountBalance - burgerCost;
outputBalance.textContent = accountBalance.toFixed(2);
}

// Drink pop
const pop = function() {
accountBalance = accountBalance - popCost;
outputBalance.textContent = accountBalance.toFixed(2);
}

//Drink beer
const beer  = function() {
accountBalance = accountBalance - beerCost;
outputBalance.textContent = accountBalance.toFixed(2);
}


burgerbtn = addEventListener('click', burger);
popbtn = addEventListener('click', pop);
beerbtn = addEventListener('click', beer);



