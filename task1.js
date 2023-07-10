
let result = +prompt("Введите значение", '');

if (typeof(result) === "number"){

    if(result % 2 == 0){
        console.log("Четное");
    }else{
        console.log("Нечетное");
    }
}else{
    console.log("Упс, кажется, вы ошиблись");
}