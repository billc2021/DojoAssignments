class Dojo < ApplicationRecord
	has_many :students
	validates :branch, :city, :street, :state, presence: true
	validates :state, length: { is: 2 }
end
