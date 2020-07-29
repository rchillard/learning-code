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
}
