fn main() {

    // Loop (infinite)
    // loop {
    //     println!("Hello, world!");
    // }
    
    // Loop with break
    let mut counter = 0;

    let result = loop {
        counter += 1;
        
        if counter == 10 {
            break counter * 2;
        }
    };

    println!("{}", result);

    // Conditional loop with while
    let mut countdown = 5;
    println!("COUNTING DOWN...");

    while countdown > 0 {
        println!("{}", countdown);
        countdown -= 1;
    }

    println!("LAUNCH!");

    // Looping through a collection with for
    let a = [10, 20, 30, 40, 50];

    for element in a.iter() {
        println!("{}", element);
    }

    // Looping through a Range of numbers backwards
    println!("A bigger countdown:");
    for number in (1..11).rev() {
        println!("{}", number);
    }
    println!("Launch!");
}
