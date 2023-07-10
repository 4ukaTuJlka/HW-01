
const arr = new Map([
    ["Имя", 'Владос'],
    ["Возраст", 35],
    ["Работа", 'тунеядец']
]);

arr.forEach((value, key) => {
    console.log('Ключ - ' + key + ', значение - ' + value);
});

