###################
# Part I
###################
for num in range(0, 1000):
    if num % 2 != 0:
        print num

###################
# Part II
###################
for num in range(5, 1000000):
    if num % 5 == 0:
        print num

###################
# Sum List
###################
a = [1, 2, 5, 10, 255, 3]
sum = 0
for num in a:
    sum = sum + num 
print sum

###################
# Average List
###################
a = [1, 2, 5, 10, 255, 3]
sum = 0
avg = 0
for num in a:
    sum = sum + num
avg = sum / len(a)
print avg
