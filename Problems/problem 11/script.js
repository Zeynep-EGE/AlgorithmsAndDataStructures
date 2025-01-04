//* Sayı Bulma Oyunu : bilgisayar tarafından 1 ile 10 arasında random bir sayı seçilir. bu sayıyı doğğru tahmin edebilmek için 
// 10 sefer hakkımız var. kullanıcının tahmini tahmin edilen sayıyı bulabilmsi için arttır ve azalt gibi yönlendirme yapılacak ,
// ve kullanıcı sayıyı doğru tahmin ettiğinde kaçıncı tahminde doğru yaptığını ekrana yazdıracağiz */

let actualNum = parseInt(Math.floor(Math.random()*10) + 1);
let totalGuessNumber = 11; 
let guess;

for(let counter = 1; counter <= totalGuessNumber; counter++) {
     guess = parseInt(prompt("Enter a number between 1 and 10:"));
    if ( guess === actualNum) {
        console.log("Your guess true, with guessCount: " + counter);
        break;
    } else if (guess < actualNum) {
        console.log("Your guess wrong, please enter higher  number and remaining guess is " + ( totalGuessNumber - counter ));
    } else {
        console.log("Your guess wrong, please enter lower number  and remaining guess is " + ( totalGuessNumber - counter ));
    }
}
console.log(typeof actualNum);

