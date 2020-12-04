let bananas = 15.678,
    oranges = 123.965,
    apples = 90.2345;

console.log(`Яблука - ${apples}`);
console.log(`Апельсини -  ${oranges}`);
console.log(`Банани  - ${bananas}`);

console.log(`Максимальне число ${Math.max(bananas,oranges,apples)}`);
console.log(`Мінімальне число ${Math.min(bananas,oranges,apples)}`);

let sum = bananas + oranges + apples;
console.log(`Сума всіх чисел ${sum}`);

let flooredApp = Math.floor(apples),
    flooredOrn = Math.floor(oranges),
    flooredBan = Math.floor(bananas);

let sumFloor = flooredApp + flooredOrn + flooredBan;
console.log(`Сума всіх товарів з відкинутими копійками в меншу сторону - ${Math.round(sumFloor)}`);

let sumRound = parseFloat(sum / 10).toFixed(1) * 10;
console.log(`Сума округлена до сотень: ${sumRound}`);


if(sumFloor % 2 === 0){
    console.log(`${true}, сума всіх товарів є парним числом`);
} else {
    console.log(`${false}, сума не є парнти числом`);
};


console.log(`Клієнт заплатив 500 за все, решта - ${500 - sum}`);
console.log(`Клієнт заплатив 500 за яблука, решта - ${500 - apples}`);
console.log(`Клієнт заплатив 500 за апельсини, решта - ${500 - oranges}`);
console.log(`Клієнт заплатив 500 за банани, решта - ${500 - bananas}`);

console.log(`Середнє значення цін з 2ма знаками після коми - ${((bananas + oranges + +apples) / 3).toFixed(2)}`);


let sale = Math.floor(Math.random() * 100);
console.log(`Ціна всіх продуктів - ${sumRound}`);
console.log(`Знижка - ${sale}%, клієнт заплатить зі знижкою - ${sumRound - (sale * (sumRound / 100))}`);

