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

let testCase = ``;

function puzzle1() {
  let input = document.getElementById("input6").value;
  if (input.length == 0) {
    return 0;
  }
}

function puzzle2() {
  let input = document.getElementById("input6").value;
  if (input.length == 0) {
    return 0;
  }
}
