/*Armstrong sayısı. bu sayı bir sayının her basamağında bulunan sayıyı sayının toplam basamak sayısı kadar kendisi ile çarpıp toplanması ile olue.
1^3 = 1 
5^3 = 5*5*5 = 125 
3^3 = 3*3*3 = 27 
1^3 + 5^3 + ^3 = 1+125+27 = 153  */

let num =prompt('please enter a number :');
let number = [];
number = String(num).split('').map(Number);
let sum = 0;
let digit = 1;

for(let i=1; i<number.length; i++){
    digit = digit + 1;
}

console.log(digit)

for( let i=0; i<number.length; i++){
    sum = sum + Math.pow(number[i], digit);
}

if( num == sum ){
    console.log(num + ' sayısı bir armstrong number dır');
}else {
    console.log(num + ' sayısı bir armstrong number değildir');
}




