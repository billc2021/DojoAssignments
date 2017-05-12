class Group < ApplicationRecord
	belongs_to :admin, class_name: 'User'

	has_many :groups_users
	has_many :members, through: :groups_users, source: :user
end
