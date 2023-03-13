const player_img_element = document.getElementById('player_img');
const enemy_health_bar_element = document.getElementById('enemy_health_bar');
const aciklama_element = document.getElementById('aciklama');
let currentPlayer = null;

class Player {

    constructor(player_props) {
        this.name = player_props.name;
        this.age = player_props.age;
        this.currentHealth = player_props.health;
        this.totalHealth = player_props.health;
        this.idlePosition = player_props.p_idle;
        this.walkPosition = player_props.p_walk;
        this.jumpPosition = player_props.p_jump;
        this.attackPosition = player_props.p_attack;
        this.ultiAttackPosition = player_props.p_ulti;
        this.damagePosition = player_props.p_damage;
        this.deathPosition = player_props.p_death;
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
        setTimeout(() => {
            this.idle();
        }, 1100);
        aciklama_element.innerText = this.name + ' ATTACK: ' + attack;
        enemyBoss.damage(attack);
        return attack; //attack damage number
    }
    ultiAttack() {
        const ultiAttack = this.generateRandomNumber(60 ,30);
        console.log(this.name + ' ATTACK: ', ultiAttack);
        player_img_element.src = this.ultiAttackPosition;
        aciklama_element.innerText = this.name + ' ATTACK: ' + ultiAttack;
        enemyBoss.damage(ultiAttack);
        return ultiAttack; //attack damage number
    }

    damage(x) {
        this.currentHealth -= x;
        console.log(this.name + ' HEALTH: ', this.currentHealth);
        player_img_element.src = this.damagePosition;
        //aciklama_element.innerText = this.name + ' ATTACK: ' + ...;
        return this.currentHealth; // after damage health seviyesi
    }

    idle() {
        player_img_element.src = this.idlePosition;
    }
    walk() {
        player_img_element.src = this.walkPosition;
    }
    jump() {
        player_img_element.src = this.jumpPosition;
    }


    death() {
        player_img_element.src = this.deathPosition;
    }

}

class Enemy extends Player {

    constructor(player_props) {
        super(player_props); // PLAYER sınıfının CONSRUCTOR fonksiyonu.
    }

    damage(x) {
        this.currentHealth -= x;
        let p = Math.floor((this.currentHealth * 100) / this.totalHealth);
        enemy_health_bar_element.style = 'width: ' + p + '%';

        if (this.currentHealth <= 0) {
            this.currentHealth = 0;
            this.death();
        }

    }

    death() {
        // super.death();
        alert(this.name + ' IS DEAD!');
    }

}

document.addEventListener('keyup', (event) => {
    console.log(event);
    switch (event.key) {
        case 'e':
            currentPlayer.attack();
            break;
        case ' ':
            currentPlayer.jump();
            break;
    }
})

const Boss = {
    name : 'Boss (Yasin)',
    age : 27,
    health : 300,
    p_idle : null,
    p_walk : null,
    p_jump : null,
    p_attack : null,
    p_ulti : null,
    p_damage : null,
    p_death : null
};
// PLAYERS
const Mage = {
    name : 'Mage',
    age : 27,
    health : 100,
    p_idle : './assets/gifs/left/mage_idle_transparent.gif',
    p_walk : './assets/gifs/left/mage_walk_transparent.gif',
    p_jump : './assets/gifs/left/mage_jump_transparent.gif',
    p_attack : './assets/gifs/left/mage_attack_transparent.gif',
    p_ulti : './assets/gifs/left/mage_ulti_transparent.gif',
    p_damage : './assets/gifs/left/mage_damage_transparent.gif',
    p_death : './assets/gifs/left/mage_death_transparent.gif'
};
const Wizard = {
    name : 'Wizard',
    age : 25,
    health : 250,
    p_idle : './assets/gifs/left/wizard_idle_transparent.gif',
    p_walk : './assets/gifs/left/wizard_walk_transparent.gif',
    p_jump : './assets/gifs/left/wizard_jump_transparent.gif',
    p_attack : './assets/gifs/left/wizard_attack_transparent.gif',
    p_ulti : './assets/gifs/left/wizard_ulti_transparent.gif',
    p_damage : './assets/gifs/left/wizard_damage_transparent.gif',
    p_death : './assets/gifs/left/wizard_death_transparent.gif'
};
const Magician = {
    name : 'Magician',
    age : 40,
    health : 500,
    p_idle : './assets/gifs/left/magician_idle_transparent.gif',
    p_walk : './assets/gifs/left/magician_walk_transparent.gif',
    p_jump : './assets/gifs/left/magician_jump_transparent.gif',
    p_attack : './assets/gifs/left/magician_attack_transparent.gif',
    p_ulti : './assets/gifs/left/magician_ulti_transparent.gif',
    p_damage : './assets/gifs/left/magician_damage_transparent.gif',
    p_death : './assets/gifs/left/magician_death_transparent.gif'
};

const enemyBoss = new Enemy(Boss);

const playerMage = new Player(Mage);

const playerWizard = new Player(Wizard);

const playerMagician = new Player(Magician);

//enemy1.damage(player.attack()); // kalan can
//player.damage(enemy1.attack());

function changePlayer(whichPlayer) {
    currentPlayer = whichPlayer;
    currentPlayer.idle();
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