
def stringDecomposer(s)
	s = s.to_s
	sArr = s.chars
	evenString = ""
	oddString = ""

	for i in 0..(sArr.length)
		if (i.even?)
			evenString = evenString + sArr[i].to_s
		else
			oddString = oddString + sArr[i].to_s
		end
	end

	$stdout.puts evenString + " " + oddString
end

# $stdout.puts "How many words shall I decompose?"
numWords = $stdin.gets.chomp.to_i
wordArray = Array.new(numWords)

k = 0
while k < numWords
	# $stdout.puts "What is the " + k.to_s + " word you'd like decomposed?"
	wordArray[k] = $stdin.gets.chomp
	k = k + 1
end

j = 0

for j in 0..(wordArray.length) 
	stringDecomposer(wordArray[j])
end
