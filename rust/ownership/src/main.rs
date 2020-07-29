fn main() {
    let mut s = String::from("hello, world!");
    println!("{}", s);
    s = "hello, universe!".to_string();
    println!("{}", s);
    s.push_str(" Nice to meet you!");
    println!("{}", s);

    let s1 = String::from("hello");
    println!("s1: {}", s1);
    let mut s2 = s1.clone();
    println!("s2: {}", s2);

    s2.push_str(" planet");
    println!("s2: {}", s2);
    println!("s1: {}", s1);

    let sum: i32 = add_numbers(5, 10);
    println!("{}", sum);

    let ref_sum: i32 = 25;
    println!("{}", add_ref_numbers(50, 100, &ref_sum));
}

fn add_numbers(x: i32, y: i32) -> i32 {
    x + y
}

fn add_ref_numbers(x: i32, y: i32, s: &i32) -> i32 {
    println!("{}", s);
    x + y
}