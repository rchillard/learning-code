# Python random numbers use Mersenne Twister 
# https://en.wikipedia.org/wiki/Mersenne_Twister

# Khan Academy video on pseudorandom number generators
# https://www.youtube.com/watch?v=GtOt7EBNEwQ

import random

random_integer = random.randint(1, 10)

print(random_integer)

random_float = random.random()

print(random_float)

random_zero_to_five = random.randint(0,4) + random.random()

print(random_zero_to_five)