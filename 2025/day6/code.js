const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const lines = data.split(/\r?\n/);

console.log(lines);

const tokens = (s) => s.trim().split(/\s+/).filter(Boolean);

const opLine = lines.at(-1);
const ops = tokens(opLine); // ['*', '+', '*', '+']

const rows = lines.slice(0, -1).map((line) => tokens(line).map(Number));

const cols = ops.length;

const results = Array.from({ length: cols }, (_, c) => {
  const colVals = rows.map((r) => r[c]).filter((v) => Number.isFinite(v));

  if (ops[c] === '+') return colVals.reduce((a, b) => a + b, 0);
  if (ops[c] === '*') return colVals.reduce((a, b) => a * b, 1);

  throw new Error(`Unknown operator "${ops[c]}" at column ${c}`);
});

console.log(results);

function solveCephalopodWorksheet(lines) {
  if (!lines.length) return 0;

  const width = Math.max(...lines.map((s) => s.length));
  const grid = lines.map((s) => s.padEnd(width, ''));
  const opRow = grid[grid.length - 1];
  const dataRows = grid.slice(0, -1);

  const isOp = (ch) => ch === '+' || ch === '*' || ch === '-' || ch === '/';

  // Find operator positions (each starts one problem block)
  const opPositions = [];
  for (let c = 0; c < width; c++) {
    if (isOp(opRow[c])) opPositions.push(c);
  }

  let grandTotal = 0;

  for (let i = 0; i < opPositions.length; i++) {
    const start = opPositions[i];
    const endExclusive =
      i + 1 < opPositions.length ? opPositions[i + 1] : width;
    const op = opRow[start];

    // Build numbers column-by-column, reading right-to-left
    const nums = [];
    for (let c = endExclusive - 1; c >= start; c--) {
      let digits = '';
      for (const row of dataRows) {
        const ch = row[c];
        if (ch >= '0' && ch <= '9') digits += ch;
      }
      if (digits.length) nums.push(Number(digits));
    }

    // Apply operator for this block
    let value;
    if (op === '+') value = nums.reduce((a, b) => a + b, 0);
    else if (op === '*') value = nums.reduce((a, b) => a * b, 1);
    else if (op === '-')
      value = nums.slice(1).reduce((a, b) => a - b, nums[0] ?? 0);
    else if (op === '/')
      value = nums.slice(1).reduce((a, b) => a / b, nums[0] ?? 0);
    else throw new Error(`Unsupported operator: ${op}`);

    grandTotal += value;
  }

  return grandTotal;
}

const finalResult = results.reduce((a, b) => a + b, 0);
console.log(solveCephalopodWorksheet(lines));
