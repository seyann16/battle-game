const Archer = require("../characters/Archer");

// Mixin for Stealth abilities
// A mixin is a reusable collection of methods or properties that you can "mix into" a class or object, without using inheritance.
const StealthMixin = {
    hide: function() {
        this.isHidden = true;
        console.log(`${this.name} hides in the shadows...`);
        return this;
    },

    sneakAttack: function(target) {
        if (this.isHidden) {
            const damage = this.strength * 3;
            target.health -= damage;
            this.isHidden = false;
            console.log(`${this.name} performs a sneak attack for ${damage} damage!`);
            return damage;
        }
        return this.attack(target);
    }
};

// Apply stealth to archers
Object.assign(Archer.prototype, StealthMixin);
module.exports = StealthMixin;