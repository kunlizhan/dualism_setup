var playersMax = 15;

var setup = {
  Neighbours: 0,
  Faithfuls: 0,
  Priests: 0,
  Inquisitors: 0,
  Zealots: 0,
  Alchemists: 0,
  Mediums: 0,
  Nihilists: 0,
  Witches: 3
}


function roll(n, P) {
  function checkRoll() {
    let r = Math.random();
    console.log("rolled" + r);
    if (r < P) {
      return 1;
    }
    return 0;
  }
  let count = 0;
  while (n--) {
    count = count + checkRoll();
  }
  return count;
}

setup.Faithfuls = roll(2, 0.5);
setup.Priests = roll(3, 0.5);
setup.Inquisitors = roll(2, 0.5);
setup.Zealots = roll(1, 0.5);
setup.Alchemists = roll(1, 0.5);
setup.Mediums = roll(2, 0.5);
setup.Nihilists = roll(1, 0.5);

function countPlayers() {
  let count = 0;
  for (const role in setup) {
    count = count + setup[role];
  }
  console.log("assigned: " + count);
  return count;
}

setup.Neighbours = playersMax - countPlayers();

for (const role in setup) {
  console.log("role: " + role + setup[role]);
  $("#"+role).html(setup[role]);
}
$("#playersMax").html(playersMax);
