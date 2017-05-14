# /////////////
# POST 
# /////////////
class Post < ApplicationRecord
	has_many :comments
	validates :title, presence: true, length: {minimum: 5}
end


# /////////////
# COMMENTS
# /////////////
class Comment < ApplicationRecord
  belongs_to :post
end