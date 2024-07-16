class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type; // Corrigido para 'type'
  }
  atacar() {
    let ataque = '';
    switch (this.type) { // Corrigido para 'this.type'
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
    }
    console.log(`O ${this.type} atacou usando ${ataque}`); // Corrigido para 'this.type'
  }
}

const mago = new Hero('Gandalf', 1000, 'mago');
mago.atacar(); // O mago atacou usando magia

const guerreiro = new Hero('Arthur', 35, 'guerreiro');
guerreiro.atacar(); // O guerreiro atacou usando espada

const monge = new Hero('Lao', 45, 'monge');
monge.atacar(); // O monge atacou usando artes marciais

const ninja = new Hero('Hattori', 28, 'ninja');
ninja.atacar(); // O ninja atacou usando shuriken
