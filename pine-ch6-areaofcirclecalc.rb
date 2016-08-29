# Ruby testing

puts 'Let\'s calculate the area of a circle!'
puts 'Input radius:'
testrad = gets.chomp.to_i
puts 'Calculating...'
puts 'Formula found: A = PI*r^2'
puts 'Searching...'
puts 'Programming language found: Ruby'
puts 'Formula found: A = Math::PI * input ** 2'
puts 'Calculating...'
area = Math::PI * (testrad ** 2)
puts 'Area : ' + area.to_s