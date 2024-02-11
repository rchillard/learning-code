print("Thank you for choosing Python Pizza Deliveries!")
size = input("What size pizza do you want?  S, M, or L") # What size pizza do you want? S, M, or L
add_pepperoni = input("Do you want pepperoni? Y or N") # Do you want pepperoni? Y or N
extra_cheese = input("Do you want extra cheese? Y or N") # Do you want extra cheese? Y or N

price = 0

match size:
  case "S":
    price = 15
  case "M":
    price = 20
  case "L":
    price = 25

if add_pepperoni == "Y":
  if size == "S":
    price += 2
  else:
    price += 3

if extra_cheese == "Y":
  price += 1

print(f"Your Python Pizza Delivery cost will be: ${price}")