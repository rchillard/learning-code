fn main() {
    println!("Hello, world!");
    let x = 32;

    // Call function
    print_age(x);

    // Statements vs. Expressions
    // Statements do not return a value
    // Expressions evaluate to a value
    // Statements end in ;
    // Expressions do not, but can be wrapped in { }

    println!("Adding 10 + 5 = {}", addition(10, 5));
}

// Function
fn print_age(age: i32) {
    println!("Age: {}", age);
}

// By default, functions return the last expression
fn addition(x: i32, y: i32) -> i32 {
    x + y
}

// For future consideration
// fn print_array<Data: ?Sized>(Data: [&str; 5]) {
//     println!("Array: {:?}", Data);
// }