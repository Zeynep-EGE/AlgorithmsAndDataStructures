/*klavyeden girilen n adet pozitif tam sayının sadece birler basamaklarının toplamını yazınız
ör: 15 + 25 + 105 =15*/

let counter = parseInt(prompt("kaç tane sayı gireceğinizi yazınız :"));
let numbers = [] ;
var sum = 0;
var digit = 1;

for(let i=0; i<counter; i++){
    let number = parseInt(prompt("lütfen" + (i+1) + ". sayıyı giriniz:"));
    numbers.push(number);
}


for(let i=0; i<numbers.length; i++){
    digit = numbers[i] % 10;
    sum = parseInt(sum + digit);

}

console.log(sum);

  





