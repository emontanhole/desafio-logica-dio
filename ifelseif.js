let nomeHeroi = "Zé do teste"
let xpHeroi = "5001"
let rankingHeroi = ""

if (xpHeroi < 1000) {
  rankingHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
  rankingHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
  rankingHeroi = "Prata";
} else if (xpHeroi <= 7000) {
  rankingHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
  rankingHeroi = "Platina";
} else if (xpHeroi <= 9000) {
  rankingHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
  rankingHeroi = "Imortal";
} else {
  rankingHeroi = "Radiante";
}



console.log("O Herói de nome "+ nomeHeroi + " está no nível de " + rankingHeroi)

