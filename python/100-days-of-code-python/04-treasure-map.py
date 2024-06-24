# Data
line1 = ["⬜️","️⬜️","️⬜️"]
line2 = ["⬜️","⬜️","️⬜️"]
line3 = ["⬜️️","⬜️️","⬜️️"]
map = [line1, line2, line3]

# Reference Table
line1_ref = ["A1","B1","C1"]
line2_ref = ["A2","B2","C2"]
line3_ref = ["A3","B3","C3"]
map_ref = [line1_ref, line2_ref, line3_ref]

# Instructions
print("Find a spot to hide your treasure: X marks the spot.")
print("""
    A     B     C
1 ['⬜️', '⬜️', '⬜️']
2 ['⬜️', '⬜️', '⬜️']
3 ['⬜️', '⬜️', '⬜️']
      """)

# Input
position = input("Where will you hide your treasure? \n") # Where do you want to put the treasure?

# Processing

if position[1:2] == "1":
    print("A")
    x = map_ref[0].index(position)

if position[1:2] == "2":
    print("B")
    x = map_ref[1].index(position)

if position[1:2] == "3":
    print("C")
    x = map_ref[2].index(position)

print(x)


# Output

print(f"{line1}\n{line2}\n{line3}")