const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomChoice() {
  const choices = ["gunting", "batu", "kertas"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

console.clear();

console.log("Permainan Gunting Batu Kertas");
readline.question("Pilihan pemain : ", (result) => {
  const playerChoice = result;
  const computerChoice = randomChoice();

  //console.log("Pilihan Pemain   : " + playerChoice);
  console.log("Pilihan Komputer : " + computerChoice);

  if (playerChoice == "gunting" && computerChoice == "kertas") {
    console.log("Pemain menang!");
  } else if (playerChoice == "batu" && computerChoice == "gunting") {
    console.log("Pemain menang!");
  } else if (playerChoice == "kertas" && computerChoice == "batu") {
    console.log("Pemain menang!");
  } else if (playerChoice == computerChoice) {
    console.log("Seimbang");
  } else {
    console.log("Komputer menang!");
  }

  readline.close();
});

/* const usia = 41;

if (usia < 20) {
    console.log("Kamu masih belum cukup umur");
} else if (usia >= 20 && usia < 40){
    console.log("Kamu sudah cukup umur")
} else if (usia >= 40){
    console.log("Kamu sudah terlalu cukup umur")
}
*/
