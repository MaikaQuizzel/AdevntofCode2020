const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const lines = data.split(/\r?\n/);

let freshIdCounter = 0;

let freshRanges = [];
let ids = [];

function mergeRanges(ranges) {
  if (ranges.length === 0) return [];

  const sorted = ranges
    .map(([s, e]) => (s <= e ? [s, e] : [e, s]))
    .sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [curStart, curEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];

    if (start <= curEnd) {
      curEnd = Math.max(curEnd, end);
    } else {
      merged.push([curStart, curEnd]);
      [curStart, curEnd] = [start, end];
    }
  }

  merged.push([curStart, curEnd]);
  return merged;
}

lines.forEach((line) => {
  if (line.includes('-')) {
    const [start, end] = line.split('-').map(Number);
    freshRanges.push([start, end]);
  }

  if (line !== '' && !line.includes('-')) {
    ids.push(Number(line));
  }
});

function isIdFresh(id, ranges) {
  for (let [start, end] of ranges) {
    if (id >= start && id <= end) {
      return true;
    }
  }
  return false;
}

freshRanges.sort((a, b) => a[0] - b[0]);
const mergedFreshRanges = mergeRanges(freshRanges);

ids.forEach((id) => {
  if (isIdFresh(id, mergedFreshRanges)) {
    freshIdCounter++;
  }
});

let amougntOfFreshIdsInRanges = 0;

mergedFreshRanges.forEach(([start, end]) => {
  const number = end - start + 1;
  amougntOfFreshIdsInRanges += number;
});

console.log('Total amount of fresh IDs in ranges:', amougntOfFreshIdsInRanges);
