class Dojo < ApplicationRecord
	validates :name, :city, presence: true
	validates :state, presence: true, length: { maximum: 2 }
end
