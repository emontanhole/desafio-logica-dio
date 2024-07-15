let nameHero = "Zé do teste"
let win = "150"
let loss = '10'

function calcWin (win, loss){
  let resultado = win - loss  
    return resultado
}

let resultado = calcWin(win, loss);

if (resultado < 10) {
  rankingHeroi = "Ferro";
} else if (resultado <= 20) {
  rankingHeroi = "Bronze";
} else if (resultado <= 50) {
  rankingHeroi = "Prata";
} else if (resultado <= 80) {
  rankingHeroi = "Ouro";
} else if (resultado <= 90) {
  rankingHeroi = "Diamante";
} else if (resultado <= 100) {
  rankingHeroi = "Lendário";
} else {
  rankingHeroi = "Imortal";
}

console.log ("O Herói tem de saldo de " + resultado + " vitorias e está no nível de " + rankingHeroi)
