/*klavyeden girilen n tane pozitif tam sayıdan en büyük tam sayıyı bulunuz*/

let counter = parseInt(prompt("kaç tane sayı gireceğinizi yazınız :"));
let numbers =[];


for( var i=0; i<counter ;i++ ){
    var number =parseInt(prompt(( i + 1 )+ ". sayıyı giriz:"));
    numbers.push(number);
}

let largest = numbers[0];

for( var i=0; i<numbers.length; i++){
    if(numbers[i] >= largest){
        largest = numbers[i];
    }
}

console.log(numbers);
console.log(largest);
