
//1.  Знайдіть суму всіх цифр від 1 до 100.
/*
let sum = 0;

for (let i=1; i<101; i++) {
    sum += i;
    console.log(sum);
}
alert(sum);


*/




//2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
/*
myArray = [1, 2, 3, 4, 5];

for ( let i=0; i <myArray.length; i++ ) {
    write = myArray[i];
    console.log(write);
}
*/








//3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
/*
someArray = [-1, 22, 3, 44, 5];
maxEl = someArray[0];
for (let i=0; i<someArray.length; i++) {
    if (maxEl<someArray[i]) {
        maxEl = someArray [i];
    } else {
        continue;
    }
}
console.log(someArray);
console.log(maxEl);
alert(maxEl);
*/







//4. Попросити юзера ввести 8 чисел і порахувати скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також достатньо тільки 1 змінної для отримання даних від юзера.

/*
let numbers = [];
let nuls = 0;
let positive = 0;
let negative = 0;

for (let i=0; i<8; i++) {
    let userNumber = +prompt(` Введіть ${i+1} число `);
    numbers.push(userNumber);
    console.log(numbers);
    if (userNumber == 0) {
        nuls++;
    } else if (userNumber > 0) {
        positive++;
    } else {
        negative++;
    }
    
}

console.log(numbers);
console.log(nuls);
console.log(positive);
console.log(negative);
alert(` нулів ${nuls}, додатних ${positive}, від"ємних ${negative} `);

*/








//5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
/*
let eigth = 8;
for (let i=1; i<10; i++) {
    let result = eigth * i;
    console.log(` 8 * ${i} = ${result} `);
}
*/







//6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

/*
let array6 = [2, 5, 9, 15, 0, 4];
let array6New = [];

for (let i = 0; i<array6.length; i++) {
    if (array6[i]>3 && array6[i]<10) {
        array6New.push(array6[i])
    }
}
console.log(array6, "old");
console.log(array6New, "new");

alert(` Було ${array6}. Стало ${array6New} `);

*/








//7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?
