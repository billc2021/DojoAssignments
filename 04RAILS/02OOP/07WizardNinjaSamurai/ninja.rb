require_relative 'human'

class Ninja < Human
	def initialize
		super
		@stealth = 175
	end

	def stealth(victim)
		attack(victim)
		@health += 10
	end

	def get_away
		@health -= 15
	end
end

t1 = Ninja.new
t2 = Ninja.new
t1.stealth(t2)
puts t2.health