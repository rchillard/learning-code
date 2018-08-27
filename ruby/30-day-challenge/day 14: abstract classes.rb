//Write MyBook Class

class MyBook extends Book{
    
    int price;
    
    MyBook(String title, String author, int p){
        super(title, author);
        price = p;
    }
    
    void display(){
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: " + price);
    }
    
}
