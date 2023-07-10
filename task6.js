
const arr = [22, 22, 22, 22, 22, 22, 22, 13]; 

let result;


for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] !== arr[i + 1]) {
        result = false;
        break;
    }


    result = true;
}

console.log(result); 