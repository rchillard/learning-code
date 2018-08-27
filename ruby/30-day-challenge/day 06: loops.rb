$stdout.puts "What number shall we increment and print?"
N = gets.chomp.to_i

for i  in 1..10
	$stdout.puts (N.to_s) + " x " + (i.to_s) + " = " + (N * i).to_s
end
