    //Write your code here
    // In JAVA, taken from discussion forum -- fussing with Generics didn't seem worth it!
    
    static <E> void printArray(E[] array){
        for(E element : array){
            System.out.println(element);
        }
    }
