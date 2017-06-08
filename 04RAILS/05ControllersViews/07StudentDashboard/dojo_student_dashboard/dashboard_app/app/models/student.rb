class Student < ApplicationRecord
  belongs_to :dojo
  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true
end
