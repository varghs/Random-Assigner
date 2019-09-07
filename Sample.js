let teams = []
let team1 = []
let team2 = []
let team3 = []
let team4 = []

let players = []
Class Player {
  constructor(name) {
    this._name = name;
    this._teamNum = Math.random()
  }

  get name() {
    return this._name;
  }
}
const player1 = Player("A")
const player2 = Player("B")
const player3 = Player("C")
const player4 = Player("D")
const player5 = Player("E")
const player6 = Player("F")
const player7 = Player("G")
const player8 = Player("H")
