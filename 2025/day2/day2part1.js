const fs = require('fs');

// Global sum of invalid IDs
let total = 0;

// Check if a number is a sequence repeated exactly twice
function isInvalidID(num) {
  const str = num.toString();
  const len = str.length;

  if (len % 2 !== 0) return false; // length must be even
  const half = len / 2;

  return str.slice(0, half) === str.slice(half);
}

// Check a range and add invalid IDs to total
function checkRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isInvalidID(i)) {
      total += i;
    }
  }
}

// Read the file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split by commas to get ranges
  const ranges = data.split(',');

  for (const range of ranges) {
    const [start, end] = range.split('-').map(Number);
    checkRange(start, end);
  }

  console.log('Total sum of invalid IDs:', total);
});
