export function day4() {
  let submitBtn = document.getElementById("day4Submit");
  let answer1Box = document.getElementById("answer1Day4");
  let answer2Box = document.getElementById("answer2Day4");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 4");
    console.log("");
  });
}

let testCase = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

function puzzle1() {
  let input = document.getElementById("input4").value;
  if (input.length == 0) {
    return 0;
  }

  let lines = input.split("\n");
  let finals = lines.map((line) => line.split(""));
  lines = lines.map((line) => line.split(""));
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let final = finals[i];
    for (let j = 0; j < line.length; j++) {
      let count = 0;
      if (line[j] == "@") {
        count = checkAdj(lines, i, j);
        if (count < 4) {
          final[j] = "x";
        }
      }
    }
  }
  console.log("answer: " + countX(finals));
  return countX(finals);
}

function puzzle2() {
  let input = document.getElementById("input4").value;
  if (input.length == 0) {
    return 0;
  }
}

function checkAdj(arr, pos1, pos2) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let checkp1 = pos1 + i;
      let checkp2 = pos2 + j;
      if (
        checkp1 < arr.length &&
        checkp1 >= 0 &&
        checkp2 < arr[0].length &&
        checkp2 >= 0
      ) {
        if (arr[checkp1][checkp2] == "@") {
          console.log(checkp1 + " " + checkp2);
          count++;
        }
      }
    }
  }
  console.log("");
  return count - 1;
}

function countX(arr) {
  let count = 0;
  arr.forEach((element) => {
    element.forEach((e) => {
      if (e == "x") {
        count++;
      }
    });
  });
  return count;
}
