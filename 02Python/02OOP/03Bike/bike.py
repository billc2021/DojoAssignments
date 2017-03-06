class Bike(object):
    def __init__(self, price=100, max_speed="15mph", miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    
    def displayInfo(self):
        print "This bike cost ${}, has a max speed of {}, and has {} miles\n".format(self.price, self.max_speed, self.miles)
        return self
    
    def riding(self):
        print "Riding"
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing"
        self.miles -= 5
        return self

bike1 = Bike()
bike1.riding().riding().riding().reverse().displayInfo()

bike2 = Bike()
bike2.riding().riding().reverse().reverse().displayInfo()

bike3 = Bike()
bike3.reverse().reverse().reverse().displayInfo()