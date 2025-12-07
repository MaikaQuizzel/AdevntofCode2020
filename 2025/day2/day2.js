const fs = require('fs');

let total = 0;

// Check if a number is a repeated sequence (at least twice)
function isInvalidID(num) {
  const str = num.toString();
  const len = str.length;

  for (let size = 1; size <= Math.floor(len / 2); size++) {
    if (len % size !== 0) continue; // must divide evenly
    const chunk = str.slice(0, size);
    const times = len / size;
    if (chunk.repeat(times) === str) return true;
  }

  return false;
}

// Check a range and add invalid IDs to total
function checkRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isInvalidID(i)) {
      total += i;
    }
  }
}

// Read the file with ranges separated by commas
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const ranges = data.split(',');
  for (const range of ranges) {
    const [start, end] = range.split('-').map(Number);
    checkRange(start, end);
  }

  console.log('Total sum of invalid IDs (Part Two):', total);
});
