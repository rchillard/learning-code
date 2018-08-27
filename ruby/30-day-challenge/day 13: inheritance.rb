class Student <Person
  
    def initialize(firstName, lastName, id, scores)
        @firstName = firstName
        @lastName = lastName
        @id = id
        @scores = scores
    end 
    
    def calculate()
        @sumScore = 0
        for i in 0..@scores.length
            @sumScore = @sumScore + @scores[i].to_i
        end
        
        @avgScore = @sumScore / @scores.length
        
        case @avgScore
            when 90..100
                return "O"
            when 80..89
                return "E"
            when 70..79
                return "A"
            when 55..69
                return "P"
            when 40..54
                return "D"
            else
                return "T"
        end  
    end
  
end
