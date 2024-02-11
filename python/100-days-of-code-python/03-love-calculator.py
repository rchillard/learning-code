print("The Love Calculator is calculating your score...")
name1 = input("What is your name?") # What is your name?
name2 = input("What is your potential love's name?") # What is their name?

name1 = name1.lower()
name2 = name2.lower()

score = ""

# Take both people's names and check for the number of times the letters in the word TRUE occurs. 
true_score = 0

# Python String has got an in-built function – string.count() method to count the occurrence of a character or a substring in the particular input string.

true_score += name1.count("t")
true_score += name1.count("r")
true_score += name1.count("u")
true_score += name1.count("e")

true_score += name2.count("t")
true_score += name2.count("r")
true_score += name2.count("u")
true_score += name2.count("e")

# Then check for the number of times the letters in the word LOVE occurs. 

love_score = 0

love_score += name1.count("l")
love_score += name1.count("o")
love_score += name1.count("v")
love_score += name1.count("e")

love_score += name2.count("l")
love_score += name2.count("o")
love_score += name2.count("v")
love_score += name2.count("e")

# Add first digit and second digit together (not numerically, but string concat)

score = str(true_score) + str(love_score)

score = int(score)

if score < 10 or score > 90:
    print(f"Your score is {score}, you go together like coke and mentos.")
elif score > 40 and score < 50:
    print(f"Your score is {score}, you are alright together.")
else:
    print(f"Your score is {score}.")