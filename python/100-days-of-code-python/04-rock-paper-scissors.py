import random 

choices = ["Rock", "Paper", "Scissors"]

player_choice = input("What do you choose?  Rock = 1, Paper = 2, Scissors = 3... ")
player_symbol = choices[int(player_choice) - 1]
print("You chose: " + player_symbol)

computer_choice = random.randint(0, 2)
computer_symbol = choices[int(computer_choice)]
print("Opp chose: " + computer_symbol)


# Simple - if statement nesting to cover win conditions

if player_symbol == computer_symbol:
    print("It's a tie!")

else:

    if player_symbol == "Rock":
        
        if computer_symbol == "Scissors":
            print("Rock smashes scissors!  You win.")
        else:
            print("Paper covers rock!  You lose.")


    if player_symbol == "Paper":
        if computer_symbol == "Rock":
            print("Paper covers rock!  You win.")
        else:
            print("Scissors cut paper!  You lose.")


    if player_symbol == "Scissors":
        if computer_symbol == "Paper":
            print("Scissors cut paper! You win.")
        else:
            print("Rock smahes scissors! You lose")
