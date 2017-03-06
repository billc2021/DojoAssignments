class Car(object):
    def __init__(self, price, speed, fuel, milage):
        self.price = price
        self.speed = speed
        self.fuel = fuel 
        self.milage = milage 

        if price > 10000:
            self.tax = .15
        else:
            self.tax = .12 
        
        
    
        def display_all(self):
            print "Price:", self.price 
            print "Speed:", self.speed
            print "Fuel:", self.fuel 
            print "Milage:", self.milage 
            print "Tax:", self.tax
            print "\n"
        
        display_all(self)
        


car1 = Car(4000, 90, "almost empty", 100000)
car2 = Car(120000, 200, "full", 10)
car3 = Car(15000, 120, "almost full", 30000)
car4 = Car(1000000, 400, "infinity", 0)
car5 = Car(10000, 100, "half full", 33040)
car6 = Car(5000, 80, "barely anything left", 87620)
