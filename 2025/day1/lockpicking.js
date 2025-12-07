const fs = require('fs');

let amoungtOfZeros = 0;
let position = 50;

const lock = [];

for (let i = 0; i < 100; i++) {
  lock.push(i);
}

const data = fs.readFileSync('part1Test.txt', 'utf8');
const lines = data.split(/\r?\n/);

function normalizePosition(position) {
  return ((position % 100) + 100) % 100;
}

lines.forEach((line) => {
  const move = parseInt(line.slice(1));
  if (String(line).startsWith('L')) {
    position = normalizePosition(position - move);
  } else {
    position = normalizePosition(position + move);
  }
  position === 0 ? amoungtOfZeros++ : null;
});

function countZeroPasses(rotations) {
  let pos = 50;
  let total = 0;

  for (let rotation of rotations) {
    const dir = rotation[0];
    const dist = parseInt(rotation.slice(1));

    for (let i = 0; i < dist; i++) {
      if (dir === 'R') {
        pos = (pos + 1) % 100;
      } else {
        pos = (pos - 1 + 100) % 100;
      }
      if (pos === 0) total++;
    }
  }

  return total;
}

console.log('Final Position:', position);
console.log('Amount of Zeros:', amoungtOfZeros);
console.log('Amount of Zeros (countZeroPasses):', countZeroPasses(lines));
