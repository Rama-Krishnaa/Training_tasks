let amt = document.getElementById("amount");
let rate = document.getElementById("rate");
let year = document.getElementById("year");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

function funCalc() {
  let res = (amt.value * year.value * rate.value) / 100;
  result.innerHTML = res;
}

// Calculate total salary

function func() {
  let salary = document.querySelectorAll(".sal");
  //   console.log(salary)
  let sum = 0;
  for (let s of salary) {
    sum += parseInt(salary.innerHTML);
    // console.log(sum);
  }
  let totalValue = document.getElementById("totalValue");
  totalValue.innerHTML = sum;
}

// Uppercase Task
let input = document.getElementById("input");
input.addEventListener("keyup", () => {
  input.value = input.value.toUpperCase();
});
