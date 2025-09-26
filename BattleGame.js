const Warrior = require("./characters/Warrior");
const Mage = require("./characters/Mage");
const Archer = require("./characters/Archer");

// Game class to manage the battle
function BattleGame() {
    this.characters = [];
    this.round = 0;
}

BattleGame.prototype.addCharacter = function(character) {
    this.characters.push(character);
    console.log(`${character.name} has joined the battle!`);
};

BattleGame.prototype.startBattle = function() {
    console.log("\n=== BATTLE BEGINS ===");

    // Continue until only one character remains
    while (this.getAliveCharacters().length > 1) {
        this.round++;
        console.log(`\n--- Round ${this.round} ---`);
        this.executeRound();
    }
    
    this.declareWinner();
};

BattleGame.prototype.getAliveCharacters = function() {
    return this.characters.filter(character => character.isAlive());
};

BattleGame.prototype.executeRound = function() {
    const aliveCharacters = this.getAliveCharacters();

    // Each alive character takes a turn
    for (let character of aliveCharacters) {
        if (!character.isAlive()) continue;

        // Find a random target (not themselves)
        const possibleTargets = aliveCharacters.filter(c => c !== character);
        if (possibleTargets.length === 0) break;

        const target = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];

        // Choose an action based on character type
        this.executeCharacterTurn(character, target);

        // Check if the battle should end
        if (this.getAliveCharacters().length <= 1) break;
    }
};

BattleGame.prototype.executeCharacterTurn = function(character, target) {
    // Different characters have different action choices
    const action = Math.random();

    if (character instanceof Warrior) {
        if(action <0.3 && character.rage >= 10) {
            character.specialAttack(target);
        } else if (action < 0.6) {
            character.attack(target);
        } else {
            // Warriors don't have heal action, so they always attack
            character.attack(target);
        } 
    } else if (character instanceof Mage) {
        if (action < 0.4 && character.mana >= 20) {
            character.castSpell(target);
        } else if (action < 0.6 && character.mana < 50) {
            character.meditate();
        } else {
            character.attack(target);
        }
    } else if (character instanceof Archer) {
        if (action < 0.5 && character.arrows > 0) {
            character.rangedAttack(target);
        } else if (action < 0.7 && character.arrows < 3) {
            character.reload();
        } else {
            // Default character action
            character.attack(target)
        }
    }

    // Check if target died
    if (!target.isAlive()) {
        console.log(`💀 ${target.name} has been defeated!`)
        character.levelUp();
    }
};

BattleGame.prototype.declareWinner = function() {
    const winner = this.getAliveCharacters()[0];
    if (winner) {
        console.log(`\n🎉 ${winner.name} wins the battle after ${this.round} rounds!`);
    } else {
        console.log("\nIt's a draw! No one wins.")
    }
}

module.exports = BattleGame;