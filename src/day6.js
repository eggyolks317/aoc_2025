export function day6() {
  let submitBtn = document.getElementById("day6Submit");
  let answer1Box = document.getElementById("answer1Day6");
  let answer2Box = document.getElementById("answer2Day6");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 6");
    console.log("");
  });
}

let testCase = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;

function puzzle1() {
  let input = document.getElementById("input6").value;
  input = testCase;
  if (input.length == 0) {
    return 0;
  }

  //initializing inputs
  let lines = input.split("\n");
  lines = lines.map((line) => {
    line = line.split(" ");
    line = removeEmpty(line);
    return line;
  });

  for (let i = 0; i < lines.length - 1; i++) {
    lines[i] = lines[i].map(Number);
  }

  let operations = lines[lines.length - 1];
  let answer = new Array(operations.length);
  answer.fill(0);
  console.log(operations);
  for (let i = 0; i < lines.length - 1; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (answer[j] == 0) {
        answer[j] = lines[i][j];
      } else {
        answer[j] = operate(answer[j], lines[i][j], operations[j]);
      }
    }
  }
  return answer.reduce((sum, current) => sum + current);
}

function puzzle2() {
  let input = document.getElementById("input6").value;
  if (input.length == 0) {
    return 0;
  }
}
function removeEmpty(arr) {
  return arr.filter((item) => item != "");
}
function operate(x, y, action) {
  if (action == "+") {
    return x + y;
  } else if (action == "-") {
    return x - y;
  } else if (action == "*") {
    return x * y;
  } else if (action == "/") {
    return x / y;
  }
}
