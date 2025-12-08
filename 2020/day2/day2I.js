const fs = require('fs');
const _ = require('lodash');

const replaceType = '\r\n';
const regEx1 = new RegExp(replaceType, 'g');
var re = ':';
var regEx2 = new RegExp(re, 'g');

const array = fs.readFileSync('D:\\Eigene-Dateien\\Dokumente\\GitHub\\AdevntofCode2020\\day2\\input.txt', 'utf8');
const stingOfArray = array.replace(regEx1, ',');
const array2 = stingOfArray.split(',');

let min = 0;
let max = 0;
let charecter = '';
let password = '';
let corectPW = 0;

for (const entry of array2) {
    const spiltEntry = entry.split(' ', 3);
    const numbers = spiltEntry[0].split('-', 2);
    min = numbers[0];
    max = numbers[1];

    charecter = spiltEntry[1];
    charecter = charecter.replace(':', '');
    password = spiltEntry[2];

    var regex = new RegExp(charecter, 'g');

    let charsInSplit = password.match(regex);
    console.log(entry, min, max, charecter, password, _.size(charsInSplit));

    let numberOfChar = _.size(charsInSplit);

    if (numberOfChar >= min && numberOfChar <= max) {
        corectPW++;
    }
    console.log(corectPW);
}
