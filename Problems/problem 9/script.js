/*Polindrom Sayı : rakamları ters çevrildiğinde aynı kalan bir sayıdır (151)*/

let num;
num = prompt('Please enter a number : ');
let number = num;
let newNum;
let numbers = [];

numbers = String(number).split("");
numbers = numbers.reverse();
newNum = numbers.join('');

if( newNum == num){
    console.log(num + ' sayısı bir polindrom number dır');
} else {
    console.log(num + ' sayısı bir polindrom number değildir');
}



