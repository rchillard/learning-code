
# Declare second integer, double, and String variables.
@intSample
@dblSample
@strSample

# Read and save an integer, double, and String to your variables.
@str = $stdin.read
@strArray = @str.split("\n")
@intRead = @strArray[0].to_i
@dblRead = @strArray[1].to_f
@strRead = @strArray[2]

# Print the sum of both integer variables on a new line.
@intSample = 4
@intSum = @intSample + @intRead
$stdout.puts @intSum

# Print the sum of the double variables on a new line.
@dblSample = 4.0
@dblSum = @dblSample + @dblRead
$stdout.puts @dblSum
#$stdout.puts d + @dblSample

# Concatenate and print the String variables on a new line
@strSample = 'HackerRank '
@strSum = @strSample + @strRead
$stdout.puts @strSum

# The 's' variable above should be printed first.
