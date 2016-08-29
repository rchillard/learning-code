puts "WHAT WAS THAT?"
sound = gets.chomp
byecounter = 0

while byecounter < 3
	if (sound == sound.downcase || sound == sound.capitalize)
		puts "HUH?! SPEAK UP, SONNY!"
		byecounter = 0
	elsif sound == "BYE"
		byecounter = byecounter + 1
		puts "..."
	else
		ranyear = rand(50) + 1900
		puts "NO, NOT SINCE " + ranyear.to_s + "!"
		byecounter = 0
	end	

	sound = gets.chomp
end

puts "OKAY, SEE YA LATER SONNY!"