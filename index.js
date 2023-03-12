const player_img_element = document.getElementById('player_img');
const enemy_health_bar_element = document.getElementById('enemy_health_bar');
const aciklama_element = document.getElementById('aciklama');
let k = 300; // enemy health şimdilik

class Player {

    constructor(name, age, health,p_idle,p_walk,p_jump,p_attack,p_ulti,p_damage,p_death) {
        this.name = name;
        this.age = age;
        this.health = health;
        this.idlePosition = p_idle;
        this.walkPosition = p_walk;
        this.jumpPosition = p_jump;
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

//PLAYERS
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

const playerMage = new Player(
    Mage.name,
    Mage.age,
    Mage.health,
    Mage.p_idle,
    Mage.p_walk,
    Mage.p_jump,
    Mage.p_attack,
    Mage.p_ulti,
    Mage.p_damage,
    Mage.p_death,
);

const playerWizard = new Player(
    Wizard.name,
    Wizard.age,
    Wizard.health,
    Wizard.p_idle,
    Wizard.p_walk,
    Wizard.p_jump,
    Wizard.p_attack,
    Wizard.p_ulti,
    Wizard.p_damage,
    Wizard.p_death,
);

const playerMagician = new Player(
    Magician.name,
    Magician.age,
    Magician.health,
    Magician.p_idle,
    Magician.p_walk,
    Magician.p_jump,
    Magician.p_attack,
    Magician.p_ulti,
    Magician.p_damage,
    Magician.p_death,
);

//enemy1.damage(player.attack()); // kalan can
//player.damage(enemy1.attack());

function player1() {

    const actionButtons = document.querySelectorAll('.action_button');
    actionButtons.forEach((actionButton) => {
        let actionButton_onclick_attributes = actionButton.getAttribute('onclick');
        if(actionButton_onclick_attributes.includes('ply')) {
            let x = actionButton_onclick_attributes.replace('ply', 'playerMage');
            actionButton.setAttribute('onclick', x);
        }
        else if (actionButton_onclick_attributes.includes('playerWizard')) {
            let x = actionButton_onclick_attributes.replace('playerWizard', 'playerMage');
            actionButton.setAttribute('onclick', x);
        }
        else if (actionButton_onclick_attributes.includes('playerMagician')) {
            let x = actionButton_onclick_attributes.replace('playerMagician', 'playerMage');
            actionButton.setAttribute('onclick', x);
        }

    });
    player_img_element.src = Mage.p_idle;

}
function player2() {

    const actionButtons = document.querySelectorAll('.action_button');
    actionButtons.forEach((actionButton) => {
        let actionButton_onclick_attributes = actionButton.getAttribute('onclick');
        if(actionButton_onclick_attributes.includes('ply')) {
            let x = actionButton_onclick_attributes.replace('ply', 'playerWizard');
            actionButton.setAttribute('onclick', x);
        }
        else if (actionButton_onclick_attributes.includes('playerMage')) {
            let x = actionButton_onclick_attributes.replace('playerMage', 'playerWizard');
            actionButton.setAttribute('onclick', x);
        }
        else if (actionButton_onclick_attributes.includes('playerMagician')) {
            let x = actionButton_onclick_attributes.replace('playerMagician', 'playerWizard');
            actionButton.setAttribute('onclick', x);
        }

    });
    player_img_element.src = Wizard.p_idle;
}
function player3() {

    const actionButtons = document.querySelectorAll('.action_button');
    actionButtons.forEach((actionButton) => {
        let actionButton_onclick_attributes = actionButton.getAttribute('onclick');
        if(actionButton_onclick_attributes.includes('ply')) {
            let x = actionButton_onclick_attributes.replace('ply', 'playerMagician');
            actionButton.setAttribute('onclick', x);
        }
        else if (actionButton_onclick_attributes.includes('playerMage')) {
            let x = actionButton_onclick_attributes.replace('playerMage', 'playerMagician');
            actionButton.setAttribute('onclick', x);
        }
        else if (actionButton_onclick_attributes.includes('playerWizard')) {
            let x = actionButton_onclick_attributes.replace('playerWizard', 'playerMagician');
            actionButton.setAttribute('onclick', x);
        }

    });
    player_img_element.src = Magician.p_idle;
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