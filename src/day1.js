export function day1() {
  let submitBtn = document.getElementById("day1Submit");
  let answer1Box = document.getElementById("answer1Day1");
  let answer2Box = document.getElementById("answer2Day1");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 1");
  });
}

function puzzle1() {
  let input = document.getElementById("input1").value;
  if (input.length == 0) {
    return 0;
  }
  let directions = input.split(" ");
  let dial = 50;
  let count = 0;
  directions.forEach((d) => {
    let value = parseInt(d.slice(1));
    if (dial == 0) {
      count++;
    }
    if (d.charAt(0) == "R") {
      dial += value;
      if (dial > 99) {
        dial %= 100;
      }
    } else {
      dial -= value;
      if (dial < 0) {
        dial %= 100;
        if (dial != 0) {
          dial = 100 + dial;
        }
      }
    }
    console.log("dial is: " + dial);
  });
  return count;
}

function puzzle2() {
  let input = document.getElementById("input1").value;
  if (input.length == 0) {
    return 0;
  }
  let directions = input.split(" ");
  let dial = 50;
  let count = 0;
  directions.forEach((d) => {
    let value = parseInt(d.slice(1));
    if (d.charAt(0) == "R") {
      for (let i = 0; i < value; i++) {
        dial++;
        if (dial > 99) {
          dial = 0;
          count++;
        }
      }
    } else {
      for (let i = 0; i < value; i++) {
        dial--;
        if (dial < 0) {
          dial = 99;
        }
        if (dial == 0) {
          count++;
        }
      }
    }

    console.log("dial is: " + dial);
    console.log("current count: " + count);
    console.log(" ");
  });
  return count;
}
