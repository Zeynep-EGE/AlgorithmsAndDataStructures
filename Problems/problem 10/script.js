/*Armstrong sayısı. bu sayı bir sayının her basamağında bulunan sayıyı sayının toplam basamak sayısı kadar kendisi ile çarpıp toplanması ile olue.
1^3 = 1 
5^3 = 5*5*5 = 125 
3^3 = 3*3*3 = 27 
1^3 + 5^3 + ^3 = 1+125+27 = 153  */

var num = parseInt(prompt("Please enter a number:"));
var numbers = [];
var digit = 1;
var sum = 0;

numbers = String(num).split("").map(Number);

digit = numbers.length;

for (let i = 0; i < numbers.length; i++){
    sum = sum + Math.pow(numbers[i], digit);
}

if (sum === num) {
    console.log(num + " girdiğiniz sayı bir Armstrong sayıdır.");
} else {
    console.log(num + " girdiğiniz sayı bir Armstrong sayı değildir.");
}
