let n = parseInt(prompt('Введіть перше число:'));
let m = parseInt(prompt('Введіть друге число:'));
let evenNums = confirm('Пропускаємо парні?');


while (!Number.isInteger(n)) {
    numberN = +prompt("Будь ласка, введіть ціле число:");
}

while (!Number.isInteger(m)) {
    numberN = +prompt("Будь ласка, введіть ціле число:");
}



let sum = 0;

for(let i = n; i <= m; i++){
    if(evenNums && i % 2 === 0){
        if(i % 2 == 0)
        continue
    } else { 
    	sum += i;
    }
}    

console.log(sum)