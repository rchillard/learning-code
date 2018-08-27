
# Write your code here

class Calculator
    def power(a, b)
        @a = a
        @b = b
        begin
            if ((@a < 0) | (@b < 0))
                raise RangeError, "n and p should be non-negative"
            else
                return @a ** @b
            end
       # rescue  
       #     return "n and p should be non-negative"
        end
    end
end

