class Book < ApplicationRecord
  belongs_to :author
  has_many :reviews , dependent: :destroy

  validates :rating, :inclusion => { :in => 0..5}
end
