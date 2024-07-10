let nomeHeroi = "Zé do teste"
let xpHeroi = "7000"
let rankingHeroi = ""

switch (true) {
  case (xpHeroi < 1000):
    rankingHeroi = "Ferro"
    break;
  case (xpHeroi <= 2000):
    rankingHeroi = "Bronze";
    break;
  case (xpHeroi <= 5000):
    rankingHeroi = "Prata";
    break;
  case (xpHeroi <= 7000):
    rankingHeroi = "Ouro";
    break;
  case (xpHeroi <= 8000):
    rankingHeroi = "Platina";
    break;
  case (xpHeroi <= 9000):
    rankingHeroi = "Ascendente";
    break;
  case (xpHeroi <= 10000):
    rankingHeroi = "Imortal";
    break;
  default:
    rankingHeroi = "Radiante";
}


console.log("O Herói de nome "+ nomeHeroi + " está no nível de " + rankingHeroi)
