
# Class vs. instance example

class Person
	attr_accessor :age

	def initialize(initialAge)
		if initialAge > 0
			@age = initialAge
		else
			@age = 0
			$stdout.puts "Age is not valid, setting age to 0."
		end
	end	

	def yearPasses
		@age = @age + 1
	end

	def amIOld
		if @age < 13
			$stdout.puts "You are young."
		elsif (@age >= 13) && (@age < 18)
			$stdout.puts "You are a teenager."
		else
			$stdout.puts "You are old."
		end
	end
end

$stdout.puts "How old is your Person?"
tAge = gets.chomp.to_i

p = Person.new(tAge)

p.amIOld()
p.yearPasses()
p.amIOld()
