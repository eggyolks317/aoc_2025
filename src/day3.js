export function day3() {
  let submitBtn = document.getElementById("day3Submit");
  let answer1Box = document.getElementById("answer1Day3");
  let answer2Box = document.getElementById("answer2Day3");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 3");
  });
}

let testCase = `987654321111111 811111111111119 234234234234278 818181911112111`;

function puzzle1() {
  let input = document.getElementById("input3").value;
  if (input.length == 0) {
    return 0;
  }
  let banks = input.split(" ");
  let count = 0;
  banks.forEach((bank) => {
    let batteries = bank.split("").map((battery) => parseInt(battery));
    let max1 = 0;
    let i1, i2;
    let max2 = 0;
    batteries.forEach((battery, index) => {
      if (battery > max1 && index != batteries.length - 1) {
        max1 = battery;
        i1 = index;
        max2 = batteries[index + 1];
        i2 = index + 1;
      } else if (battery > max2 && index > i2) {
        max2 = battery;
      }
    });
    count += max1 * 10 + max2;
  });
  console.log("puzzle1 answer: " + count);
  return count;
}

function puzzle2() {
  let input = document.getElementById("input3").value;
  input = testCase;
  if (input.length == 0) {
    return 0;
  }
  let banks = input.split(" ");
  let count = 0;
  banks.forEach((bank) => {
    let value = new Array();
    let v = arrayVal(value);
    let batteries = bank.split("").map((battery) => parseInt(battery));
    batteries.forEach((b, index) => {
      if (index < 12) {
        value.push(b);
      }
    });
    console.log(arrayVal(value));
    console.log();
  });
  console.log("puzzle2 answer: " + count);
  return count;
}

//transforms size 12 int array into an int
function arrayVal(arr) {
  let i = 100000000000;
  return arr.reduce((sum, current) => {
    sum += i * current;
    i /= 10;
    return sum;
  }, 0);
}
