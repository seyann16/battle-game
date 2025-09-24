// Every JavaScript object has a prototype
// The prototype is like a blueprint that objects inherit from

// Constructor function for our base Character
function Character(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.level = 1;
}

// Adding methods to the Character prototype
// These will be shared by all Character instances
Character.prototype.attack = function(target) {
    const damage = this.strength;
    target.health -= damage;
    console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
    return damage;
};

Character.prototype.heal = function(amount) {
    this.health += amount;
    console.log(`${this.name} heals for ${amount} health!`);
};

Character.prototype.isAlive = function() {
    return this.health > 0;
};

Character.prototype.levelUp = function() {
    this.level++;
    this.health += 10;
    this.strength += 5;
    console.log(`${this.name} leveled up to level ${this.level}!`);
};

module.exports = Character;