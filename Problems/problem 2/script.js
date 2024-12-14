/*Kullanıcı tarafından girilen değerden 40'a kadar çift olan sayıları ekrana yazdırma. (40 dahil) */

let number = prompt("please enter a number");
number = parseInt(number);


for(number; number<=40; number++){
   if(number%2 === 0){
       console.log(number);
   }
}