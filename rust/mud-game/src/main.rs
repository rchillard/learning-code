// use rand::Rng;
use std::io;
use std::{thread, time};
// use std::cmp::Ordering;

fn main() {
    // Introduction
    println!("Launching RUSTIMA ONLINE! v0.1");

    // Pick your name
    let mut name = String::new();
    println!("What is your name, adventurer?");
    io::stdin()
        .read_line(&mut name)
        .expect("Is that a real name?  I don't understand it!");
    let name = name.trim();
    println!("You are a brave soul, {}, for entering this dungeon.", name);
    pause_break();

    // Pick your class
    let icon_fighter = "🤺";
    let icon_mage = "🧙";
    let icon_rogue = "🦹";
    println!("What type of adventurer are you, {}?", name);
    let mut class = String::new();
    println!("f: {} fighter", icon_fighter);
    println!("m: {} mage", icon_mage);
    println!("r: {} rogue", icon_rogue);
    io::stdin()
        .read_line(&mut class)
        .expect("That is not an adventurer that I know!  Try entering 1, 2, or 3.");
    let class: &str = match class.trim() {
        "f" => "fighter",
        "m" => "mage",
        "r" => "rogue",
        _ => "I do not recognize this class.",
    };

    println!("Ah, so you are a {}, I see.  Many of your kind have died here.", class);
    
    let hero_str: i32 = 5;
    let hero_dex: i32 = 5;
    let hero_int: i32 = 5;
    // Assign attribute values based off of class
    // if class == "fighter" {
    //     let hero_str = 10;
    //     let hero_dex = 5;
    //     let hero_int = 2;
    // } else if class == "mage" {
    //     let hero_str = 2;
    //     let hero_dex = 5;
    //     let hero_int = 10;
    // } else if class == "rogue" {
    //     let hero_str = 5;
    //     let hero_dex = 10;
    //     let hero_int = 2;
    // } else {
    //     let hero_str = 10;
    //     let hero_dex = 10;
    //     let hero_int = 10;
    // }

    // Assign weapons based off of class
    // let fighter_weapons = "🛡️";
    // let knife = "🔪";
    // let magic = "✨";
    // let bow_and_arrow = "🏹";
    // let dagger = "🗡️";

    let mut current_weapon = String::new();

    if class == "fighter" {
        current_weapon = "knife 🔪".to_string();
    } else if class == "mage" {
        current_weapon = "magic ✨".to_string();
    } else if class == "rogue" {
        current_weapon = "bow 🏹".to_string();
    } else {
        current_weapon = "empty handed".to_string();
    }

    // Start game
    let icon_haunted_house = "🏚️";
    let icon_castle = "🏰";
    let icon_abbot = "😑";
    pause_break();
    println!("Welcome to Level 1: The Haunted House {}", icon_haunted_house);
    pause_break();
    println!("It is night time, and you find yourself in a dreary old castle {}.  
    The paintings on the walls are faded.  The candles are burning low.  
    A general state of disrepair can be seen around what was once a great hall.
    Before you, an old man with white hair and brown robes eyes you suspiciously.", icon_castle);
    pause_break();
    println!("He grumbles under his breath, something about survivors, before addressing you:");
    println!("{} Old Abbot: Come to free us of the curse, have you?  Good, good!  If you have coin or gem, I may be able to help.  Otherwise, get on with it!", icon_abbot);
    pause_break();


    println!("Leave the castle and adventure into the night?");
    print_decision();
    let mut decision = String::new();
    io::stdin()
        .read_line(&mut decision)
        .expect("That's not a valid decision!");
    let decision: &str = match decision.trim() {
        "y" => "yes",
        "n" => "no",
        _ => "invalid",
    };
    if decision == "yes" {
        println!("You venture out into the night, readying your {}. You have: {} strength, {} dexterity, {} intelligence.", current_weapon, hero_str, hero_dex, hero_int);
    } else {
        println!("You spend the rest of your days telling old jokes with the Abbot and watching paint fade on castle paintings.");
    }
}

fn pause_break() {
    println!("========================================");
    thread::sleep(time::Duration::from_secs(1));
}

fn print_decision() {
    println!("y: yes");
    println!("n: no");
}

// fn weapon(class: &str) -> str {
//     let shield = "🛡️";
//     let knife = "🔪";
//     let magic = "✨";
//     let bow_and_arrow = "🏹";
//     let dagger = "🗡️";

//     let &mut current_weapon = String::new();

//     if class == "fighter" {
//         current_weapon = shield + knife;
//     } else if class == "mage" {
//         current_weapon = magic;
//     } else if class == "rogue" {
//         current_weapon = bow_and_arrow + dagger;
//     } else {
//         current_weapon = "empty handed";
//     }
// }