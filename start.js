const Warrior = require("./Warrior");
const Mage = require("./Mage");
const Archer = require("./Archer");
const BattleGame = require("./BattleGame");

// Create our battle game
const game = new BattleGame();

// Create characters of different types
const warrior = new Warrior("Conan", 100, 15);
const mage = new Mage("Gandalf", 80, 10);
const archer = new Archer("Legolas", 90, 12);
const warrior2 = new Warrior("Hercules", 110, 14);

// Add characters to the game
game.addCharacter(warrior);
game.addCharacter(mage);
game.addCharacter(archer);
game.addCharacter(warrior2);

// Start the battle
game.startBattle()