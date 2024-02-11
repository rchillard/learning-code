# Enter your height in meters e.g., 1.55
height = float(input("How tall are you in meters? "))
# Enter your weight in kilograms e.g., 72
weight = int(input("How much do you weigh in kilograms? "))
# 🚨 Don't change the code above 👆

# Rating system
# Under 18.5 they are underweight
# Over 18.5 but below 25 they have a normal weight
# Equal to or over 25 but below 30 they are slightly overweight
# Equal to or over 30 but below 35 they are obese
# Equal to or over 35 they are clinically obese.

# Sample output
# "Your BMI is 18.28678, you are underweight."
# "Your BMI is 22.0, you have a normal weight."
# "Your BMI is 28.50752, you are slightly overweight."
# "Your BMI is 32.56189, you are obese."
# "Your BMI is 37.50000, you are clinically obese."

# Write your code below this line 👇
bmi = weight / height**2
bmi_as_string = "Your BMI is " + str(bmi) + ","

if bmi < 18.5:
    print(bmi_as_string + " you are underweight.")
elif bmi >= 18.5 and bmi < 25:
    print(bmi_as_string + " you have a normal weight.")
elif bmi >= 25 and bmi < 30:
    print(bmi_as_string + " you are slightly overweight.")
elif bmi >= 30 and bmi < 35:
    print(bmi_as_string + " you are obese.")
elif bmi >= 35:
    print(bmi_as_string + " you are clinically obese.")
else:
    print("You did not provide a properly formatted BMI.")
