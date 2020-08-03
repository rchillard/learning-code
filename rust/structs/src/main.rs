fn main() {
    println!("Hello, world!");
    let mut scimitar = Sword {
        damage_minimum: 1,
        damage_maximum: 3,
        durability: 100,
        wield_type: String::from("one-handed"),
    };
    
    println!("{:?}", scimitar);

    let blessed = bless_sword(&mut scimitar);

    println!("{:?}", blessed);
}

#[derive(Debug)]
struct Sword {
    damage_minimum: i32,
    damage_maximum: i32,
    durability: i32,
    wield_type: String,
}

fn bless_sword(weapon: &mut Sword) -> &Sword {
    weapon.damage_maximum = weapon.damage_maximum + 1;
    return weapon;
}
