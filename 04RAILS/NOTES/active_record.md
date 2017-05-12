////////////////////////
// COMMANDS
////////////////////////

//////////
// FIND
//////////
User.first
User.last
User.where(first_name: "Jane")
User.where(last_name: "Doe").select(:first_name, :lastname: email)

//////////
// UPDATE
//////////
user = User.find_by(name: 'David')
user.name = 'Dave'
user.save

Shorthand version of the above
	user = User.find_by(name: 'David')
	user.update(name: 'Dave')

Update All
	User.update_all "max_login_attempts = 3, must_change_password = 'true'

//////////
// DELETE
//////////
user = User.find_by(name: 'David')
user.destroy

01. Naming Conventions
* 	Model/Class		Table/Schema
	- Article					articles
	- LineItem				line_items
	- Deer						deers
	- Mouse						mice
	- Person					people

02. Creating Active Record Models
* Create a subclass of the ApplicationRecord class:
	- class Product < ApplicationRecord
	  end

	The above will create a Product model, mapped to a products table at the database.

03. CRUD: Reading and Writing Data
* CREATE
	- user = User.create(name: "David", occupation: "Coding Artist")

	Using the new method:
	- user = User.new
	  user.name = "David"
	  user.occupation = "Code Artist"

	  user.save

	Using a code block:
	- user = User.new do |u|
	  	u.name = "David"
		u.occupation = "Code Artist"
	   end

* READ
	To return a collection with all users
	- users = User.all

	Return the first user
	- user = User.first

	Return the last user
	- user = User.last

	Return the first user named David
	- david = User.find_by(name: 'David')

	Find all users named David who are Code Artists and sort by created_at in reverse chronological order
	- users = User.where(name: 'David', occupation: 'Code Artist').order(created_at: :desc)

* UPDATE
	- user = User.find_by(name: 'David')
	  user.name = 'Dave'
	  user.save

	Shorthand version of the above
	- user = User.find_by(name: 'David')
	  user.update(name: 'Dave')

	Update All
	- User.update_all "max_login_attempts = 3, must_change_password = 'true'

* DELETE
	- user = User.find_by(name: 'David')
	  user.destroy

04. Validations
- Example:

	class User < ApplicationRecord
		validate :name, :email, :age presene: true
	end

Rails Validation Commands
/////////////////////////
user = User.new

user.valid?
user.errors
user.errors.full_messages
