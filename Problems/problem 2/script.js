/*Kullanıcı tarafından girilen değerden 40'a kadar çift olan sayıları ekrana yazdırma. (40 dahil) */

let num = parseInt(prompt("please enter a number :"));

for(num; num<=40 ; num++){
    if(num%2 ==0){
        console.log(num);
    }
}