
const arr = [12, 5, 2, 11, NaN, null, 14, 29, '.', '*', 13, undefined]; 

let even = 0, // 
    odd = 0; // 
empty = 0; 


for (let item of arr) {

    if (typeof (item) === 'string' || typeof (item) === 'object' || typeof (item) === 'undefined' || isNaN(item)) {
        empty++;
    } else {
        if (Number(item) % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
}

console.log('Кол-во четных: ' + even);
console.log('Кол-во нечетных: ' + odd);
console.log('Кол-во пустых: ' + empty);