
# Stacks (Last In First Out)
# Peek: Return the object at the top of the stack (without removing it).
# Push: Add an object passed as an argument to the top of the stack.
# Pop: Remove the object at the top of the stack and return it.

# Queues (First In First Out)
# Enqueue: Add an object to the back of the line.
# Dequeue: Remove the object at the head of the line and return it; the element that was previously second in line is now at the head of the line.

# Write the following declarations and implementations:

# Two instance variables: one for your , and one for your .
# A void pushCharacter(char ch) method that pushes a character onto a stack.
# A void enqueueCharacter(char ch) method that enqueues a character in the  instance variable.
# A char popCharacter() method that pops and returns the character at the top of the instance variable.
# A char dequeueCharacter() method that dequeues and returns the first character in the  instance variable.

# create the Solution class
class Solution
	
    def initialize
       @stackVar = Array.new
	   @queueVar = Array.new
    end

	# Queue methods
	def enqueue_character(c)
		@queueVar.insert(0, c)
	end

	def dequeue_character()
		return @queueVar.pop
	end

	# Stack methods
	def push_character(c)
		@stackVar.unshift(c)
	end

	def pop_character
		return @stackVar.shift
	end
end
