#!/bin/ruby
# not my finest work :(

arr = Array.new(6)
for arr_i in (0..6-1)
    arr_t = gets.strip
    arr[arr_i] = arr_t.split(' ').map(&:to_i)
end

### STARTING OVER
def buildPattern(x, y, a)
	#$stdout.puts "Entering buildPattern: x=" + x.to_s + ", y=" + y.to_s
	glassPattern = Array.new(7)
	glassPattern = [a[x-1][y-1], a[x-1][y], a[x-1][y+1], a[x][y], a[x+1][y-1], a[x+1][y], a[x+1][y+1]]
	#printPattern(glassPattern)
	return glassPattern
end 

def printPattern(a)
	$stdout.puts "Printing pattern: \n"
	$stdout.puts a[0].to_s + " " + a[1].to_s + " " + a[2].to_s + "\n"
	$stdout.puts "  " + a[3].to_s + "  " + "\n"
	$stdout.puts a[4].to_s + " " + a[5].to_s + " " + a[6].to_s + "\n"
end

def sumPattern(a)
	#$stdout.puts "Entering sumPattern: a=" + a.to_s
	sum = 0
	aValue = 0
	for aValue in a
		sum = aValue + sum
	end
	return sum
end

def checkBorder(x, y)
	#$stdout.puts "Entering checkBorder: x=" + x.to_s + ", y=" + y.to_s
	if ((x == 0 || x == 5) || (y == 0 || y == 5))
		return true
	else
		return false
	end
end 

highestPattern = -19

for x in 0..5
    for y in 0..5
    	if checkBorder(x, y)
    	 	# Check to see if we're at a border
    		# do nothing, we are at a border
    	else
    		bPattern = buildPattern(x, y, arr)
            sPattern = sumPattern(bPattern)

        	if sPattern > highestPattern
        		highestPattern = sPattern
        	end
    	end 
    end
end

$stdout.puts highestPattern
