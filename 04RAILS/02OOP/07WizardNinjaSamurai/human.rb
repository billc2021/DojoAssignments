class Human
	attr_accessor :health

	def initialize
		@strength = 3
		@intelligence = 3
		@stealth = 3
		@health = 100
	end

	def attack(victim)
		if victim.class.ancestors.include?(Human)
			victim.health -= 10
		end
	end
end

# t1 = Human.new
# t2 = Human.new
# puts t2.health
# t1.attack(t2)
# puts t2.health