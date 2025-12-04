export function day2() {
  let submitBtn = document.getElementById("day2Submit");
  let answer1Box = document.getElementById("answer1Day2");
  let answer2Box = document.getElementById("answer2Day2");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 2");
  });
}

let testCase = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`;

function puzzle1() {
  let input = document.getElementById("input2").value;
  if (input.length == 0) {
    return 0;
  }
  let count = 0;
  let ranges = input.split(",");
  ranges.forEach((r) => {
    let min = r.split("-")[0];
    let max = r.split("-")[1];
    for (let i = parseInt(min); i <= parseInt(max); i++) {
      let strNum = i.toString();
      let front = strNum.slice(0, strNum.length / 2);
      let back = strNum.slice(strNum.length / 2);
      if (front == back) {
        count += i;
      }
    }
  });
  console.log("answer: " + count);
  return count;
}

function puzzle2() {
  let input = document.getElementById("input2").value;
  if (input.length == 0) {
    return 0;
  }
  let count = 0;
  let ranges = input.split(",");
  ranges.forEach((r) => {
    let min = r.split("-")[0];
    let max = r.split("-")[1];
    for (let i = parseInt(min); i <= parseInt(max); i++) {
      let halfstr = i.toString().slice(0, i.toString().length / 2);
      for (let j = 1; j <= halfstr.length; j++) {
        if (divisible(i, parseInt(halfstr.slice(0, j)))) {
          if (repeats(halfstr.slice(0, j), i.toString())) {
            console.log(i);
            count += i;
            break;
          }
        }
      }
    }
  });
  console.log("answer: " + count);
  return count;
}

function divisible(x, y) {
  return x % y == 0;
}
function repeats(target, str) {
  if (str.length % target.length != 0 || str.length == target.length) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != target.charAt(i % target.length)) {
      return false;
    }
  }
  return true;
}
