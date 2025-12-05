export function day5() {
  let submitBtn = document.getElementById("day5Submit");
  let answer1Box = document.getElementById("answer1Day5");
  let answer2Box = document.getElementById("answer2Day5");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 5");
    console.log("");
  });
}

let testCase = `3-5
3-5
10-14
16-20
12-18
9-21

1
5
8
11
17
32`;

function puzzle1() {
  let input = document.getElementById("input5").value;
  if (input.length == 0) {
    return 0;
  }
  //split input into ranges and ids array
  let count = 0;
  let ranges = input.split("\n\n")[0].split("\n");
  let ids = input.split("\n\n")[1].split("\n");
  ids.forEach((id) => {
    let innerCount = 0;
    ranges.forEach((range) => {
      let splitRange = range.split("-");
      if (
        between(parseInt(id), parseInt(splitRange[0]), parseInt(splitRange[1]))
      )
        innerCount++;
    });
    if (innerCount > 0) {
      count++;
    }
  });
  console.log(count);
  return count;
}

function puzzle2() {
  let input = document.getElementById("input5").value;
  input = testCase;
  if (input.length == 0) {
    return 0;
  }
  let count = 0;
  let ranges = input.split("\n\n")[0].split("\n");
  //sort the ranges
  ranges = ranges.sort(function (a, b) {
    return a.split("-")[0] - b.split("-")[0];
  });
  console.log(ranges);
  //merge the ranges
  let changed = false;
  while (true) {
    for (let i = 0; i < ranges.length - 1; i++) {
      let splitRangeI = ranges[i].split("-");
      let minI = parseInt(splitRangeI[0]);
      let maxI = parseInt(splitRangeI[1]);
      let splitRangeNext = ranges[i + 1].split("-");
      let minNext = parseInt(splitRangeNext[0]);
      let maxNext = parseInt(splitRangeNext[1]);
      if (maxI > minNext && maxI < maxNext) {
        ranges[i + 1] = parseInt(maxI) + 1 + "-" + maxNext;
        changed = true;
      } else if (maxI > minNext && maxI > maxNext) {
        ranges.splice(i + 1, 1);
        changed = true;
      } else if (maxI == maxNext && minI == minNext) {
        ranges.splice(i + 1, 1);
        changed = true;
      }
    }
    if (!changed) {
      break;
    } else {
      changed = false;
    }
  }

  ranges.forEach((range) => {
    let splitRange = range.split("-");
    let min = parseInt(splitRange[0]);
    let max = parseInt(splitRange[1]);
    count += max - min + 1;
  });
  console.log(ranges);
  return count;
}

function between(target, x, y) {
  return target >= x && target <= y;
}
