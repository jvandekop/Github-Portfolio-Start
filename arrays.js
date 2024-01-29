//Name : Jorden Vande Kop
//Date: 1/28/2024


const myArray = [10, 20, 30, 40];

const addOneAndLog = function(num) {
    const result = num + 1;
    console.log(result);
}

function checkEvenOrOdd(callback, num) {
    if (num % 2 === 0) {
        callback(num);
        } else {
            console.log("The number is odd");
        }
}

const logNumber = function(num) {
    console.log("the number is", num);
}

for (let index in myArray) {
    checkEvenOrOdd(logNumber, myArray[index]);
}

addOneAndLog(myArray[0]);
checkEvenOrOdd(logNumber, 5);
checkEvenOrOdd(logNumber, 6);