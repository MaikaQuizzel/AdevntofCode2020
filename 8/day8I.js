const fs = require(fs);
const accumulator = 0;
function acc(number) {
    accumulator += number;
}

function next(number, operation) {
    if (operation == 'nop') {
        goToLine(1);
    }
    goToLine(number);
}
function goToLine(number) {}
