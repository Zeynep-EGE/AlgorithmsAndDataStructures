/*Finding the Largest Number in a Series */
/*Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız. Dizi boş ise, "Dizi boş" mesajı döndürün.*/

var numbers = [1,8,6,15,5,21];
var largest = numbers[0];

for(let i=0; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}

console.log(largest + " en büyük sayıdır");