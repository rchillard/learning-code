# Ruby testing

puts 'Let\'s print some TABLE OF CONTENTS ACTION'

tableofContents = ['Table of Contents, page 00', 'Chapter 1: Getting Started, page 01', 'Chapter 2: Numbers, page 10', 'Chapter 3: Letters, page 25']

linewidth = 60

tableofContents.each do |chap|
  text = chap.split(',')
  puts text[0].ljust(linewidth/2) + text[1].rjust(linewidth/2)
end
