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
    return "no input";
  }
  //set-up input
  let locations = input.split("\n");
  locations = locations.map((coordinates) => {
    coordinates = coordinates.split(",");
    coordinates = coordinates.map((coordinate) => parseInt(coordinate));
    return coordinates;
  });

  // save all of the distances
  let distances = [];
  let count = 0;
  for (let i = 0; i < locations.length; i++) {
    for (let j = i + 1; j < locations.length; j++) {
      let object = [];
      object[0] = distance(
        locations[i][0],
        locations[j][0],
        locations[i][1],
        locations[j][1],
        locations[i][2],
        locations[j][2]
      );
      object[1] = i;
      object[2] = j;
      distances[count] = object;
      count++;
    }
  }

  //sort the distances
  distances.sort((a, b) => a[0] - b[0]);
  //start connecting
  let connections = Array(locations.length);
  connections.fill(0);
  let numOfConnections = 1;

  for (let i = 0; i < 1000; i++) {
    let idx1 = distances[i][1];
    let idx2 = distances[i][2];
    //if both are 0
    if (connections[idx1] == 0 && connections[idx2] == 0) {
      connections[idx1] = numOfConnections;
      connections[idx2] = numOfConnections;
      numOfConnections++;
    } else if (connections[idx1] == connections[idx2]) {
      continue;
    } else if (connections[idx1] != 0) {
      if (connections[idx2] == 0) {
        connections[idx2] = connections[idx1];
      } else {
        connections = connections.map((current) => {
          if (current == connections[idx2]) {
            current = connections[idx1];
          }
          return current;
        });
      }
    } else if (connections[idx2] != 0) {
      if (connections[idx1] == 0) {
        connections[idx1] = connections[idx2];
      } else {
        connections = connections.map((current) => {
          if (current == connections[idx1]) {
            current = connections[idx2];
          }
          return current;
        });
      }
    }
  }

  //summarize the connections array
  let answer = Array(numOfConnections);
  for (let i = 1; i <= numOfConnections; i++) {
    answer[i - 1] = connections.reduce((sum, current) => {
      if (current == i) {
        sum++;
      }
      return sum;
    }, 0);
  }
  answer = answer.sort(function (a, b) {
    return b - a;
  });
  return answer[0] * answer[1] * answer[2];
}

function puzzle2() {
  let input = document.getElementById("input8").value;
  if (input.length == 0) {
    return "no input";
  }
  //set-up input
  let locations = input.split("\n");
  locations = locations.map((coordinates) => {
    coordinates = coordinates.split(",");
    coordinates = coordinates.map((coordinate) => parseInt(coordinate));
    return coordinates;
  });

  // save all of the distances
  let distances = [];
  let count = 0;
  for (let i = 0; i < locations.length; i++) {
    for (let j = i + 1; j < locations.length; j++) {
      let object = [];
      object[0] = distance(
        locations[i][0],
        locations[j][0],
        locations[i][1],
        locations[j][1],
        locations[i][2],
        locations[j][2]
      );
      object[1] = i;
      object[2] = j;
      distances[count] = object;
      count++;
    }
  }

  //sort the distances
  distances.sort((a, b) => a[0] - b[0]);
  //start connecting
  let connections = Array(locations.length);
  connections.fill(0);
  let numOfConnections = 1;
  let lastTwo = [];

  while (!checkSame(connections)) {
    let idx1 = distances[0][1];
    let idx2 = distances[0][2];
    lastTwo[0] = idx1;
    lastTwo[1] = idx2;
    distances.splice(0, 1);
    //if both are 0
    if (connections[idx1] == 0 && connections[idx2] == 0) {
      connections[idx1] = numOfConnections;
      connections[idx2] = numOfConnections;
      numOfConnections++;
    } else if (connections[idx1] == connections[idx2]) {
      continue;
    } else if (connections[idx1] != 0) {
      if (connections[idx2] == 0) {
        connections[idx2] = connections[idx1];
      } else {
        connections = connections.map((current) => {
          if (current == connections[idx2]) {
            current = connections[idx1];
          }
          return current;
        });
      }
    } else if (connections[idx2] != 0) {
      if (connections[idx1] == 0) {
        connections[idx1] = connections[idx2];
      } else {
        connections = connections.map((current) => {
          if (current == connections[idx1]) {
            current = connections[idx2];
          }
          return current;
        });
      }
    }
  }

  return locations[lastTwo[0]][0] * locations[lastTwo[1]][0];
}

function distance(x1, x2, y1, y2, z1, z2) {
  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2);
}

function checkSame(array) {
  let num = array[0];
  if (num == 0) {
    return false;
  }
  let same = true;
  array.forEach((e) => {
    if (e != num) {
      same = false;
      return e;
    }
  });
  return same;
}
