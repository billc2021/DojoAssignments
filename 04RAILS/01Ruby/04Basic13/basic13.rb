arr = [1,3,5,7,9,13]

# Print 1-255
(1..255).each { |i| print i.to_s + "\n" } 

# Print odd numbers between 1-255
(1..255).each { |i| print i.to_s + "\n" if i % 2 != 0} 

# Print Sum
sum = 0
(0..255).each { |i|
    sum += i 
    puts ("New number: #{i} Sum: #{sum}")
}

# Iterating through an array
arr.each { |i| puts i }

# Find Max
puts arr.max

# Get Average
puts arr.inject(0.0) { |memo, i| memo + i} / arr.length

# Array with Odd Numbers
def odd_num
    y = []
    [*1..255].map do |i| 
        if i % 2 != 0
            y << i
        end
    end
    y
end
puts odd_num

# Greater Than Y
def greater(y)
    arr = [1, 3, 5, 7]
    count = 0
    arr.each do |i|
        if i > y
            count += 1
        end
    end
    count
end
puts greater(4)

# Square the values
arr2 = [1, 5, 10, -2].map { |i| i * i}
puts arr2.inspect

# Eliminate Negative Numbers
arr2 = []
[1, 5, 10, -2].each do |i|
    if i < 0 
        i = 0
    end
    arr2.push(i)
end
puts arr2.inspect

# Max, Min, and Average
arr = [1, 5, 10, -2]
min = arr[0]
max = arr[0]
avg = 0
total = 0
arr.each do |i|
    if i > max
        max = i
    end
    if i < min
        min = i
    end
    total += i
end
avg = total /arr.length
hash = {
    "min" => min,
    "max" => max,
    "avg" => avg
}
print hash.inspect

# Shifting the Values in the Array
arr = [1, 5, 10, 7, -2]
arr.shift
arr << 0
print arr

# Number to String
arr = [-1, -3, 2]
arr2 = []
arr.each do |i|
    if i < 0
        arr2 << 'Dojo'
    elsif
        arr2 << i
    end
end
print arr2.inspect