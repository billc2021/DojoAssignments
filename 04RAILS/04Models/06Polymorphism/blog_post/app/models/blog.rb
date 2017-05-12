class Blog < ApplicationRecord
	has_many :owners
	has_many :users, through: :owners
	has_many :comments, as: :commentable
end
