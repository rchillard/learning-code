#!/bin/bash

# Declare an Array (simple)

my_array=("string1" "string2" "string3" "string4")

# Declare an Array (explicit)


# Index-based Array

for i in "${!my_array[@]}"; do
  echo "Element $i: ${my_array[$i]}"
done

# Dynamic Array

my_array=($(ls))
for item in "${my_array[@]}"; do
  echo "File: $item"
done
