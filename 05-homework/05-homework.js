function getRandomArray(length,min,max){
    let result = [];
    for(let i = 0; i < length; i++){
        result.push(Math.round(Math.random() * (max - min) + min))
    }
    return result
}

function getAverage(...numbers){
    let result = numbers.filter(el => Number.isInteger(el)).map(el => parseInt(el))
    let sum = result.reduce((acc, el) => acc + el) / result.length
    return sum
}

function filterEvenNumbers (...nums){
    let sorted = nums.filter(el => el % 2 !== 0)
    return sorted
}

function countPositiveNumbers(...nums){
    let sorted = nums.filter(el => el > 0)
    return sorted.length
}

function getDividedByFive(...nums){
    let sorted = nums.filter(el => el % 5 === 0)
    return sorted
}

function getMedian(...numbers){
    // debugger
    let result = numbers.filter(el => Number.isInteger(el)).map(el => parseInt(el))
    result.sort((a,b) => a - b)

    return result.length % 2 !== 0 ? result[(result.length - 1) / 2 ] : result[(result.length) / 2 ] - 0.5
}