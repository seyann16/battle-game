const Character = require("./Character");

// Archer constructor
function Archer(name, health, strength) {
    Character.call(this, name, health, strength);
    this.arrows = 10;
}

Archer.prototype = Object.create(Character.prototype);
Archer.prototype.constructor = Archer;

Archer.prototype.rangedAttack = function(target) {
    if (this.arrows > 0) {
        const damage = this.strength + 10;
        target.health -= damage;
        this.arrows--;
        console.log(`${this.name} shoots an arrow at ${target.name} for ${damage} damage!`);
        return damage;
    } else {
        console.log(`${this.name} is out of arrows!`);
        return this.attack(target);
    }
};

Archer.prototype.reload = function() {
    this.arrows += 5;
    console.log(`${this.name} reloads and gains 5 arrows!`);
};

module.exports = Archer;