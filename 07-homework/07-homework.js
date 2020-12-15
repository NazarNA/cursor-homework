const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };



// 1
function getMyTaxes(salary) {
  return salary * this.tax
}

//2
function getMiddleTaxes() {
  return this.tax * this.middleSalary
}

//3
function getTotalTaxes(){
  return this.tax * this.middleSalary * this.vacancies
}

//4
function getMySalary(){

  let salary = Math.round(Math.random() * (2000 - 1500) + 2000)
  let taxes = parseInt(salary * this.tax);
  let profit = salary - taxes

    console.log({salary: salary, taxes: taxes, profit: profit}) 
}


console.log(getMyTaxes.call(ukraine, ukraine.middleSalary))
console.log(getMiddleTaxes.call(ukraine))
console.log(getTotalTaxes.call(ukraine))
setInterval(() => getMySalary.call(ukraine),10000)