class Blog < ApplicationRecord
	validates :name, :description, presence: true
end
