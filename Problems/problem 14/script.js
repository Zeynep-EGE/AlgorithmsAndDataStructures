//** klavyeden girilen iki basamaklı tam sayıyı kelime olarak yazdıran program */

let number = prompt('enter a number :');
let onlar;
let birler;
let sayı1;
let sayı2;
let resault;

const ilkBasamak = {
        1 : 'on',
        2 : 'yirmi',
        3 : 'otuz',
        4 : 'kırk',
        5:  'elli',
        6:  'atmış',
        7: 'yetmiş',
        8: 'Seksen',
        9: 'doksan',
    }

const ikinciBasamak = {
        1 : 'bir',
        2 : 'iki',
        3 : 'üç',
        4 : 'döret',
        5:  'beş',
        6:  'altı',
        7: 'yedi',
        8: 'sekiz',
        9: 'dokuz',
    }

for(let i=1; i<number; i++){
  onlar = parseInt(number/10);
  birler = number % 10;

}

  for (const [key, value] of Object.entries(ilkBasamak)) {
      if( key == onlar){
        sayı1 = value;
        break;
      }
  }

  for (const [key, value] of Object.entries(ikinciBasamak)) {
    if( key == birler){
      sayı2 = value;
      break;
    }
}

resault = sayı1.concat(sayı2);
console.log(resault);

  



