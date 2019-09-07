// function for random numbers is copied from Ben Jackson on https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var ranNums = shuffle([1,2,3,4,1,2,3,4]);
// sets up teams array and individual teams
let team1 = [];
let team2 = [];
let team3 = [];
let team4 = [];
let teams = [team1, team2, team3, team4];

// sets up players
let player1 = {
  name: "A",
  teamNum: ranNums[0]
}
let player2 = {
  name: "B",
  teamNum: ranNums[1]
}
let player3 = {
  name: "C",
  teamNum: ranNums[2]
}
let player4 = {
  name: "D",
  teamNum: ranNums[3]
}
let player5 = {
  name: "E",
  teamNum: ranNums[4]
}
let player6 = {
  name: "F",
  teamNum: ranNums[5]
}
let player7 = {
  name: "G",
  teamNum: ranNums[6]
}
let player8 = {
  name: "H",
  teamNum: ranNums[7]
}
// sets up players array
const players = [player1, player2, player3, player4, player5, player6, player7, player8]

function assignPlayers() {
  for (let i = 0; i < ranNums.length; i++) {
    for(let j = 0; j < players.length; j++) {

    }
  }
}
