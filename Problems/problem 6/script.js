/*girilen pozitif sayının kaç basamaklı olduğunu bulan sayı*/

var number = parseInt(prompt("please enter a number :"));
var digit =1;

while(number>=10){
    number = number/10;
    digit = digit+1;
    
}

console.log(digit)