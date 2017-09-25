
puts "What is the starting year?"
startyear = (gets.chomp).to_i
puts ""
puts "What is the ending year?"
endyear = (gets.chomp).to_i
puts ""
puts "Calculating"

yearcount = startyear

while yearcount < endyear
	if ((yearcount % 4) == 0)
		if ((yearcount % 400) == 0)
			# puts "Divisible by 400"
			puts yearcount.to_s 
		elsif ((yearcount % 100) == 0)
			# puts "Divisible by 100"
			# do nothing
		else
			puts yearcount.to_s
		end
	end
	yearcount = yearcount + 1
end