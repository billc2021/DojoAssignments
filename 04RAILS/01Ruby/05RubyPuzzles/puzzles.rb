arr = [3,5,1,2,7,9,8,13,25,32]
count = 0
arr.reject! do |i|
    count += 1
    i < 10
end
print arr.inspect


arr2 = ['John', 'KB', 'Oliver', 'Cory', 'Matthew', 'Christopher']
arr2.reject! do |i|
    i.length < 5
end
print arr2.shuffle

arr3 = [*"a".."z"]
arr3.shuffle!
puts arr3[-1]
# print arr3[0] + " "
if arr3[0] == "a" || arr3[0] == "e" || arr3[0] == "i" || arr3[0] == "o" || arr3[0] == "u" 
    puts "First letter is a vowel"
end

arr4 = []
10.times do
    num = rand((55..100))
    arr4 << num
end
print arr4.inspect

arr5 = []
10.times do
    num = rand((55..100))
    arr5 << num
end
print arr5.sort.inspect
puts ""
puts arr5.min
puts arr5.max

random_string = ""
5.times { random_string += (65+rand(26)).chr }
print random_string

arr6 = []
10.times do
    random_string = ""
    5.times { random_string += (65+rand(26)).chr }
    arr6 << random_string
end
print arr6.inspect