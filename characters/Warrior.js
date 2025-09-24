const Character = require("./Character");

// Warrior constructor
function Warrior(name, health, strength) {
    // Call the parent constructor
    Character.call(this, name, health, strength);
    this.rage = 0;
}

// Set up inheritance: Warrior.prototype inherits from Character.prototype
Warrior.prototype = Object.create(Character.prototype);
// Correcting the constructor from Character to Warrior
Warrior.prototype.constructor = Warrior;

// Add Warrior-specific methods
Warrior.prototype.specialAttack = function(target) {
    if (this.rage >= 10) {
        const damage = this.strength * 2;
        target.health -= damage;
        this.rage -= 10;
        console.log(`${this.name} uses special attack on ${target.name} for ${damage} damage!`);
        return damage;
    } else {
        console.log(`${this.name} doesnt have enough rage for a special attack!`);
        return 0;
    }
};

Warrior.prototype.takeDamage = function(damage) {
    this.health -= damage;
    this.rage += 5;
    console.log(`${this.name} takes ${damage} and gains 5 rage!`);
};

module.exports = Warrior;