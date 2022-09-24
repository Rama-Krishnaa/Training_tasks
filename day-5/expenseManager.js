
let incomeArr = [];
let expenseArr = []
let incomeSection = document.getElementById('section1');
let expenseSection = document.getElementById('section3');
let incomeTag = document.getElementById('income');
let expenseTag = document.getElementById('expense');
let moneyLeftTag = document.getElementById('money-left');

function add() {
let select = document.getElementById('operation').value;
let description = document.getElementById('description').value;
let amount = document.getElementById('amount').value;
    console.log(select);
    (select == 'plus') ? income() : expense();

}


function income () {
    console.log('income');
    let select = document.getElementById('operation').value;
    let description = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;    
   let pTag = document.createElement('p');
   pTag.innerHTML = description + " " + amount;
   incomeSection.appendChild(pTag);

   incomeArr.push(parseInt(amount));
   totalIncome(incomeArr);

}

function expense() {
    console.log('expense');
    let select = document.getElementById('operation').value;
    let description = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;
    let pTag = document.createElement('p');
    pTag.innerHTML = description + " " + amount;
    expenseSection.appendChild(pTag);

    expenseArr.push(parseInt(amount));
    totalExpense(expenseArr);
}


function moneyLeft() {
    let totalMoneyLeft = incomeRes - expenseRes;
    moneyLeftTag.innerHTML = totalMoneyLeft;
}

let incomeRes=0;

function totalIncome(arr) {
    for (let i = 0; i <arr.length; i++) {
        incomeRes += arr[i];
    }
    incomeTag.innerHTML = incomeRes;
    moneyLeft();

}
let expenseRes=0;

function totalExpense(arr) {

    for (let i = 0; i <arr.length; i++) {
        expenseRes += arr[i];
    }
    expenseTag.innerHTML = expenseRes;
    moneyLeft();
}
