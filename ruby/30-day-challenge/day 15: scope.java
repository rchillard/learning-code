# Java... ewwww!

	// Add your code here

    public Difference(int[] arrInts){
        this.elements = arrInts;
    }

    public void computeDifference(){
        int highInt;
        highInt = 0;
        
        for(int i = 0; i < elements.length; i++){
            if (elements[i] > highInt) {
                highInt = elements[i];
            }
        }
        
        int lowInt;
        lowInt = 100;
        
        for(int i = 0; i < elements.length; i++){
            if (elements[i] < lowInt) {
                lowInt = elements[i];
            }
        }
        
        maximumDifference = highInt - lowInt;
    }

