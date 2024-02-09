print("Welcome to the Tip Calculator.")

# Get inputs
bill = input("What was the total cost of your meal? \n")
number_of_people = input("How many people did you split the meal with? \n")
percentage_tip = input("What percentage tip would you like to give? 5% 15% 20% 25% ?")

# Calculate bill
total = float(bill)
bill_per_person = total / int(number_of_people)
bill_per_person_with_tip = bill_per_person * (1 + float(percentage_tip))

bill_person_person_as_formatted_string = "{:.2f}".format(
    round(bill_per_person_with_tip, 2)
)

# Display output
print(
    "Your total bill is $"
    + str(total)
    + ", and the cost per person is $"
    + str(bill_per_person)
    + ", and the cost per person with tip is $"
    + bill_person_person_as_formatted_string
)

print("Thanks for using the tip calculator!")
