# Ruby testing

puts 'Hello there, and what\'s your first name?'
firstname = gets.chomp
puts 'Hello there, and what\'s your middle name?'
middlename = gets.chomp
puts 'Hello there, and what\'s your last name?'
lastname = gets.chomp

name = firstname + " " + middlename + " " + lastname
namelength = firstname.length + middlename.length + lastname.length

puts 'Your name is ' + name + '?  What a lovely name!  You sexy beast.'
puts 'Pleased to meet you, ' + name + '. :)' 

puts 'And what is your favorite number?'
favnum = gets.chomp.to_i
puts 'Oh, really?'
puts 'Well I think ' + (favnum+1).to_s + " is a bigger, better number."
puts ''
puts 'But did you know your favorite number is ' + (favnum - namelength).to_s + ' characters longer than your name?'
puts 'Pretty cool.'
puts ''
puts 'I knew this, because your name is ' + namelength.to_s + ' and your favorite number is ' + favnum.to_s + '.'
puts 'Therefore, ' + favnum.to_s + ' - ' + namelength.to_s + ' = ' + (favnum - namelength).to_s