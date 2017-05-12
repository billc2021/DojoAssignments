class User < ApplicationRecord
	EMAIL_REGEX = /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
	validates :first_name, :last_name, presence: true, length: { minimum: 2 }
	validates :age, presence: true, numericality: { greater_than: 10, less_than: 150}
	validates :email_address, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
