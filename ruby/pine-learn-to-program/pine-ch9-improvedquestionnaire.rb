# Improved question asking method

def ask question
  puts question
  reply = gets.chomp.downcase

  while (reply != 'yes' || reply != 'no')
    if (reply == 'yes')
      answer = true
      return answer
    elsif (reply == 'no')
      answer = false
      return answer
    else
      puts 'Please answer only yes or no'
      reply = gets.chomp.downcase
    end
  end
end

questions = ["Do you like burritos?", "Do you like tacos?", "Do you like queso?"]
answers = []

while (questions != [])
  answers.push ask questions.pop
end

answers.each do |thing|
  puts thing
end
