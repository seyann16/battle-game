const Character = require("../Character");
const Mage = require("../Mage");

// Level 2: Specialized Mages
function Archmage(name, health, strength) {
    Mage.call(this, name, health, strength);
    this.learnedSpells = ['Fireball', 'Ice Shard']
}

Archmage.prototype = Object.create(Mage.prototype);
Archmage.prototype.constructor = Archmage;

Archmage.prototype.learnSpell = function(spellName) {
    this.learnedSpells.push(spellName);
    console.log(`${this.name} learns ${spellName}!`);
};

Archmage.prototype.castSpell = function(target, spellName) {
    if (this.learnedSpells.includes(spellName)) {
        const baseDamage = this.strength + 20;
        this.mana -= 25;
        console.log(`${this.name} casts ${spellName} on ${target.name} for ${baseDamage} damage!`);
        target.helth -= baseDamage;
        return baseDamage;
    }
    return Mage.prototype.castSpell.call(this, target); // Fallback to basic spell
};