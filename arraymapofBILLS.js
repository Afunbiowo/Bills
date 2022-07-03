const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

function newBills(item){
    item = item + (0.15 * item);
    item = item.toFixed(2);
    return item;
}

console.log(bills.map(newBills));