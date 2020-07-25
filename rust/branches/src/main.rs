fn main() {
    let number = 7;
    if number < 5 {
        println!("Condition is true!")
    } else {
        println!("Condition is false!")
    }

    let test_number = 19;
    let oddoreven = if (test_number % 2) > 0 { "odd" } else { "even" };
    println!("{}",oddoreven);
    // println!("Hello, world!");
}
