# Enter your code here. Read input from STDIN. Print output to STDOUT

phoneBook = Hash.new
phoneBook.default = "Not found"

#stdout.puts phoneBook.default

x = $stdin.gets.to_i

for i in 1..x
	y = $stdin.gets
    arr = y.split(" ")
	phoneBook[arr[0]] = arr[1]
end

#$stdout.puts phoneBook
#phoneBook.default = "Not found"

until ($stdin.eof? == true) do
    x = $stdin.gets.chomp
    
    if phoneBook[x] != "Not found"
        $stdout.puts x + "=" + phoneBook[x]
    else
        $stdout.puts "Not found"
    end
end

#$stdout.puts "X = " + x
#$stdout.puts "LOOKING UP: " + x
#$stdout.puts phoneBook.fetch(x)
#$stdout.puts "sam=" + phoneBook.fetch("sam")
