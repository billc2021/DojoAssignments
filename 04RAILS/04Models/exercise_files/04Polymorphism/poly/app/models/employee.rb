class Employee < ApplicationRecord
	has_many :picture, as: :imageable
end
