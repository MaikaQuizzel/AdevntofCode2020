const fs = require('fs');

function twoBiggest(str) {
  const biggestIdx = str.indexOf(Math.max(...str).toString());
  const rest = str.slice(biggestIdx + 1);
  return {
    biggest: Number(str[biggestIdx]),
    second: rest ? Math.max(...rest).toString() : null,
  };
}

function largestKDigitFromString(s, k) {
  const stack = [];
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const digit = s[i];
    // while we can drop smaller digits and still have enough remaining to fill k
    while (
      stack.length &&
      stack[stack.length - 1] < digit &&
      stack.length - 1 + (n - i) >= k
    ) {
      stack.pop();
    }

    if (stack.length < k) {
      stack.push(digit);
    }
  }

  return stack.join('');
}


fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const batteries = data.split('\n');

  let amouunt = 0;

  for (const battery of batteries) {
    const number = parseInt(largestKDigitFromString(battery, 12));

    amouunt += number;
  }

  console.log('Total Amount:', amouunt);
});
