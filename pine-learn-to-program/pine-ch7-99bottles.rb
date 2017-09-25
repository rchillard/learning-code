# Chapter 7, flow control, continued

puts "How many bottles of beer shall we start with?"
bottles = gets.chomp
bottles = bottles.to_i

while bottles > 0
	puts bottles.to_s + " bottles of beer left on the wall!"
	puts "Knock 1 down, pass it around!"
	puts (bottles = bottles - 1).to_s + " bottles of beer on the wall!"
	puts ""

	if bottles == 0
		puts "And we're all drunk!"
	end
end
