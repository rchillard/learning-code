#!/bin/ruby

N = gets.strip.to_i

if (N % 2) != 0
	$stdout.puts "Weird"
else
	if ((N >= 2) && (N <= 5))
		$stdout.puts "Not Weird"
	elsif ((N >= 6) && (N <= 20))
		$stdout.puts "Weird"
	elsif (N > 20)
		$stdout.puts "Not Weird"
	end
end
