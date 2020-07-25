fn main() {
    // Mutability in action
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);

    // Constant example
    const LIFE_EXPECTANCY: i32 = 78;
    println!("Average life expectancy is {}.", LIFE_EXPECTANCY);

    // Shadowing example
    let age = 26;
    println!("Your age is {}.", age);
    let age = 26 - 5;
    println!("Your age is {}.", age);

    // Numeric operations
    // addition
    let sum = 1 + 2;
    // subtraction
    let difference = 5 - 3;
    // multiplication
    let product = 2 * 5;
    // division
    let quotient = 20 / 5;
    // remainder
    let remainder = 46 % 5;

    println!("Sum: {}, Difference: {}, Product: {}, Quotient: {}, Remainder: {}", sum, difference, product, quotient, remainder);

    // Boolean
    let t = true;
    let f: bool = false;
    println!("It is {} that Rust is awesome, while it is {} that we understand it yet!", t, f);

    // Characters
    let fighter = '🤺';
    let mage = '🧙';
    let rogue = '🦹';

    let castle = '🏰';
    let haunted_house = "🏚️";

    let zombie = '🧟';
    let skeleton = '💀';
    let vampire = '🧛';

    let shield = "🛡️";
    let knife = "🔪";
    let magic = "✨";
    let bow_and_arrow = "🏹";
    let dagger = "🗡️";

    let gem = '💎';
    let scroll = '📜';
    let old_key = "🗝️";

    let crossed_swords = "⚔️";
    let blood = "🩸";
    let low_health = "🤕";
    let death = "☠️";

    let coffin = "⚰️";

    println!("Classes: {}, {}, {}", fighter, mage, rogue);
    println!("Places: {}, {}", castle, haunted_house);
    println!("Monsters: {}, {}, {}", zombie, skeleton, vampire);
    println!("Weapons: {}, {}, {}, {}, {}", dagger, shield, knife, magic, bow_and_arrow);
    println!("Treasure: {}, {}, {}", gem, scroll, old_key);
    println!("Effects: {}, {}, {}, {}", crossed_swords, blood, low_health, death);
    println!("Furniture: {}", coffin);

    // Tuples
    let weapon_knife: (&str, i32, i32) = ("🔪", 1, 3);
    let (icon, min, max) = weapon_knife;
    println!("Knife: icon {}, minimum damage: {}, maximum damage: {}", icon, min, max);

    // Arrays
    let weapons: [&str; 5] = [shield, knife, magic, bow_and_arrow, dagger];
    let effects: [&str; 4] = [crossed_swords, blood, low_health, death];

    println!("Available weapons: {:?}", weapons);
    println!("Known effects: {:?}", effects);
}
