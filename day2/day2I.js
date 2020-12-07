const fs = require('fs');
const _ = require('lodash');

const replaceType = '\r\n';
const regEc = new RegExp(replaceType, 'g');

const array = fs.readFileSync('D:\\Eigene-Dateien\\Dokumente\\codeventure\\day2\\input.txt', 'utf8');
const stingOfArray = array.replace(regEc, ',');
const array2 = stingOfArray.split(',');

let min = 0;
let max = 0;
let charecter = '';
let password = '';
let corectPW = 0;

for (const entry of array2) {
    console.log(entry);
    const spiltEntry = entry.split(' ', 3);
    const numbers = spiltEntry[0].split('-', 2);
    min = numbers[0];
    max = numbers[1];

    charecter = spiltEntry[1];
    charecter = charecter.replace(':', '');
    password = spiltEntry[2];

    var regex = new RegExp(charecter, 'g');

    let numberOfChar = 0;
    let charsInSplit = password.match(regex);

    if ((_.size(charsInSplit) <= min) & (numberOfChar >= max)) {
        corectPW++;
    }
}
console.log(corectPW);
