# Number manipulation

# P - Parenthesis
# E - Exponents
# M - Multiplication
# D - Division
# A - Addition
# S - Subtraction

# ()
# **
# * /
# + -

# Rounding

print(round(8 / 3))  # 8 / 2 = 2.6666666666666 ==> 3 (rounded up)

print(round(8 / 3, 5))  # 8 / 2 = 2.6666666666666 ==> 2.66667 (rounded to 5th digit)


# Floor Division

floor_num = 8 // 3  # Returns integer ==> 2
print(floor_num)
print(type(floor_num))


# Divide-Equals

result = 4 / 2
result /= 2  # Equivalent to result = result / 2

print(result)


# Plus-Equals

result += 1 # Equivalent to result = result + 1

print(result)

# f-String

print(f"Your result is {result}")
