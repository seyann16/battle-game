const Character = require("./Character");
const Warrior = require("./Warrior");

// Level 2: Specialized Warriors
function Berserker(name, health, strength) {
    Warrior.call(this, name, health, strength);
    this.berserkMode = false;
}

// Multi-level inheritance: Berserker -> Warrior -> Character
Berserker.prototype = Object.create(Warrior.prototype);
Berserker.prototype.constructor = Berserker;

Berserker.prototype.enterBerserkMode = function() {
    if (this.health < 50 && !this.berserkMode) {
        this.berserkMode = true;
        this.strength *= 2;
        this.rage = 100;
        console.log(`${this.name} enters BERSERK MODE! Strength doubled!`);
    }
};

// Override attack method with enhanced behavior
Berserker.prototype.attack = function(target) {
    this.enterBerserkMode();

    if (this.berserkMode) {
        const damage = this.strength + 10;
        target.health -= damage;
        console.log(`${this.name} unleashes a berserk attack on ${target.name} for ${damage} damage!`);
        return damage;
    }

    // Call parent method using prototype chain
    return Warrior.prototype.attack.call(this, target);
};