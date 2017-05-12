## Create a project
01. Create a new rails project
        rails new orm_practice

02. cd orm_practice

## Create the Model
01. create a Model Class
        rails g model User first_name:string last_name:string age:integer

02. Create the table
        rake db:migrate

    To destroy a mode:
        rails destroy model <MODEL_NAME>

## Creating Data
#### Using the new method:

user = User.new
    * user.first_name = "John"
    * user.last_name = "Smith"
    * user.age = 22
    * user.save

user = User.new(first_name: "John", last_name: "Smith", age: 22)

#### Use the create method:
    User.create(first_name: "John", last_name: "Smith", age: 22)

## Reading Data
#### retrieving all rows in the users table
    users = User.all


#### retrieving the first row in the users table
    user = User.first

#### retrieving the second row in the users table
    user2 = User.second

#### retrieving the last row in the users table
    last_user = User.last

#### retrieving the user with id = 2
    user = User.find(2)

#### retrieving the first user with the first name John
    john = User.find_by(first_name: "John")

#### retrieving all the users with the first name John
    john = User.where(first_name: "John")

#### retrieving a range of users
    users = User.where(:id => 1..14)

#### retrieving all users with the last name Doe but only selecting the first name and last name column
    does = User.where(last_name: "Doe").select(:first_name, :last_name

## Updating Data
#### retrieving the user, setting the first name attribute to a different value then saving the record
    user = User.find(1)

    user.first_name = "Some Other Name"

    user.last_name = "Some Other Last Name"

    user.save

    ##### Updating one record:
        Person.update(15, :user_name => 'Samuel', :group => 'expert')

    ##### Updating multiple records:
        people = { 1 => { "first_name" => "David" }, 2 => { "first_name" => "Jeremy" } }
        Person.update(people.keys, people.values)

#### retrieving the user then updating and saving multiple attributes
    user = User.last
    user.update(first_name: "James", last_name: "Doe", age: 40)

## Deleting Data
    user = User.first.destroy

    user2 = User.last.delete


## Validations

    class User < ActiveRecord::Base
      validates :first_name, presence: true
    end

    class User < ActiveRecord::Base
      validates :first_name, :last_name, presence: true, length: { in: 2..20 }
    end

    class User < ActiveRecord::Base
      EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
      validates :first_name, :last_name, presence: true, length: { in: 2..20 }
      validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
    end

#### Here is a short list of other types of validations:

* length - validates the length of an attribute's value:
        minimum, :maximum, :in, :israils g model Ninja first_name:string last_name:string dojo:references

* numericality - validates whether an attribute is a numeric value:
        odd, :even, and many others

* presence - validates that the specified attributes are not empty

* uniqueness - validates whether the value is unique in the corresponding database table. NOTE: always create a unique index in the database too.

* confirmation - use this when you have two text fields that should receive exactly the same content; assumes the second field name has "\_confirmation" appended

* validates_associated - use this when your model has associations with other models and they also need to be validated

* acceptance - validate whether a checkbox was checked when a form was submitted (usually for 'terms and conditions')
also, get familiar with :message and :on


## Callbacks and Custom Methods

### List of callbacks

#### Creating an Object
    before_validation
    after_validation
    before_save
    around_save
    before_create
    around_create
    after_create
    after_save
    after_commit

#### Updating an Object
    before_validation
    after_validation
    before_save
    around_save
    before_update
    around_update
    after_update
    after_save
    after_commit

#### Destroying an Object
    before_destroy
    around_destroy
    after_destroy
    after_commit

### Example:

class User < ActiveRecord::Base
  ** EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i **
  validates :first_name, :last_name, presence: true, length: { in: 2..20 }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
##### this callback will run before saving on create and update
  before_save :downcase_email
##### this callback will run after creating a new user
  after_create :successfully_created

##### this callback will run after updating an existing user
  after_update :successfully_updated

##### this callback will only run on creating a record to ensure a default age of 0
  before_validation :default_age, on: [:create]

  private
    def downcase_email
      self.email.downcase!
    end

    def successfully_created
      puts "Successfully created a new user"
    end
    def successfully_updated
      puts "Successfully updated a existing user"
    end

    def default_age
      self.age = 0 unless self.age?
    end
end


## Custom Class and Instance Methods

### Example
    class User < ActiveRecord::Base
      EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
      validates :first_name, :last_name, presence: true, length: { in: 2..20 }
      validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

      #### creating a custom instance method. self refers to the ActiveRecord object

          def full_name
            "#{self.first_name} #{self.last_name}"
          end

      #### creating a custom class method. self refers to the User model

          def self.average_age
              self.sum(:age) / self.count
          end

      #### ... emitted callback code for brevity
    end

To call these custom methods

    User.average_age

    User.full_name


## Migrations
#### Create a project and Generate a model
    rails new my_app

    cd my_app

    rails generate model User first_name:string last_name:string

    rake db:migrate

#### To add an email column to the users table via a migration

    rails generate migration AddEmailColumnToUsers email:string

#### To check the status

    rake db:migrate:status


### Functions

    Here is a list of the most popular ones:

        create_table(name, options)
        drop_table(name)
        rename_table(old_name, new_name)
        add_column(table_name, column_name, type, options)
        rename_column(table_name, column_name, new_column_name)
        change_column(table_name, column_name, type, options)
        remove_column(table_name, column_name)
        add_index(table_name, column_name, index_type)
        remove_index(table_name, column_name)
        add_reference(table_name, referenced_model, index:true)

### Rollback
    rake db:Rollback

    rake db:rollback - Rolls back the schema to the previous version
    rake db:rollback STEP=N - Rolls back the schema N steps, where N is an integer

### Specific rollbacks
    rake db:migrate:up VERSION=MIGRATION_ID - Turns up the a specific migration
    rake db:migrate:down VERSION=MIGRATION_ID - Turns down the a specific migration
        rake db:migrate:up VERSION=20080906120000
        rake db:migrate:down VERSION=20080906120000


## Relationships
    To create a Message model that contains a user_id column in the database
        rails g model Message content:text user:references

    In my_app/app/models/message
        class Message < ActiveRecord::Base
          belongs_to :user (Always use the singular term for references)
        end

### HAS_ONE Relationship (one-to-one)

    Create a Address model that will have a reference to a user
        rails g model Address street:string city:string state:string user:references

        In my_app/app/models/user.rb
            class User < ActiveRecord::Base
              has_one :address
            end

        In my_app/app/models/address.rb
            class Address < ActiveRecord::Base
              belongs_to :user
            end

### HAS_MANY RELATIONSHIP (one-to-many)

    To set up a one-to-many relationship between users and messages

        in my_app/app/models/message.rb
            class Message < ActiveRecord::Base
              belongs_to :user
            end

        in my_app/app/models/user.rb
            class User < ActiveRecord::Base
              has_many :messages (use the plural version of the model)
            end

        ##### retrieve all messages that belong to the first user
            User.first.messages


### HAS_MANY :THROUGH RELATIONSHIP (many-to-many)

        rails g model Student first_name:string last_name:string
        rails g model Course title:string description:text
        rails g model Signup user:references course:references

        in my_app/app/models/student.rb
            class Student < ActiveRecord::Base
              has_many :signups
              has_many :courses, through: :signups
            end

        in my_app/app/models/signup.rb
            class Signup < ActiveRecord::Base
              belongs_to :student
              belongs_to :course
            end

        in my_app/app/models/course.rb
            class Course < ActiveRecord::Base
              has_many :signups
              has_many :students, through: :signups
            end

##### retrieves all the courses that the first student has signed up for
        Student.first.courses

##### retrieves all the students that have signed up for the second course
        Course.second.students


## Includes
        players = Player.includes(:team).limit(10).order("RANDOM()")
        players.each do |player|
            puts player.team.stadium
        end

## Joins
        players = Player.includes(:team).limit(10).order("RANDOM()")
        players.each do |player|
            puts player.team.stadium
        end

        Note that the above query executes a LEFT OUTER JOIN from players to teams. If we would like a INNER JOIN, we can use the joins method and specify whatever conditions we want:

        Player.joins(:team).where("teams.name = 'Los Angeles Lakers'")


## Polymorphic

#### To create a polymorphic

Polymorphism is the ability for a single model to belong to more than one other model.

    rails g model Picture imageable:references{polymorphic}
    rails g model Employee first_name:string last_name:string
    rails g model Product name:string
    rake db:migrate

    In each model file add these relationships.

    picture.rb

        class Picture < ActiveRecord::Base
          belongs_to :imageable, polymorphic: true
        end

    employee.rb

        class Employee < ActiveRecord::Base
          has_many :pictures, as: :imageable
        end

    product.rb

        class Product < ActiveRecord::Base
          has_many :pictures, as: :imageable
        end
