class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self
    
    def displayHealth(self):
        print "Name:", self.name
        print "Health:", self.health

# animal1 = Animal("Toby")
# animal1.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self, name, health=150):
        self.name = name
        self.health = health 
        super(Dog, self).__init__(self.name, self.health)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

dog1 = Dog("Rex")
dog1.walk().walk().walk().run().run().pet().displayHealth()