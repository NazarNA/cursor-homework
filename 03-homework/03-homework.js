// getMaxDigit
function getMaxDigit(num){
    let arr = num.toString().split('').map(el => parseInt(el))
    console.log(Math.max(...arr))
}

// powNum
function powNum(num,pow){
    for(let i = 1; i < pow; i++){
        num *= pow
        console.log(num)
    }
}

//namePretier
function namePretier(str){
    let rest = str.slice(1).toLowerCase();
    let first = str.slice(0,1).toUpperCase()
    console.log(first + rest)
}

//isPalyndrom
function isPalyndrom(str){
    console.log(str.toLowerCase() == str.toLowerCase().split('').reverse().join(''))
}

