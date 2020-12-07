const fs = require('fs');
const _ = require('lodash');

const replaceType = '\r\n';
const regEx1 = new RegExp(replaceType, 'g');
var re = ':';
var regEx2 = new RegExp(re, 'g');

const array = fs.readFileSync('D:\\Eigene-Dateien\\Dokumente\\GitHub\\AdevntofCode2020\\day2\\inputTest.txt', 'utf8');
const stingOfArray = array.replace(regEx1, ',');
const array2 = stingOfArray.split(',');

let firstPlace = 0;
let secondPlace = 0;
let charecter = '';
let password = '';
let corectPW = 0;

for (const entry of array2) {
    const spiltEntry = entry.split(' ', 3);
    const numbers = spiltEntry[0].split('-', 2);
    firstPlace = numbers[0];
    secondPlace = numbers[1];

    charecter = spiltEntry[1];
    charecter = charecter.replace(':', '');
    password = spiltEntry[2];

    var regex = new RegExp(charecter, 'g');

    let charsInSplit = password.match(regex);
    console.log(entry, charecter); //, firstPlace, secondPlace, , password, _.size(charsInSplit)

    let numberOfChar = _.size(charsInSplit);
    console.log(charecter === password[firstPlace] && charecter === password[secondPlace]);
    console.log(charecter === password[firstPlace] || charecter === password[secondPlace]);

    if (charecter === password[firstPlace] && charecter === password[secondPlace]) {
        console.log('1 und 1 gleich');
    } else {
        if (charecter === password[firstPlace] || charecter === password[secondPlace]) {
            corectPW++;
        } else {
            console.log('warum bin ich hier?');
        }
    }
    console.log(corectPW);
}
