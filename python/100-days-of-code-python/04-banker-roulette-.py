names_string = input("Who is at lunch?  List each name separated by a comma, e.g. 'Bob, Harry, etc.'")
names = names_string.split(", ")

names_list_length_as_int = len(names)
print(names_list_length_as_int)

import random

random_pay = random.randint(0, names_list_length_as_int - 1)
print(random_pay)

paying_person = names[random_pay]
print(paying_person)

print(f"{paying_person} is going to buy the meal today!")

# Alternative
# random.choice(seq) - Return a random element from the non-empty sequence seq. If seq is empty, raises IndexError.
# seq can be a list
# paying_person = random.choice(names)

