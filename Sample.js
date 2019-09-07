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
