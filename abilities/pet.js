const Mage = require("../characters/Mage");

// Mixin for Pet companions
const PetMixin = {
    summonPet: function(petType) {
        this.pet = {
            type: petType,
            attack: function(target) {
                const damage = 5;
                target.health -= damage;
                console.log(`${this.type} attacks ${target.name}  for ${damage} damage!`);
                return damage;
            }.bind(this)
        };
    },

    commandPet: function(target) {
        if (this.pet) {
            return this.pet.attack(target);
        }
        console.log(`${this.name} has no pet to command!`);
        return 0;
    }
};

// Apply pets to mages
Object.assign(Mage.prototype, PetMixin);