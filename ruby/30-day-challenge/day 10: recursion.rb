# Enter your code here. Read input from STDIN. Print output to STDOUT

def factorial(n)
	# $stdout.print("n: " + n.to_s + "\n")
	
	if n >= 2
		return n * factorial((n-1))
	else
		return n
	end

end

x = $stdin.gets.to_i    
$stdout.puts factorial(x).to_s
