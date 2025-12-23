export function day8() {
  let submitBtn = document.getElementById("day8Submit");
  let answer1Box = document.getElementById("answer1Day8");
  let answer2Box = document.getElementById("answer2Day8");
  submitBtn.addEventListener("click", () => {
    let p1Ans = puzzle1();
    let p2Ans = puzzle2();
    answer1Box.textContent = "answer to puzzle 1: " + p1Ans;
    answer2Box.textContent = "answer to puzzle 2: " + p2Ans;
    console.log("END CALCULATION : Day 8");
    console.log("");
  });
}

let testCase = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`;

function puzzle1() {
  let input = document.getElementById("input8").value;
  if (input.length == 0) {
    return 0;
  }
}

function puzzle2() {
  let input = document.getElementById("input8").value;
  if (input.length == 0) {
    return 0;
  }
}
