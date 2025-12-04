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

let testCase = `..@@.@@@@. @@@.@.@.@@ @@@@@.@.@@ @.@@@@..@. @@.@@@@.@@ .@@@@@@@.@ .@.@.@.@@@ @.@@@.@@@@ .@@@@@@@@. @.@.@@@.@.`;

function puzzle1() {
  let input = document.getElementById("input4").value;
  input = testCase;
  if (input.length == 0) {
    return 0;
  }
  let lines = input.split(" ");
  lines = lines.map((line) => line.split(""));
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    for (let j = 0; j < line.length; j++) {
      let count = 0;
      if (line[j] == "@") {
        count = checkAdj(lines, i, j);
      }
      if (count < 4) {
        line[j] = "x";
      }
    }
  }
  console.log(lines);
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
      if (pos1 == 0) {
        i++;
      }
      if (pos2 == 0) {
        j++;
      }
      if (pos1 == arr.length - 1 && i == 1) {
        break;
      }
      if (pos2 == arr[0].length - 1 && j == 1) {
        break;
      }
      if (arr[pos1 + i][pos2 + j] == "@") {
        count++;
      }
    }
  }
  return count - 1;
}
