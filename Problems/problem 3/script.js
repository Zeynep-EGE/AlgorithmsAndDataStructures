/*kullanıcı tarafından girilne 3 farklı sayının en büyüğünü bulan kodu yazınız*/

let num1 = parseInt(prompt("please enter number1"));
let num2 = parseInt(prompt("please enter number2"));
let num3 = parseInt(prompt("please enter number3"));

if(num1>num2 && num1>num3){
    console.log(num1 + " en büyük sayıdır");
}
else if(num2>num1 && num2>num3){
    console.log(num2 + " en büyük sayıdır");
}else if(num3>num1 && num3>num2){
    console.log(num3 + " en büyük sayıdır");
}
else{
    console.log("tüm sayılar eşittir");
}