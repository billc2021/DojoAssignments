class Bike(object):
    def __init__(self, price=100, max_speed="15mph", miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    
    def displayInfo(self):
        print "This bike cost ${}, has a max speed of {}, and has {} miles".format(self.price, self.max_speed, self.miles)
    
    def riding(self):
        print "Riding"
        self.miles += 10

    def reverse(self):
        print "Reversing"
        self.miles -= 5

bike1 = Bike()
bike1.riding()
bike1.riding()
bike1.riding()
bike1.reverse()
bike1.displayInfo()

bike2 = Bike()
bike2.riding()
bike2.riding()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()

bike3 = Bike()
bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()