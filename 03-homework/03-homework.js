// getMaxDigit
function getMaxDigit(num){
    let arr = num.toString().split('').map(el => parseInt(el))
    return Math.max(...arr)
}

// powNum
function powNum(num,pow){
    for(let i = 1; i < pow; i++){
        num *= pow
    }
    return num
}

//namePretier
function namePretier(str){
    let rest = str.slice(1).toLowerCase();
    let first = str.slice(0,1).toUpperCase()
    return first + rest
}

//isPalyndrom
function isPalyndrom(str){
    return (str.toLowerCase() == str.toLowerCase().split('').reverse().join(''))
}

//getRandomNumber
function getRandomNumber(min,max){
    let randomNumb = Math.round(Math.random() * (max - min) + min)
    return randomNumb
}


//getSalaryTax
function getSalaryTax(salary, tax){
    return salary - (tax * (salary / 100))
}

console.log(`Функція getMaxDigit: ${getMaxDigit(1325487968)}`)
console.log(`Функція powNum: ${powNum(7,7)}`)
console.log(`Функція namePretier: ${namePretier('kAtE')}`)
console.log(`Функція isPalyndrom: ${isPalyndrom('Анна')}`)
console.log(`Функція getRandomNumber: ${getRandomNumber(1,10)}`)
console.log(`Функція getSalaryTax: ${getSalaryTax(1000,19.5)}`)