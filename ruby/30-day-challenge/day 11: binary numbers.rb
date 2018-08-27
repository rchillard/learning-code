# Given a base 10 integer (n), convert it to a binary (base 2) number.  
# Then find and print the base 10 integer denoting the maximum number of conseutive 1's in n's binary representation.
# Constraints: 1 <= n <= 10**6

#!/bin/ruby

$stdout.puts "What number shall we convert?"
n = gets.strip.to_i

binNum = n.to_s(2)

arrCount = binNum.to_s.split('')
countInt = 0
biggestCount = 0

for i in 0..arrCount.length
	if arrCount[i].to_i == 1
		countInt = countInt + 1

		if countInt > biggestCount
			biggestCount = countInt
		end
	else
		countInt = 0
	end
end

$stdout.puts "Original input  : " + n.to_s
$stdout.puts "Binary number   : " + binNum.to_s
$stdout.puts "Array traversed : " + arrCount.to_s
$stdout.puts "Consecutive 1's : " + biggestCount.to_s
