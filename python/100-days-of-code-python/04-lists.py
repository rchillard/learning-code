states_of_america = ["Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut"]

# Refer to elements by index
print(states_of_america[0])
print(states_of_america[2])
# Negative index works
print(states_of_america[-1])

# Add to end of list
states_of_america.append("Massachusetts")
print(states_of_america)

# Add one list into another list
states_of_america.extend(["Maryland", "South Carolina"])
print(states_of_america)