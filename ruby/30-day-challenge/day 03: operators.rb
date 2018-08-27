# Enter your code here. Read input from STDIN. Print output to STDOUT
@str = $stdin.read
@strArray = @str.split("\n")
@mealCost = @strArray[0].to_f #12.00
@tipPercent = @strArray[1].to_f #20
@taxPercent = @strArray[2].to_f #8

# Transform to percentages
@tipPercent = @tipPercent / 100
@taxPercent = @taxPercent / 100

# Calculate real costs of tip and tax
@tip = @mealCost * @tipPercent
@tax = @mealCost * @taxPercent

# Calculate real cost of total meal
@mealCost = (@mealCost + @tip + @tax).round
@mealCost.to_i

# Print output
$stdout.puts "The total meal cost is " + @mealCost.to_s + " dollars."
