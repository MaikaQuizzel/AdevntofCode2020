const fs = require('fs');

const array = fs.readFileSync('D:\\Eigene-Dateien\\Dokumente\\codeventure\\day2\\input2.txt','utf8');
console.log(typeof array);
const stingOfArray= array.replace(/\r?\n|\r/, ',');
console.log(stingOfArray);
const array2 = stingOfArray.split(',');

const min = 0;
const max = 0;
const charecter = '';
const password ='';
const corectPW= 0;

for(const entry of array2){ 
    console.log(typeof entry);
    console.log(entry);
    const spiltEntry = entry.split(' ',2); 
    console.log(spiltEntry);
        const numbers = spiltEntry.split('-')[0];
        console.log(numbers);
            min = numbers[0];
            max =numbers[1];
        charecter = spiltEntry[1].toString;
        password= spiltEntry[2].toString;
 
    const numberOfChar = password.match(new RegExp(charecter,'g'));
    if(numberOfChar <=min& numberOfChar >=max){
        corectPW++;
    }
}
console.log(corectPW);

