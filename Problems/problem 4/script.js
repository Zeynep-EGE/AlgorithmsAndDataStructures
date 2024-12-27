/*doğum tarihi girilen kişinin yaşını hesaplayan kodu yazınız*/

let birthYear =parseInt(prompt("enter your birth year:"));
const date = new Date();
let currentYear = date.getFullYear();

if(birthYear<=0){
    console.log("yanlış bir sayı tuşladınız");
}
else{
    let age = currentYear - birthYear;
    console.log(age);
}




