//**Girilen sayının perfect number olup olmadığına bak .
// perfect number = bir sayının kendisini bölen bütün bölenlerin toplamı sayıya aşit olursa bu sayıya perfect number denir.
// 6 = 1, 2, 3 
// 1 + 2+ 3 =6 */

let num = parseInt(prompt('enter a number :'));
let sum = 0;

for( let i = 1; i<num ; i++){
    if(num % i === 0){
        sum = sum + i;
    }
}

if( sum === num){
    console.log('ben perfect numberım');
}else{
    console.log('ben perfect number değilim');
}