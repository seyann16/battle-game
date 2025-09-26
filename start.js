const EnhancedBattleGame = require("./EnhancedBattleGame");
const Warrior = require("./characters/Warrior");
const Mage = require("./characters/Mage");
const Archer = require("./characters/Archer");
const Berserker = require("./characters/Berserker");
const Archmage = require("./characters/Archmage");
const { createNinja } = require("./factory/Ninja");
const PetMixin = require("./abilities/pet");

// Create an epic battle with all character types!
function createEpicBattle() {
    const game = new EnhancedBattleGame();

    console.log("\n=== EPIC CHARACTER BATTLE ===");
    console.log("Featuring multi-level inheritance, mixins, and factory functions!\n");

    // Base characters
    game.addCharacter(new Warrior("Conan", 100, 15));
    game.addCharacter(new Mage("Gandalf", 80, 10));
    game.addCharacter(new Archer("Legolas", 90, 12));

    // Specialized characters
    game.addCharacter(new Berserker("Grom", 20, 18));
    game.addCharacter(new Archmage("Elminster", 70, 15));

    // Factory-created characters
    game.addCharacter(createNinja("Hanzo", 85, 14));

    // Characters with mixins
    const beastMaster = new Mage("Merill", 75, 8);
    beastMaster.summonPet("Wolf");
    game.addCharacter(beastMaster);

    game.startBattle();

    return game;
}

// Run the epic battle
const epicBattle = createEpicBattle();