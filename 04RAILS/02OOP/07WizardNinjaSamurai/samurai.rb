require_relative 'human'

class Samurai < Human
	@@total_samurai = 0

	def self.how_many
		@@total_samurai
	end
	def initialize
		super
		@health = 200
		@@total_samurai += 1
	end

	def death_blow(victim)
		victim.health = 0
	end
	
	def meditate
		@health = 200
	end
end

t1 = Samurai.new
t2 = Samurai.new
t1.death_blow(t2)
puts t2.health
t2.meditate
puts t2.health