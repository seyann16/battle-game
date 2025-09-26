// Base character factory using Object.create()
function createCharacter(name, health, strength) {
    const character = Object.create(characterActions);
    
    character.name = name;
    character.health = health;
    character.strength = strength;
    character.level = 1;
    
    return character;
}

const characterActions = {
    attack(target) {
        const damage = this.strength;
        target.health -= damage;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
        return damage;
    },
    
    isAlive() {
        return this.health > 0;
    },
    
    levelUp() {
        this.level++;
        this.health += 10;
        this.strength += 5;
        console.log(`${this.name} leveled up to level ${this.level}!`);
    }
};

module.exports = { createCharacter, characterActions };