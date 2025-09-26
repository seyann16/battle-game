const BattleGame = require("./BattleGame");
const Berserker = require("./characters/Berserker");
const Archmage = require("./characters/Archmage");

function EnhancedBattleGame() {
    BattleGame.call(this);
    this.specialEvents = [];
}

EnhancedBattleGame.prototype = Object.create(BattleGame.prototype);
EnhancedBattleGame.prototype.constructor = EnhancedBattleGame;

EnhancedBattleGame.prototype.executeCharacterTurn = function(character, target) {
    const action = Math.random();

    // Enhanced action selection based on character capabilities
    if (character instanceof Berserker) {
        this.executeBerserkerTurn(character, target, action);
    } else if (character instanceof Archmage) {
        this.executeArchmageTurn(character, target, action);
    } else if (character.type === "Ninja") { // Ninja check
        this.executeNinjaTurn(character, target, action);
    } else {
        // Original logic for base classes
        BattleGame.prototype.executeCharacterTurn.call(this, character, target);
    }
};

EnhancedBattleGame.prototype.executeBerserkerTurn = function(berserker, target, action) {
    if (action < 0.4) {
        berserker.attack(target);
    } else if (action < 0.7 && berserker.rage >= 10) {
        berserker.specialAttack(target);
    } else {
        // Berserkers always attack aggressively
        berserker.attack(target);
    }
};

EnhancedBattleGame.prototype.executeArchmageTurn = function(archmage, target, action) {
    if (action < 0.4 && this.mana >= 25) {
        archmage.castSpell(target, "Fireball");
    } else if (action < 0.7 && this.mana >= 25) {
        archmage.castSpell(target, "Ice Shard");
    } else {
        archmage.castSpell(target);
    }
};

EnhancedBattleGame.prototype.executeNinjaTurn = function(ninja, target, action) {
    if (action < 0.3 && !ninja.isHidden) {
        ninja.hide();
    } else if (action < 0.5 && ninja.isHidden) {
        ninja.sneakAttack(target);
    } else if (action < 0.7 && ninja.shurikens > 0) {
        ninja.throwShuriken(target);
    } else {
        ninja.attack(target);
    }
};

module.exports = EnhancedBattleGame;