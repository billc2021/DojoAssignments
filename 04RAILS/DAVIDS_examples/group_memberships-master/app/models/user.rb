class User < ApplicationRecord
	has_many :admin_groups, class_name: 'Group', foreign_key: 'admin_id'

	has_many :groups_users
	has_many :groups, through: :groups_users

end
