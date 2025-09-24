# Character Battle Game 🎯⚔️✨

A JavaScript prototype-based battle simulation game where different character types fight to be the last one standing!

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Character Types](#character-types)
- [Installation](#installation)
- [Usage](#usage)
- [Game Mechanics](#game-mechanics)
- [Prototype Inheritance Explained](#prototype-inheritance-explained)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Extending the Game](#extending-the-game)

## Overview

This project demonstrates JavaScript's prototype-based inheritance system through an interactive character battle game. Each character type inherits from a base `Character` prototype while having unique abilities and mechanics.

## Features

- 🏹 **Multiple Character Types**: Warrior, Mage, and Archer with unique abilities
- ⚔️ **Turn-Based Combat**: Automated battles with random action selection
- 📈 **Level System**: Characters level up when they defeat opponents
- 🔄 **Prototype Inheritance**: Educational example of JavaScript's prototype system
- 🎯 **Extensible Design**: Easy to add new character types and abilities

## Character Types

### 🛡️ Warrior
- **Specialty**: High health and strength
- **Unique Resource**: Rage (gains when taking damage)
- **Special Ability**: Powerful special attack costing rage
- **Base Stats**: High health, medium strength

### 🔮 Mage  
- **Specialty**: Spellcasting with bonus damage
- **Unique Resource**: Mana (required for spells)
- **Special Ability**: Cast spells for extra damage
- **Support Action**: Meditate to restore mana
- **Base Stats**: Low health, medium strength

### 🏹 Archer
- **Specialty**: Ranged attacks with bonus damage  
- **Unique Resource**: Arrows (limited ammunition)
- **Special Ability**: Ranged attacks with extra damage
- **Support Action**: Reload to get more arrows
- **Base Stats**: Medium health, medium strength

## Installation

No dependencies required! Just include the JavaScript file in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Character Battle Game</title>
</head>
<body>
    <script src="character-battle.js"></script>
    <script>
        // Your game code here
    </script>
</body>
</html>
```

Or run directly in Node.js:
```bash
node character-battle.js
```

## Usage

### Basic Setup

```javascript
// Create a new battle game
const game = new BattleGame();

// Create characters
const warrior = new Warrior("Conan", 100, 15);
const mage = new Mage("Gandalf", 80, 10);
const archer = new Archer("Legolas", 90, 12);

// Add characters to the game
game.addCharacter(warrior);
game.addCharacter(mage);
game.addCharacter(archer);

// Start the battle!
game.startBattle();
```

### Advanced Example

```javascript
// Create a larger battle with multiple characters
const game = new BattleGame();

// Add various characters
game.addCharacter(new Warrior("Conan", 100, 15));
game.addCharacter(new Warrior("Hercules", 110, 14));
game.addCharacter(new Mage("Gandalf", 80, 10));
game.addCharacter(new Mage("Merlin", 75, 12));
game.addCharacter(new Archer("Legolas", 90, 12));
game.addCharacter(new Archer("Hawkeye", 85, 13));

// Customize battle parameters
game.maxRounds = 50; // Optional: Set maximum rounds

// Start the battle
game.startBattle();
```

## Game Mechanics

### Turn System
- Each round, all alive characters take one action
- Actions are chosen randomly based on character type and current state
- Battle continues until only one character remains

### Action Selection
- **Warriors**: Prefer special attacks when they have enough rage
- **Mages**: Cast spells when mana is available, meditate when low
- **Archers**: Use ranged attacks when arrows are available, reload when low

### Leveling Up
- Characters gain a level when they defeat an opponent
- Level ups increase health and strength stats

## Prototype Inheritance Explained

This project demonstrates JavaScript's prototype-based inheritance:

### Base Character Prototype
```javascript
function Character(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
}

Character.prototype.attack = function(target) {
    // Base attack method
};
```

### Inheritance Setup
```javascript
// Warrior inherits from Character
function Warrior(name, health, strength) {
    Character.call(this, name, health, strength); // Call parent constructor
    this.rage = 0;
}

// Set up prototype chain
Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior; // Fix constructor reference

// Add Warrior-specific methods
Warrior.prototype.specialAttack = function(target) {
    // Warrior-specific ability
};
```

## API Reference

### Character Classes

#### `Character(name, health, strength)`
Base character constructor.

#### `Warrior(name, health, strength)`
Warrior character with rage mechanics.

#### `Mage(name, health, strength)`  
Mage character with mana and spells.

#### `Archer(name, health, strength)`
Archer character with arrows and ranged attacks.

### Character Methods

#### `attack(target)`
Basic attack dealing strength-based damage.

#### `isAlive()`
Returns boolean indicating if character is alive.

#### `levelUp()`
Increases level and improves stats.

### BattleGame Methods

#### `addCharacter(character)`
Adds a character to the battle.

#### `startBattle()`
Begins the automated battle simulation.

#### `getAliveCharacters()`
Returns array of currently alive characters.

## Examples

### Custom Character Creation
```javascript
// Create custom characters with different stats
const tankWarrior = new Warrior("Tank", 150, 10); // High health, low strength
const glassCannonMage = new Mage("Glass Cannon", 50, 20); // Low health, high strength
const balancedArcher = new Archer("Balanced", 90, 12); // Well-rounded stats
```

### Monitoring Battle Progress
```javascript
const game = new BattleGame();
// Add characters...

// Check battle state at any time
console.log("Alive characters:", game.getAliveCharacters().map(c => c.name));
console.log("Current round:", game.round);
```

## Extending the Game

### Adding New Character Types

```javascript
// Example: Adding a Healer class
function Healer(name, health, strength) {
    Character.call(this, name, health, strength);
    this.mana = 80;
}

Healer.prototype = Object.create(Character.prototype);
Healer.prototype.constructor = Healer;

Healer.prototype.healAlly = function(ally) {
    if (this.mana >= 15) {
        ally.health += 20;
        this.mana -= 15;
        console.log(`${this.name} heals ${ally.name} for 20 health!`);
    }
};
```

### Adding New Game Features

```javascript
// Example: Adding items system
Character.prototype.useItem = function(item) {
    if (item.type === 'health_potion') {
        this.health += item.value;
    } else if (item.type === 'strength_potion') {
        this.strength += item.value;
    }
};
```

### Custom Battle Rules
```javascript
// Modify the battle logic
BattleGame.prototype.executeCharacterTurn = function(character, target) {
    // Add your custom turn logic here
    if (character.health < 30) {
        // Characters try to heal when low on health
        character.heal(10);
    } else {
        character.attack(target);
    }
};
```

## Learning Objectives

This project helps you understand:
- JavaScript prototype-based inheritance
- Constructor functions and prototype chains
- Method overriding and polymorphism
- Object-oriented design patterns in JavaScript
- Game logic and state management

## Contributing

Feel free to extend this game! Some ideas:
- Add more character types (Rogue, Paladin, Necromancer)
- Implement equipment and inventory systems
- Add team battles or factions
- Create a visual interface
- Add special events and conditions

## License

This is an educational project. Feel free to use and modify as needed!

---

**Happy Coding!** 🎮✨