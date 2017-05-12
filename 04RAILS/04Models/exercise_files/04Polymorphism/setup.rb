rails new poly

rails g model Picture imageable:references{polymorphic}
rails g model Employee first_name:string last_name:string
rails g model Product name:string
rake db:migrate

# IN THE MODEL CLASSES

# app/models/picture.rb
class Picture < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true
end

# app/models/employee.rb
class Employee < ActiveRecord::Base
  has_many :pictures, as: :imageable
end

# app/models/product.rb
class Product < ActiveRecord::Base
  has_many :pictures, as: :imageable
end

