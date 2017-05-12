# Relationshipss
## create a relationship
  * rails g model Message content:text user:references

  * This will create a Message model that contains a user_id column in the database. If we navigate to the models folder of our project:

      * my_app/app/models/message
        * class Message < ActiveRecord::Base
            belongs_to :user
          end


## HAS_ONE Relationship:

To create an Address model that will have a reference to a user.

  * rails g model Address street:string city:string state:string user:references

The above creates:

in:

    my_app/app/models/user.rb
    class User < ActiveRecord::Base
      has_one :address
    end

in:

    my_app/app/models/address.rb
    class Address < ActiveRecord::Base
      belongs_to :user
    end


## HAS_MANY RELATIONSHIP

To say a User has many messages

in:

    my_app/app/models/message.rb
    class Message < ActiveRecord::Base
      belongs_to :user
    end


in:

    my_app/app/models/user.rb
    class User < ActiveRecord::Base
      has_many :messages
    end


## HAS_MANY :THROUGH RELATIONSHIP (many-to-many)

$ rails g model Student first_name:string last_name:string

$ rails g model Course title:string description:text

$ rails g model Signup user:references course:references

in:

    my_app/app/models/student.rb
    class Student < ActiveRecord::Base
      has_many :signups
      has_many :courses, through: :signups
    end


in:

    my_app/app/models/signup.rb
    class Signup < ActiveRecord::Base
      belongs_to :student
      belongs_to :course
    end

in:


    my_app/app/models/course.rb
    class Course < ActiveRecord::Base
      has_many :signups
      has_many :students, through: :signups
    end


To retrieve all the courses of a specific student and all the students of a specific course:

    # retrieves all the courses that the first student has signed up for
    Student.first.courses

    # retrieves all the students that have signed up for the second course
    Course.second.students
