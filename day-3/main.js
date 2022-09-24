
// User Policy
function show() {

let privacy = document.getElementById('privacy').checked;
let acceptUser = document.getElementById('accept-user').checked;;
let endUser = document.getElementById('end-user').checked;;
let output = document.getElementById('output');

let stat = 'unknown';

    if(privacy) {
        stat = document.getElementById('privacy').value;
        stat += " "
    }
    
    if(acceptUser) {
        stat+= document.getElementById('accept-user').value;
        stat += " "

    }
    
    
    if(endUser) {
        stat+= document.getElementById('end-user').value;
    }

    output.innerHTML = stat;
    
}

// Task Manager

let taskArray = [];
let output = document.getElementById('output');
output.innerHTML = taskArray;


function addPrompt() {
    let addTask = prompt('Enter the task you want to add')
    taskArray[taskArray.length] = addTask; 
    output.innerHTML = taskArray;
}

function dltPrompt() {
    let dltTask = prompt('Enter the index of the task to delete');
    delete taskArray[dltTask];
    output.innerHTML = taskArray;
}



// Cart

let items =[];
lineCost = document.getElementById('line-cost');
let outputItem = document.getElementById('output');
function show() {
    let itemId = document.getElementById('id');
    let itemName = document.getElementById('name');
    let itemCost = document.getElementById('cost');
    let itemQty = document.getElementById('qty');
    let subTtl = document.getElementById('sub-total')
    let totalCost = document.getElementById('total');
    let saleTaxAmt = document.getElementById('sale-tax');
    let item = {
        itemId : itemId.value,
        itemName : itemName.value,
        itemCost : itemCost.value,
        itemQty : itemQty.value,
    }

    items.push(item);
    console.log(items);
    let output = '';
    let subTotal = 0;

    for(let i = 0; i < items.length; i++) {
       output+=  items[i].itemId + " " + items[i].itemName + " " + items[i].itemCost + " " + items[i].itemQty + " " + items[i].itemQty * items[i].itemCost + "\n";
       subTotal+= items[i].itemQty * items[i].itemCost
    }
    outputItem.innerHTML = output;
    subTtl.innerHTML = subTotal;
    let saleTax = subTotal * 0.7;
    let total = subTotal + saleTax;
    saleTaxAmt.innerHTML = saleTax;
    totalCost.innerHTML = total;

}



