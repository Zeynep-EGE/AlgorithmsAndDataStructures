//**Asal Sayıları bulan birprogram yazınız */
let isPrime = true;
let num = parseInt(prompt('enter a number :'));

for(let i=2; i<num; i++){
    if(num % i === 0){
        isPrime = false;
        break;
    } 
    
}

if(isPrime === true){
    console.log('ben asalım');
}
else{
    console.log('ben asal değilim');
}



 
