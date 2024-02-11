print("Welcome to the Rollercoaster of DEATH!")

height = int(input("What is your height in centimeters? "))

if height > 120:
    print("You are tall enough to DIE on the Rollercoaster of DEATH!")

    age = int(input("How old are you? "))

    if age >= 18:
        print("You owe me full price for an adult: $25 to DIE!")
    elif age >= 12:
        print("You owe me teenage price: $15")
    else:
        print(
            "Sorry, you may be tall enough, but you are too young yet to DIE.  You will have to go on living."
        )
else:
    print("Sorry, you are not tall enough yet to DIE.  You will have to go on living.")


print("Welcome to the ODD/EVEN number decider 5000!")

number = int(input("What number should I decide? "))

if number % 2 == 0:
    print("Your number is EVEN!")
else:
    print("Your number is ODD!")
