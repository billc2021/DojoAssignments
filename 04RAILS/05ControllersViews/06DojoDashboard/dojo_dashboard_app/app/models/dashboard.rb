class Dashboard < ApplicationRecord
	validates :branch, :street, :city, :state, presence: true
	validates :state, length: { is: 2 }
end
