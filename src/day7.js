export function day7() {
  let submitBtn = document.getElementById("day7Submit");
  let answer1Box = document.getElementById("answer1Day7");
  let answer2Box = document.getElementById("answer2Day7");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 7");
    console.log("");
  });
}

let testCase = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`;

function puzzle1() {
  let input = document.getElementById("input7").value;
  input = testCase;
  if (input.length == 0) {
    return 0;
  }
  //input is a 2d array
  let lines = input.split("\n");
  let beams = new Array(lines.length);
  beams.fill(0);
  lines = lines.map((line) => line.split(""));
  let count = 0;
  lines.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (line[i] == "S") {
        beams[i] = 1;
      } else if (line[i] == "^" && beams[i] == 1) {
        count++;
        if (i != 0) {
          beams[i - 1] = 1;
        }
        if (i != line.input - 1) {
          beams[i + 1] = 1;
        }
        beams[i] = 0;
      }
    }
  });
  console.log(count);
  return count;
}

function puzzle2() {
  let input = document.getElementById("input7").value;
  if (input.length == 0) {
    return 0;
  }
}
