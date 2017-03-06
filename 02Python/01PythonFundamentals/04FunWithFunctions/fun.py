def odd_even():
    for num in range(1, 2000):
        if num % 2 == 0:
            print "Number is {}.  This is an even number.".format(num)
        else:
            print "Number is {}.  This is an odd number.".format(num)

odd_even()

def multiply(arr, num):
    newArr = []
    for val in arr:
        val = val * num
        newArr.append(val)
    return newArr

print multiply([2,4,10,16], 5)

def layered_multiples(arr):
    new_array = []
    temp_array = []
    for num in arr:
        temp_array = [1] * num
        new_array.append(temp_array)
    return new_array

print(layered_multiples(multiply([2,4,5],3)))