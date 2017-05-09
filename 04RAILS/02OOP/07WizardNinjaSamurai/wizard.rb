require_relative 'human'

class Wizard < Human

	def initialize
		super
		@health = 50
		@intelligence = 25
	end

	def heal
		@health += 10
	end

	def fireball(victim)
		victim.health -= 20
	end
end

gandalf = Wizard.new
dumbledore = Wizard.new
puts gandalf.fireball(dumbledore)
