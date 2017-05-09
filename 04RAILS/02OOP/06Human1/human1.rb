class Human
	attr_accessor :health

	def initialize
		@strength = 3
		@intelligence = 3
		@stealth = 3
		@health = 100
	end

	def attack(victim)
		if victim.class.ancestors[0] == Human
			victim.health -= 10
		end
	end
end

test = Human.new
t2 = Human.new
test.attack(t2)
puts t2.health