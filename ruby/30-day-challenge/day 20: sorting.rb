#!/bin/ruby

n = gets.strip.to_i
a = gets.strip
a = a.split(' ').map(&:to_i)
size = a.length
sizes = (size - 2).to_i

totalSwaps = 0;

for i in 0..size
    numOfSwaps = 0;
    
    for j in 0..sizes
        if a[j] > a[j+1]
            temp = a[j]
            a[j] = a[j+1]
            a[j+1] = temp
            numOfSwaps = numOfSwaps + 1
        end
    end
    

    if numOfSwaps == 0
        break
    else
        totalSwaps = totalSwaps + numOfSwaps
    end
end

$stdout.puts "Array is sorted in " + totalSwaps.to_s + " swaps.\n"
$stdout.puts "First Element: " + a.first.to_s + "\n"
$stdout.puts "Last Element: " + a.last.to_s + "\n"
    
