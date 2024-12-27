/*bir sayının faktöriyelini bulma*/

let num = parseInt(prompt("please enter a number ="));
let factorial =1;

if(num==0){
    console.log("1");
}
else if(num<0){
    console.log("yanlış bir sayı tuşladınız");
}
else{
    for(let i=1; i<=num; i++){
        factorial = factorial*i;
    }
    console.log(factorial);
}
