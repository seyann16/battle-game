const Character = require("./Character");

// Mage constructor
function Mage(name, health, strength) {
    Character.call(this, name, health, strength);
    this.mana = 100;
}

Mage.prototype = Object.create(Character.prototype);
Mage.prototype.constructor = Mage;

Mage.prototype.castSpell = function(target) {
    if (this.mana >= 20) {
        const damage = this.strength + 15;
        target.health -= damage;
        this.mana -= 20;
        console.log(`${this.name} casts a spell on ${target.name} for ${damage} damage!`);
        return damage;
    } else {
        console.log(`${this.name} doesnt have enough mana to cast a spell!`);
        return this.attack(target);
    }
};

Mage.prototype.meditate = function() {
    this.mana += 30;
    console.log(`${this.name} meditates and restores 30 mana!`);
};

module.exports = Mage;