const attack_button_element = document.getElementById('attack_button');
const ulti_attack_button_element = document.getElementById('ulti_attack_button');
const damage_button_element = document.getElementById('damage_button');
const walk_button_element = document.getElementById('walk_button');
const idle_button_element = document.getElementById('idle_button');
const death_button_element = document.getElementById('death_button');

const player_img_element = document.getElementById('player_img');
const enemy_health_bar_element = document.getElementById('enemy_health_bar');
const aciklama_element = document.getElementById('aciklama');
let k = 300; // enemy health şimdilik

class Player {

    constructor(name, age, health,p_idle,p_walk,p_attack,p_ulti,p_damage,p_death) {
        this.name = name;
        this.age = age;
        this.health = health;
        this.idlePosition = p_idle;
        this.walkPosition = p_walk;
        this.attackPosition = p_attack;
        this.ultiAttackPosition = p_ulti;
        this.damagePosition = p_damage;
        this.deathPosition = p_death;
    }

    sayName() {
        alert('Hi! ' + this.name);
    }

    generateRandomNumber(x , y) {
        let randomNumber = Math.floor( Math.random() * x ) + 1;

        if (randomNumber < y) {
            return this.generateRandomNumber(x , y);
        }

        else return randomNumber;
    }

    attack() {
        const attack = this.generateRandomNumber(30, 10);
        console.log(this.name + ' ATTACK: ', attack);
        player_img_element.src = this.attackPosition;
        aciklama_element.innerText = this.name + ' ATTACK: ' + attack;
        k = k - attack;
        let p = Math.floor((k * 100) / 300);
        console.log(p);
        enemy_health_bar_element.style = 'width: ' + p + '%';
        return attack; //attack damage number
    }
    ultiAttack() {
        const ultiAttack = this.generateRandomNumber(60 ,30);
        console.log(this.name + ' ATTACK: ', ultiAttack);
        player_img_element.src = this.ultiAttackPosition;
        aciklama_element.innerText = this.name + ' ATTACK: ' + ultiAttack;
        k = k - ultiAttack; // 250  ultiattack = 50
        let p = Math.floor((k * 100) / 300);
        console.log(p);
        enemy_health_bar_element.style = 'width: ' + p + '%';
        return ultiAttack; //attack damage number
    }

    damage(x) {
        this.health -= x;
        console.log(this.name + ' HEALTH: ', this.health);
        player_img_element.src = this.damagePosition;
        //aciklama_element.innerText = this.name + ' ATTACK: ' + ...;
        return this.health; // after damage health seviyesi
    }

    walk() {
        player_img_element.src = this.walkPosition;
    }

    idle() {
        player_img_element.src = this.idlePosition;
    }

    death() {
        player_img_element.src = this.deathPosition;
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
const Mage = {
    name : 'Mage',
    age : 27,
    health : 100,
    p_idle : './assets/gifs/left/idle_transparent.gif',
    p_walk : './assets/gifs/left/walk_transparent.gif',
    p_attack : './assets/gifs/left/attack_transparent.gif',
    p_ulti : './assets/gifs/left/ulti_transparent.gif',
    p_damage : './assets/gifs/left/damage_transparent.gif',
    p_death : './assets/gifs/left/death_transparent.gif'
};


const player = new Player(
    Mage.name,
    Mage.age,
    Mage.health,
    Mage.p_idle,
    Mage.p_walk,
    Mage.p_attack,
    Mage.p_ulti,
    Mage.p_damage,
    Mage.p_death,
    );

// const enemy1 =  new Player('Yasin 1', 25, 100);

//enemy1.damage(player.attack()); // kalan can
//player.damage(enemy1.attack());

function ultiAttack () {
    player_img_element.src = 'assets/gifs/left/attack_transparent.gif';
    aciklama_element.innerText = player.attack();
}

