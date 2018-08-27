#!/bin/ruby

n = gets.strip.to_i
arr = gets.strip
arr = arr.split(' ').map(&:to_i)
arr = arr.reverse
s = ""

for i in 0..(arr.length)
    s = s + arr[i].to_s + " "   
    i = i + 1
end

$stdout.puts s
