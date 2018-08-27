# in Java

//Write your code here

class Calculator implements AdvancedArithmetic{
    
    public int divisorSum(int n){
        int sum = 1;
        // System.out.print("Sum = " + sum + "\n");
        // int limit = n / 2;
        // System.out.print("Limit = " + limit + "\n");
        int i;
        for (i = 2; i <= n; i++) {
            if (n % i == 0) {
                // System.out.print("i = " + i + "\n");
                // System.out.print("Sum = " + sum + "\n");
                sum = sum + i;
                // System.out.print("New Sum = " + sum + "\n");
            }
        }
        return sum;
    }
}


