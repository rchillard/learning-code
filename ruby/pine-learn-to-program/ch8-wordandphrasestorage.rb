# Build a program that accepts input and then stores as an array

puts "Time to enter the Thunder Dome!"
storage = []
endOfInput = false

while (!endOfInput)
  puts "What word or phrase would you like stored?"
  strHandler = gets.chomp
  if (strHandler == "")
    endOfInput = true
  else
    storage.push strHandler
  end
end

storage.each do |unit|
  puts unit.to_s
end
