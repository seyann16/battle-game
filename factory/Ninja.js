const { createCharacter, characterActions } = require("./baseCharacter");
const StealthMixin = require("../abilities/stealth");

// Specialized factory with composition
function createNinja(name, health, strength) {
    const ninja = createCharacter(name, health, strength);

    // Add ninja-specific abiliies
    Object.assign(ninja , {
        type: "Ninja",
        shurikens: 5,
        throwShuriken(target) {
            if (this.shurikens > 0) {
                const damage = this.strength + 8;
                target.health -= damage;
                this.shurikens--;
                console.log(`${this.name} throws a shuriken at ${target.name} for ${damage} damage!`);
            }
            return this.attack(target);
        }
    });

    // Add stealth mixin
    Object.assign(ninja, StealthMixin);

    return ninja;
}

module.exports = { createNinja };