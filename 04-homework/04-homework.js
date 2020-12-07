const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];



//copy = JSON.parse(JSON.stringify(origin)) зі http://stackoverflow.com/
//спосіб копіювання двомірного масиву, так як копія, яка зроблена spreade(...) вносить зміни в вхіжний масив
//таким чином ми зберігаємо чистоту функцій, і не змінюємо вхідні дані

// ---1---
function getPairs(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push([arr[i],arr[++i]]) 
    }
    return result
}

let pairs = getPairs(students);
console.log(pairs)


// ---2---
function getPairsAndThemes(prs,thms) {
    let result = JSON.parse(JSON.stringify(prs))
    for(let i = 0; i < thms.length; i++){
        result[i].push( thms[i])
    }
    return result
}

const pairsAndThemes = getPairsAndThemes(pairs,themes)
console.log(pairsAndThemes)

// ---3---
function getStudentsWithMarks(std,mrks) {
    let result = []
    for(let i = 0; i < mrks.length; i++){
        result.push([std[i],mrks[i]]) 
    }
    return result
}

let studentsWithMarks = getStudentsWithMarks(students, marks)
console.log(studentsWithMarks)

// ---4---
function getRandomMarkForPairs(arr){
    result = JSON.parse(JSON.stringify(arr))
    for(let i = 0; i < arr.length; i++){
        result[i].push(Math.round(Math.random() * (5 - 1) + 1))
    }
    return result
}

let randomMarkForPairs = getRandomMarkForPairs(pairs)
console.log(randomMarkForPairs)
