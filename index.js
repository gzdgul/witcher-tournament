class Player {

    constructor(name, age, health) {
        this.name = name;
        this.age = age;
        this.health = health;
    }

    sayName() {
        alert('Hi! ' + this.name);
    }

    generateRandomNumber() {
        let randomNumber = Math.floor( Math.random() * 30 ) + 1;

        if (randomNumber < 10) {
            return this.generateRandomNumber();
        }

        else return randomNumber;
    }

    attack() {
        const attack = this.generateRandomNumber();
        console.log(this.name + ' ATTACK: ', attack);
        return attack;
    }

    damage(x) {
        this.health -= x;
        console.log(this.name + ' HEALTH: ', this.health);
        return this.health;
    }

}

/*
class UltraPlayer extends Player {
    constructor(name, age, health) {
        super(name, age, health);
        this.godMod = true;
    }

    test() {
        alert(1)
    }

}

const test = new UltraPlayer();
test.test();
*/

const player = new Player('Gozde', 24, 100);
const enemy1 =  new Player('Yasin 1', 25, 200);
const enemy2 =  new Player('Yasin 2', 25, 200);

let x = player.attack();
enemy1.damage(x);
enemy2.damage(x);

player.damage(enemy1.attack());
player.damage(enemy2.attack());


/*

let playerHealth = 100
let computerHealth = 100


let randomNumber = generateRandomNumber();
console.log(randomNumber);

function attack(a) {
    randomNumber = generateRandomNumber();
    let before_attack_health = a;
    a = a - randomNumber;
    return a;

}
x = attack(playerHealth);
console.log(x);
console.log(playerHealth);

 */