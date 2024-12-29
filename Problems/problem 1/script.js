/*Finding the Largest Number in a Series */
/*Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız. Dizi boş ise, "Dizi boş" mesajı döndürün.*/

let numbers =[1,12,3,4,8,6];
let largest =numbers[1];

for(let i=0; i<=numbers.length; i++){
    if(numbers[i]>largest){
        largest = numbers[i];
}
}
console.log(largest);