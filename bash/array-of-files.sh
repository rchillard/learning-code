#!/bin/bash
# Here's an example of how to manually read from a string returned by find into a structured array

# Files to search and update
html_files_string=$(find -name "*.html")
echo $html_files_string

# Read into an array using a while loop (handles spaces)
IFS=$'\n' read -r -d '' -a html_files_array <<< "$html_files_string"

for html_file in "${html_files_array[@]}"; do
  echo $html_file
done

# Alternative using mapfile (higher construct / program)
# Create an array containing all .html files
mapfile -t html_files_array < <(find ./build -maxdepth 1 -type f -name "*.html")

for html_file in "${html_files_array[@]}"; do
  echo $html_file
done